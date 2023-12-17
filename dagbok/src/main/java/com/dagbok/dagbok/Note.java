package com.dagbok.dagbok;

import java.util.GregorianCalendar;
import jakarta.persistence.*;

// Klass för våra inlägg.
@Entity
public class Note implements Comparable<Note> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title, date, text;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    // Gör så att det går att jämföra två inlägg (deras datum) med varandra.
    @Override
    public int compareTo(Note n) {
        return new GregorianCalendar(
                Integer.parseInt(date.substring(0, 4)), Integer.parseInt(date.substring(5, 7)) - 1,
                Integer.parseInt(date.substring(8, 10)))
                .compareTo(new GregorianCalendar(Integer.parseInt(n.getDate().substring(0, 4)),
                        Integer.parseInt(n.getDate().substring(5, 7)) - 1,
                        Integer.parseInt(n.getDate().substring(8, 10))));
    }
}
