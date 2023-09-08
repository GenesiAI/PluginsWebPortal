import { Container } from "@mui/material";
import Typography from "components/Typography";
import Card from "./Card";
import { CardsInfo } from "./CardsInfo";

const Pricing = () => (
  <Container maxWidth="lg" className="mt-10">
    <Typography variant="t1" className="text-center">
      Choose the right plan for you!
    </Typography>
    <div className="grid grid-cols-10 gap-4">
      {CardsInfo.map(({ title, ...props }) => (
        <Card {...props} title={title} key={title} />
      ))}
    </div>
  </Container>
);

export default Pricing;
