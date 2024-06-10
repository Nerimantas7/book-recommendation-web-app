package lt.nerimantas.book_recommendation_web_app.service.impl;

import lombok.AllArgsConstructor;
import lt.nerimantas.book_recommendation_web_app.dto.BookCategoryDto;
import lt.nerimantas.book_recommendation_web_app.entity.BookCategory;
import lt.nerimantas.book_recommendation_web_app.exception.ResourceNotFoundException;
import lt.nerimantas.book_recommendation_web_app.mapper.BookCategoryMapper;
import lt.nerimantas.book_recommendation_web_app.repository.BookCategoryRepository;
import lt.nerimantas.book_recommendation_web_app.service.BookCategoryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookCategoryServiceImpl implements BookCategoryService {

    private BookCategoryRepository bookCategoryRepository;

    @Override
    public BookCategoryDto addCategory(BookCategoryDto bookCategoryDto) {
        BookCategory bookCategory = BookCategoryMapper.mapToBookCategory(bookCategoryDto);
        BookCategory addedCategory = bookCategoryRepository.save(bookCategory);
        return BookCategoryMapper.mapToBookCategoryDto(addedCategory);
    }

    @Override
    public BookCategoryDto getCategoryById(Long categoryId) {
        BookCategory bookCategory = bookCategoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Book category is not exist with given Id: " + categoryId));
        return BookCategoryMapper.mapToBookCategoryDto(bookCategory);
    }

    @Override
    public List<BookCategoryDto> getAllCategories() {
        List<BookCategory> categories = bookCategoryRepository.findAll();
        return categories.stream().map((bookCategory) -> BookCategoryMapper.mapToBookCategoryDto(bookCategory))
                .collect(Collectors.toList());
    }

//    @Override
//    public void deleteById(Long id) {
//
//    }
}
