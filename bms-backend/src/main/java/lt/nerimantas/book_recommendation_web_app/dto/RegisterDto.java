package lt.nerimantas.book_recommendation_web_app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDto {

    private String name;
    private String userName;
    private String email;
    private String password;
}
