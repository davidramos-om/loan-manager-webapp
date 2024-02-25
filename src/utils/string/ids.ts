// import { customAlphabet } from 'nanoid/non-secure';
// const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789-_', 10);

import { nanoid } from 'nanoid';

export function newId() {
  return nanoid();
}

export const makeUrlUnique = (url: string) => {
  const ts = Date.now();
  return `${url}?ts=${ts}`;
};
