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
      <div className="mb-8 flex h-full flex-col items-center gap-10">
        <div className="flex basis-2/6 flex-col gap-10 px-4">
          <Typography variant="t3" className="text-inherit">
            {title}
          </Typography>
          <Typography variant="t4" className="italic text-inherit">
            {description}
          </Typography>
        </div>

        <CardCost cost={cost} isAdvised={isAdvised} />
        <div className="basis-2/6">
          <List>
            {feats.map((feat) => (
              <ListItem key={feat} className="px-6">
                {feat && (
                  <>
                    <ListItemIcon className="me-3 min-w-0 text-inherit">
                      <StarIcon className="text-xs text-inherit" />
                    </ListItemIcon>
                    <Typography variant="t5" className="text-inherit">
                      {feat}
                    </Typography>
                  </>
                )}
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      <CardActions
        isAdvised={isAdvised}
        action={action}
        buttonText={buttonText}
      />
    </CardContainer>
  );
};

export default Card;
