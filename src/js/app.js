export default class Validator{
  validateUsername(username) {
      let regexp = /^[^\d_\-]+(\D|\d(\D|$)|\d\d(\D|$))+[^\d_\-]+$/;
      let forbiddenSymbols = username.match(regexp);
      if (forbiddenSymbols === null) {
        console.log('Ваше имя не соответствует требованиям. Измените имя');
        return false
      } else console.log('Ваше имя соответствует требованиям.'); 
      return true;
  }
}
