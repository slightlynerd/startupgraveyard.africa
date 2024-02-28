import { startups } from './startups';
import { Category, ICategory } from '@/models';

export const categories: ICategory[] = [
  { name: Category.All, count: startups.length },
  {
    name: Category.Fintech,
    count:
      startups.filter(item => item.category === Category.Fintech)?.length || 0
  },
  {
    name: Category.Ecommerce,
    count:
      startups.filter(item => item.category === Category.Ecommerce)?.length || 0
  },
  {
    name: Category.Logistics,
    count:
      startups.filter(item => item.category === Category.Logistics)?.length || 0
  },
  {
    name: Category.Health,
    count:
      startups.filter(item => item.category === Category.Health)?.length || 0
  },
  {
    name: Category.Education,
    count:
      startups.filter(item => item.category === Category.Education)?.length || 0
  },
  {
    name: Category.Agriculture,
    count:
      startups.filter(item => item.category === Category.Agriculture)?.length ||
      0
  },
  {
    name: Category.RealEstate,
    count:
      startups.filter(item => item.category === Category.RealEstate)?.length ||
      0
  },
  {
    name: Category.Transportation,
    count:
      startups.filter(item => item.category === Category.Transportation)
        ?.length || 0
  },
  {
    name: Category.Travel,
    count:
      startups.filter(item => item.category === Category.Travel)?.length || 0
  },
  {
    name: Category.Media,
    count:
      startups.filter(item => item.category === Category.Media)?.length || 0
  },
  {
    name: Category.Entertainment,
    count:
      startups.filter(item => item.category === Category.Entertainment)
        ?.length || 0
  },
  {
    name: Category.Energy,
    count:
      startups.filter(item => item.category === Category.Energy)?.length || 0
  },
  {
    name: Category.Security,
    count:
      startups.filter(item => item.category === Category.Security)?.length || 0
  },
  {
    name: Category.HR,
    count: startups.filter(item => item.category === Category.HR)?.length || 0
  },
  {
    name: Category.Manufacturing,
    count:
      startups.filter(item => item.category === Category.Manufacturing)
        ?.length || 0
  },
  {
    name: Category.Blockchain,
    count:
      startups.filter(item => item.category === Category.Blockchain)?.length ||
      0
  },
  {
    name: Category.FoodTech,
    count:
      startups.filter(item => item.category === Category.FoodTech)?.length || 0
  },
  {
    name: Category.Other,
    count:
      startups.filter(item => item.category === Category.Other)?.length || 0
  }
];
