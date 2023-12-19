package com.dagbok.dagbok;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class NoteController {
    @Autowired
    private NoteRepository noteRepository;

    // Mapping för att hämta alla våra inlägg från databasen.
    @GetMapping("/")
    public String getIndex(Model model) {
        List<Note> sortedNotes = new ArrayList<Note>();
        noteRepository.findAll().forEach(note -> sortedNotes.add(note));
        // Sorterar inläggen efter deras datum.
        Collections.sort(sortedNotes);
        // Ändrar sedan så att inläggen med det högsta datumet hamnar först.
        Collections.reverse(sortedNotes);
        model.addAttribute("notes", sortedNotes);
        return "index";
    }

    // Mapping för att ta bort ett inlägg.
    @GetMapping("/delete")
    public String delete(@RequestParam int id) {
        noteRepository.deleteById(id);
        return "redirect:/";
    }

    // Mapping för att skapa ett nytt inlägg.
    @PostMapping("/new-note")
    public String newNote(@RequestParam("title") String title, @RequestParam("date") String date,
            @RequestParam("text") String text) {
        Note note = new Note();
        note.setTitle((title));
        note.setDate(date);
        note.setText(text);
        noteRepository.save(note);
        return "redirect:/";
    }

    // Mapping för att uppdatera ett redan existerande inlägg.
    @PostMapping("/update-note")
    public String updateNote(@RequestParam("title") String title, @RequestParam("date") String date,
            @RequestParam("text") String text, @RequestParam("id") int id) {
        noteRepository.updateNote(title, date, text, id);
        return "redirect:/";
    }
}
