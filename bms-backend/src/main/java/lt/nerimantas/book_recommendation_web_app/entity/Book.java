package lt.nerimantas.book_recommendation_web_app.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "book_title", nullable = false)
    private String bookTitle;

    @Column(name = "book_description")
    private String bookDescription;

    @Column(name = "code_isbn", nullable = false, unique = true)
    private Long codeISBN;

    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "book_pages")
    private int bookPages;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private BookCategory bookCategory;

}
