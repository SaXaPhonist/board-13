import { createTheme } from '@mui/material';

export const COLORS = {
  primaryColor: '#FFF',
  secondaryColor: '#6B7178',
  darkColor: '#27292C',
  disabledTextColor: '#9B9B9B',
  primaryTextColor: '#27292C',
  secondaryTextColor: '#9AA2AC',
  buttonColorLight: '##346AFF',
  buttonColorDark: '#27292C',
};

const themeOptions = {
  palette: {
    primary: {
      main: COLORS.primaryColor,
      dark: COLORS.darkColor,
    },
    secondary: {
      main: COLORS.secondaryColor,
    },
    text: {
      primary: COLORS.primaryTextColor,
      secondary: COLORS.secondaryTextColor,
      disabled: COLORS.disabledTextColor,
    },
    button: {
      light: COLORS.buttonColorLight,
      dark: COLORS.buttonColorDark,
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 425,
      md: 770,
      xmd: 850,
      lg: 1025,
      xl: 1441,
    },
  },
};

const globalTheme = createTheme(themeOptions);

const theme = createTheme(
  {
    components: {
      MuiCircularProgress: {
        variants: [
          {
            props: { color: 'secondary' },
            style: {
              color: '#CCC',
            },
          },
        ],
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            border: 'none',
            '&:before': {
              height: 0,
            },
            '&.Mui-expanded': {
              margin: 0,
            },
            '&.Mui-disabled': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            justifyContent: 'flex-start',
            minHeight: 'auto',
            padding: 0,
            '&.Mui-expanded': {
              minHeight: 'auto',
            },
            '&.Mui-disabled': {
              opacity: 1,
            },
          },
          content: {
            flexGrow: 0,
            minHeight: 'auto',
            margin: 0,
            '&.Mui-expanded': {
              margin: 0,
            },
          },
          expandIconWrapper: {
            alignSelf: 'flex-start',
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            maxWidth: '200px',
            fontSize: '14px',
            backgroundColor: 'rgba(78,78,78,0.9)',
          },
        },
      },
    },
  },
  globalTheme,
);

export default theme;
