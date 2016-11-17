import _ from 'lodash';

const heroes = [
  {
    id: 0,
    name: 'Wolverine',
    description: 'A mutant known for his regenerative abilities',
    comics: {
      available: 300,
    }
  },
  {
    id: 1,
    name: 'Storm',
    description: 'A mutant known for her ability to control the weather',
    comics: {
      available: 200,
    }
  },
  {
    id: 2,
    name: 'Wonderboy',
    description: 'A rocker with the power to kill a yak with mind bullets',
    comics: {
      available: 1,
    }
  },
];

export const loadHeroes = () =>
  new Promise((resolve) => {
    _.delay(() => {
      resolve(heroes);
    }, 1000);
  });
