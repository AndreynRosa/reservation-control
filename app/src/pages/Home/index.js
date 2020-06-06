import React from 'react';

import { Grid, Button, Paper } from '@material-ui/core';

import { useStyles } from './styles';
import Header from '../../components/Header';
import CustomCard from '../../components/CustomCard';
import CustomToggelButton from '../../components/CustomToggelButton/CustomToggelButtom';
import SpacesForm from '../../Form/SpacesForm';

export default function Home() {
  const classes = useStyles();
  const mock = {
    name: 'salão',
    cleanValue: '50',
    roles: 'Fechar todas as janelas ao sair',
    id: 10,
  };
  return (
    <Header>
      <Paper className={classes.titleContainer}>
        <span className={classes.pageTitle}>Home</span>
        <CustomToggelButton className={classes.btn} buttonLabel="Reservar">
          <SpacesForm />
        </CustomToggelButton>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CustomCard {...mock}></CustomCard>
        </Grid>{' '}
        <Grid item xs={4}>
          <CustomCard {...mock}></CustomCard>
        </Grid>{' '}
        <Grid item xs={4}>
          <CustomCard {...mock}></CustomCard>
        </Grid>{' '}
        <Grid item xs={4}>
          <CustomCard {...mock}></CustomCard>
        </Grid>{' '}
      </Grid>
    </Header>
  );
}
