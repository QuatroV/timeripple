import { createSlice, current, isDraft } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ModalButtons = "close" | "ok";

type ModalType = "default" | "error";

export type ModalMessage = {
  message: string;
  buttons?: ModalButtons[];
  type?: ModalType;
};

interface ModalState {
  messages: ModalMessage[];
  visible: boolean;
}

const initialState: ModalState = {
  messages: [],
  visible: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<ModalMessage>) => {
      const {
        payload: modalMessage = {
          message: "",
          buttons: ["close", "ok"],
          type: "default",
        },
      } = action;
      state.visible = true;
      state.messages.push(modalMessage);
    },
    closeModal: (state) => {
      state.messages.pop();

      if (!state.messages.length) {
        state.visible = false;
      }
    },
  },
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
