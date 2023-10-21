// Non Finito
import NonFinito from '../assets/Non Finito/NonFinito.png';
import Sadness from '../assets/Non Finito/Sadness.png';
import Hide from '../assets/Non Finito/Hide.png';
import Pose from '../assets/Non Finito/Pose.png';
import TouchOfColor from '../assets/Non Finito/Touch of Color.png';
import Vision from '../assets/Non Finito/Vision.png';
import Finess from '../assets/Non Finito/Finess.png';
import AboveWater from '../assets/Non Finito/Above water.png';
// 30x24
import David from '../assets/30x24/David.png';
import Bird from '../assets/30x24/Bird.png';
import Blues from '../assets/30x24/Blues.png';
import Pumpkins from '../assets/30x24/Pumpkins.png';
import Raven from '../assets/30x24/Raven.png';
import Sunset from '../assets/30x24/Sunset.png';
import Vase from '../assets/30x24/Vase.png';
import Waves from '../assets/30x24/Waves.png';
// Other
import BlueEye from '../assets/Other/BlueEye.png';
import ColorfulMess from '../assets/Other/Colourful mess.png';
import LucidDream from '../assets/Other/Lucid dream.png';
//Portfolio
import Cats from '../assets/Portfolio/Cats.png';
import AbstractPainting from '../assets/Portfolio/Abstract.png';
import Witches from '../assets/Portfolio/Digital.png';
import NakedGirl from '../assets/Portfolio/Graphics.png';
import Girl from '../assets/Portfolio/Graphics.png';
import House from '../assets/Portfolio/house.png';
import StillLife from '../assets/Portfolio/Still.png';
import StillLife2 from '../assets/Portfolio/Still.png';
import Books from '../assets/Portfolio/books.png';

import { NavLink } from 'react-router-dom';

