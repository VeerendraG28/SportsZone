import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

/* https://mui.com/material-ui/react-snackbar/ (Simple Snackbar) */ 

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick} style={{color: 'black', fontWeight: 'bold'}}>Click Here For Information</Button> {/** Button to trigger the SnackBar Component with a custom message **/}
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Welcome to SportsZone! A home for NFL, NBA, MLB fans. To go to the offical homepage of the sport, please click on the header text above the superstars. Below each superstar are the latest articles designated for the assigned sport. To come back to the home page, please click on the home icon on the far right of the page. To get more information invovling one of the three sports, click on either one of the three tabs on the top of the page. Hope you find something useful here!" 
        action={action} 
      /> {/** SnackBar Component that displays the custom message as a pop-up at the bottom of the page **/}
    </div>
  );
}