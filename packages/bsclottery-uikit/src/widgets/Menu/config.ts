import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.bsclotteryswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.bsclotteryswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",

  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
      },
      {
        label: "YourProfile",
        href: "/profile",
      },
    ],
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://bsclotteryswap.info",
      },
      {
        label: "Tokens",
        href: "https://bsclotteryswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://bsclotteryswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://bsclotteryswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.bsclotteryswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/bsclotteryswap",
      },
      {
        label: "Docs",
        href: "https://docs.bsclotteryswap.finance",
      },
      {
        label: "Blog",
        href: "https://bsclotteryswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/bsclotteryswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/BsclotterySwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/BsclotterySwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/BsclotterySwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/bsclotteryswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/bsclotteryswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/bsclotteryswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/BsclotterySwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/BsclotteryswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/bsclotteryswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/bsclotteryswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/BsclotterySwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/BsclotterySwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/bsclotteryswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 256;
export const SIDEBAR_WIDTH_REDUCED = 66;
export const NAVBAR_WIDTH_FULL = 250;
export const NAVBAR_WIDTH_REDUCED = 10;
export const NAV_WIDTH_REDUCED = 86;
export const NAV_WIDTH_FULL = 260;
