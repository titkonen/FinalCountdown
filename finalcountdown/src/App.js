import React, { useState } from 'react';
import './App.css';
import {
  Button, 
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

// MD Icons
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function Counter() {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = 'You clicked ${count} times';
  // });

  return (
    <div className="#">
      <Container maxWidth="sm">
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              Final Countdown
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>

        <Box component="span" m={1}>
          <p>You clicked {count} times</p>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<RemoveIcon />}
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={() => setCount(count + 1)}
          >
            Increase
          </Button>
        </Box>
      </Container>  
    </div>
  );
}

export default Counter;
