import { createMuiTheme } from '@material-ui/core/styles';
import pallette from './pallette';
export default createMuiTheme({
    palette: {
        primary: {
            main: pallette.primary,
        },
        secondary: {
            main: pallette.secondary,
        },
    },
});
