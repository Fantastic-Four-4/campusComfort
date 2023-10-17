import { sample } from 'lodash';
import { faker } from '@faker-js/faker';
import { v4 as uuid} from 'uuid';
// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  // 'Nike Air Force 1 NDESTRUKT',
  // 'Nike Space Hippie 04',
  // 'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
  // 'Nike Blazer Low 77 Vintage',
  // 'Nike ZoomX SuperRep Surge',
  // 'Zoom Freak 2',
  // 'Nike Air Max Zephyr',
  // 'Jordan Delta',
  // 'Air Jordan XXXV PF',
  // 'Nike Waffle Racer Crater',
  // 'Kyrie 7 EP Sisterhood',
  // 'Nike Air Zoom BB NXT',
  // 'Nike Air Force 1 07 LX',
  // 'Nike Air Force 1 Shadow SE',
  // 'Nike Air Zoom Tempo NEXT%',
  // 'Nike DBreak-Type',
  // 'Nike Air Max Up',
  // 'Nike Air Max 270 React ENG',
  // 'NikeCourt Royale',
  // 'Nike Air Zoom Pegasus 37 Premium',
  // 'Nike Air Zoom SuperRep',
  // 'NikeCourt Royale',
  // 'Nike React Art3mis',
  // 'Nike React Infinity Run Flyknit A.I.R. Chaz Bear',
  "Kopargaon Hostel",
  "New Hostel",
  "Modern PG",
  "Laxmi Girls Hostel"
];
const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

const addresses = [
  'Annapurna Nagar, Kop',
  'Yeola Naka, Kop',
  'Sanjivani College, Kop'
];

const options = {
  min: 0,
  max: 5,
  precision: 0.01
};


// ----------------------------------------------------------------------

export const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    gender: ['male', 'female'][Math.floor(Math.random() * 2)],
    address: addresses[Math.floor(Math.random() * addresses.length)],
    price: faker.number.int({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.number.int({ min: 19, max: 29, precision: 0.01 }),
    distance: (Math.random() * 5).toFixed(2),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export const hostel = [
  {
    id: uuid(),
    name: "Modern Hostel",
    image: `/assets/images/products/product_1.jpg`,
    address: "Annapurna Nagar",
    gender: "Female",
    price: 2000,
    distance: 1,
    eqp: ["Attached washroom", "Study table"],
    beds: "single, double",
  },
  {
    id: uuid(),
    name: "College Hostel",
    image: `/assets/images/products/product_2.jpg`,
    address: "Sanjivani College",
    gender: "Male",
    price: 2500,
    distance: 0.2,
    eqp: ["Attached washroom", "Study table"],
    beds: "single, double, triple"
  },
  {
    id: uuid(),
    name: "Laxmi Girls Hostel",
    image: `/assets/images/products/product_3.jpg`,
    address: "Yeola Naka",
    gender: "Female",
    price: 3000,
    distance: 1.5,
    eqp: ["Attached washroom", "Study table"],
    beds: 'double, triple',
  },
]
