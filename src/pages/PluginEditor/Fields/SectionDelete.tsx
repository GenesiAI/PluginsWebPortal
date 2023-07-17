import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid } from "@mui/material";

type InputProps = {
  onClick: () => void;
};

const SectionDelete = ({ onClick }: InputProps) => (
  <Grid
    item
    xs={12}
    sm={6}
    className="!flex !justify-end order-first md:order-none"
  >
    <Button
      variant="contained"
      color="error"
      startIcon={<DeleteIcon />}
      onClick={onClick}
      className="!px-2 !py-1 scale-75 max-h-9"
    >
      Delete section
    </Button>
  </Grid>
);

export default SectionDelete;
