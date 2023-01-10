import React from 'react'

import AppRouter from './AppRouter'
import "./styles/style.scss";
import { darkTheme } from "./Themes/darkTheme";
import { lightTheme } from "./Themes/lightTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useAppSelector} from './hooks/reduxHook';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import { Provider } from 'react-redux';


let persistor = persistStore(store);
 function App ()  {
   const mode = useAppSelector((state) => state.themeReducer) as
   | "dark"
   | "light";
  

  return (
   <React.StrictMode>
       <Provider store={store}>
       <PersistGate persistor={persistor}>
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppRouter/>
    </ThemeProvider>
    </PersistGate>
       </Provider>
   
    
   </React.StrictMode> 
   
     
  )
}

export default App