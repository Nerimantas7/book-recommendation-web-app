package lt.nerimantas.book_recommendation_web_app.service;

import lt.nerimantas.book_recommendation_web_app.dto.JwtAuthResponse;
import lt.nerimantas.book_recommendation_web_app.dto.LoginDto;
import lt.nerimantas.book_recommendation_web_app.dto.RegisterDto;

public interface AuthService {

    String register(RegisterDto registerDto);

    JwtAuthResponse login(LoginDto loginDto);
}
