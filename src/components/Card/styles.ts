import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { styled } from '@mui/material/styles';

export const CardWrapper = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  backgroundColor: theme.palette.secondary.main,
}));

export const CardActionAreaBackground = styled(CardActionArea)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export const TypographyValueCard = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: 16,
  color: 'white',
  fontWeight: 700,
}));

export const TypographyTitleCard = styled(Typography)(({ theme }) => ({
  color: 'white',
}));

export const TypographySubTitleCard = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: 500,
}));