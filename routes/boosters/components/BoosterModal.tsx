import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useDispatch, useSelector } from "react-redux";
import {
  closeOpenedBooster,
  openedBoosterSelector,
  showBoosterCardsSelector,
} from "../../../store/domains/boosters";
import { Avatar, CircularProgress, Skeleton } from "@mui/material";
import { useInterval } from "usehooks-ts";
import { Card } from "../../../types/cards";
import CardItem from "./CardItem";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BoosterModal = () => {
  const open = useSelector(showBoosterCardsSelector);
  const boosterCards = useSelector(openedBoosterSelector);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeOpenedBooster());
  };

  const [cards, setCards] = React.useState<Card[]>([]);
  const [isLoadingCards, setIsLoadingCards] = React.useState(true);

  const openingDone = cards.length === boosterCards?.length;

  useInterval(
    () => {
      if (!boosterCards || !boosterCards[cards.length]) {
        setIsLoadingCards(false);
        return;
      }
      const nextCard = boosterCards[cards.length];
      setCards([...cards, nextCard]);
    },
    isLoadingCards ? 4000 : null
  );

  React.useEffect(() => {
    if (open) {
      setCards([]);
      setIsLoadingCards(true);
    }
  }, [open]);

  return (
    <Dialog
      fullScreen
      open={!!open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative", backgroundColor: "#7c7c7c" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            sx={{ ml: 2, flex: 1, display: "flex", alignItems: "center" }}
            variant="h6"
            component="div"
          >
            {openingDone ? (
              "Booster cards"
            ) : (
              <>
                Opening booster
                <CircularProgress
                  color="inherit"
                  size={25}
                  sx={{ marginLeft: "8px" }}
                />
              </>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
      <List>
        {cards?.map((card, idx) => {
          return (
            <>
              <CardItem card={card} key={idx} />
              {idx !== cards.length && <Divider />}
            </>
          );
        })}
        {!openingDone && (
          <ListItem button>
            <Skeleton
              variant="circular"
              animation="wave"
              width={48}
              height={40}
              sx={{ marginRight: "16px" }}
            />
            <List sx={{ width: "100%" }}>
              <Skeleton variant="text" animation="wave" sx={{ width: "80%" }} />
              <Skeleton variant="text" animation="wave" sx={{ width: "50%" }} />
            </List>
          </ListItem>
        )}
      </List>
    </Dialog>
  );
};

export default BoosterModal;