export interface ICollections {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ICollection {
  id: number;
  title: string;
  description: string[];
  paintings: Painting[];
}

export interface Painting {
  id: number;
  image: string;
  title?: string;
  size?: string;
}

export interface Items {
  key: number;
  label: JSX.Element;
}

export const items: Items[] = [
  {
    key: 1,
    label: <NavLink to='/artistry/collection/Non Finito'>Non Finito</NavLink>,
  },
  {
    key: 2,
    label: (
      <NavLink to='/artistry/collection/Harmonies of Creation'>
        Harmonies of Creation
      </NavLink>
    ),
  },
  {
    key: 3,
    label: <NavLink to='/artistry/collection/Other'>Other</NavLink>,
  },
  {
    key: 4,
    label: <NavLink to='/artistry/collection/Portfolio'>Portfolio</NavLink>,
  },
];

export const collections: ICollections[] = [
  {
    id: 1,
    title: 'Non Finito',
    description: `An abstract art project that represents the human body in various colors.With bold abstract moments and blank, unfinished parts, Non Finito is a provocation for the mind and the imagination`,
    image: NonFinito,
  },
  {
    id: 2,
    title: 'Harmonies of Creation',
    description: `Landscaped, still lifes, abstracts and more. A collection that at first sight has nothing in common, except for one thing - the size of the canvas`,
    image: David,
  },
  {
    id: 3,
    title: 'Other',
    description: `Here, you can find single artworks of various types.`,
    image: BlueEye,
  },
  {
    id: 4,
    title: 'Portfolio',
    description: `This is a small part of my artworks and orders i have done through the years.`,
    image: Cats,
  },
];

export const collection: ICollection[] = [
  {
    id: 1,
    title: 'Non Finito',
    description: [
      `In this art project, I represent the human body in various bright colors.`,
      `My initial inspiration came from colors - clean and bright, intertwining with each other and creating a colorful, patterned swirl that tries to form a shape, an image or even an emotion.
      I was determined to use this love of color to create my artworks.`,

      `I decided this project to be about the upper part of the human body. I wanted to portray the beautiful facial features, captivating eyes that can tell you a story; the gentle, light movement of the hands and the beautiful shape they take at a certain moment.`,
    ],

    paintings: [
      {
        id: 1,
        title: 'Non Finito',
        image: NonFinito,
        size: '100x80cm',
      },
      {
        id: 2,
        title: 'Sadness',
        image: Sadness,
        size: '80x60cm',
      },
      {
        id: 3,
        title: 'Hide',
        image: Hide,
        size: '100x80cm',
      },
      {
        id: 4,
        title: 'Pose',
        image: Pose,
        size: '80x60cm',
      },
      {
        id: 5,
        title: 'Touch of Color',
        image: TouchOfColor,
        size: '60x40cm',
      },
      {
        id: 6,
        title: 'Above Water',
        image: AboveWater,
        size: '60x40cm',
      },
      {
        id: 7,
        title: 'Finess',
        image: Finess,
        size: '40x40cm',
      },
      {
        id: 8,
        title: 'Vision',
        image: Vision,
        size: '40x40cm',
      },
    ],
  },
  {
    id: 2,
    title: 'Harmonies of Creation',
    description: [
      `Step into a world of boundless imagination and creativity with the mesmerizing art collection titled "Harmonies of Creation." This captivating collection brings together a diverse array of artworks that transcend boundaries and ignite the senses.`,
      ` From vibrant canvases that burst with color to sculptures that invite touch and contemplation, "Harmonies of Creation" offers an immersive experience that speaks to the heart of artistic exploration.`,
      `This collection showcases the remarkable diversity of mediums, styles, and techniques that artists wield to communicate their visions.`,
    ],
    paintings: [
      {
        id: 1,
        title: 'David',
        image: David,
        size: '30x24cm',
      },
      {
        id: 2,
        title: 'Vase',
        image: Vase,
        size: '30x24cm',
      },
      {
        id: 3,
        title: 'Sunset',
        image: Sunset,
        size: '30x24cm',
      },
      {
        id: 4,
        title: 'Pumpkins',
        image: Pumpkins,
        size: '30x24cm',
      },
      {
        id: 5,
        title: 'Raven',
        image: Raven,
        size: '30x24cm',
      },
      {
        id: 6,
        title: 'Bird',
        image: Bird,
        size: '30x24cm',
      },
      {
        id: 7,
        title: 'Blues',
        image: Blues,
        size: '30x24cm',
      },
      {
        id: 8,
        title: 'Waves',
        image: Waves,
        size: '30x24cm',
      },
    ],
  },
  {
    id: 3,
    title: 'Other',
    description: [
      `This collection invites you on a captivating journey through an eclectic assembly of paintings, each a distinct universe of emotions, stories, and inspirations. In this gallery, there are no predetermined themes to constrain my visions - instead, you'll discover a rich tapestry of diverse styles, subjects, and techniques that stand independently yet collectively represent the kaleidoscope of human creativity.`,
    ],
    paintings: [
      {
        id: 1,
        title: 'Colourful mess',
        image: ColorfulMess,
        size: '100x80cm',
      },
      {
        id: 2,
        title: 'Eye',
        image: BlueEye,
        size: '20x25cm',
      },
      {
        id: 3,
        title: 'Lucid dream',
        image: LucidDream,
        size: '70x50cm',
      },
    ],
  },
  {
    id: 4,
    title: 'Portfolio',
    description: [
      `Welcome to a captivating journey through the diverse and mesmerizing world of my life as an artist. This art portfolio is a symphony of individual expressions, where each painting stands as a testament to the artist's unique vision, style, and inspiration.`,
      `As you go through this portfolio, you'll be transported to a realm where artistic exploration knows no boundaries, you'll encounter a myriad of emotions, colors, and moods that resonate with the human experience`,
      `My portfolio is a testament to my artistic journey—a journey marked by evolution, experimentation, and an unwavering commitment to authentic expression.`,
      `An exploration of the ever-shifting landscape of creativity, where each canvas unveils a different facet of my artistic journey. From bold abstract compositions that challenge the limits of perception to serene landscapes that capture the essence of tranquility.`,
    ],
    paintings: [
      {
        id: 1,
        image: Cats,
        title: 'Commission',
        size: '50x60cm',
      },
      {
        id: 2,
        image: NakedGirl,
        title: 'Graphics',
        size: '50x70cm',
      },
      {
        id: 3,
        image: Books,
        title: 'Books',
        size: '60x40cm',
      },
      {
        id: 4,
        image: StillLife2,
        title: 'Still life',
        size: '70x50cm',
      },
      {
        id: 5,
        image: House,
        title: 'House',
        size: '50x60cm',
      },
      {
        id: 6,
        image: Girl,
        title: 'Girl',
        size: '70x50cm',
      },
      {
        id: 7,
        image: StillLife,
        title: 'Still life',
        size: '55x45cm',
      },
      {
        id: 8,
        image: Witches,
        title: 'Witches',
        size: '50x60cm',
      },
      {
        id: 9,
        image: AbstractPainting,
        title: 'Abstract art',
        size: '45x55cm',
      },
    ],
  },
];
