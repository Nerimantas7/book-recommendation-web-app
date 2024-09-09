package lt.nerimantas.book_recommendation_web_app.service.impl;

import lombok.AllArgsConstructor;
import lt.nerimantas.book_recommendation_web_app.dto.LoginDto;
import lt.nerimantas.book_recommendation_web_app.dto.RegisterDto;
import lt.nerimantas.book_recommendation_web_app.entity.Role;
import lt.nerimantas.book_recommendation_web_app.entity.User;
import lt.nerimantas.book_recommendation_web_app.exception.BookAPIException;
import lt.nerimantas.book_recommendation_web_app.repository.RoleRepository;
import lt.nerimantas.book_recommendation_web_app.repository.UserRepository;
import lt.nerimantas.book_recommendation_web_app.security.JwtTokenProvider;
import lt.nerimantas.book_recommendation_web_app.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private JwtTokenProvider jwtTokenProvider;

    @Override
    public String register(RegisterDto registerDto) {

        //check username is already exists in database
        if(userRepository.existsByUsername(registerDto.getUserName())){
            throw new BookAPIException(HttpStatus.BAD_REQUEST, "Username is already taken!");
        }

        //check email is already exists in database
        if(userRepository.existsByEmail(registerDto.getEmail())){
            throw new BookAPIException(HttpStatus.BAD_REQUEST, "Email is already in use!");
        }

        User user = new User();
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUserName());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Role> roles = new HashSet<>();

        Role userRole = roleRepository.findByName("ROLE_USER");
        roles.add(userRole);
        user.setRoles(roles);
        userRepository.save(user);

        return "User registered successfully!";
    }

    @Override
    public String login(LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUserNameOrEmail(),
                loginDto.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtTokenProvider.generateToken(authentication);

        return token;
    }
}
