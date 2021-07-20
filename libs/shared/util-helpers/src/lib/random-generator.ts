import { Chance as generateRandom } from 'chance';

export const generateUsers = () => {
  return Array.from({ length: 10 }).map(() => ({
    first: generateRandom().first(),
    last: generateRandom().last(),
    dob: generateRandom().birthday({ string: true }) as string,
  }));
};

export const generateCountries = () =>
  Array.from({ length: 150 }).map(() =>
    generateRandom().country({ full: true })
  );
