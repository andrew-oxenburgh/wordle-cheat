import * as _ from 'lodash'
import * as R from 'ramda'
import { stringConversion } from './textUtils'

describe('number conversions 2', () => {
   test('converts small number to locale string', () => {
      const expectedResult = {
         input: '1',
         kinds: [
            {
               kind: 'integer',
               conversions: [
                  {
                     name: 'locale',
                     value: '1'
                  },
                  {
                     name: 'date',
                     value: '1970-01-01T00:00:00.001Z'
                  },
               ]
            }
         ]
      }
      expect(stringConversion('1')).toEqual(expectedResult);
      const expectedResult2 = R.clone(expectedResult)
      expectedResult2.input = ' 1'
      expect(stringConversion(' 1')).toEqual(expectedResult2);
   });
});

describe('string conversion', () => {
   test('shows various formats', () => {
      const expectedResult = {
         input: 'hello world',
         kinds: [
            {
               kind: 'text',
               conversions: [
                  {
                     name: 'upperCase',
                     value: 'HELLO WORLD'
                  },
                  {
                     name: 'lowerCase',
                     value: 'hello world'
                  },
                  {
                     name: 'kebabCase',
                     value: 'hello-world'
                  },
                  {
                     name: 'camelCase',
                     value: 'helloWorld'
                  },
                  {
                     name: 'capitalize',
                     value: 'Hello world'
                  },
                  {
                     name: 'escape',
                     value: 'hello world'
                  },
               ]
            }
         ]
      }
      expect(stringConversion('hello world')).toEqual(expectedResult);
   });
});

export { }