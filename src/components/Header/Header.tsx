import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { memo } from "react";
import HeaderMd from "./HeaderMd";
import HeaderXs from "./HeaderXs";
import Title from "./Title";
import useHeader from "./useHeader";

const Header = () => {
  const props = useHeader();

  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            color: (theme) => theme.palette.primary.main
          }}
        >
          <Title />
          <HeaderXs {...props} />
          <HeaderMd {...props} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default memo(Header);
