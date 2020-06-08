import React, { useState, useEffect, useCallback } from 'react';

import { Grid, Button, Paper } from '@material-ui/core';

import { useStyles } from './styles';
import Header from '../../components/Header';
import CustomCard from '../../components/CustomCard';
import CustomToggelButton from '../../components/CustomToggelButton/CustomToggelButtom';
import SpacesForm from '../../Form/SpacesForm';

import { findAllSpaces } from '../../services/SpacesServices';

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoadedSpaces, setIsLoadedSpaces] = useState(false);
  const classes = useStyles();
  const mock = {
    name: 'salão',
    cleanValue: '50',
    roles: 'Fechar todas as janelas ao sair',
    id: 10,
  };
  const loadData = useCallback(async () => {
    let response = await findAllSpaces();
    response = await response;
    setData(response.data);
  }, []);
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Header>
      <Paper className={classes.titleContainer}>
        <span className={classes.pageTitle}>Home</span>
        <CustomToggelButton className={classes.btn} buttonLabel="Reservar">
          <SpacesForm />
        </CustomToggelButton>
      </Paper>
      <Grid container spacing={2}>
        {data
          ? data.map(space => {
              return (
                <Grid item xs={4}>
                  <CustomCard {...space}></CustomCard>
                </Grid>
              );
            })
          : ''}
      </Grid>
    </Header>
  );
}
