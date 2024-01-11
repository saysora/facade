
export const statusColors = {
  online: '#2ed573',
  idle: '#eccc68',
  dnd: '#ff5252',
};

export const iconColors = [
  '#fc5c65',
  '#eb3b5a',
  '#fd9644',
  '#fa8231',
  '#fed330',
  '#f7b731',
  '#26de81',
  '#20bf6b',
  '#2bcbba',
  '#0fb9b1',
  '#45aaf2',
  '#2d98da',
  '#4b7bec',
  '#3867d6',
  '#a55eea',
  '#8854d0'
];

/* Helpers */

export const random = (arr: string[]): string => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const randomColors = () => { return random(iconColors); };

