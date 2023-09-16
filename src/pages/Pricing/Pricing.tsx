import { Container } from "@mui/material";
import Typography from "components/Typography";
import Card from "./Card";
import { CardsInfo } from "./CardsInfo";

const Pricing = () => (
  <Container maxWidth="lg" className="my-10">
    <Typography variant="t1" className="mb-20 text-center">
      Choose the right plan for you!
    </Typography>
    <div className="grid grid-cols-1 grid-rows-3 justify-items-center gap-x-4 gap-y-8 md:grid-cols-3 md:grid-rows-[4rem_minmax(0,_1fr)]">
      {CardsInfo.map(({ title, ...props }) => (
        <Card {...props} title={title} key={title} />
      ))}
    </div>
  </Container>
);

export default Pricing;
