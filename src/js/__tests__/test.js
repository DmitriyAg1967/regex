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

test('invalidnametest', () => {
  const nameuserInValid_1 = new Validator().validateUsername('dmitriy_30-05-67_agler_');
  expect(referenceInvalidname).toBe(nameuserInValid_1);
});

test('invalidnametest', () => {
  const nameuserInValid_2 = new Validator().validateUsername('dmitriy_30-05-67_agler-');
  expect(referenceInvalidname).toBe(nameuserInValid_2);
});

test('invalidnametest', () => {
  const nameuserInValid_3 = new Validator().validateUsername('dmitriy_30-05-1967_agler');
  expect(referenceInvalidname).toBe(nameuserInValid_3);
});

test('invalidnametest', () => {
  const nameuserInValid_4 = new Validator().validateUsername('1dmitriy_30-05-67_agler');
  expect(referenceInvalidname).toBe(nameuserInValid_4);
});

test('invalidnametest', () => {
  const nameuserInValid_5 = new Validator().validateUsername('_dmitriy_30-05-67_agler');
  expect(referenceInvalidname).toBe(nameuserInValid_5);
});

test('invalidnametest', () => {
  const nameuserInValid_6 = new Validator().validateUsername('-dmitriy_30-05-67_agler');
  expect(referenceInvalidname).toBe(nameuserInValid_6);
});
