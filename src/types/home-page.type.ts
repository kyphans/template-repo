export interface IHomePage {
  slogan: string | null;
  description: string | null;
  book_btn: string | null;
  carousel: Carousel[] | null;
}

export type Carousel = {
  label: string;
  imageUrl: string;
};