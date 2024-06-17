package lt.nerimantas.book_recommendation_web_app.service.impl;

import lombok.AllArgsConstructor;
import lt.nerimantas.book_recommendation_web_app.dto.BookCategoryDto;
import lt.nerimantas.book_recommendation_web_app.dto.BookCommentDto;
import lt.nerimantas.book_recommendation_web_app.entity.BookComment;
import lt.nerimantas.book_recommendation_web_app.exception.ResourceNotFoundException;
import lt.nerimantas.book_recommendation_web_app.mapper.BookCommentMapper;
import lt.nerimantas.book_recommendation_web_app.repository.BookCommentRepository;

import lt.nerimantas.book_recommendation_web_app.service.BookCommentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookCommentServiceImpl implements BookCommentService {

    private BookCommentRepository bookCommentRepository;


    @Override
    public BookCommentDto addComment(BookCommentDto bookCommentDto) {
        BookComment bookComment = BookCommentMapper.mapToBookComment(bookCommentDto);
        BookComment addedComment = bookCommentRepository.save(bookComment);
        return BookCommentMapper.mapToBookCommentDto(addedComment);
    }

    @Override
    public BookCommentDto getCommentById(Long commentId) {
        BookComment bookComment = bookCommentRepository.findById(commentId)
                .orElseThrow(() -> new ResourceNotFoundException("Comment is not exist with given Id: " + commentId));
        return BookCommentMapper.mapToBookCommentDto(bookComment);
    }

    @Override
    public List<BookCommentDto> getAllComments() {
        List<BookComment> comments = bookCommentRepository.findAll();
        return comments.stream().map((bookComment) -> BookCommentMapper.mapToBookCommentDto(bookComment))
                .collect(Collectors.toList());
    }

    @Override
    public BookCommentDto updateBookComment(Long bookCommentId, BookCommentDto updatedBookComment) {
        BookComment bookComment = bookCommentRepository.findById(bookCommentId)
                .orElseThrow(() -> new ResourceNotFoundException("Book Comment is not exists with given Id: " + bookCommentId));
        bookComment.setBookComment(updatedBookComment.getBookComment());
        BookComment savedBookComment = bookCommentRepository.save(bookComment);
        return BookCommentMapper.mapToBookCommentDto(savedBookComment);
    }

    @Override
    public void deleteBookComment(Long bookCommentId) {
    BookComment bookComment = bookCommentRepository.findById(bookCommentId)
            .orElseThrow(() -> new ResourceNotFoundException("Book Comment is not exists with given Id: " + bookCommentId));
    bookCommentRepository.deleteById(bookCommentId);
    }
}
