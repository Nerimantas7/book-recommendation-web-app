package lt.nerimantas.book_recommendation_web_app.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookCommentDto {

    private Long id;
    private String bookComment;
}
