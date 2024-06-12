import { type IStartup, Category } from '@/models';

export const startups: IStartup[] = [
  {
    name: '54gene',
    shutdownDate: '2023-09',
    category: Category.Health,
    description:
      '54gene was a health technology company advancing African genomics research for improved global health outcomes.',
    newsSource:
      'https://techcabal.com/2023/09/27/54gene-shutting-down-operations',
    location: 'Nigeria 🇳🇬',
    founded: '2019',
    raised: 45000000,
    publication: 'Techcabal'
  },
  {
    name: 'WhereIsMyTransport',
    shutdownDate: '2023-10',
    category: Category.Transportation,
    description:
      'WhereIsMyTransport mapped formal and informal public transport networks and used the data to improve the public transport experience',
    newsSource:
      'https://techcabal.com/2023/10/26/whereismytransport-shutting-down',
    location: 'South Africa 🇿🇦',
    founded: '2016',
    raised: 27000000,
    publication: 'Techcabal'
  },
  {
    name: 'Dash',
    shutdownDate: '2023-10',
    category: Category.Fintech,
    description:
      'Dash was set up to make financial transactions across mobile money and traditional bank accounts for consumer and businesses very easy.',
    newsSource:
      'https://innovation-village.com/the-end-of-a-vision-ghanaian-startup-dash-shuts-down-after-raising-86-million-in-5-years',
    location: 'Ghana 🇬🇭',
    founded: '2019',
    raised: 86100000,
    publication: 'Innovation Village'
  },
  {
    name: 'Sendy',
    shutdownDate: '2023-08',
    category: Category.Logistics,
    description:
      'Sendy offered a logistics platform to make delivery processes simple, transparent, and secure.',
    newsSource:
      'https://innovation-village.com/kenyas-logistics-startup-sendy-is-shutting-down',
    location: 'Kenya 🇰🇪',
    founded: '2015',
    raised: 26500000,
    publication: 'Innovation Village'
  },
  {
    name: 'Vibra',
    shutdownDate: '2023-10',
    category: Category.Blockchain,
    description:
      'Vibra set out to drive the mass adoption of digital assets and blockchain technologies in Africa.',
    newsSource:
      'https://techcabal.com/2023/10/17/exclusive-dragonfly-capital-backed-web3-app-vibra-shuts-down-in-nigeria',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: 6000000,
    publication: 'Techcabal'
  },
  {
    name: 'Pivo',
    shutdownDate: '2023-12',
    category: Category.Fintech,
    description:
      'Pivo offered banking services to small logistics and haulage businesses in Nigeria’s supply chain sector',
    newsSource: 'https://techcabal.com/2023/12/05/pivo-is-shutting-down',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: 2600000,
    publication: 'Techcabal'
  },
  {
    name: 'Bundle Africa',
    shutdownDate: '2023-07',
    category: Category.Blockchain,
    description:
      'Bundle Africa was a social payments app for cash and cryptocurrency.',
    newsSource: 'https://techpoint.africa/2023/07/21/bundle-africa-shutdown',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: 450000,
    publication: 'Techpoint'
  },
  {
    name: 'KippaPay (The Product)',
    shutdownDate: '2023-10',
    category: Category.Fintech,
    description:
      'KippaPay allowed merchants to receive money from customers, pay relevant bills, move money around and optimize their businesses.',
    newsSource:
      'https://techcabal.com/2023/10/19/exclusive-kippa-lays-off-40-employees-as-it-shelves-kippa-pay',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: 8400000,
    publication: 'Techcabal'
  },
  {
    name: 'Lazerpay',
    shutdownDate: '2023-04',
    category: Category.Blockchain,
    description:
      'Lazerpay was a blockchain-based payment gateway that allowed businesses to accept payments in cryptocurrencies like Bitcoin, Ethereum, and Litecoin.',
    newsSource: 'https://techpoint.africa/2023/04/13/lazerpay-shuts-down',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: 1100000,
    publication: 'Techpoint'
  },
  {
    name: 'Zumi',
    shutdownDate: '2023-03',
    category: Category.Ecommerce,
    description:
      'Zumi was a B2B e-commerce company that empowers retailers and suppliers, especially in the apparel business.',
    newsSource:
      'https://techcabal.com/2023/03/20/zumi-shuts-down-again-letting-go-of-150-employees',
    location: 'Kenya 🇰🇪',
    founded: '2016',
    raised: 970000,
    publication: 'Techcabal'
  },
  {
    name: 'Hytch',
    shutdownDate: '2023-02',
    category: Category.Logistics,
    description:
      'Hytch wanted to help small businesses fulfil their orders nationwide and, soon, internationally',
    newsSource: 'https://www.benjamindada.com/hytch-shutdown-nigeria',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: 150000,
    publication: 'Benjamindada'
  },
  {
    name: 'Kloud Commerce',
    shutdownDate: '2022-10',
    category: Category.Ecommerce,
    description:
      'Kloud Commerce was a direct-to-consumer (D2C) that helps brands sell and build relationships directly with African consumers.',
    newsSource: 'https://weetracker.com/2022/10/20/kloud-commerce-shuts-down',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: 765000,
    publication: 'Weetracker'
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
    raised: 1000000,
    publication: 'Techcrunch'
  },
  {
    name: 'WeFarm Shop',
    shutdownDate: '2022-07',
    category: Category.Agriculture,
    description:
      'WeFarm Shop was an app that was developed by the company to help farmers acquire agricultural products online as well as share reviews and advice among each other.',
    newsSource:
      'https://cioafrica.co/agritech-start-up-wefarm-shop-closes-down',
    location: 'Kenya 🇰🇪, Uganda 🇺🇬, Tanzania 🇹🇿',
    founded: '2014',
    raised: 32000000,
    publication: 'CIO Africa'
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
    raised: 350000,
    publication: 'Business Daily Africa'
  },
  {
    name: 'Zazuu',
    shutdownDate: '2023-11',
    category: Category.Fintech,
    description:
      'Zazuu provided a fintech marketplace for cross-border payment networks in Africa',
    newsSource: 'https://techcabal.com/2023/11/18/zazuu-shut-down',
    location: 'Africa 🌍',
    founded: '2018',
    raised: 2000000,
    publication: 'Techcabal'
  },
  {
    name: 'Okadabooks',
    shutdownDate: '2023-11',
    category: Category.Media,
    description:
      'Okadabooks aimed to simplify book distribution and sales in Nigeria.',
    newsSource:
      'https://businessday.ng/technology/article/okadabooks-to-shut-online-book-store-over-insurmountable-challenges',
    location: 'Nigeria 🇳🇬',
    founded: '2013',
    raised: undefined,
    publication: 'Business Day'
  },
  {
    name: 'Pillow',
    shutdownDate: '2023-07',
    category: Category.Blockchain,
    description:
      'Pillow was a crypto platform that allowed users to save, spend and invest in cryptocurrencies.',
    newsSource:
      'https://techcabal.com/2023/06/22/one-year-after-expanding-to-nigeria-crypto-platform-pillow-is-exiting-the-country',
    location: 'Nigeria 🇳🇬, Ghana 🇬🇭',
    founded: '2022',
    raised: 21000000,
    publication: 'Techcabal'
  },
  {
    name: 'Snapt',
    shutdownDate: '2022-10',
    category: Category.Other,
    description:
      'Snapt was a provider of software-based load balancers and application delivery controllers',
    newsSource:
      'https://disrupt-africa.com/2022/10/14/sa-software-startup-snapt-closes-its-doors',
    location: 'South Africa 🇿🇦',
    founded: '2012',
    raised: 7650000,
    publication: 'Disrupt Africa'
  },
  {
    name: 'Wabona',
    shutdownDate: '2015-08',
    category: Category.Entertainment,
    description:
      'Wabona was an online subscription video streaming service showcasing African film and television shows',
    newsSource: 'https://disrupt-africa.com/2015/08/05/wabona-shuts-down',
    location: 'South Africa 🇿🇦',
    founded: '2012',
    raised: undefined,
    publication: 'Disrupt Africa'
  },
  {
    name: 'OyaPay',
    shutdownDate: '2019-02',
    category: Category.Fintech,
    description:
      'OyaPay tried to ensure that offline businesses could accept payment and take forward orders from their customers with or without a smartphone.',
    newsSource: 'https://techpoint.africa/2019/02/19/oyapay-has-shutdown',
    location: 'Nigeria 🇳🇬',
    founded: '2017',
    raised: undefined,
    publication: 'Techpoint'
  },
  {
    name: 'Mxit',
    shutdownDate: '2021-10',
    category: Category.Other,
    description:
      'Mxit was a free instant messaging application developed by Mxit (Pty) Ltd. in South Africa that ran on over 8,000 devices of various operating systems.',
    newsSource:
      'https://www.itnewsafrica.com/2021/10/what-happened-to-mxit-sas-own-super-popular-chat-app',
    location: 'South Africa 🇿🇦',
    founded: '2005',
    raised: undefined,
    publication: 'IT News Africa'
  },
  {
    name: 'DealDey',
    shutdownDate: '2019-01',
    category: Category.Ecommerce,
    description:
      'DealDey was a Nigerian ecommerce website that aggregates discounted goods and services.',
    newsSource:
      'https://www.itnewsafrica.com/2019/01/nigerian-e-commerce-platform-dealdey-shuts-down',
    location: 'Nigeria 🇳🇬',
    founded: '2011',
    raised: 6000000,
    publication: 'IT News Africa'
  },
  {
    name: 'Showroom.ng',
    shutdownDate: '2016-08',
    category: Category.Ecommerce,
    description: 'Showroom.ng was an online furniture marketplace.',
    newsSource:
      'https://disrupt-africa.com/2016/08/25/nigerian-furniture-marketplace-showroom-ng-to-close',
    location: 'Nigeria 🇳🇬',
    founded: '2014',
    raised: undefined,
    publication: 'Disrupt Africa'
  },
  {
    name: 'ConnectMed',
    shutdownDate: '2016-08',
    category: Category.Health,
    description:
      'ConnectMed allowed patients to access consultations with medical professionals via video link.',
    newsSource:
      'https://disrupt-africa.com/2019/04/05/kenyan-e-health-startup-connectmed-acquired-by-merck',
    location: 'Kenya 🇰🇪, South Africa 🇿🇦',
    founded: '2017',
    raised: 250000,
    publication: 'Disrupt Africa'
  },
  {
    name: 'Redbird',
    shutdownDate: '2023-02',
    category: Category.Health,
    description:
      'Redbird was a health startup that partnered with pharmacies and licensed chemical shops to bring proven rapid test technology for chronic and acute conditions.',
    newsSource:
      'https://www.linkedin.com/feed/update/urn:li:activity:7036373198296240128',
    location: 'Ghana 🇬🇭',
    founded: '2018',
    raised: 2500000,
    publication: 'LinkedIn'
  },
  {
    name: 'Afrostream',
    shutdownDate: '2017-09',
    category: Category.Entertainment,
    description:
      'Afrostream was a subscription video on demand (SVOD) that provides millions of fans with unlimited access to Afro-American and African movies.',
    newsSource: '/blog/case-study-lessons-from-the-downfall-of-afrostream',
    location: 'Africa 🌍',
    founded: '2014',
    raised: undefined,
    publication: 'Startup Graveyard'
  },
  {
    name: 'Bkam',
    shutdownDate: '2016-02',
    category: Category.Entertainment,
    description:
      'Bkam was a price comparison websites of the region that helped users find the best deals on products.',
    newsSource: 'https://www.menabytes.com/failed-startups-bkam',
    location: 'Egypt 🇪🇬',
    founded: '2012',
    raised: 500000,
    publication: 'Menabytes'
  },
  {
    name: 'Ousta',
    shutdownDate: '2017-01',
    category: Category.Transportation,
    description: 'Ousta was a ride sharing app that operatedin Egypt.',
    newsSource: 'https://www.menabytes.com/failed-startups-bkam',
    location: 'Egypt 🇪🇬',
    founded: '2012',
    raised: 1600000,
    publication: 'Menabytes'
  },
  {
    name: 'Zoto',
    shutdownDate: '2018-08',
    category: Category.Fintech,
    description: 'Zoto was a mobile recharge and payments solution platform.',
    newsSource: 'https://techpoint.africa/2018/08/20/zoto-shut-down',
    location: 'Nigeria 🇳🇬',
    founded: '2015',
    raised: undefined,
    publication: 'Techpoint'
  },
  {
    name: 'Jumia Food',
    shutdownDate: '2023-12',
    category: Category.FoodTech,
    description:
      'Jumia Food was a food delivery service of the e-commerce company, Jumia Technologies.',
    newsSource:
      'https://techpoint.africa/2023/12/14/jumia-food-shutdown-nigeria-2023',
    location: 'Africa 🌍',
    founded: '2013',
    raised: undefined,
    publication: 'Techpoint'
  },
  {
    name: 'Cova',
    shutdownDate: '2024-01',
    category: Category.Finance,
    description:
      'Cova was a Nigerian wealthtech startup that enables users to track their assets in one place.',
    newsSource:
      '/blog/case-study-covas-unfulfilled-promise-of-all-in-one-wealth-management',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: 800000,
    publication: 'Startup Graveyard'
  },
  {
    name: 'LetsChat',
    shutdownDate: '2024-03',
    category: Category.Entertainment,
    description:
      'LetsChat was designed for young African users to compete with bigger rivals WhatsApp and Telegram.',
    newsSource:
      '/blog/case-study-letschats-stumble-in-africas-messaging-market',
    location: 'Africa 🌍',
    founded: '2021',
    raised: undefined,
    publication: 'Startup Graveyard'
  },
  {
    name: 'Thepeer',
    shutdownDate: '2024-04',
    category: Category.Fintech,
    description:
      'Thepeer was a Nigeria-based API startup that hoped to power infrastructure for mainly fintech businesses, from small to medium-sized.',
    newsSource: '/blog/thepeer-failed-for-one-simple-reason-a-case-study',
    location: 'Nigeria 🇳🇬',
    founded: '2021',
    raised: 2300000,
    publication: 'Startup Graveyard'
  },
  {
    name: 'RejaReja',
    shutdownDate: '2024-04',
    category: Category.Ecommerce,
    description:
      'RejaReja was a Kenyan e-commerce platform that allowed users to buy and sell goods and services.',
    newsSource: '/blog/case-study-why-marketforce-shut-down-rejareja',
    location: 'Kenya 🇰🇪',
    founded: '2020',
    raised: undefined,
    publication: 'Techcabal'
  },
  {
    name: 'Mocality',
    shutdownDate: '2013-02',
    category: Category.Other,
    description:
      'Mocality was a business directory and marketing platform that allowed users to easily and conveniently locate businesses in their area.',
    newsSource:
      'https://www.businessdailyafrica.com/bd/corporate/technology/mocality-set-to-shut-down-2025346',
    location: 'Kenya 🇰🇪, Nigeria 🇳🇬',
    founded: '2009',
    raised: undefined,
    publication: 'Business Daily Africa'
  },
  {
    name: 'HerRyde',
    shutdownDate: '2024-05',
    category: Category.Transportation,
    description: 'HerRyde was a ride-hailing service for women in Nigeria, launched in response to safety concerns experienced impacting women.',
    newsSource: 'https://www.benjamindada.com/herryde-hibernates-women-nigeria-ride-hailing/',
    location: 'Nigeria 🇳🇬',
    founded: '2022',
    raised: undefined,
    publication: 'Benjamindada',
    note: 'The startup put out a statement that they “hibernated” to re-strategise and source for funding ahead of a near re-launch. No date was given yet for the re-launch.'
  },
  {
    name: 'TiketMobile',
    shutdownDate: '2016-01',
    category: Category.Transportation,
    description: 'TiketMobile was a mobile ticketing system that let people easily find and buy bus tickets from their mobile device.',
    newsSource: 'https://techcabal.com/2015/03/13/tiketmobile-rises-dead-naturally-questions/',
    location: 'Nigeria 🇳🇬',
    founded: '2013',
    raised: 5000,
    publication: 'Techcabal',
    note: 'The website appears to be non-functional and the social media accounts have been inactive since 2016.'
  },
  {
    name: 'Easy Taxi',
    shutdownDate: '2016-04',
    category: Category.Transportation,
    description: 'Easy Taxi was a ride-hailing service that operated to connect taxi drivers and passengers in the best possible way.',
    newsSource: 'https://techpoint.africa/2016/04/20/easy-taxi-is-exiting-african-market/',
    location: 'Nigeria 🇳🇬',
    founded: '2011',
    raised: undefined,
    publication: 'Techpoint',
    note: 'Startup only exited the African market but still operates in Latin America'
  },
  {
    name: 'Legwork',
    shutdownDate: '2013-05',
    category: Category.Other,
    description: 'Legwork was a social network that allowed users to share their thoughts, photos, and videos with friends and family.',
    newsSource: 'https://www.nairaland.com/6821797/why-did-legwork.com.ng-die-untimely',
    location: 'Nigeria 🇳🇬',
    founded: '2007',
    raised: undefined,
    publication: 'Nairaland'
  },
  {
    name: 'Tress',
    shutdownDate: '2019-09',
    category: Category.Other,
    description: 'Tress was a mobile app for black women to find hairstyle inspiration.',
    newsSource: 'https://techpoint.africa/2019/09/05/did-mest-portfolio-startup-tress-literally-stop-caring-about-black-womens-hair/',
    location: 'Ghana 🇬🇭',
    founded: '2014',
    raised: 120000,
    publication: 'Techpoint'
  },
  {
    name: 'Gro Intelligence',
    shutdownDate: '2024-05',
    category: Category.Agriculture,
    description: 'Gro Intelligence was an agricultural insights platform that provided data and analytics to help farmers make informed decisions.',
    newsSource: 'https://agfundernews.com/breaking-ag-insights-platform-gro-intelligence-is-closing-down',
    location: 'Kenya 🇰🇪',
    founded: '2012',
    raised: 117600000,
    publication: 'AGFunder News'
  },
  {
    name: 'iProcure',
    shutdownDate: '2024-04',
    category: Category.Agriculture,
    description: 'iProcure was a B2B agritech startup that provided farmers with access to quality inputs and services.',
    newsSource: 'https://techpoint.africa/2024/05/09/kenyan-agritech-iprocure-files-bankruptcy/',
    location: 'Kenya 🇰🇪',
    founded: '2012',
    raised: 17200000,
    publication: 'Techpoint',
    note: 'The company filed for bankruptcy in April 2024'
  },
  {
    name: 'Copia Kenya',
    shutdownDate: '2024-05',
    category: Category.Ecommerce,
    description: 'Copia was a mobile commerce platform that connected retailers and suppliers to consumers in rural Kenya.',
    newsSource: 'https://techcabal.com/2024/05/24/copia-enters-into-administration-after-failing-to-secure-funding/',
    location: 'Kenya 🇰🇪',
    founded: '2013',
    raised: 123000000,
    publication: 'Techcabal',
    note: 'The company entered into administration after failing to secure funding'
  },
  {
    name: 'WeJapa',
    shutdownDate: '2021-03',
    category: Category.Other,
    description: 'WeJapa was a talent marketplace that connected African software engineers with global companies.',
    newsSource: 'https://technext24.com/2020/10/20/update-investigators-find-former-wejapa-ceo-favour-ori-guilty-of-high-handedness/',
    location: 'Nigeria 🇳🇬',
    founded: '2019',
    raised: 50000,
    publication: 'Technext24',
    note: 'It is unclear when the company shut down as there was no official announcement but the website is no longer functional.'
  },
  {
    name: 'BuyCoins Pro',
    shutdownDate: '2024-01',
    category: Category.Blockchain,
    description: 'BuyCoins Pro was a cryptocurrency trading platform that allowed users to buy and sell cryptocurrencies.',
    newsSource: 'https://www.mariblock.com/helicarrier-shuts-crypto-trading-platform-buycoins-pro/',
    location: 'Nigeria 🇳🇬',
    founded: '2017',
    raised: 50000,
    publication: 'Mariblock'
  }
];
