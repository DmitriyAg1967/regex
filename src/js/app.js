export default class Validator {
  validateUsername(username) {
    let regexp_1 = /^[a-zA-Z][a-zA-Z0-9\-\_]+[a-zA-Z]$/;
    let regexp_2 = /[0-9]{4,}/;
    let forbiddenSymbols_1 = username.match(regexp_1);
    let forbiddenSymbols_2 = username.search(regexp_2);
    if (forbiddenSymbols_1 === null || forbiddenSymbols_2 != -1) {
      console.log('Ваше имя не соответствует требованиям. Измените имя');
      return false
    } else console.log('Ваше имя соответствует требованиям.');
    return true;
  }
}
