import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider, GlobalStyles } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ActionItem from "../components/meeting/ActionItem";

const cards = [1, 2, 3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function MeetingInner() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <CssBaseline /> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#D7E4FE",
            pt: 8,
            pb: 6,
          }}
        >
          <Container
            maxWidth="sm"
            sx={{
              pt: 1,
              pb: 1,
            }}
          >
            <Typography
              component="h4"
              variant="h4"
              align="left"
              color="text.primary"
              gutterBottom
            >
              Alignment Meeting
            </Typography>
          </Container>

          <Container
            sx={{
              py: 8,
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
            maxWidth="md"
          >
            <Grid container spacing={2}>
              <Grid xs={4}>
                <Typography align="center">Action Items Log</Typography>
              </Grid>
              <Grid xs={4}>
                <Typography align="center">Pending</Typography>
              </Grid>
              <Grid xs={4}>
                <Typography align="center">Done</Typography>
              </Grid>
            </Grid>

            {/* Here we have 3 stack columns to display items based on it's status */}
            <Grid container spacing={2}>
              <Grid xs={4}>
                <Stack spacing={2}>
                  {cards.map((card) => (
                    <Grid item key={card}>
                      <ActionItem></ActionItem>
                    </Grid>
                  ))}
                </Stack>
              </Grid>

              <Grid xs={4}>
                <Stack spacing={2}>
                  {cards.map((card) => (
                    <Grid item key={card}>
                        <ActionItem></ActionItem>
                    </Grid>
                  ))}
                </Stack>
              </Grid>

              <Grid xs={4}>
                <Stack spacing={2}>
                  {cards.map((card) => (
                    <Grid item key={card}>
                        <ActionItem></ActionItem>
                    </Grid>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
