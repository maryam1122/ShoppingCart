import React from 'react'

import AppRouter from './AppRouter'
import "./styles/style.scss";
import { darkTheme } from "./Themes/darkTheme";
import { lightTheme } from "./Themes/lightTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useAppSelector} from './hooks/reduxHook';



 function App ()  {
   const mode = useAppSelector((state) => state.themeReducer) as
   | "dark"
   | "light";


  return (
    
   <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppRouter/>
    </ThemeProvider>
     
  )
}

export default App