package com.dagbok.dagbok;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.CrudRepository;
import jakarta.transaction.Transactional;

public interface NoteRepository extends CrudRepository<Note, Integer> {
    // Egen query för att uppdatera ett inlägg.
    @Transactional
    @Modifying
    @Query("UPDATE Note n SET n.title = ?1, n.date = ?2, n.text = ?3 WHERE n.id = ?4")
    int updateNote(String title, String date, String text, int id);
}
