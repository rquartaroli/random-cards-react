import { ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../src/styles/global.css';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}

export default App
