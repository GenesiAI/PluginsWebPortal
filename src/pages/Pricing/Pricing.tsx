import { Container } from "@mui/material";
import Typography from "components/Typography";
import Card from "./Card";
import { CardsInfo } from "./CardsInfo";

const Pricing = () => (
  <Container maxWidth="lg" className="mt-10">
    <Typography variant="t1" className="text-center mb-20">
      Choose the right plan for you!
    </Typography>
    <div className="grid grid-cols-8 lg:grid-cols-10 gap-x-6 grid-rows-3 md:grid-rows-2 lg:grid-rows-1">
      {CardsInfo.map(({ title, ...props }) => (
        <Card {...props} title={title} key={title} />
      ))}
    </div>
  </Container>
);

export default Pricing;
