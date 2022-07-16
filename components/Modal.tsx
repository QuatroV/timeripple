import { useDispatch, useSelector } from "react-redux";
import { Modal as ModalComponent } from "@mui/material";
import styled from "styled-components";

import {
  closeModal,
  lastMsgModalSelector,
  visibleModalSelector,
} from "../store/domains/modal";

export const Modal = () => {
  const visible = useSelector(visibleModalSelector);
  const messageInfo = useSelector(lastMsgModalSelector);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <ModalComponent
      open={visible}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableEnforceFocus
    >
      <StyledModal>{messageInfo?.message}</StyledModal>
    </ModalComponent>
  );
};

const StyledModal = styled.div`
  backdrop-filter: blur(20px);
  border-style: solid;
  border-color: #e7ebf0;
  border-width: 0;
  border-bottom-width: thin;
  background: rgba(255, 255, 255, 0.7);
`;
