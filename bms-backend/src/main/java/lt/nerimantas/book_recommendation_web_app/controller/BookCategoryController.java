package lt.nerimantas.book_recommendation_web_app.controller;

import lombok.AllArgsConstructor;
import lt.nerimantas.book_recommendation_web_app.dto.BookCategoryDto;
import lt.nerimantas.book_recommendation_web_app.service.BookCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/books/categories")
public class BookCategoryController {

    private BookCategoryService bookCategoryService;

    // Build Add Book Category REST API
    @PostMapping
    public ResponseEntity<BookCategoryDto> addCategory(@RequestBody BookCategoryDto bookCategoryDto){
        BookCategoryDto addedCategory = bookCategoryService.addCategory(bookCategoryDto);
        System.out.println("Category added: " + addedCategory);
        return new ResponseEntity<>(addedCategory, HttpStatus.CREATED);
    }

    // Build Get Book REST API
    @GetMapping("{id}")
    public ResponseEntity<BookCategoryDto> getCategoryById(@PathVariable("id") Long categoryId){
        BookCategoryDto bookCategoryDto = bookCategoryService.getCategoryById(categoryId);
        System.out.println("Category find with given ID: " + categoryId);
        return ResponseEntity.ok(bookCategoryDto);
    }

    // Build Get All Categories REST API
    @GetMapping
    public ResponseEntity<List<BookCategoryDto>> getAllCategories(){
        List<BookCategoryDto> categories = bookCategoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    // Build Update Book Category REST API
    @PutMapping("{id}")
    public ResponseEntity<BookCategoryDto> updateBookCategory(@PathVariable("id") Long bookCategoryId,
                                                              @RequestBody BookCategoryDto updatedCategory){
        BookCategoryDto bookCategoryDto = bookCategoryService.updateBookCategory(bookCategoryId, updatedCategory);
        System.out.println(("Book category successfully updated with given Id: " + bookCategoryId));
        return ResponseEntity.ok(bookCategoryDto);
    }

    // Build Delete Book Category REST API
    @DeleteMapping("id")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long bookCategoryId){
        bookCategoryService.deleteBookCategory(bookCategoryId);
        return ResponseEntity.ok("Book Category deleted successfully!");
    }
}
