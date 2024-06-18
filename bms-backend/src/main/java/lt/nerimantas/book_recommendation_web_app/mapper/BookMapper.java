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
                book.getBookCategory().getId()
        );
    }

    public static Book mapToBook(BookDto bookDto){
        Book book =  new Book();
                book.setId(bookDto.getId());
                book.setBookTitle(bookDto.getBookTitle());
                book.setBookDescription(bookDto.getBookDescription());
                book.setCodeISBN(bookDto.getCodeISBN());
                book.setImagePath(bookDto.getImagePath());
                book.setBookPages(bookDto.getBookPages());
                return book;
    }
}
