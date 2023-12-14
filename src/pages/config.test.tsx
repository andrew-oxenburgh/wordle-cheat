
import pageInfo from './config';
export { }
describe('thingy', () => {
   test('renders learn react link', () => {
      expect(pageInfo).toEqual({
         'wordle-one': {
            name: 'wordle-one',
            title: 'Wordle One',
            link: '#/wordle-one',
            nextPage: 'wordle-two',
            prevPage: 'home',
            shortDesc: 'This is a Wordle One page',
            longDesc: [
               'This is a Wordle One page',
               'with a longer description'
            ],
            underConstruction: false
         },
         'home': {
            name: 'home',
            title: 'Home',
            link: '#/home',
            nextPage: 'wordle-one',
            prevPage: 'wordle-two',
            shortDesc: 'This is a Home page',
            longDesc: [
               'This is a Home page',
               'with a longer description'
            ],
            underConstruction: false
         },
      });
   })
})


export { }