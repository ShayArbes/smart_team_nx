import { Box, Button, Tooltip } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import UserCircle from "./menu/UserCircle";
function RightNav() {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-evenly", width: "15%", alignItems: "center", padding: "1px 8px" }}>
      <Button>
        <Tooltip title="Messages">
          <NotificationsIcon sx={{ fontSize: 23, color: "white" }} />
        </Tooltip>
      </Button>
      <Button>
      <Tooltip title="Deals you liked">
        <FavoriteIcon sx={{ fontSize: 23, color: "white" }} />
      </Tooltip>
      </Button>
      <Button>
      <Tooltip title="Home">
        <HomeIcon sx={{ fontSize: 23, color: "white" }} />
      </Tooltip>
      </Button>
      <UserCircle />
    </Box>
  );
}

export default RightNav;
