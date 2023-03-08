import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom"

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../src/styles/global.css';
import { theme } from './styles/theme';
import { Router } from './routes/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
