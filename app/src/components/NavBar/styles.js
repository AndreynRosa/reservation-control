import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    height: '100vh',
    backgroundColor: '#0275D8',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  projectName: {
    color: '#fff',
    marginLeft: '5px',
    fontWeight: '600',
    fontSize: '18px',
  },
  chevronLeftIcon: {
    color: '#fff',
  },

  user: {
    display: 'flex',
    padding: '15px 7px',
  },

  avatar: {
    height: '40px',
    width: '40px',
    borderRadius: '20px',
  },

  informations: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '25px',
  },

  name: {
    fontSize: '14px',
    color: '#fff',
    fontWeight: 500,
  },

  email: {
    fontSize: '11px',
    fontWeight: '500',
    color: '#fff',
    marginTop: '3px',
  },
}));
