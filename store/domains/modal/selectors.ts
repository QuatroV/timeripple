import { RootState } from "../..";
import { ModalMessage } from "./slice";

export const modalSelector = (state: RootState) => state.modal;

export const visibleModalSelector = (state: RootState) =>
  modalSelector(state).visible;

export const messagesModalSelector = (state: RootState) =>
  modalSelector(state).messages;

export const lastMsgModalSelector = (
  state: RootState
): ModalMessage | undefined => messagesModalSelector(state)[0];
