import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.saltswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.saltswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Salty Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://saltswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://saltswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://saltswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://saltswap.info/accounts',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.saltswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/saltswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.saltswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://saltswap.medium.com',
      },
    ],
  },
]

export default config
