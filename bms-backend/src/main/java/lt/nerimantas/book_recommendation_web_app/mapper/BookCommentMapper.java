package lt.nerimantas.book_recommendation_web_app.mapper;

import lt.nerimantas.book_recommendation_web_app.dto.BookCommentDto;
import lt.nerimantas.book_recommendation_web_app.entity.BookComment;

public class BookCommentMapper {

    // convert book comment jpa entity into book comment dto
    public static BookCommentDto mapToBookCommentDto(BookComment bookComment){
        if (bookComment == null) {
            return null; // or throw an exception, depending on needs
        }
        return new BookCommentDto(
                bookComment.getId(),
                bookComment.getBookComment()
        );
    }

    // convert book comment dpo into book comment jpa entity
    public static BookComment mapToBookComment(BookCommentDto bookCommentDto){
        if (bookCommentDto == null) {
            return null; // or throw an exception, depending on needs
        }
        return new BookComment(
                bookCommentDto.getId(),
                bookCommentDto.getBookComment()
        );
    }
}
