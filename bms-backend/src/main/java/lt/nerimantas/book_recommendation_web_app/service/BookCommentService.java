package lt.nerimantas.book_recommendation_web_app.service;

import lt.nerimantas.book_recommendation_web_app.dto.BookCommentDto;

import java.util.List;

public interface BookCommentService {

    BookCommentDto addComment(BookCommentDto bookCommentDto);

    BookCommentDto getCommentById(Long commentId);

    List<BookCommentDto> getAllComments();

    BookCommentDto updateBookComment(Long bookCommentId, BookCommentDto updatedBookComment);

    void deleteBookComment (Long bookCommentId);
}
