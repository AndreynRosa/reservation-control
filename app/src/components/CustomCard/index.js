import React, { useCallback } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CustomToggelButton from '../CustomToggelButton/CustomToggelButtom';
import SpacesForm from '../../Form/SpacesForm';
import { useStyles } from './styles';
import RentSpace from '../../Form/RentSpace';
import { delteSpace } from '../../services/SpacesServices';

function CustomCard(props) {
  const { name, vauleOfRent, roles, id: spaceId } = props;
  const classes = useStyles();

  const onDelete = useCallback(async () => {
    await delteSpace(spaceId);
    window.location.href = "http://localhost:3000/";
  });

  return (
    <Card className={classes.root} key={spaceId}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Taxa R$ {vauleOfRent}
        </Typography>

        <Typography color="textSecondary" className={classes.pos}>
          <p>Regras: {roles}</p>
        </Typography>
      </CardContent>
      <CardActions className={classes.footer}>
        <CustomToggelButton buttonLabel="Edit">
          <SpacesForm {...props} />
        </CustomToggelButton>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            onDelete();
          }}
        >
          Deletar
        </Button>
        <CustomToggelButton buttonLabel="Reservar">
          <RentSpace {...props} />
        </CustomToggelButton>
      </CardActions>
    </Card>
  );
}

export default CustomCard;
