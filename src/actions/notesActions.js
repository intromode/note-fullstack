import { createAction } from 'promise-middleware-redux';
import { createNote } from '../services/makeNotesApi';

export const [
  newNote,
  NEW_NOTE,
  NEW_NOTE_PENDING
] = createAction('NEW_NOTE', createNote);

