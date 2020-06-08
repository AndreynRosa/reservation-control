import React, { useEffect } from 'react';
import Header from '../../components/Header';

import { useHistory } from 'react-router-dom';
import {
  Paper,
  Button,
  Table,
  TableHead,
  TableCell,
  TableBody,
} from '@material-ui/core';

import { useStyles } from './styles';

function Reservation(props) {
  const classes = useStyles();
  const history = useHistory();


  useEffect(() => {
    console.log(props.location.state)
  })
  return (
    <Header>
      <Paper className={classes.titleContainer}>
        <span className={classes.pageTitle}>Reserva</span>
      </Paper>

      <Table className={classes.table}>
        <TableHead>
          <TableCell>Apartamento</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Ações</TableCell>
        </TableHead>
        <TableBody>
          <TableCell>3001 A</TableCell>
          <TableCell>{20/10/2020}</TableCell>
          <TableCell>Confirmada</TableCell>
          <TableCell>
            <Button variant="outlined" onClick={() => console.log('aqui')}>
              Confirmar
            </Button>
            <Button variant="outlined" onClick={() => console.log('aqui')}>
              Suspender
            </Button>
          </TableCell>
        </TableBody>
      </Table>
    </Header>
  );
}

export default Reservation;
