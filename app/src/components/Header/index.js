import React, { useState } from 'react';
import clsx from 'clsx';

import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Container,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import NavBar from '../NavBar';

import { useStyles } from './styles';

export default function Header({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar open={open} setOpen={setOpen} />

      <AppBar className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden,
            )}
          >
            <MenuIcon className={classes.menu} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </div>
    </div>
  );
}
