package lt.nerimantas.book_recommendation_web_app.repository;

import lt.nerimantas.book_recommendation_web_app.entity.BookCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {
}
