import { useState } from "react";

import {
  Box,
  Button,
  Chip,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const CreateEvent = () => {
  const [eventType, setEventType] = useState("training");

  const [skills, setSkills] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    venue: "",
    location: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    notes: "",
  });

  const handleEventTypeChange = (event, newType) => {
    if (newType !== null) {
      setEventType(newType);
    }
  };

  const handleSkillClick = (skill) => {
    setSkills((previousSkills) => {
      if (previousSkills.includes(skill)) {
        return previousSkills.filter((item) => item !== skill);
      }

      return [...previousSkills, skill];
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleCreateEvent = () => {
    const eventData = {
      ...formData,
      eventType,
      skills,
    };

    console.log("Event Data:", eventData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f7fc",
        padding: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          margin: "0 auto",
        }}
      >

        {/* Event Type */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: "#454550",
            mb: 2,
          }}
        >
          Event Type
        </Typography>

        <ToggleButtonGroup
          value={eventType}
          exclusive
          onChange={handleEventTypeChange}
          sx={{
            gap: 1.5,
            mb: 8,
            "& .MuiToggleButtonGroup-grouped": {
              border: "1px solid #c9c8d0 !important",
              borderRadius: "12px !important",
            },
          }}
        >
          <ToggleButton
            value="training"
            sx={{
              textTransform: "none",
              fontSize: 18,
              fontWeight: 500,
              px: 2,
              py: 1,
              color: "#454550",
              "&.Mui-selected": {
                backgroundColor: "#dce4ff",
                color: "#344875",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#dce4ff",
              },
            }}
          >
            <SportsCricketIcon sx={{ mr: 1 }} />
            Training
          </ToggleButton>

          <ToggleButton
            value="match"
            sx={{
              textTransform: "none",
              fontSize: 18,
              fontWeight: 500,
              px: 2.5,
              py: 1,
              color: "#454550",
              "&.Mui-selected": {
                backgroundColor: "#dce4ff",
                color: "#344875",
              },
            }}
          >
            Match
          </ToggleButton>

          <ToggleButton
            value="other"
            sx={{
              textTransform: "none",
              fontSize: 18,
              fontWeight: 500,
              px: 2.5,
              py: 1,
              color: "#454550",
              "&.Mui-selected": {
                backgroundColor: "#dce4ff",
                color: "#344875",
              },
            }}
          >
            Other
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Skills */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: "#454550",
            mb: 2,
          }}
        >
          Skills to Practice
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            overflowX: "auto",
            pb: 1,
            mb: 5,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {["Batting", "Bowling", "Fielding", "Wicket Keeping"].map(
            (skill) => (
              <Chip
                key={skill}
                label={skill}
                onClick={() => handleSkillClick(skill)}
                sx={{
                  flexShrink: 0,
                  height: 45,
                  borderRadius: "11px",
                  border: "1px solid #c9c8d0",
                  backgroundColor: skills.includes(skill)
                    ? "#dce4ff"
                    : "transparent",
                  color: "#454550",
                  fontSize: 18,
                  fontWeight: 500,
                  px: 1,
                }}
              />
            )
          )}
        </Box>

        {/* Event Title */}
        <TextField
          fullWidth
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Event Title"
          sx={{
            mb: 4,
            "& .MuiOutlinedInput-root": {
              borderRadius: "7px",
              height: 78,
              fontSize: 20,
            },
          }}
        />

        {/* Venue */}
        <TextField
          fullWidth
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          placeholder="Venue"
          sx={{
            mb: 4,
            "& .MuiOutlinedInput-root": {
              borderRadius: "7px",
              height: 78,
              fontSize: 20,
            },
          }}
        />

        {/* Location */}
        <TextField
          fullWidth
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location / Address"
          slotProps={{
            input: {
              startAdornment: (
                <LocationOnIcon
                  sx={{
                    mr: 2,
                    color: "#4c4c57",
                    fontSize: 30,
                  }}
                />
              ),
            },
          }}
          sx={{
            mb: 4,
            "& .MuiOutlinedInput-root": {
              borderRadius: "7px",
              height: 78,
              fontSize: 20,
            },
          }}
        />

        {/* Start Date and Time */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1.4fr 1fr",
            },
            gap: 2.5,
            mb: 4,
          }}
        >
          <TextField
            fullWidth
            name="startDate"
            label="Start Date"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "7px",
                height: 78,
                fontSize: 18,
              },
            }}
          />

          <TextField
            fullWidth
            name="startTime"
            label="Start Time"
            type="time"
            value={formData.startTime}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "7px",
                height: 78,
                fontSize: 18,
              },
            }}
          />
        </Box>

        {/* End Date and Time */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1.4fr 1fr",
            },
            gap: 2.5,
            mb: 4,
          }}
        >
          <TextField
            fullWidth
            name="endDate"
            label="End Date"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "7px",
                height: 78,
                fontSize: 18,
              },
            }}
          />

          <TextField
            fullWidth
            name="endTime"
            label="End Time"
            type="time"
            value={formData.endTime}
            onChange={handleChange}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "7px",
                height: 78,
                fontSize: 18,
              },
            }}
          />
        </Box>

        {/* Notes */}
        <TextField
          fullWidth
          multiline
          minRows={4}
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes / Description"
          sx={{
            mb: 4,
            "& .MuiOutlinedInput-root": {
              borderRadius: "7px",
              fontSize: 20,
            },
          }}
        />

        {/* Players */}
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#f1f1f9",
            borderRadius: 3,
            padding: 2.5,
            mb: 3,
          }}
        >
          <Typography
            sx={{
              color: "#454550",
              mb: 2,
            }}
          >
            No players added
          </Typography>

          <Button
            fullWidth
            startIcon={<PersonAddIcon />}
            sx={{
              backgroundColor: "#dce4ff",
              color: "#344875",
              borderRadius: 5,
              textTransform: "none",
              fontSize: 17,
              fontWeight: 600,
              py: 1,
              "&:hover": {
                backgroundColor: "#d2dcff",
              },
            }}
          >
            Add Players
          </Button>
        </Paper>

        {/* Coaches / Managers */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: "#454550",
            mb: 2,
          }}
        >
          Event Managers / Coaches
        </Typography>

        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#f1f1f9",
            borderRadius: 3,
            padding: 2.5,
            mb: 6,
          }}
        >
          <Typography
            sx={{
              color: "#454550",
              mb: 2,
            }}
          >
            No coaches/managers added
          </Typography>

          <Button
            fullWidth
            startIcon={<PersonAddIcon />}
            sx={{
              backgroundColor: "#dce4ff",
              color: "#344875",
              borderRadius: 5,
              textTransform: "none",
              fontSize: 17,
              fontWeight: 600,
              py: 1,
              "&:hover": {
                backgroundColor: "#d2dcff",
              },
            }}
          >
            Add Coaches/Managers
          </Button>
        </Paper>

        {/* Create Event */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleCreateEvent}
          sx={{
            height: 58,
            borderRadius: 5,
            backgroundColor: "#5069a3",
            textTransform: "none",
            fontSize: 18,
            fontWeight: 600,
            mb: 2,
            "&:hover": {
              backgroundColor: "#465d94",
            },
          }}
        >
          Create Event
        </Button>

      </Box>
    </Box>
  );
};

export default CreateEvent;