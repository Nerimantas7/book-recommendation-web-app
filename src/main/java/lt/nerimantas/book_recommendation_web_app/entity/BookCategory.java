package lt.nerimantas.book_recommendation_web_app.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "book_category")
public class BookCategory {

    @Id
    @Column(name ="category_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category", nullable = false, unique = true)
    private String bookCategory;

    @ManyToMany(mappedBy = "categories") // Assuming one category can have many books
    private List<Book> books;

    public BookCategory(Long id, String bookCategory) {
    }



}

