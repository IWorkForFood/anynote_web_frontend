import { create } from 'zustand'

enum SelectedMenu {
    None,
    Settings,
    Notes,
}

// type LSideBarStoreState = {
//     selectedMenu: SelectedMenu
//     setSelectedMenu: (selectedMenu: SelectedMenu) => void;
// }


const useLSideBarStore = create((set) => ({
    selectedMenu: SelectedMenu.None,
    setSelectedMenu: (menuType: SelectedMenu) => set(({ selectedMenu: menuType })),
}))

export default useLSideBarStore;