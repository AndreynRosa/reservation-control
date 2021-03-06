import React from 'react';
import { useHistory } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import Assignment from '@material-ui/icons/Assignment';
import { useStyles } from './styles';

export default function MainListItems() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div>
      <ListItem
        className={classes.navOptions}
        button
        onClick={() => history.push('/')}
      >
        <ListItemIcon>
          <Home className={classes.navIcon} />
        </ListItemIcon>
        <ListItemText className={classes.navText}>Home</ListItemText>
      </ListItem>

      <ListItem
        className={classes.navOptions}
        button
        onClick={() => history.push('/reservs')}
      >
        <ListItemIcon>
          <Assignment className={classes.navIcon} />
        </ListItemIcon>
        <ListItemText className={classes.navText}>Reservas</ListItemText>
      </ListItem>
    </div>
  );
}
