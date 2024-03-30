import type { IImage } from './image.interface';

export interface IBlog {
  id: string;
  title: string;
  headerImage: IImage;
  bodyContent: string;
  author: string;
  createdAt: Date | string;
  tags: string[];
  updatedAt?: Date | string;
}
