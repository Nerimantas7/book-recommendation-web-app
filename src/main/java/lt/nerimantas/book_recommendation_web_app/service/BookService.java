package lt.nerimantas.book_recommendation_web_app.service;

import lt.nerimantas.book_recommendation_web_app.dto.BookDto;

import java.util.List;

public interface BookService {
    BookDto addBook(BookDto bookDto);

    BookDto getBookById(Long bookId);

    List<BookDto> getAllBooks();

}
