package lt.nerimantas.book_recommendation_web_app.mapper;

import lt.nerimantas.book_recommendation_web_app.dto.BookCategoryDto;
import lt.nerimantas.book_recommendation_web_app.entity.BookCategory;

public class BookCategoryMapper {

    public static BookCategoryDto mapToBookCategoryDto(BookCategory bookCategory){
        if (bookCategory == null) {
            return null; // or throw an exception, depending on needs
        }
        return new BookCategoryDto(
                bookCategory.getId(),
                bookCategory.getBookCategory(),
                bookCategory.getCategoryDescription()
        );
    }

    public static BookCategory mapToBookCategory(BookCategoryDto bookCategoryDto){
        if (bookCategoryDto == null) {
            return null; // or throw an exception, depending on needs
        }
        return new BookCategory(
                bookCategoryDto.getId(),
                bookCategoryDto.getBookCategory(),
                bookCategoryDto.getCategoryDescription()
        );
    }
}
