// All photos come from kulturadining.com. Edit here to swap images or content.
const media = (id: string) => `https://static.wixstatic.com/media/${id}`;

export const IMG = {
  logo: media("a74102_e2b30990dd1b493481cb77fb435dfaee~mv2.png"),
  hero: media("6d1b6f_e769c8cf456c40e6850d0e3135fbb3f4~mv2.jpg"),
  dining: media("0b340f_f748bb40314c428d9459045b81d21d30~mv2.jpg"),
  room: media("6d1b6f_e17a17caca93456ba26afda68b78a31d~mv2.jpg"),
  story: media("a74102_56029c3040864f3b92f6516363ec4046~mv2.jpg"),
  chef: media("a74102_4bdde0102294481c9cabaf5a36704f7e~mv2.jpg"),
  meal: media("a74102_6e4fd3bcfa7040bdb9aeee530696632e~mv2.jpg"),
  header: media("0b340f_3996ca4661ef4803abd7db2f7e547718~mv2.jpg"),
};

export const GOOGLE_BUSINESS_PHOTOS = [
  "https://lh3.googleusercontent.com/grass-cs/AABkmLfkJnihGdw0lujxWEFjr_9KymuLRxCoj7mz9xQgUR7-DD3EUB1kSLa2YWCYiX5siV156KzbwHtegZU3eHwUHYDJYI3YjZ13AxE3VV_QhdeAZCcPC0pCdF1YguTqiQcUE2dkfVk=w1200-h900-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SFIKuSF8HZr9s_PQm_DAuSKqI85bhvXcI_mU8fw1Cdwu6Aw6U6teLunqX1ls5cGEfiTGmw9iQiYbdKyzLDgnSBM7IOJcaoNwIQF3bHxgUyqg_xwYP2moM1-pTAduCsEYnIGf9qrg=w1200-h900-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RXfpe4EHOANuWWef4XHCPcpuFk4dlrcgPonMJQ9CEQBNv_Iv_86JP_OgCKiFczfzoAo1DFcp6vzDX5nBCOfT9eA1g06XyGX3RTkWnF3pb8WDvLVX3ZGDzIFrwOlb5BN3azLxi5oZSNMMHK=w1200-h1600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SMssaWomLEAWpHtoVpCS6r2Zh8hvBuBdeYfw91mJHagUqgiUB7xdJ99XWi5pgFs2-28Av_n5fWKadCMbZmkpFBNvQBHtSJszOaHKfpj6H5wcPP5M7qfXiWy2UO3ocJRuqWOdwJG9R3CcO-=w1200-h1600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TyUj_03CMHZALzdswFLe7m9YHD2I2ZwItxXK8sTRiO-ZqsFdyirrcS_yevikLCWPGzbQjEF4ZKVz7BLlrf-ft_P3RY-Sy8M5LyjSF3iR_Nkp628PUj22lynJWeOJvjEBxbJUIorQ=w1200-h900-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RZKwNOsu18YiwQvHhLizExx333Yl5GRPvWIe-TTrH2ajU6OzAXkitlVFuOrLV6gR1mwP7DeKTTrc69j0nCFXpDi7AnbjXsCq1ff0NylX1LF9pL6r4rFm4G85wcQGrXPwbhZ7OiAGj-nGw=w1200-h1600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RVl43QN7LhAh9acsSmOnYNjNcJYaHFEvUSD6IcuFG4jh3Ba_MYu7leg54FUu4S9uGe8GOMV0EnzIZCuZwedvbltrtfw9MS7reh9XvMwum6pKLWfIuMqKHzujvU_3bJiLJpkK3L=w1200-h1500-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SlcRNKNUOI4zv-dixUGosuYMo5k4MuBa0YNEZnWHyAsSP_QUZd7P_F6sNH8CzuvNOmtpv4eZWqQPqcNQ0ikNSGLoY_b1llp_ZGQstzgLkjNXLyrdwRCk65rbHy3N4lBKZ2q2zVuA=w1200-h1600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TFqiLW40uax7Xz0ECp-8oBLcgUJIMwhjgVXpHWtN_BghBkRXKEdXgFqfw3X1T2nTbIYeHFCDQd6Ui98gno2M8jRHipD1PGX9X-ws3xyZBqg49bfCVTRYrLv0gcYqigKwVI4L__=w1200-h1500-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T2R_RpsIqQo4P-kfU47fq416W3iB28tTjmYuMrjwhXUUc_2eDtTQX64yYjgI1UphmnLfNz4G7-dlcL0aB-YEVvctGSQqiJigUF6gkSI-MB_xrsp0jlLeir0PYLEoNQKJz_MndI=w1200-h1600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ReIviWyWf8LHSFOISsLxnuClYoyeMIaHuJzM7it-mJ6dsF9gLjmAYfQDMRV8tAlQ_mo7RJJF666N2b95t07e8VhJCcp6h7CZQl1hxSDMzhrUIAZMUD8C1Ew75nIDJx0yxeOCpmtQ=w1200-h1200-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SsH5fzkeTNUCLJevKM-1rPK7znrpY7Xs-X8l9-NgsHxl-TvOroAF1lU4ZBVLYhqiirFwXC3Alm2epSkTJsvQDfS7-rkXVyiYsrf2ny1LU7wDVMipXyeS-HhXMPtbtbWhD_TgelsA=w1200-h1600-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TZb89Y3w7tdFUtBKQdALR8uWS0yLSPUFPvigfbTI2aFPN-qwRD_23YQ2psZ3Ub3zQ8ANWtziZnoO8EX6rABl35GkI9fyDVfoXZiCuA5M_vB8sPwbZuSNXp-VILc_C2ieBVYPNi=w1200-h900-k-no",
];

