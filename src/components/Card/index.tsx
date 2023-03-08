import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import * as S from './styles';

type CardProps = {
  valueCard: number,
  imageCard: string,
  titleCard: string,
  descriptionCard: string,
}

export function Card({ valueCard, imageCard, titleCard, descriptionCard }: CardProps) {
  return (
    <S.CardWrapper sx={{ border: 8 }}>
      <S.CardActionAreaBackground>
        <S.TypographyValueCard variant="h5">
          {valueCard}
        </S.TypographyValueCard>
        <CardMedia
          component="img"
          height="340"
          image={imageCard}
          alt="card"
        />
        <CardContent>
          <S.TypographyTitleCard gutterBottom variant="h5">
            {titleCard}
          </S.TypographyTitleCard>
          <S.TypographySubTitleCard variant="body2" color="text.secondary">
            {descriptionCard}
          </S.TypographySubTitleCard>
        </CardContent>
      </S.CardActionAreaBackground>
    </S.CardWrapper>
  )
}