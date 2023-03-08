export type CardsAPIDTO = {
  id: number;
  name: string;
  desc: string;
  card_images: {
    image_url_cropped: string;
  }[];
  points: number;
}