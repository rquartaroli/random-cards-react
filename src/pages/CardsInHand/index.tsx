import Button from '@mui/material/Button';

import * as S from "./styles";

export function CardsInHand() {

  function handleGetNewCard() {
    //console.log("vai pegar nova carta");
  }

  function handleShuffleCards() {
    //console.log("embaralhar cartas");
  }

  return (
    <S.BoxContainer>
      <S.BoxPlayerName>
        <S.TypographyPlayerName variant='h5'>
          Rafael
        </S.TypographyPlayerName>
      </S.BoxPlayerName>

      <S.BoxContent>
        <S.BoxButtons>
          <Button 
              variant="contained" 
              onClick={handleGetNewCard}
          >
            Pegar nova carta
          </Button>

          <Button 
            variant="contained" 
            onClick={handleShuffleCards}
          >
            Embaralhar cartas
          </Button>
        </S.BoxButtons>

        <S.BoxCards>
          <h1>Aqui serão inseridas as cartas posteriormente</h1>
        </S.BoxCards>

      </S.BoxContent>
    </S.BoxContainer>
  )
}