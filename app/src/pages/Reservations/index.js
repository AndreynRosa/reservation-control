import React, { useEffect, useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

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
import { delteReservation } from '../../services/ReservationService';

import { updateStatus } from '../../services/ReservationService';

function Reservation() {
  const [data, setData] = useState([]);
  const [isIniti, setIsInit] = useState(true);

  const loadData = useCallback(async () => {
    let response = await findAllReservation();
    response = await response;
    setData(response.data);
  }, []);

  const onDelete = useCallback(async id => {
    await delteReservation(id);
    loadData();
  }, []);

  const onStatus = useCallback(async (id, status) => {
    await updateStatus(id, status);
    loadData();
  });
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
          <TableCell>Status</TableCell>
          <TableCell>Ações</TableCell>
        </TableHead>
        {data
          ? data.map(reservation => {
              return (
                <TableBody key={reservation}>
                  <TableCell>{reservation.roomName}</TableCell>
                  <TableCell>{reservation.value}</TableCell>
                  <TableCell>{reservation.person}</TableCell>
                  <TableCell>{reservation.number}</TableCell>
                  <TableCell>{reservation.formmatedDate}</TableCell>
                  <TableCell>{reservation.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => onStatus(reservation.id, 'confirm')}
                    >
                      Confirmar
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={() => onStatus(reservation.id, 'canceled')}
                    >
                      Cancelar
                    </Button>

                    <Button
                      variant="outlined"
                      onClick={() => onDelete(reservation.id)}
                    >
                      Deletar
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
