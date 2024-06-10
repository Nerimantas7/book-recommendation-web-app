package lt.nerimantas.book_recommendation_web_app.service;

import lt.nerimantas.book_recommendation_web_app.dto.BookCategoryDto;
import lt.nerimantas.book_recommendation_web_app.repository.BookCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

public interface BookCategoryService {

    BookCategoryDto addCategory(BookCategoryDto bookCategoryDto);

    BookCategoryDto getCategoryById(Long categoryId);

    List<BookCategoryDto> getAllCategories();

}
