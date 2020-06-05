import React from 'react';
import clsx from 'clsx';

import { Drawer, List, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NavBarItems from './NavBarItems';
import avatarImg from '../../assets/avatar.svg';

import { useStyles } from './styles';

export default function NavBar({ open, setOpen }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <p className={classes.projectName}>Condomino Xyz</p>
        <IconButton onClick={() => setOpen(false)}>
          <ChevronLeftIcon className={classes.chevronLeftIcon} />
        </IconButton>
      </div>

      <div className={classes.user}>
        <img className={classes.avatar} src={avatarImg} alt="avatar" />
        <div className={classes.informations}>
          <p className={classes.name}>{'Andrey Rosa'}</p>
          <span className={classes.email}>{'andreynrosa@gmail.com'}</span>
        </div>
      </div>

      <List>
        <NavBarItems />
      </List>
    </Drawer>
  );
}
