import React from "react";

import {
  Card,
  CardContent,
  Avatar,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const UserCard = () => {
  return (
    <Card
      sx={{
        width: 600,
        borderRadius: 3,
        border: "1px solid #d5d5d5",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.12)",
        backgroundColor: "#faf9ff",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 1.5,
          "&:last-child": {
            paddingBottom: 1.5,
          },
        }}
      >

        {/* Profile / Event Image */}
        <Avatar
          src="/box-cricket.png"
          variant="rounded"
          sx={{
            width: 128,
            height: 128,
            borderRadius: 2,
            marginRight: 2,
          }}
        />

        {/* Main Information */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >

          {/* Name */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "#222",
              lineHeight: 1.2,
            }}
          >
            cybermentors India
          </Typography>

          {/* Date and Age */}
          <Typography
            variant="h6"
            sx={{
              color: "#555",
              marginTop: 0.5,
              fontWeight: 400,
            }}
          >
            30-Jan-1980 (Age: 46)
          </Typography>

          {/* Email */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 1.2,
            }}
          >
            <EmailIcon
              sx={{
                color: "#50669a",
                marginRight: 1,
                fontSize: 27,
              }}
            />

            <Typography
              sx={{
                fontSize: 19,
                color: "#555",
                lineHeight: 1.2,
              }}
            >
              cybermentors
              <br />
              .india@gmail.com
            </Typography>
          </Box>

          {/* WhatsApp */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <WhatsAppIcon
              sx={{
                color: "#50669a",
                marginRight: 1,
                fontSize: 30,
              }}
            />

            <Typography
              sx={{
                fontSize: 19,
                color: "#555",
              }}
            >
              9791396343
            </Typography>
          </Box>
        </Box>

        {/* Right Side Icons */}
        <Box
          sx={{
            display: "flex",
            alignSelf: "flex-start",
            alignItems: "center",
            marginTop: 0.5,
          }}
        >

          {/* Add Person */}
          <IconButton
            sx={{
              color: "#50669a",
            }}
          >
            <PersonAddIcon fontSize="large" />
          </IconButton>

          {/* More Options */}
          <IconButton
            sx={{
              color: "#222",
            }}
          >
            <MoreVertIcon fontSize="large" />
          </IconButton>

        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;