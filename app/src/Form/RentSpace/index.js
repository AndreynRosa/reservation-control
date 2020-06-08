import React, { useState } from 'react';

import { TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useStyles } from './styles';

import CustomDataSelector from '../../components/CustomDataSelector/idex';

import { saveReservation } from '../../services/ReservationService';

function RentSpace(props) {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState(new Date('2020-06-08T21:11:54'));
  const [error, setError] = useState(false);

  async function handleSubmit() {
    console.log(props);
    let request = {
      reservDate: date,
      person: name,
      number: number,
    };
    console.log(request);
    try {
      console.log(props);
      if (formIsValid) {
        await saveReservation(request, props.id);
        window.location.href = 'http://localhost:3000/';
      }
    } catch (err) {
      setError(true);
    }
  }

  function formIsValid() {
    return name & (name.length > 2) & date;
  }
  function onChangeHandler(data) {
    setDate(data);
  }
  return (
    <>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nome"
          name="name"
          autoComplete="name"
          autoFocus
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="number"
          label="Numero do Ap"
          name="number"
          autoComplete="312 A"
          autoFocus
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <CustomDataSelector
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="cleanValue"
          label="Taxa"
          name="cleanValue"
          autoComplete="taxa"
          setData={onChangeHandler}
        />

        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Reserva
        </Button>
      </form>

      {error && (
        <Alert
          severity="error"
          onClose={() => setError(false)}
          className={classes.alertError}
        >
          Login error, check your credentials
        </Alert>
      )}
    </>
  );
}

export default RentSpace;
