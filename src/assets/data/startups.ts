import { IStartup, Category } from '@/models';

export const startups: IStartup[] = [
  {
    name: '54gene',
    shutdownDate: '2023-09',
    category: Category.Health,
    description:
      '54gene was a health technology company advancing African genomics research for improved global health outcomes.',
    newsSource:
      'https://techcabal.com/2023/09/27/54gene-shutting-down-operations/',
    location: 'Nigeria 🇳🇬',
    founded: '2019',
    raised: '$45 million'
  },
  {
    name: 'WhereIsMyTransport',
    shutdownDate: '2023-10',
    category: Category.Transportation,
    description:
      'WhereIsMyTransport mapped formal and informal public transport networks and used the data to improve the public transport experience',
    newsSource:
      'https://techcabal.com/2023/10/26/whereismytransport-shutting-down/',
    location: 'South Africa 🇿🇦',
    founded: '2016',
    raised: '$27 million'
  },
  {
    name: 'Dash',
    shutdownDate: '2023-10',
    category: Category.Fintech,
    description:
      'Dash was set up to make financial transactions across mobile money and traditional bank accounts for consumer and businesses very easy.',
    newsSource:
      'https://innovation-village.com/the-end-of-a-vision-ghanaian-startup-dash-shuts-down-after-raising-86-million-in-5-years/',
    location: 'Ghana 🇬🇭',
    founded: '2019',
    raised: '$86.1 million'
  },
  {
    name: 'Sendy',
    shutdownDate: '2023-08',
    category: Category.Logistics,
    description:
      'Sendy offered a logistics platform to make delivery processes simple, transparent, and secure.',
    newsSource:
      'https://innovation-village.com/kenyas-logistics-startup-sendy-is-shutting-down/',
    location: 'Kenya 🇰🇪',
    founded: '2015',
    raised: '$26.5 million'
  },
  {
    name: 'Vibra',
    shutdownDate: '2023-10',
    category: Category.Blockchain,
    description:
      'Vibra set out to drive the mass adoption of digital assets and blockchain technologies in Africa.',
    newsSource:
      'https://techcabal.com/2023/10/17/exclusive-dragonfly-capital-backed-web3-app-vibra-shuts-down-in-nigeria/',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: '$6 million'
  },
  {
    name: 'Pivo',
    shutdownDate: '2023-12',
    category: Category.Fintech,
    description:
      'Pivo offered banking services to small logistics and haulage businesses in Nigeria’s supply chain sector',
    newsSource: 'https://techcabal.com/2023/12/05/pivo-is-shutting-down/',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: '$2.6 million'
  },
  {
    name: 'Bundle Africa',
    shutdownDate: '2023-07',
    category: Category.Blockchain,
    description:
      'Bundle Africa was a social payments app for cash and cryptocurrency.',
    newsSource: 'https://techpoint.africa/2023/07/21/bundle-africa-shutdown/',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: '$450K'
  },
  {
    name: 'Kippa',
    shutdownDate: '2023-10',
    category: Category.Fintech,
    description:
      'Kippa was a finance management app where small business owners can track their daily income/expenses, create invoices and receipts, manage inventory and monitor how their businesses perform over time.',
    newsSource:
      'https://techcabal.com/2023/10/19/exclusive-kippa-lays-off-40-employees-as-it-shelves-kippa-pay/',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: '$11.6 million'
  },
  {
    name: 'Lazerpay',
    shutdownDate: '2023-04',
    category: Category.Blockchain,
    description:
      'Lazerpay was a blockchain-based payment gateway that allowed businesses to accept payments in cryptocurrencies like Bitcoin, Ethereum, and Litecoin.',
    newsSource: 'https://techpoint.africa/2023/04/13/lazerpay-shuts-down/',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: '$1.1 million'
  },
  {
    name: 'Zumi',
    shutdownDate: '2023-03',
    category: Category.Ecommerce,
    description:
      'Zumi was a B2B e-commerce company that empowers retailers and suppliers, especially in the apparel business.',
    newsSource:
      'https://techcabal.com/2023/03/20/zumi-shuts-down-again-letting-go-of-150-employees/',
    location: 'Kenya 🇰🇪',
    founded: '2016',
    raised: '$970K'
  },
  {
    name: 'Hytch',
    shutdownDate: '2023-02',
    category: Category.Logistics,
    description:
      'Hytch wanted to help small businesses fulfil their orders nationwide and, soon, internationally',
    newsSource: 'https://www.benjamindada.com/hytch-shutdown-nigeria/',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: '$150K'
  },
  {
    name: 'Kloud Commerce',
    shutdownDate: '2022-10',
    category: Category.Ecommerce,
    description:
      'Kloud Commerce was a direct-to-consumer (D2C) that helps brands sell and build relationships directly with African consumers.',
    newsSource: 'https://weetracker.com/2022/10/20/kloud-commerce-shuts-down/',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: '$765K'
  },
  {
    name: 'Kune Food',
    shutdownDate: '2021-06',
    category: Category.FoodTech,
    description:
      'Kune Food was a food tech startup that delivered ready-to-eat meals at affordable prices',
    newsSource: 'https://tcrn.ch/3bdAohj',
    location: 'Kenya 🇰🇪',
    founded: '2020',
    raised: '$1 million'
  },
  {
    name: 'WeFarm Shop',
    shutdownDate: '2022-07',
    category: Category.Agriculture,
    description:
      'WeFarm Shop was an app that was developed by the company to help farmers acquire agricultural products online as well as share reviews and advice among each other',
    newsSource:
      'https://cioafrica.co/agritech-start-up-wefarm-shop-closes-down/',
    location: 'Kenya 🇰🇪, Uganda 🇺🇬, Tanzania 🇹🇿',
    founded: '2014',
    raised: '$32 million'
  },
  {
    name: 'Notify Logistics',
    shutdownDate: '2022-09',
    category: Category.Logistics,
    description:
      'Notify Logistics was built on leasing space and then renting it out to many small enterprises that were unable to afford a physical outlet on their own',
    newsSource:
      'https://www.businessdailyafrica.com/bd/corporate/companies/startup-notify-logistics-shuts-down-on-high-costs-3932882',
    location: 'Kenya 🇰🇪',
    founded: '2018',
    raised: 'KES 45 million'
  },
  {
    name: 'Zazuu',
    shutdownDate: '2023-11',
    category: Category.Fintech,
    description:
      'Zazuu provided a fintech marketplace for cross-border payment networks in Africa',
    newsSource: 'https://techcabal.com/2023/11/18/zazuu-shut-down/',
    location: 'Africa 🌍',
    founded: '2018',
    raised: '$2 million'
  },
  {
    name: 'Okadabook',
    shutdownDate: '2023-11',
    category: Category.Media,
    description:
      'Okadabook aimed to simplify book distribution and sales in Nigeria.',
    newsSource:
      'https://businessday.ng/technology/article/okadabooks-to-shut-online-book-store-over-insurmountable-challenges/',
    location: 'Nigeria 🇳🇬',
    founded: '2013',
    raised: '$1.2 million'
  },
  {
    name: 'Pillow',
    shutdownDate: '2023-07',
    category: Category.Blockchain,
    description:
      'Pillow was a crypto platform that allowed users to save, spend and invest in cryptocurrencies.',
    newsSource:
      'https://techcabal.com/2023/06/22/one-year-after-expanding-to-nigeria-crypto-platform-pillow-is-exiting-the-country/',
    location: 'Nigeria 🇳🇬, Ghana 🇬🇭',
    founded: '2022',
    raised: '$21 million'
  }
  // {
  //   name: 'Pillow',
  //   shutdownDate: '2023-07',
  //   category: Category.Blockchain,
  //   description:
  //     'Pillow was a crypto platform that allowed users to save, spend and invest in cryptocurrencies.',
  //   newsSource:
  //     'https://techcabal.com/2023/06/22/one-year-after-expanding-to-nigeria-crypto-platform-pillow-is-exiting-the-country/',
  //   location: 'Nigeria 🇳🇬, Ghana 🇬🇭',
  //   founded: '2022',
  //   raised: '$21 million'
  // }
];
