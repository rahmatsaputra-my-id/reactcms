
export const regexEmail = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regexPassword = /^(?=.*\d)(?=.*[^A-Za-z\d]).{6,}/;
export const regexPhoneNumber = /^(08|02|62)\d{10,16}$/;
export const regexOTP = /^\d{6,6}$/;
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

/* To Navigate Between Page */
// export const NavigateTo = async (navName, params = false, props = false, refresh = false) => {

//    const currentPathname = history.location.pathname.replace(/(^(\/)?id\/|^(\/)?en\/)/i, '/');
//    // const _navName = checkUrlLanguage(navName);

//    if (refresh) {
//       persistor.flush(); //some state does not persisted when navigate with reload. flush is designed to force the writing of all pending state asap, and to provide a promise to wait for the writes resolution. This can be handy for example if you need to ensure latest state is written before navigating away.
//       const historyRefresh = createBrowserHistory({ forceRefresh: true });
//       historyRefresh.push(navName, { from: currentPathname + history.location.search, ...params });
//       return;
//    }

//    if (currentPathname + history.location.search === navName.replace(/(^(\/)?id\/|^(\/)?en\/)/i, '/')) {
//       return;
//    } else {
//       history.push(navName, { from: currentPathname + history.location.search, ...params });
//       return;
//    }

// };