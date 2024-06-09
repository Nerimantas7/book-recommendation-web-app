package lt.nerimantas.book_recommendation_web_app.controller;

import lombok.AllArgsConstructor;
import lt.nerimantas.book_recommendation_web_app.dto.BookDto;
import lt.nerimantas.book_recommendation_web_app.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/books")
public class BookController {

    private BookService bookService;

    //Build Add Book REST API
    @PostMapping
    public ResponseEntity<BookDto> addBook(@RequestBody BookDto bookDto){
        BookDto addedBook = bookService.addBook(bookDto);
        System.out.println("Book received: " + addedBook);
        return new ResponseEntity<>(addedBook, HttpStatus.CREATED);
    }
}
