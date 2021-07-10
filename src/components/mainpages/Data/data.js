import akai from "./img/akai.png";
import mini3 from "./img/mini3.png";
import f51 from "./img/f51.png";
import e463 from "./img/e463.png";
import ks47 from "./img/ks47.png";
import KH38 from "./img/KH38.png";
import roland from "./img/roland.png";
// stars
import Four from "./img/Four-stars.svg";
import Five from "./img/Five-stars.svg";
import Three from "./img/Three-stars.svg";
// guitar
import JAuc from "./img/JAuc.svg";
import JEle from "./img/JEle.svg";
import KAuc from "./img/KAuc.svg";
import KBass from "./img/KBass.svg";
import KUki from "./img/KUki.svg";
import yauc from "./img/yauc.png";
import ybass from "./img/ybass.svg";
import yblack from "./img/yblack.png";
import yblue from "./img/yblue.png";
// drums
import Havana from "./img/Havana.jpg";
import RolandEl from "./img/RolandEl.jpg";
import Pearl from "./img/Pearl.jpg";
import YPad from "./img/YPad.jpg";
import BXDEl from "./img/BXDEl.jpg";
import Tama from "./img/Tama.jpg";
// Accesories
import Sticks from './img/Sticks.jpg';
import Amp from './img/Amp.jpg';
import Keybag from './img/Keybag.jpg';
import KeyStand from './img/KeyStand.jpg';
import Tuner from './img/Tuner.jpg';

 
const instrudata = [
  {
    id: 1,
    model: "AKAI - Professional",
    item: "Mini - 2",
    company: "AKAI",
    price: "6,455",
    mrp: "8,455",
    img: `${akai}`,
    category: "Keyboard",
    discount: 15,
    stars: `${Four}`,
  },
  {
    id: 2,
    model: "AKAI - Professional",
    item: "Mini - 3",
    company: "AKAI",
    price: "4,995",
    mrp: "6,000",
    img: `${mini3}`,
    category: "Keyboard",
    discount: 15,
    stars: `${Three}`,
  },
  {
    id: 3,
    model: "Yamaha -PSR",
    item: "F51",
    company: "YAMAHA",
    price: "7,199",
    mrp: "9,620",
    img: `${f51}`,
    category: "Keyboard",
    discount: 10,
    stars: `${Three}`,
  },
  {
    id: 4,
    model: "Yamaha PSR",
    item: "E463",
    company: "YAMAHA",
    price: "17,189",
    mrp: "22,790",
    img: `${e463}`,
    category: "Keyboard",
    discount: 10,
    stars: `${Four}`,
  },
  {
    id: 5,
    model: "Casio KS47",
    item: "",
    company: "Casio",
    price: "7,595",
    mrp: "10,550",
    img: ` ${ks47}`,
    category: "Keyboard",
    discount: 20,
    stars: `${Four}`,
  },
  {
    id: 6,
    model: "Casio - KH38",
    item: "",
    company: "Casio",
    price: "22,298",
    mrp: "27,950",
    img: `${KH38}`,
    category: "Keyboard",
    discount: 20,
    stars: `${Three}`,
  },
  {
    id: 7,
    model: "Roland XPS30",
    item: "",
    company: "Roland",
    price: "62,298",
    mrp: "71,500",
    img: `${roland}`,
    category: "Keyboard",
    discount: 5,
    stars: `${Five}`,
  },
  //   guitar - 9 items
  {
    id: 8,
    model: "Kadence",
    item: "Electric Bass Guitar",
    company: "Kadence",
    price: "13,999",
    mrp: "19,200",
    img: `${KBass}`,
    category: "Bass-Guitar",
    discount: 27,
    stars: `${Five}`,
        // https://www.amazon.in/Kadence-Chronicle-Electric-Guitar-Control/dp/B071CVY9MZ/ref=sr_1_1?dchild=1&keywords=bass+guitar&qid=1625569262&refinements=p_89%3AKadence&rnid=3837712031&s=musical-instruments&sr=1-1
  },
  {
    id: 9,
    model: "YAMAHA",
    item: "Electric Bass Guitar",
    company: "YAMAHA",
    price: "16,625",
    mrp: "18,990",
    img: `${ybass}`,
    category: "Bass-Guitar",
    discount: 12,
    stars: `${Five}`,
    // https://www.amazon.in/Yamaha-TRBX174-TRBX-Electric-Guitar/dp/B00QNYW49M/ref=sr_1_25?dchild=1&keywords=guitar&qid=1625568930&refinements=p_89%3AYAMAHA&rnid=3837712031&s=musical-instruments&sr=1-25
  },
  {
    id: 10,
    model: "YAMAHA FG800",
    item: "Acoustic Guitar",
    company: "YAMAHA",
    price: "13,999",
    mrp: "15,999",
    img: `${yauc}`,
    category: "Acoustic Guitar",
    discount: 13,
    stars: `${Five}`,
    // https://www.amazon.in/Yamaha-Folk-Acoustic-Guitar-Natural/dp/B01C92QHLC/ref=sr_1_24?dchild=1&keywords=guitar&qid=1625568851&refinements=p_89%3AYAMAHA&rnid=3837712031&s=musical-instruments&sr=1-24
  },
  {
    id: 11,
    model: "Juarez",
    item: "Acoustic Guitar",
    company: "Juarez",
    price: "2,499",
    mrp: "6,990",
    img: `${JAuc}`,
    category: "Acoustic Guitar",
    discount: 64,
    stars: `${Three}`,
    // https://www.amazon.in/Juarez-Acoustic-Guitar-Cutaway-Strings/dp/B084VRCCN7/ref=sr_1_7?dchild=1&keywords=guitar&qid=1625568489&refinements=p_89%3AJu%C3%A2rez&rnid=3837712031&s=musical-instruments&sr=1-7
  },
  {
    id: 12,
    model: "Kadence Wanderer",
    item: " Ukulele",
    company: "Kadence",
    price: "2,199",
    mrp: "3,500",
    img: `${KUki}`,
    category: "Acoustic Guitar",
    discount: 37,
    stars: `${Four}`,
    // https://www.amazon.in/Kadence-Wanderer-Brown-Soprano-Ukulele/dp/B01ALJRCBE/ref=sr_1_15?dchild=1&keywords=guitar&qid=1625568384&refinements=p_89%3AKadence&rnid=3837712031&s=musical-instruments&sr=1-15
  },
  {
    id: 13,
    model: "YAMAHA - Electric",
    item: "PACIFICA012 - Black",
    company: "YAMAHA",
    price: "16,199",
    mrp: "17,990",
    img: `${yblack}`,
    category: "Electric Guitar",
    discount: 6,
    stars: `${Four}`,
    // https://www.amazon.in/Yamaha-PACIFICA012-Electric-Guitar-Black/dp/B00REF66PC/ref=sr_1_23?dchild=1&keywords=guitar&qid=1625567236&refinements=p_89%3AYAMAHA&rnid=3837712031&s=musical-instruments&sr=1-23
  },
  {
    id: 14,
    model: "YAMAHA - Electric",
    item: "PACIFICA012 - Blue",
    company: "YAMAHA",
    price: "16,199",
    mrp: "17,990",
    img: `${yblue}`,
    category: "Electric Guitar",
    discount: 6,
    stars: `${Three}`,
    // https://www.amazon.in/Yamaha-PACIFICA012-Electric-Guitar-Metallic/dp/B00REF6CII/ref=sr_1_10?dchild=1&keywords=guitar&qid=1625567236&refinements=p_89%3AYAMAHA&rnid=3837712031&s=musical-instruments&sr=1-10
  },
  {
    id: 15,
    model: "Kadence Frontier",
    item: "Acoustic Guitar",
    company: "Kadence",
    price: "4,999",
    mrp: "7,000",
    img: `${KAuc}`,
    category: "Acoustic Guitar",
    discount: 29,
    stars: `${Four}`,
    // https://www.amazon.in/Kadence-Frontier-Acoustic-Guitar-Strings/dp/B01GDZ46AA/ref=sr_1_5?dchild=1&keywords=guitar&qid=1625567125&refinements=p_89%3AKadence&rnid=3837712031&s=musical-instruments&sr=1-5
  },
  {
    id: 16,
    model: "Juarez - Electric",
    item: "JRZ-ST01",
    company: "Juarez",
    price: "5,450",
    mrp: "14,990",
    img: `${JEle}`,
    category: "Electric Guitar",
    discount: 64,
    stars: `${Three}`,
  },

  //   drums
  {
    id: 17,
    model: "Behringer - Electric",
    item: "XD80USB",
    company: "Behringer",
    price: "42,990",
    mrp: "70,000", 
    img: `${BXDEl}`,
    category: "Electric Drum Set",
    discount: 39,
    stars: `${Four}`,
    // https://www.amazon.in/Behringer-XD80USB-Premium-8-Piece-Electronic/dp/B00O7ZUEIC/ref=sr_1_1?dchild=1&keywords=drum+sets&qid=1625643448&refinements=p_89%3ABehringer&rnid=3837712031&s=musical-instruments&sr=1-1
  },
  {
    id: 18,
    model: "YAMAHA - Electric",
    item: "DTXM12 Multi Pad",
    company: "YAMAHA",
    price: "44,953",
    mrp: "50,490", 
    img: `${YPad}`,
    category: "Drum Pad",
    discount: 11,
    stars: `${Three}`,
    // https://www.amazon.in/Yamaha-DTMX-Multi-Drum-Pad-Black/dp/B08233LB63/ref=sr_1_11_sspa?dchild=1&keywords=drum+sets&qid=1625643467&refinements=p_89%3AYAMAHA&rnid=3837712031&s=musical-instruments&sr=1-11-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzN01FQUpDTzFYUlEzJmVuY3J5cHRlZElkPUEwMDAzODc3MzRLRkE0V0xLTjQ0RyZlbmNyeXB0ZWRBZElkPUEwMzMzMzkzM1VDQUxNUUVTRE9HWiZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=
  },
  {
    id: 19,
    model: "Pearl",
    item: "RS525SCC91",
    company: "Pearl",
    price: "45,990",
    mrp: "48,325", 
    img: `${Pearl}`,
    category: "Drum Set",
    discount: 5,
    stars: `${Four}`,
    // https://www.amazon.in/Pearl-RS525SCC91-Roadshow-5-Piece-Drum/dp/B00NJVS33I/ref=sr_1_1?dchild=1&keywords=pearl+drum+sets&qid=1625643770&s=musical-instruments&sr=1-1
  },
  {
    id: 20,
    model: "Roland - Electric",
    item: "TD-1DMK",
    company: "Roland",
    price: "62,919",
    mrp: "89,821", 
    img: `${RolandEl}`,
    category: "Electric Drum Set",
    discount: 30,
    stars: `${Five}`,
    // https://www.amazon.in/Roland-TD-1DMK-Electronic-V-Drums-include/dp/B07JZNWVRJ/ref=sr_1_8?dchild=1&keywords=drum+sets&qid=1625643849&refinements=p_36%3A1318507031&rnid=1318502031&s=musical-instruments&sr=1-8
  },
  {
    id: 21,
    model: "Tama Drum Kit",
    item: "SG58H5 ",
    company: "Tama",
    price: "38,999",
    mrp: "42,999", 
    img: `${Tama}`,
    category: "Drum Set",
    discount: 9,
    stars: `${Three}`,
    // https://www.amazon.in/Tama-SG58H5-Stage-Star-Drum/dp/B0913JHZFL/ref=sr_1_14?dchild=1&keywords=drum+sets&qid=1625643849&refinements=p_36%3A1318507031&rnid=1318502031&s=musical-instruments&sr=1-14
  },
  {
    id: 22,
    model: "Havana Drum Kit",
    item: "HV522",
    company: "Havana",
    price: "22,499",
    mrp: "28,990", 
    img: `${Havana}`,
    category: "Drum Set",
    discount: 22,
    stars: `${Three}`,
  },


  // Accesories
  {
    id: 23,
    model: "WORLDMACS",
    item: "Drumsticks",
    company: "WORLDMACS",
    price: "947",
    mrp: "2,550", 
    img: `${Sticks}`,
    category: "Accesories",
    discount: 63,
    stars: `${Four}`,
    // https://www.amazon.in/worldmacs-Inches-Sided-Practice-Drumsticks/dp/B01L5DQMF2/ref=sr_1_5?dchild=1&keywords=music+instruments+drums+accessories&qid=1625673731&sr=8-5
  },
  {
    id: 24,
    model: "HRB MUSICALS",
    item: "keyboard bag",
    company: "HRB",
    price: "749",
    mrp: "1,599", 
    img: `${Keybag}`,
    category: "Accesories",
    discount: 53,
    stars: `${Four}`,
    // https://www.amazon.in/HRB-MUSICALS-keyboard-Padded-Keyboards/dp/B07PW8X3HJ/ref=sr_1_146_sspa?crid=1ISBHIM88DSSY&dchild=1&keywords=music+instruments+accessories&qid=1625673568&sprefix=music+instruments+acces%2Caps%2C297&sr=8-146-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVTlCMDZITDFPOVhRJmVuY3J5cHRlZElkPUEwMjU4MjQ1Mzc4RDFTSDdGTVBWUyZlbmNyeXB0ZWRBZElkPUEwMjA2ODQ5MTE2Rjk1T1RSNU01MSZ3aWRnZXROYW1lPXNwX2F0Zl9uZXh0JmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==
  },
  {
    id: 25,
    model: "Juârez GT-13",
    item: "Guitar Tuner",
    company: "Juârez",
    price: "269",
    mrp: "990", 
    img: `${Tuner}`,
    category: "Accesories",
    discount: 73,
    stars: `${Three}`,
  },
  {
    id: 26,
    model: "Juârez JAK200",
    item: "Keyboard Stand",
    company: "Juârez",
    price: "1,549",
    mrp: "2,190", 
    img: `${KeyStand}`,
    category: "Accesories",
    discount: 28,
    stars: `${Four}`,
  },
  {
    id: 27,
    model: " Palco ",
    item: "Guitar Amplifier",
    company: "Palco ",
    price: "2,500",
    mrp: "3,500", 
    img: `${Amp}`,
    category: "Accesories",
    discount: 29,
    stars: `${Four}`,
  },

];

export default instrudata;
