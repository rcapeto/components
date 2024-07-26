 export function slugfy(text: string, separator: string = "-") {
   if(typeof text !== 'string') {
      console.warn("Text must be a string");
      return;
   }

  return text
    .replace(/\n/g, '')
    .split(' ')
    .map(data => data.trim().toLowerCase())
    .filter(data => data)
    .map(data => {
      return isNaN(+data) ? removeSpecialCharAndWhiteSpace(data) : data;
    })
    .join(separator);
 }

 function removeSpecialCharAndWhiteSpace(word: string) {
   return word
     .normalize('NFD')
     .replace(/[^a-zA-Z\s]/g, '')
     .toLowerCase();
 }
