/* To Make Every Words Upper Case */
export const capitalizeEveryWord = (text) => {
   const upperCaseFirstChar = text.charAt(0).toUpperCase() + text.slice(1);
   const sentence = upperCaseFirstChar.replaceAll('-', ' ');

   const capitalizeWords = [];
   const words = sentence.toLowerCase().split(' ');


   for (let index = 0; index < words.length; index++) {
      const capitalLetters = words[index].charAt(0).toUpperCase() + words[index].slice(1);
      capitalizeWords.push(capitalLetters);
   }

   const result = capitalizeWords.join(' ');

   return result;
}