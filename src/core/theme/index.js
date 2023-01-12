import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {

        white: '#ffffff',
        primary: '#025A63',
        secondary: 'orange',
        textDark: '#252525'
    },
};