import Button from '@mui/material/Button';
import { Card } from '../../components/Card';

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
          <Card 
            valueCard={10}
            imageCard="https://avatars.githubusercontent.com/u/48213007?v=4"
            titleCard="Rafael"
            descriptionCard="Desenvolvedor topzera em busca de uma oportunidade para mostrar todo o potencial"
          />
        </S.BoxCards>

      </S.BoxContent>
    </S.BoxContainer>
  )
}