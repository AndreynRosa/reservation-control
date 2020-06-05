import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#fff',
    height: '100vh',
    display: 'flex',
    alignItems: 'stretch',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    maxWidth: '750px',
    width: '100%',
  },

  animationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 50px',
  },

  form: {
    marginTop: '50px',
    padding: '20px 50px',
  },

  backgroundImage: {
    flex: '1',
    backgroundSize: 'cover',
    // background: `url(${signIn}) no-repeat center`,
  },

  button: {
    margin: theme.spacing(3, 0, 2),
    height: '50px',
  },

  alertError: {
    marginTop: '15px',
    width: '100%',
  },
}));
