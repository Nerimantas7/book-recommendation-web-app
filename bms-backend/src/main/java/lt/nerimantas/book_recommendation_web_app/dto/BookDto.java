package lt.nerimantas.book_recommendation_web_app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lt.nerimantas.book_recommendation_web_app.entity.BookCategory;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookDto {

    private Long id;
    private String bookTitle;
    private String bookDescription;
    private Long codeISBN;
    private String imagePath;
    private int bookPages;
    private Long categoryId;
}
