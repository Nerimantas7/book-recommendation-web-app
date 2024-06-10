package lt.nerimantas.book_recommendation_web_app.service.impl;

import lombok.AllArgsConstructor;
import lt.nerimantas.book_recommendation_web_app.dto.BookDto;
import lt.nerimantas.book_recommendation_web_app.entity.Book;
import lt.nerimantas.book_recommendation_web_app.entity.BookCategory;
import lt.nerimantas.book_recommendation_web_app.exception.ResourceNotFoundException;
import lt.nerimantas.book_recommendation_web_app.mapper.BookMapper;
import lt.nerimantas.book_recommendation_web_app.repository.BookCategoryRepository;
import lt.nerimantas.book_recommendation_web_app.repository.BookRepository;
import lt.nerimantas.book_recommendation_web_app.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookServiceImpl implements BookService {

    private BookRepository bookRepository;
    private BookCategoryRepository bookCategoryRepository;

    @Override
    public BookDto addBook(BookDto bookDto) {
        Book book = BookMapper.mapToBook(bookDto);
        Book addedBook = bookRepository.save(book);
        return BookMapper.mapToBookDto(addedBook);
    }

    @Override
    public BookDto getBookById(Long bookId) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Book is not exist with given Id: " + bookId));

        return BookMapper.mapToBookDto(book);
    }

    @Override
    public List<BookDto> getAllBooks() {
        List<Book> books = bookRepository.findAll();
        return books.stream().map((book) -> BookMapper.mapToBookDto(book))
                .collect(Collectors.toList());
    }

    public BookDto addCategoryToBook(Long bookId, Long categoryId){
        Book book = bookRepository.findById(bookId).orElseThrow(() -> new RuntimeException("Book not found"));
        BookCategory bookCategory = bookCategoryRepository.findById(categoryId).orElseThrow(() -> new RuntimeException("Category not found"));
        book.getCategories().add(bookCategory);
        return bookRepository.save(book);
    };
}
