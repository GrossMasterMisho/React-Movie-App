import { DrawerHeader } from "../Drawer/DrawerHeader";
import { Box } from "@mui/system";

const Main = (props: any) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {props.children}
    </Box>
  );
};

export default Main;
