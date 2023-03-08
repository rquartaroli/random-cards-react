import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import * as S from './styles';

export function Home() {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  function handleViewCardsInAnotherPage() {
    if(name) {
      //console.log('vai ir para outra página')
      navigate("/viewcards")
    } else {
      //console.log('não vai ir para outra página')
    }
  }

  return (
    <S.BoxContainer>
      <S.BoxContent component="form">
        <Typography gutterBottom variant='h3'>RANDOM CARDS</Typography>
        <S.TextFieldName 
          label="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button 
          variant="contained" 
          onClick={handleViewCardsInAnotherPage}
          style={{ marginTop: 16 }}
        >
          Ver Cartas
        </Button>
      </S.BoxContent>
    </S.BoxContainer>
  )
}