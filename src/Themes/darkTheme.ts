import { red } from "@mui/material/colors";
import blue from "@mui/material/colors/blue";
import createTheme from "@mui/material/styles/createTheme";
import { height } from "@mui/system";

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    pages: true;
  }
}


export const darkTheme = createTheme({
    palette: {
      mode: "dark",  
    },

    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'pages' },
            style: {
              width: 30,
              margin: 4,
              height: 30,
              padding: 0,
              marging: 0,
              borderRadius: 15,
              border: `2px solid 	#FF5F1F`,
              minWidth: 10,
              minHeight: 10,
            },
          },
        ],
      },
    },

  });
