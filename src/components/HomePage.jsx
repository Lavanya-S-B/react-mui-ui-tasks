
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useNavigate } from "react-router-dom";

const tasks = [
  {
    title: "User Management",
    description: "View users, display user details, and filter users by age.",
    icon: <PeopleAltIcon sx={{ fontSize: 42 }} />,
    path: "/users",
  },
  {
    title: "MUI Contact Card",
    description: "Display contact information with a profile image and actions.",
    icon: <ContactMailIcon sx={{ fontSize: 42 }} />,
    path: "/contact",
  },
  {
    title: "Event Form",
    description: "Create cricket events, select skills, and enter event details.",
    icon: <EventNoteIcon sx={{ fontSize: 42 }} />,
    path: "/event",
  },
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f6fc",
        p: { xs: 2, sm: 4 },
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: "#263b68", mb: 1 }}
        >
          React UI Projects
        </Typography>

        <Typography sx={{ color: "#666", mb: 4 }}>
          Select a task to explore the page.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {tasks.map((task) => (
            <Card
              key={task.path}
              onClick={() => navigate(task.path)}
              sx={{
                cursor: "pointer",
                borderRadius: 4,
                border: "1px solid #e1e5f2",
                boxShadow: "0 4px 16px rgba(30, 50, 90, 0.07)",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 24px rgba(30, 50, 90, 0.14)",
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    p: 1.5,
                    mb: 2,
                    borderRadius: 3,
                    backgroundColor: "#e3e9ff",
                    color: "#405a96",
                  }}
                >
                  {task.icon}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {task.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#666",
                    minHeight: 65,
                    lineHeight: 1.6,
                  }}
                >
                  {task.description}
                </Typography>

                <Button
                  fullWidth
                  endIcon={<ArrowForwardIcon />}
                  onClick={(event) => {
                    event.stopPropagation();
                    navigate(task.path);
                  }}
                  sx={{
                    mt: 2,
                    borderRadius: 3,
                    backgroundColor: "#dce4ff",
                    color: "#344875",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#cbd7ff",
                    },
                  }}
                >
                  Open Task
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
