package lt.nerimantas.book_recommendation_web_app.mapper;

import lt.nerimantas.book_recommendation_web_app.dto.BookDto;
import lt.nerimantas.book_recommendation_web_app.entity.Book;

public class BookMapper {

    public static BookDto mapToBookDto(Book book){
        return new BookDto(
                book.getId(),
                book.getBookTitle(),
                book.getBookDescription(),
                book.getCodeISBN(),
                book.getImagePath(),
                book.getBookPages(),
                book.getCategory()
        );
    }

    public static Book mapToBook(BookDto bookDto){
        return new Book(
                bookDto.getId(),
                bookDto.getBookTitle(),
                bookDto.getBookDescription(),
                bookDto.getCodeISBN(),
                bookDto.getImagePath(),
                bookDto.getBookPages(),
                bookDto.getCategory()
        );
    }
}
