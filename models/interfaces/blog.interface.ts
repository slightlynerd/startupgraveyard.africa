import type { IImage } from './image.interface';
import type { IAuthor } from './author.interface';

export interface IBlog {
  id: string;
  title: string;
  headerImage: IImage;
  bodyContent: string;
  author: IAuthor;
  createdAt: Date | string;
  tags: string[];
  updatedAt?: Date | string;
  featured?: boolean;
}
