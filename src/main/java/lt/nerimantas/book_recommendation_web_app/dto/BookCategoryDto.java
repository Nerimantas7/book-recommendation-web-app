package lt.nerimantas.book_recommendation_web_app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookCategoryDto {

    private Long id;
    private String bookCategory;
    private String categoryDescription;
}
