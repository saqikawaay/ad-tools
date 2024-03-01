import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: '#3f51b5',
              },
            },
          },
          MuiToolbar: {
            styleOverrides: {
              root: {
                display: 'flex',
                justifyContent: 'space-between',
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                flexGrow: 1,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                color: 'white',
                },
            },
            },
            MuiAvatar: {
              styleOverrides: {
                root: {
                  width: 50,
                  height: 50,
                },
              },
            },
        MuiDrawer: {
          styleOverrides: {
            root: {
              width: 240,
              flexShrink: 0,
            },
            paper: {
              width: 240,
            },
          },
        },
        MuiListItem: {
          styleOverrides: {
            root: {
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
            },
          },
        },
      },
  },

});


export default theme;