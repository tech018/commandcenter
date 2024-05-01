import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function SideListMenu() {
  const navigate = useNavigate();

  const handleRedirect = (url, index) => {
    if (url === "dashboard") {
      return navigate("/dashboard");
    }
    navigate(url);
  };

  return (
    <>
      {[
        { id: 1, value: "dashboard", icon: <AppsIcon /> },
        { id: 2, value: "application", icon: <AutoAwesomeMotionIcon /> },
      ].map((item) => (
        <ListItemButton
          onClick={() => handleRedirect(item.value, item.id)}
          key={item.id}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            sx={{ textTransform: "capitalize" }}
            primary={item.value}
          />
        </ListItemButton>
      ))}
      <Divider sx={{ mt: 5 }} />
      <ListItemButton>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </>
  );
}
