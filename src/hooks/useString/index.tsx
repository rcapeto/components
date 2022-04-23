export const useString = () => {
   const uppercaseFirstLetter = (text: string) => {
      return text.replace(text[0], text[0].toUpperCase());
   };

   const formatStringArray = (texts: string[]): string => {
      return texts.map(text => uppercaseFirstLetter(text)).join(' ');
   };

   const formatAllFirstLetters = (text: string): string => {
      const stringArr: string[] = text.split(' ');
      const formatedText = formatStringArray(stringArr);
      return formatedText;
   };

   return { uppercaseFirstLetter, formatStringArray, formatAllFirstLetters };
};