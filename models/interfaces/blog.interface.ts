export interface IBlog {
  id: string;
  title: string;
  bodyContent: string;
  author: string;
  createdAt: Date | string;
  tags: string[];
  updatedAt?: Date | string;
}
