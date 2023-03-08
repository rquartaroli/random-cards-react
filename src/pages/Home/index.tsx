import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import * as S from './styles';

export function Home() {
  const [name, setName] = useState('');
  const [validateError, setValidateError] = useState(false);

  const navigate = useNavigate();

  function handleViewCardsInAnotherPage() {
    if(name) {
      setValidateError(false)
      navigate("/viewcards/"+name)
    } else {
      setValidateError(true)
    }
  }

  return (
    <S.BoxContainer>
      <S.BoxContent component="form">
        <Typography gutterBottom variant='h3'>RANDOM CARDS</Typography>
        <S.TextFieldName 
          required
          label="Digite seu nome"
          error={validateError}
          helperText={validateError && "Necessário digitar seu nome."}
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