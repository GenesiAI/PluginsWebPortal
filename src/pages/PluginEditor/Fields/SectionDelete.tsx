import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid, IconButton } from "@mui/material";

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
    <IconButton
      aria-label="delete"
      className="!block md:!hidden"
      color="error"
      onClick={onClick}
    >
      <DeleteIcon />
    </IconButton>
    <Button
      variant="outlined"
      color="error"
      startIcon={<DeleteIcon />}
      onClick={onClick}
      className="!hidden md:!inline-flex !py-1 scale-75 max-h-9 "
    >
      Delete section
    </Button>
  </Grid>
);

export default SectionDelete;
