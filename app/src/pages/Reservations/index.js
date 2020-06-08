import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Paper,
  Button,
  Table,
  TableHead,
  TableCell,
  TableBody,
} from '@material-ui/core';

import Header from '../../components/Header';

import { useStyles } from './styles';

function Reservation() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Header>
      <Paper className={classes.titleContainer}>
        <span className={classes.pageTitle}>Reservas</span>
      </Paper>

      <Table className={classes.table}>
        <TableHead>
          <TableCell>Nome</TableCell>
          <TableCell>Valor</TableCell>
          <TableCell>Reservas</TableCell>
          <TableCell>Ações</TableCell>
        </TableHead>
        <TableBody>
          <TableCell>Nome</TableCell>
          <TableCell>Valor</TableCell>
          <TableCell>Reservas</TableCell>
          <TableCell>
            <Button variant="outlined" onClick={() => history.push('/reserv')}>
              Detalhar
            </Button>
          </TableCell>
        </TableBody>
      </Table>
    </Header>
  );
}

export default Reservation;
