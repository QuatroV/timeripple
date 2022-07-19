import {
  Avatar,
  capitalize,
  Fade,
  ListItem,
  ListItemText,
  Modal,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Card } from "../../../types/cards";
import { CardPreview } from "../../../components";

const CardItem = ({ card, key }: { card: Card; key: number }): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(true);
  return (
    <>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={showModal}>
          <Box>
            <CardPreview card={card} />
          </Box>
        </Fade>
      </Modal>
      <ListItem button onClick={handleClick} key={key}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <ListItemText
          primary={card.name}
          secondary={`${capitalize(card.color)} ${card.type}`}
          sx={{ marginLeft: "16px" }}
        />
      </ListItem>
    </>
  );
};

export default CardItem;
