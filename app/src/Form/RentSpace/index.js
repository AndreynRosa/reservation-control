import React, { useState } from 'react';

import CustomDataSelector from '../../components/CustomDataSelector/idex';
import { useHistory } from 'react-router-dom';

import { TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useStyles } from './styles';

function RentSpace() {
  const classes = useStyles();
  const history = useHistory();

  const [cleanValue, setCleanValue] = useState('');

  const [roles, setRoles] = useState('');
  const [error, setError] = useState(false);

  async function handleSubmit() {
    try {
      // await signUp({ name, email, password });
      // setError(false);
      console.log('submit');
      history.push('/');
    } catch (err) {
      setError(true);
    }
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
          // value={name}
          // onChange={e => setName(e.target.value)}
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
          // value={cleanValue}
          // onChange={e => setCleanValue(e.target.value)}
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
