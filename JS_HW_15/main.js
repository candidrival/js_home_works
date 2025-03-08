class Note {
  constructor(title) {
      if (!title.trim()) {
          throw new Error("Нотатка не може бути порожньою");
      }
      this.id = Date.now();
      this.title = title;
      this.completed = false;
      this.createdAt = new Date();
      this.updatedAt = new Date();
  }

  edit(title) {
      if (!title.trim()) {
          throw new Error("Нотатка не може бути порожньою");
      }
      this.title = title;
      this.updatedAt = new Date();
  }

  toggleCompleted() {
      this.completed = !this.completed;
      this.updatedAt = new Date();
  }
}

class TodoList {
  constructor() {
      this.notes = [];
  }

  addNote(title) {
      const note = new Note(title);
      this.notes.push(note);
  }

  removeNote(id) {
      this.notes = this.notes.filter(note => note.id !== id);
  }

  getNoteById(id) {
      return this.notes.find(note => note.id === id);
  }

  getAllNotes() {
      return this.notes;
  }

  getStats() {
      const total = this.notes.length;
      const remaining = this.notes.filter(note => !note.completed).length;
      return { total, remaining };
  }

  searchByTitle(query) {
      return this.notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()));
  }

  sortByStatus(completedFirst = true) {
      return [...this.notes].sort((a, b) => (completedFirst ? b.completed - a.completed : a.completed - b.completed));
  }

  sortByDate(createdFirst = true) {
      return [...this.notes].sort((a, b) => (createdFirst ? a.createdAt - b.createdAt : b.createdAt - a.createdAt));
  }
}