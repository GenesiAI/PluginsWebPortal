import StarIcon from "@mui/icons-material/Star";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "components/Typography";
import CardActions from "./CardComponent/CardActions";
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
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-between md:h-40">
          <Typography variant="t3" className="text-inherit">
            {title}
          </Typography>
          <Typography variant="t4" className="italic text-inherit mt-6 md:mt-0">
            {description}
          </Typography>
        </div>

        <CardCost cost={cost} isAdvised={isAdvised} />
        <List>
          {feats.map((feat) => (
            <ListItem key={feat} className="px-6">
              {feat && (
                <>
                  <ListItemIcon className="text-inherit min-w-0 me-3">
                    <StarIcon className="text-inherit text-xs" />
                  </ListItemIcon>
                  <Typography className="text-inherit">{feat}</Typography>
                </>
              )}
            </ListItem>
          ))}
        </List>
      </div>

      <CardActions action={action} buttonText={buttonText} />
    </CardContainer>
  );
};

export default Card;
