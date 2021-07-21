import { Chance as generateRandom } from 'chance';

export const generateUsers = () => {
  return Array.from({ length: 10 }).map(() => ({
    first: generateRandom().first(),
    last: generateRandom().last(),
    dob: generateRandom().birthday({ string: true }) as string,
  }));
};

export const generateSortTableUsers = () => {
  return Array.from({ length: 10 }).map(() => ({
    first: generateRandom().first(),
    dob: generateRandom().birthday({ string: true }) as string,
    age: generateRandom().integer({ min: 10, max: 100 }),
    living: generateRandom().bool(),
  }));
};

export const generateCountries = () =>
  Array.from({ length: 150 }).map(() =>
    generateRandom().country({ full: true })
  );
