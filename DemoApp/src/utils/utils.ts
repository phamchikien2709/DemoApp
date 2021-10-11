export const converNumber = (num?: string | number) => {
  if (!num) return '';
  const ar = num.toString().split('.');
  const str = [...ar[0]]
    .reverse()
    .map((item, index) => {
      if (index % 3 == 2 && index < ar[0].length - 1) {
        return `,${item}`;
      }
      return item;
    })
    .reverse()
    .join('');
  if (str.length >= 13) {
    return str;
  }
  return `${str}.${ar[1] || ''}`;
};
