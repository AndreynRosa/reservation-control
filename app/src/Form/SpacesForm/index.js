import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useStyles } from './styles';

export default function SpacesForm(props) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    console.log(props);
    if (props && props.id) {
      console.log('Aqui');
      setName(props.name);
      setCleanValue(props.cleanValue);
      setRoles(props.roles);
    }
  }, [props]);
  const [name, setName] = useState('');
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
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="cleanValue"
          label="Taxa"
          name="cleanValue"
          autoComplete="taxa"
          value={cleanValue}
          onChange={e => setCleanValue(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="roles"
          label="Regras"
          type="area"
          id="roles"
          autoComplete="current-password"
          value={roles}
          onChange={e => setRoles(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Salvar
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
