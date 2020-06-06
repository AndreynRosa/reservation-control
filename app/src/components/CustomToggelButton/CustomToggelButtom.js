import React from 'react';

import PropTypes from 'prop-types';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';

function CustomToggelButton(props) {
  const [open, setOpen] = React.useState(false);

  const { buttonLabel, btnClass, isShow, children, title, size, ...res } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const componente = children;

  return (
    <div>
      <Button size={size}  variant="outlined" color="primary" onClick={handleClickOpen} {...res}>
        {buttonLabel}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>{componente}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomToggelButton;

CustomToggelButton.propTypes = {
  //   class: propTypes.string,:
  buttonLabel: PropTypes.string,
  desc: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
