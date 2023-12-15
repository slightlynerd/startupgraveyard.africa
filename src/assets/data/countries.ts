import { startups } from './startups';
import { Country, ICountry } from '@/models';

export const countries: ICountry[] = [
  {
    name: Country.All,
    count: startups.length
  },
  {
    name: Country.Nigeria,
    count:
      startups.filter(item => item.location.includes(Country.Nigeria))
        ?.length || 0
  },
  {
    name: Country.SouthAfrica,
    count:
      startups.filter(item => item.location.includes(Country.SouthAfrica))
        ?.length || 0
  },
  {
    name: Country.Ghana,
    count:
      startups.filter(item => item.location.includes(Country.Ghana))?.length ||
      0
  },
  {
    name: Country.Kenya,
    count:
      startups.filter(item => item.location.includes(Country.Kenya))?.length ||
      0
  },
  {
    name: Country.Uganda,
    count:
      startups.filter(item => item.location.includes(Country.Uganda))?.length ||
      0
  },
  {
    name: Country.Tanzania,
    count:
      startups.filter(item => item.location.includes(Country.Tanzania))
        ?.length || 0
  },
  {
    name: Country.Egypt,
    count:
      startups.filter(item => item.location.includes(Country.Egypt))?.length ||
      0
  }
];
