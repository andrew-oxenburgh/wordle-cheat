import words from '../wordleOne/wordle-words'

describe('demo tests', () => {
   test('expected to fail', () => {
      expect(words.length).toBe(2315);
   });

   test('expected to pass', () => {
      expect(1 + 1).toBe(2);
   });
});
export { }