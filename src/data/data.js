import Stat1 from "../assets/Stats-Icon-1.png";
import Stat2 from "../assets/Stats-Icon-2.png";
import Stat3 from "../assets/Stats-Icon-3.png";
import btcImg from "../assets/btc.png";
import liteImg from "../assets/lite.png";
import ethImg from "../assets/eth.png";
import rightBtn from "../assets/rightBtn.png";

export const navLinks = [
  {
    id: "products",
    title: "Products",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const Stat = [
  {
    title: "$30B",
    subTitle: "Digital Currency Exchanged",
    img: Stat1,
  },

  {
    title: "10M+",
    subTitle: "Trusted Wallets Investor",
    img: Stat2,
  },

  {
    title: "195",
    subTitle: "Countries Supported",
    img: Stat3,
  },
];

export const Cards = [
  {
    img: btcImg,
    title: "Bitcoin",
    abbr: "BTC",
    subTitle:
      "Digital currency in which a record of transactions is maintained.",
    btn: rightBtn,
  },

  {
    img: ethImg,
    title: "Ethereum",
    abbr: "ETH",
    subTitle:
      "Blockchain technology to create and run decentralized digital applications.",
    btn: rightBtn,
  },

  {
    img: liteImg,
    title: "Litecoin",
    abbr: "LTC",
    subTitle:
      "Cryptocurrency that enables instant payments to anyone in the world.",
    btn: rightBtn,
  },
];

export const footerLink1 = [
  { id: "Home" },
  { id: "Products" },
  { id: "About" },
  { id: "Features" },
  { id: "Contact" },
];


export const footerLink2 = [
  { id: "Download Whitepapper" },
  { id: "Smart Token" },
  { id: "Blockchain Explorer" },
  { id: "Crypto API" },
  { id: "Interest" },
];
