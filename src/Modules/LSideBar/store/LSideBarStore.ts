import {create} from 'zustand';

export enum SelectedMenu {
    None,
    Settings,
    Test,
    Notes,
}

// export type LSideBarStoreState = {
//     selectedMenu: SelectedMenu
//     setSelectedMenu: (selectedMenu: SelectedMenu) => void;
// }


export const useLSideBarStore = create((set) => ({
    selectedMenu: SelectedMenu.None,
    setSelectedMenu: (menuType: SelectedMenu) => set(() =>
        ({
                selectedMenu: menuType
            }
        )),
}))
