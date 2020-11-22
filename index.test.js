import {addNumbers} from './index.js';
// import test, {expect} from 'jest';


test('adds 1 + 2 to return 3', () => {
  expect(addNumbers(1,2)).toBe(3);
});

test('adds 1 + 2 + 3 to return 6', () => {
  expect(addNumbers(1,2,3)).toBe(6);
});