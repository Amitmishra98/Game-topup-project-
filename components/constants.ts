import { Game } from '../types';

export const GAMES: Game[] = [
  {
    id: 'freefire',
    name: 'Free Fire',
    publisher: 'Garena',
    currencyName: 'Diamonds',
    image: 'https://picsum.photos/seed/freefire/400/400',
    coverImage: 'https://picsum.photos/seed/freefire-cover/1200/400',
    description: 'Free Fire is the ultimate survival shooter game available on mobile. Each 10-minute game places you on a remote island where you are pit against 49 other players, all seeking survival.',
    inputLabel: 'Player ID',
    placeholder: 'Enter your Player ID (e.g., 123456789)',
    packages: [
      { id: 'ff_100', amount: 100, bonus: 0, price: 0.99, currency: 'USD' },
      { id: 'ff_310', amount: 310, bonus: 31, price: 2.99, currency: 'USD', popular: true },
      { id: 'ff_520', amount: 520, bonus: 52, price: 4.99, currency: 'USD' },
      { id: 'ff_1060', amount: 1060, bonus: 106, price: 9.99, currency: 'USD' },
      { id: 'ff_2180', amount: 2180, bonus: 218, price: 19.99, currency: 'USD' },
      { id: 'ff_5600', amount: 5600, bonus: 560, price: 49.99, currency: 'USD' },
    ]
  },
  {
    id: 'pubg',
    name: 'PUBG Mobile',
    publisher: 'Tencent Games',
    currencyName: 'UC',
    image: 'https://picsum.photos/seed/pubg/400/400',
    coverImage: 'https://picsum.photos/seed/pubg-cover/1200/400',
    description: 'PUBG MOBILE delivers the most intense free-to-play multiplayer action on mobile. Drop in, gear up, and compete. Survive epic 100-player classic battles.',
    inputLabel: 'Character ID',
    placeholder: 'Enter your Character ID (e.g., 5123456789)',
    packages: [
      { id: 'pubg_60', amount: 60, bonus: 0, price: 0.99, currency: 'USD' },
      { id: 'pubg_300', amount: 300, bonus: 25, price: 4.99, currency: 'USD' },
      { id: 'pubg_600', amount: 600, bonus: 60, price: 9.99, currency: 'USD', popular: true },
      { id: 'pubg_1500', amount: 1500, bonus: 300, price: 24.99, currency: 'USD' },
      { id: 'pubg_3000', amount: 3000, bonus: 850, price: 49.99, currency: 'USD' },
      { id: 'pubg_6000', amount: 6000, bonus: 2100, price: 99.99, currency: 'USD' },
    ]
  },
  {
    id: 'genshin',
    name: 'Genshin Impact',
    publisher: 'HoYoverse',
    currencyName: 'Genesis Crystals',
    image: 'https://picsum.photos/seed/genshin/400/400',
    coverImage: 'https://picsum.photos/seed/genshin-cover/1200/400',
    description: 'Step into Teyvat, a vast world teeming with life and flowing with elemental energy. You and your sibling arrived here from another world.',
    inputLabel: 'UID / Server',
    placeholder: 'Enter UID (e.g., 800123456)',
    packages: [
      { id: 'gen_60', amount: 60, bonus: 0, price: 0.99, currency: 'USD' },
      { id: 'gen_300', amount: 300, bonus: 30, price: 4.99, currency: 'USD' },
      { id: 'gen_980', amount: 980, bonus: 110, price: 14.99, currency: 'USD', popular: true },
      { id: 'gen_1980', amount: 1980, bonus: 260, price: 29.99, currency: 'USD' },
      { id: 'gen_3280', amount: 3280, bonus: 600, price: 49.99, currency: 'USD' },
      { id: 'gen_6480', amount: 6480, bonus: 1600, price: 99.99, currency: 'USD' },
    ]
  },
  {
    id: 'mlbb',
    name: 'Mobile Legends',
    publisher: 'Moonton',
    currencyName: 'Diamonds',
    image: 'https://picsum.photos/seed/mlbb/400/400',
    coverImage: 'https://picsum.photos/seed/mlbb-cover/1200/400',
    description: 'Join your friends in a brand new 5v5 MOBA showdown against real human opponents, Mobile Legends: Bang Bang!',
    inputLabel: 'User ID (Zone ID)',
    placeholder: '12345678 (1234)',
    packages: [
      { id: 'ml_15', amount: 15, bonus: 2, price: 0.35, currency: 'USD' },
      { id: 'ml_50', amount: 50, bonus: 5, price: 0.99, currency: 'USD' },
      { id: 'ml_250', amount: 250, bonus: 25, price: 4.99, currency: 'USD', popular: true },
      { id: 'ml_500', amount: 500, bonus: 65, price: 9.99, currency: 'USD' },
      { id: 'ml_1000', amount: 1000, bonus: 155, price: 19.99, currency: 'USD' },
    ]
  },
  {
    id: 'codm',
    name: 'Call of Duty: Mobile',
    publisher: 'Activision',
    currencyName: 'CP',
    image: 'https://picsum.photos/seed/codm/400/400',
    coverImage: 'https://picsum.photos/seed/codm-cover/1200/400',
    description: 'Call of Duty: Mobile is the first Person Shooter game on mobile. Play iconic multiplayer maps and modes anytime, anywhere.',
    inputLabel: 'PlayerID (OpenID)',
    placeholder: 'Enter your OpenID',
    packages: [
      { id: 'cod_80', amount: 80, bonus: 0, price: 0.99, currency: 'USD' },
      { id: 'cod_400', amount: 400, bonus: 20, price: 4.99, currency: 'USD' },
      { id: 'cod_800', amount: 800, bonus: 80, price: 9.99, currency: 'USD', popular: true },
      { id: 'cod_2000', amount: 2000, bonus: 400, price: 24.99, currency: 'USD' },
      { id: 'cod_4000', amount: 4000, bonus: 1000, price: 49.99, currency: 'USD' },
    ]
  },
  {
    id: 'valorant',
    name: 'Valorant',
    publisher: 'Riot Games',
    currencyName: 'VP',
    image: 'https://picsum.photos/seed/valorant/400/400',
    coverImage: 'https://picsum.photos/seed/valorant-cover/1200/400',
    description: 'VALORANT is a 5v5 character-based tactical shooter. Blend your style and experience on a global, competitive stage.',
    inputLabel: 'Riot ID',
    placeholder: 'Username#Tag',
    packages: [
      { id: 'val_475', amount: 475, bonus: 0, price: 4.99, currency: 'USD' },
      { id: 'val_1000', amount: 1000, bonus: 0, price: 9.99, currency: 'USD' },
      { id: 'val_2050', amount: 2050, bonus: 0, price: 19.99, currency: 'USD', popular: true },
      { id: 'val_3650', amount: 3650, bonus: 0, price: 34.99, currency: 'USD' },
      { id: 'val_5350', amount: 5350, bonus: 0, price: 49.99, currency: 'USD' },
    ]
  }
];