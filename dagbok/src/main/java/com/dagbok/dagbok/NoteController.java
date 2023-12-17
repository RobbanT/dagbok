package com.dagbok.dagbok;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class NoteController {
    @Autowired
    private NoteRepository noteRepository;

    @GetMapping("/")
    public String getIndex(Model model) {
        List<Note> sortedNotes = new ArrayList<Note>();
        noteRepository.findAll().forEach(note -> sortedNotes.add(note));
        Collections.sort(sortedNotes);
        Collections.reverse(sortedNotes);
        model.addAttribute("notes", sortedNotes);
        return "index";
    }

    @PostMapping("/new-note")
    public String newNote(@RequestParam("title") String title, @RequestParam("date") String date,
            @RequestParam("text") String text) {
        Note note = new Note();
        note.setTitle(("Hejsan"));
        note.setDate("2023-12-12");
        note.setText("Hallå Hallå Hallå");
        return "redirect/";
    }

    @PostMapping("/update-note")
    public String updateNote(@RequestParam("title") String title, @RequestParam("date") String date,
            @RequestParam("text") String text) {
        return "redirect/";
    }

    @GetMapping("/delete")
    public String delete(@RequestParam int id) {
        return "redirect:/";
    }

}
