import {create} from 'zustand';


export enum NoteMode {
    Edit,
    View,
}

type NoteRenderState = {
    noteText: string;
    mode: NoteMode;
    setNoteText: (text: string) => void;
}


export const useNoteRenderStore = create((set) => ({
    noteText: "",
    mode: NoteMode.Edit,
    setNoteText: (text: string) => set((state: NoteRenderState) => (
        {
            ...state,
            noteText: text,
        }
    )),
    setMode: (mode: NoteMode) => set((state: NoteRenderState) => (
        {
            ...state,
            mode: mode
        }
    ))
}))