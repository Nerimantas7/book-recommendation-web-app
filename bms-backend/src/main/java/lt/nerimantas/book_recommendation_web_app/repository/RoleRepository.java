package lt.nerimantas.book_recommendation_web_app.repository;

import lt.nerimantas.book_recommendation_web_app.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
