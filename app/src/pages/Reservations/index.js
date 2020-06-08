import React, { useEffect, useCallback, useState } from 'react';
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

import { findAllReservation } from '../../services/ReservationService';

function Reservation() {
  const [data, setData] = useState([]);
  const [isIniti, setIsInit] = useState(true);

  const loadData = useCallback(async () => {
    let response = await findAllReservation();
    response = await response;
    setData(response.data);
  }, []);

  useEffect(() => {
    if (isIniti) {
      loadData();
      setIsInit(false);
    }
  }, []);
  const classes = useStyles();
  const history = useHistory();
  return (
    <Header>
      <Paper className={classes.titleContainer}>
        <span className={classes.pageTitle}>Reservas</span>
      </Paper>

      <Table className={classes.table}>
        <TableHead>
          <TableCell>Espaço</TableCell>
          <TableCell>Valor</TableCell>
          <TableCell>Nomo de</TableCell>
          <TableCell>Data</TableCell>
          <TableCell>Apartamento</TableCell>
          <TableCell>Ações</TableCell>

        </TableHead>
        {data
          ? data.map((reservation) => {
              return (
                <TableBody key={reservation}>
                  <TableCell>{reservation.roomName}</TableCell>
                  <TableCell>{reservation.value}</TableCell>
                  <TableCell>{reservation.person}</TableCell>
                  <TableCell>{reservation.number}</TableCell>
                  <TableCell>{reservation.formmatedDate}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => history.push('/reserv')}
                    >
                      Detalhar
                    </Button>
                  </TableCell>
                </TableBody>
              );
            })
          : null}
      </Table>
    </Header>
  );
}

export default Reservation;
