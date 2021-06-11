import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
export default createMuiTheme({
    palette: {
        primary: {
            main: palette.primary,
        },
        secondary: {
            main: palette.secondary,
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
                padding: '.5rem 1rem',
                fontSize: '1.2rem',
            },
        },
        MuiTextField: {
            root: {
                marginBottom: '1rem',
            },
        },
    },
});
