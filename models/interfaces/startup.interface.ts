export interface IStartup {
  name: string;
  shutdownDate: string;
  category: string;
  description: string;
  newsSource: string;
  location: string;
  founded: string;
  raised?: number;
  publication: string;
  note?: string;
}
