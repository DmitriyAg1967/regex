import Validator from '../app';

const referenceValidname = true;
const referenceInvalidname = false;

test('validnametest', () => {
    const nameuserValid = new Validator().validateUsername('dmitriy_30-05-67_agler');
    expect(referenceValidname).toBe(nameuserValid);
  });

test('invalidnametest', () => {
    const nameuserInValid = new Validator().validateUsername('dmitriy_30-05-67_agler11');
    expect(referenceInvalidname).toBe(nameuserInValid);
});
