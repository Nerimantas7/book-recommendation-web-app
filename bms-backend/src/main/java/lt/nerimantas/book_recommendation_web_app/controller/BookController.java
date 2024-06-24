package lt.nerimantas.book_recommendation_web_app.controller;

import lombok.AllArgsConstructor;
import lt.nerimantas.book_recommendation_web_app.dto.BookCategoryDto;
import lt.nerimantas.book_recommendation_web_app.dto.BookDto;
import lt.nerimantas.book_recommendation_web_app.entity.BookCategory;
import lt.nerimantas.book_recommendation_web_app.service.BookCategoryService;
import lt.nerimantas.book_recommendation_web_app.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/books")
public class BookController {

    private BookService bookService;

    //Build Add Book REST API
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<BookDto> addBook(@RequestBody BookDto bookDto){
        BookDto addedBook = bookService.addBook(bookDto);
        System.out.println("Book received: " + addedBook);
        return new ResponseEntity<>(addedBook, HttpStatus.CREATED);
    }

    // Build Get Book REST API
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("{id}")
    public ResponseEntity<BookDto> getBookById(@PathVariable("id") Long bookId){
        BookDto bookDto = bookService.getBookById(bookId);
        System.out.println("Book find with given ID: " + bookDto);
        return ResponseEntity.ok(bookDto);
    }

    // Build Get All Books REST API
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping
    public  ResponseEntity<List<BookDto>> getAllBooks(){
        List<BookDto> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }

    //Build Update Book REST API
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<BookDto> updateBook(@PathVariable("id") Long bookId,
                                              @RequestBody BookDto updatedBook){
        BookDto bookDto = bookService.updateBook(bookId, updatedBook);
        System.out.println("Book successfully updated with given Id: " + bookId);
        return ResponseEntity.ok(bookDto);
    }

    // Build Delete Book REST API
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBook(@PathVariable("id") Long bookId){
        bookService.deleteBook(bookId);
        return ResponseEntity.ok("Book deleted successfully!");
    }
}
