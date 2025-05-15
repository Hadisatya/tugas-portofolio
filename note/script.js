let notes = JSON.parse(localStorage.getItem('notes')) || [];

function renderNotes() {
  const container = document.getElementById('notesContainer');
  container.innerHTML = '';
  notes.forEach((note, index) => {
    container.innerHTML += `
      <div class="note">
        ${note}
        <button onclick="deleteNote(${index})">Hapus</button>
      </div>
    `;
  });
}

function addNote() {
  const input = document.getElementById('noteInput');
  const noteText = input.value.trim();
  if (noteText) {
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
    input.value = '';
    renderNotes();
  } else {
    alert('Catatan tidak boleh kosong!');
  }
}

function deleteNote(index) {
  if (confirm('Hapus catatan ini?')) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
  }
}

renderNotes();
