import Markdown from "react-markdown"
// import { getButtonAppearance } from "utils/button"
// import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image"

import React from "react";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../../styles/Jumbotron.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from "@mui/material/Alert"
import { styled } from "@mui/material/styles";
import { useRouter } from 'next/router';
import { getStrapiMedia } from "../../utils/media";
import delve from 'dlv';

const Hero = ({ data }) => {
  const router = useRouter();
  
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bebas Neue',
      ].join(','),
    },
  });

  const MyComponent = styled("button")({
    background: "linear-gradient(45deg, #a06874 30%, rgba(129,52,0,255) 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #180a0d4c",
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",
  });

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/menu");
  }

  return (
    <div className={styles.container}>
      <CssBaseline />
      <Paper className={styles.jumbo} style={{backgroundImage: `url(${getStrapiMedia(data.picture.data.attributes.url)})`}}>
        <Container className={styles.container} maxWidth="md">
          <Grid
            className={styles.content}
            container
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Grid item>
              <ThemeProvider theme={theme}>
                <Typography align="center" variant="h1">{data.title}</Typography>
                <Typography align="center" variant="h4">{data.description}</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item>
              <MyComponent style={{fontFamily: "Bebas Neue", fontSize:"20px"}} className={styles.button} onClick={handleClick}>Menu</MyComponent>
            </Grid>
          </Grid>
        </Container>
        {/* <img
                width="200"
                src={getStrapiMedia(data.picture.data.attributes.url)}
                alt="testintg"
              /> */}
      </Paper>
    </div>
  )
}

export default Hero


