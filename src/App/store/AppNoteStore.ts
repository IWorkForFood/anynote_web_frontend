import {create} from 'zustand';



export const useAppNoteStore = create((set) => ({
    noteData: "",
    setNoteData: (data: string) => set(() =>
        ({
                noteData: data
            }
        )),
}))