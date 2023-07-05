import React from "react";
import "./App.css";
import AppBar from "./NavBar.js";
import ArticlesGrid from "./ArticlesGrid";
import ArticlesGridLeft from "./ArticlesGridLeft";
import ArticlesGridRight from "./ArticlesGridRight";
import AboutBar from "./AboutBar";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import footballimage from "./img/footballimage.jpeg";
import baseballimage from "./img/baseballimage.jpeg";
import basketballimage from "./img/basketballimage.jpeg";

function App() {
  return (
    <div className="App">
      <AppBar /> {/**Calls the AppBar Compoenent which is the navigation bar at the top of the page**/} 
      <div className="content-container">
        <AboutBar /> {/**calls the AboutBar Component**/}
        <Grid container spacing={2} className="grid-container"> {/**Calls the Grid MaterialUI Component and sets the spacing between the 3 images**/}
          <Grid item lg={4} xs={12}> {/**calls the Grid item Component and controls the images being at the same height using breakpoints **/}
            <Box display="flex" flexDirection="column" alignItems="center"> {/**calls the Box MaterialUI Component and prevents whitespace when stretching the screen**/}
              <Card> {/**calls the Card MaterialUI Component**/}
                <Box bgcolor="black"> {/**Calls the Box Component with a black background around the NFL Image**/}
                  <a href="https://www.nfl.com" target="_blank" rel="noopener noreferrer"> {/**Calls an anchor (a) element with a link to the NFL website when clicking on the text above the image**/}
                    <Typography variant="h6" align="center" color="white">National Football League</Typography> {/** Calls the Typography MaterialUI Component to display the text with size/type of h6, center alignment, and color white**/}
                  </a>
                </Box>
                <Box display="flex" justifyContent="center"> {/** Calls the Box Componenet to input the Football Image**/}
                  <img src={footballimage} className="image" alt="Football" />
                </Box>
              </Card>
              <Box mt={2} display="flex" justifyContent="center">
                <ArticlesGridLeft /> {/** Calls the ArticlesGrid to display the API latest articles for each designated sport**/}
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Card>
                <Box bgcolor="black"> {/**Calls the Box Component with a black background around the NBA Image**/}
                  <a href="https://www.nba.com" target="_blank" rel="noopener noreferrer"> {/**Calls an anchor (a) element with a link to the NBA website when clicking on the text above the image**/}
                    <Typography variant="h6" align="center" color="white">National Basketball Association</Typography> {/** Calls the Typography MaterialUI Component to display the text with size/type of h6, center alignment, and color white**/}
                  </a>
                </Box>
                <Box display="flex" justifyContent="center"> {/** Calls the Box Componenet to input the Basketball Image**/}
                  <img src={basketballimage} className="image" alt="Basketball" />
                </Box>
              </Card>
              <Box mt={2} display="flex" justifyContent="center">
                <ArticlesGrid /> {/** Calls the ArticlesGrid to display the API latest articles for each designated sport**/}
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Card>
                <Box bgcolor="black"> {/**Calls the Box Component with a black background around the MLB Image**/}
                  <a href="https://www.mlb.com" target="_blank" rel="noopener noreferrer">
                    <Typography variant="h6" align="center" color="white">Major League Baseball</Typography> {/** Calls the Typography MaterialUI Component to display the text with size/type of h6, center alignment, and color white**/}
                  </a>
                </Box>
                <Box display="flex" justifyContent="center"> {/** Calls the Box Componenet to input the Baseball Image**/}
                  <img src={baseballimage} className="image" alt="Baseball" />
                </Box>
              </Card>
              <Box mt={2} display="flex" justifyContent="center">
                <ArticlesGridRight /> {/** Calls the ArticlesGrid to display the API latest articles for each designated sport**/}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;