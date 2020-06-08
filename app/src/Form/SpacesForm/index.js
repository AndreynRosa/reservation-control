import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useStyles } from './styles';

import { saveSpace } from '../../services/SpacesServices';

export default function SpacesForm(props) {
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState('');
  const [vauleOfRent, setVauleOfRent] = useState('');
  const [roles, setRoles] = useState('');
  const [id, setId] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    loadForm();
  }, [props]);

  function loadForm() {
    if (props && props.id) {
      setName(props.name);
      setVauleOfRent(props.vauleOfRent);
      setRoles(props.roles);
      setId(props.id);
    }
  }

  async function handleSubmit() {
    if (formIsValid) {
      await saveForm();
      window.location.href = "http://localhost:3000/";
    } else {
      setError(true);
    }
  }

  async function saveForm() {
    let request = { name, vauleOfRent, roles, id };
    console.log(request)
    try {
      await saveSpace(request);
      history.push('/');
    } catch (err) {
      setError(true);
    }
  }
  function formIsValid() {
    return name & (name.length > 2) & (vauleOfRent & (vauleOfRent >= 0));
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
          value={vauleOfRent}
          onChange={e => setVauleOfRent(e.target.value)}
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
