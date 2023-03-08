import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { Card } from '../../components/Card';
import { CardsAPIDTO } from '../../DTOs/CardsAPIDTO';
import api from '../../services/api';
import { shuffleCards } from '../../utils/shuffleCardFunction';

import * as S from "./styles";

const LIMIT_NEW_CARD = 3;
let QUANTITY_NEW_CARD_GETED = 0;

export function CardsInHand() {
  const [deckOfCards, setDeckOfCards] = useState<CardsAPIDTO[]>([]);
  const [cardsSelected, setCardsSelected] = useState<CardsAPIDTO[]>([]);
  const [limitNewCard, setLimitNewCard] = useState(false);
  const [playerName, setPlayerName] = useState("");

  let { name } = useParams();

  function handleGetNewCard() {
    if(QUANTITY_NEW_CARD_GETED < LIMIT_NEW_CARD) {
      let difference = deckOfCards.filter(cardRemaining => !cardsSelected.includes(cardRemaining))

      const cardRandomSelected = Math.floor(Math.random() * difference.length);

      const cardRemainingRandom = difference.splice(cardRandomSelected,1);

      setCardsSelected([...cardsSelected, cardRemainingRandom[0]]);
      QUANTITY_NEW_CARD_GETED++;

      if(QUANTITY_NEW_CARD_GETED === 3) {
        setLimitNewCard(true)
      }
    }
  }

  function handleShuffleCards() {
    shuffleCards(cardsSelected)
    setCardsSelected([...cardsSelected])
  }

  useEffect(() => {
    let count = 0;
    let copyDeck: CardsAPIDTO[] = [];
    setPlayerName(name!)

    async function loadingCards() {
      const response = await api.get('/cardinfo.php?language=pt&num=10&offset=0&sort=ID')

      const arrayCardsSelecteds = response.data

      const cardsSelectedFormated = arrayCardsSelecteds.data.map((cardInfo: CardsAPIDTO, index: number) => (
        {
          id: cardInfo.id,
          name: cardInfo.name,
          desc: cardInfo.desc,
          card_images: cardInfo.card_images,
          points: (index + 1),
        } as CardsAPIDTO
      ))

      setDeckOfCards(cardsSelectedFormated)

      shuffleCards(cardsSelectedFormated)

      while(count < 5) {
        copyDeck.push(cardsSelectedFormated[count])
        count++;
      }
      setCardsSelected(copyDeck)
    }

    loadingCards();

  }, [])

  return (
    <S.BoxContainer>
      <S.BoxPlayerName>
        <S.TypographyPlayerName variant='h5'>
          {playerName}
        </S.TypographyPlayerName>
      </S.BoxPlayerName>

      <S.BoxContent>
        <S.BoxButtons>
          <Button 
              variant="contained" 
              onClick={handleGetNewCard}
              disabled={limitNewCard}
          >
            {limitNewCard ? 'Atingiu o limite de novas cartas' : 'Pegar nova carta'}
          </Button>

          <Button 
            variant="contained" 
            onClick={handleShuffleCards}
          >
            Embaralhar cartas
          </Button>
        </S.BoxButtons>

        <S.BoxCards>
          {cardsSelected.map((card) => 
            <Card 
              key={card.id}
              valueCard={card.points}
              imageCard={card.card_images[0].image_url_cropped}
              titleCard={card.name}
              descriptionCard={card.desc}
            />
          )}
        </S.BoxCards>

      </S.BoxContent>
    </S.BoxContainer>
  )
}