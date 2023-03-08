import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const BoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

export const BoxContent = styled(Box)(({ theme }) => ({
  width: '30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const TextFieldName = styled(TextField)(({ theme }) => ({
  width: '100%',
  '> label': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));
