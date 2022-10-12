
export const regexEmail = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regexPassword = /^(?=.*\d)(?=.*[^A-Za-z\d]).{6,}/;
export const regexPhoneNumber = /^(08|02|62)\d{10,16}$/;
export const regexFullName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

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

