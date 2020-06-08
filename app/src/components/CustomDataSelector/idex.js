import React, { useState } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

import { useStyles } from './styles';
function CustomDataSelector(props) {
  const classes = useStyles();
  const {
    setData,
  } = props;
  const [selectedDate, setSelectedDate] = useState(
    new Date('2020-06-08T21:11:54'),
  );

  const handleDateChange = date => {
    console.log(date)
    setSelectedDate(date);
    setData(date);
    console.log("aqui")
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.keyboardDatePicker}
        margin="normal"
        id={123123}
        name={"name"}
        label={"labelText"}
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default CustomDataSelector;
