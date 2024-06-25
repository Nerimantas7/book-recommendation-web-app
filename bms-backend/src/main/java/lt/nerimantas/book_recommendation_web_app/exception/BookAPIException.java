package lt.nerimantas.book_recommendation_web_app.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public class BookAPIException extends RuntimeException{

    private HttpStatus status;
    private String message;
}
