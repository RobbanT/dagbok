package com.dagbok.dagbok;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

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

    @GetMapping("/delete")
    public String delete(@RequestParam int id) {
        noteRepository.deleteById(id);
        return "redirect:/";
    }

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

    @PostMapping("/update-note")
    public String updateNote(@RequestParam("title") String title, @RequestParam("date") String date,
            @RequestParam("text") String text) {
        return "redirect/";
    }
}
