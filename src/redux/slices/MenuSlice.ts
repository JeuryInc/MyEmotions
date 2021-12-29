import { createSlice } from "@reduxjs/toolkit"; 

const menuOpenerSlice = createSlice({
  name: "menuOpener",
  initialState: { 
    menuOpened: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.menuOpened = !state.menuOpened;  
    }
  },
});

export const { toggleSidebar } = menuOpenerSlice.actions;

export default menuOpenerSlice.reducer;
