import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import List from "@mui/material/List";
import MovieIcon from "@mui/icons-material/Movie";
import ListLinkItem from "./ListLinkItem";

const DrawerListItems = () => {
  return (
    <List>
      <ListLinkItem path="" title="Gtfs" icon={GoogleIcon} />
      <ListLinkItem path="movies" title="Movies" icon={MovieIcon} />
    </List>
  );
};

export default DrawerListItems;
