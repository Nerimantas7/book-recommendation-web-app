package lt.nerimantas.book_recommendation_web_app.controller;


import lombok.AllArgsConstructor;
import lt.nerimantas.book_recommendation_web_app.dto.BookCommentDto;
import lt.nerimantas.book_recommendation_web_app.service.BookCommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/books/comments")
public class BookCommentController {

    private BookCommentService bookCommentService;

    // Build Add Book Comment REST API
//    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PostMapping
    public ResponseEntity<BookCommentDto> addComment(@RequestBody BookCommentDto bookCommentDto){
        BookCommentDto addedComent = bookCommentService.addComment(bookCommentDto);
        System.out.println("Comment added: " + addedComent);
        return new ResponseEntity<>(addedComent, HttpStatus.CREATED);
    }

    // Build Get Book Comment REST API
//    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("{id}")
    public ResponseEntity<BookCommentDto> getCommentById(@PathVariable("id") Long commentId){
        BookCommentDto bookCommentDto = bookCommentService.getCommentById(commentId);
        System.out.println("Comment find with given ID: " + bookCommentDto);
        return ResponseEntity.ok(bookCommentDto);
    }

    // Build Get All Comments REST API
//    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping
    public ResponseEntity<List<BookCommentDto>> getAllComments(){
        List<BookCommentDto> comments = bookCommentService.getAllComments();
        return ResponseEntity.ok(comments);
    }

    //Build Update Book Comment REST API
//    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PutMapping("{id}")
    public ResponseEntity<BookCommentDto> updateComment(@PathVariable("id") Long commentId,
                                                        @RequestBody BookCommentDto updatedComment){
        BookCommentDto bookCommentDto = bookCommentService.updateBookComment(commentId, updatedComment);
        System.out.println(("Book comment updated with given Id: " + commentId));
        return ResponseEntity.ok(bookCommentDto);
    }

    // Build Delete Book Comment REST API
//    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteComment(@PathVariable("id") Long commentId){
        bookCommentService.deleteBookComment(commentId);
        return ResponseEntity.ok("Comment deleted successfully!");
    }

}
