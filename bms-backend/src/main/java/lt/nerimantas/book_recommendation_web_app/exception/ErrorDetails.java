package lt.nerimantas.book_recommendation_web_app.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErrorDetails {

    private LocalDateTime timeStamp;
    private String message;
    private String details;
}
