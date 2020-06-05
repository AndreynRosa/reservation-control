import React from 'react';

import Header from '../../components/Header';

import { useStyles } from './styles';
import { Container, Grid } from '@material-ui/core';
import CustomCard from '../../components/CustomCard';

export default function Home() {
  const classes = useStyles();
  const mock = {
    name: 'salão',
    cleanValue: '50',
    roles: 'Fechar todas as janelas ao sair',
    id: 10
  };
  return (
    <Header>
      <span className={classes.pageTitle}>Home</span>
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
