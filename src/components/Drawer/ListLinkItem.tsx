import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const ListLinkItem = ({ title, path, icon }: propTypes) => {
  const ItemIcon = icon;
  return (
    <ListItem button component={Link} to={path}>
      <ListItemIcon>
        <ItemIcon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

type propTypes = {
  title: string;
  path: string;
  icon: React.ElementType;
};

export default ListLinkItem;
