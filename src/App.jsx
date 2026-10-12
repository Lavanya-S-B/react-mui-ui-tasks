
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Button,
  Box,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

import HomePage from "./components/HomePage";
import UserManagement from "./components/UserManagement";
import UserCard from "./components/UserCard";
import CreateEvent from "./components/CreateEvent";

function ContactPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        backgroundColor: "#f5f6fc",
      }}
    >
      <UserCard />
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static" sx={{ backgroundColor: "#405a96" }}>
        <Toolbar>
          <Button
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            sx={{
              color: "#fff",
              textTransform: "none",
              fontSize: 17,
            }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/event" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
