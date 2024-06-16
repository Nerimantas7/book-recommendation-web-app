package lt.nerimantas.book_recommendation_web_app.service;

import lt.nerimantas.book_recommendation_web_app.dto.BookCommentDto;

import java.util.List;

public interface BookCommentService {

    BookCommentDto addComment(BookCommentDto bookCommentDto);

    BookCommentDto getCommentById(Long coomentId);

    List<BookCommentDto> getAllComments();
}
