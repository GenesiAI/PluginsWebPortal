import StarIcon from "@mui/icons-material/Star";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ButtonLoading from "components/ButtonLoading";
import Typography from "components/Typography";
import CardContainer from "./CardComponent/CardContainer";
import CardCost from "./CardComponent/CardCost";
import { CardType } from "./CardsInfo";
const Card = ({
  action,
  buttonText,
  cost,
  description,
  feats,
  isAdvised,
  title
}: CardType) => {
  return (
    <CardContainer isAdvised={isAdvised}>
      <Typography variant="t2">{title}</Typography>
      <Typography variant="t3">{description}</Typography>
      <CardCost cost={cost} isAdvised={isAdvised} />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        aria-label="contacts"
      >
        {feats.map((feat) => (
          <ListItem key={feat} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary={feat} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <ButtonLoading isLoading={false}>{buttonText}</ButtonLoading>
    </CardContainer>
  );
};

export default Card;
