import { useState, useEffect } from "react";
import axios from "axios";
import Note from "components/Note/Note";
import noteService from "../../services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnNote)));
      })
      .catch((error) => {
        alert("the note " + note.content + " was already deleted from server ");
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  useEffect(() => {
    noteService.getAll().then((initialnotes) => {
      setNotes(initialnotes);
    });
  }, []);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true); // pas == car ne fonctionne pas tres bien avec js

  const addNote = (event) => {
    event.preventDefault();
    const newObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    noteService.create(newObject).then((returnNote) => {
      setNotes(notes.concat(returnNote));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