export const INFO = {
  name: "Kultura",
  address: "KG 350 St, Kibagabaga, Kigali",
  phone: "+250 786 700 108",
  phoneHref: "tel:+250786700108",
  email: "melaniec@kulturadining.com",
  instagram: "https://www.instagram.com/kultura_flavours_of_asia/",
  reservationsUrl: "https://www.instagram.com/p/CpwycmjIqyC/",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Kultura+KG+350+St+Kigali",
  hours: [
    { days: "Monday to Friday", time: "12 pm to 12 am" },
    { days: "Saturday and Sunday", time: "12 pm to 12 am" },
  ],
};

export type Dish = { name: string; desc: string };
export type MenuCategory = { id: string; label: string; img: string; alt: string; dishes: Dish[] };

// Dish names are illustrative placeholders. Replace with the current menu from the restaurant.
export const MENU: MenuCategory[] = [
  {
    id: "starters", label: "Starters", img: IMG.meal, alt: "A plated dish from Kultura's kitchen",
    dishes: [
      { name: "Pork & Chive Dumplings", desc: "Pan-seared, with black vinegar and chilli oil." },
      { name: "Salmon Maki Selection", desc: "Hand-rolled, with pickled ginger and wasabi." },
      { name: "Crispy Spring Rolls", desc: "Glass noodle, vegetables, sweet chilli dip." },
    ],
  },
  {
    id: "mains", label: "Mains", img: IMG.story, alt: "A table set at Kultura",
    dishes: [
      { name: "Chef's Wok Noodles", desc: "Wok-fired noodles, greens, garlic and soy." },
      { name: "Tonkotsu Ramen", desc: "Slow-simmered broth, soft egg, spring onion." },
      { name: "Fragrant Rice Plate", desc: "Jasmine rice with a rotating house curry." },
    ],
  },
  {
    id: "bar", label: "Cocktails and wine", img: IMG.room, alt: "The Kultura dining room",
    dishes: [
      { name: "Lemongrass Sour", desc: "Lemongrass, lime and ginger over ice." },
      { name: "Lychee Martini", desc: "Lychee, citrus and a long cold finish." },
      { name: "Wine by the glass", desc: "A short, considered list to match the kitchen." },
    ],
  },
];

export const MARQUEE = ["Dumplings", "Ramen", "Sushi", "Wok noodles", "Signature cocktails", "Exceptional wines", "Kibagabaga, Kigali"];
