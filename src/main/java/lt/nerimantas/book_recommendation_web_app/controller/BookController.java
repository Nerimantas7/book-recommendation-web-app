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
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/books")
public class BookController {

    private BookService bookService;
    @Autowired
    private BookCategory bookCategory;
    @Autowired
    private BookCategoryService bookCategoryService;

    //Build Add Book REST API
    @PostMapping
    public ResponseEntity<BookDto> addBook(@RequestBody BookDto bookDto){
        BookDto addedBook = bookService.addBook(bookDto);
//        BookCategoryDto addedCategory = b
        System.out.println("Book received: " + addedBook);
        return new ResponseEntity<>(addedBook, HttpStatus.CREATED);
    }

    // Build Get Book REST API
    @GetMapping("{id}")
    public ResponseEntity<BookDto> getBookById(@PathVariable("id") Long bookId){
        BookDto bookDto = bookService.getBookById(bookId);
        System.out.println("Book find with given ID: " + bookDto);
        return ResponseEntity.ok(bookDto);
    }

    // Build Get All Books REST API
    @GetMapping
    public  ResponseEntity<List<BookDto>> getAllBooks(){
        List<BookDto> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }

    @PostMapping("/{bookId}/categories/{categoryId}")
    public BookDto addCategoryToBook(@PathVariable Long bookId, @PathVariable Long categoryId) {
        return bookService.addCategoryToBook(bookId, categoryId);
    }
}
