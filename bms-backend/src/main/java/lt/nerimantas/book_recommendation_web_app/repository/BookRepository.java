package lt.nerimantas.book_recommendation_web_app.repository;

import lt.nerimantas.book_recommendation_web_app.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
