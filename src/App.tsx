import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { CyclesContextProvider } from "./hooks/useCyclesContext";


const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <AppRouter />
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
