import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const BoxContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4),
}));

export const BoxPlayerName = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
}));

export const BoxContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const TypographyPlayerName = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: 700,
}));

export const BoxButtons = styled(Box)(({ theme }) => ({
  width: '45%',
  height: 32,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
  marginBottom: theme.spacing(4),
}));

export const BoxCards = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gap: 16,
  paddingBottom: theme.spacing(4),

  '@media (max-width: 1120px)': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
  '@media (max-width: 1080px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  '@media (max-width: 860px)': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@media (max-width: 645px)': {
    gridTemplateColumns: '1fr',
  }
}));