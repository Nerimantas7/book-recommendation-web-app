package lt.nerimantas.book_recommendation_web_app.security;

import lombok.AllArgsConstructor;
import lt.nerimantas.book_recommendation_web_app.entity.User;
import lt.nerimantas.book_recommendation_web_app.repository.UserRepository;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String usernameorOrEmail) throws UsernameNotFoundException {

        User user = userRepository.findByUsernameOrEmail(usernameorOrEmail, usernameorOrEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User is not exists with given Username or Email"));
        Set<GrantedAuthority> authorities = user.getRoles().stream()
                .map((role) -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toSet());
        return new org.springframework.security.core.userdetails.User(
                usernameorOrEmail,
                user.getPassword(),
                authorities
        );
    }
}
