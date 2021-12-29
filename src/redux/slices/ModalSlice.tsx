import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { ModalHandler } from "../../models/ModalHandlerModels";

const _initialState = new ModalHandler();

export const modalSlice = createSlice({
  name: "modalHandler",
  initialState: { ..._initialState },
  reducers: {
    setModal: (state, action) => {
      if (!state.isValid) {
        state.title = action.payload.title;
        state.header = action.payload.header;
        state.body = action.payload.body;
        state.size = action.payload.size;
        state.isValid = action.payload.isValid;
        state.callback = action.payload.callback;
      }
    },
    showModal: (state) => {
      state.show = true;
    },
    hideModal: (state) => {
      state.show = false;
    },
    resetModal: (state) => {
      const _newState = new ModalHandler();

      state.title = _newState.title;
      state.header = _newState.header;
      state.body = _newState.body;
      state.size = _newState.size;
      state.isValid = _newState.isValid;
      state.show = _newState.show;
    },
    resetCallback: (state) => {
      state.callback = null;
    },
  },
});

export const openModal = (model: any) => (dispatch: any) => {
  debugger
   (modalSlice.actions.setModal(model));
  dispatch(modalSlice.actions.showModal());
};

export const closeModal = () => (dispatch: Dispatch<AnyAction> ) => {
  dispatch(modalSlice.actions.hideModal());
  setTimeout(() => {
    dispatch(modalSlice.actions.resetModal());
  }, 300);
};

export const { resetCallback } = modalSlice.actions;

export default modalSlice.reducer;
