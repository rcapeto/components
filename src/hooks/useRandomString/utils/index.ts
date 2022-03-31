export const charSymbols = '}!{@#$%¨&([)]-_+=;:?|\.'.split('');
export const charNumbers = '0123456789'.split('');
export const charLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
export const charUpper = charLower.join('').toUpperCase().split(''); 

export const randomizeArray = <T>(array: T[]) => {
   return array.map(item => ({ item, random: Math.random() }))
      .sort((a, b) => a.random - b.random)
      .map(object => object.item)
};