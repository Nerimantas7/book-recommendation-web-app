package lt.nerimantas.book_recommendation_web_app.repository;

import lt.nerimantas.book_recommendation_web_app.entity.BookComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookCommentRepository extends JpaRepository<BookComment, Long> {
}
