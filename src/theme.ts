//#298892 primaria
//#ed9b55 secundaria

import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#298892"
        },
        secondary: {
            main: "#ed9b55"
        }
    },
    typography: {
        h4: {
            fontWeight: "bold",

        },
        h5: {
            fontWeight: "bold"
        },
        h6: {
            padding: 8
        }
    }
})