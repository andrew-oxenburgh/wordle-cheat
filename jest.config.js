// filename: jest.config.ts

const config = {
   preset: 'ts-jest',
   testEnvironment: 'jsdom',
   verbose: true,
   globals: {
      'ts-jest': {
         tsconfig: 'tsconfig.test.json'
      }
   },
};
export default config;
