const supertest = require('supertest'); // import supertest for client 
const app = require('../server'); // imports the app
const request = supertest(app); // creates a request client


//SUITE
describe('Sample Test', () => {
    //TEST CASES
    it('testing routes', async done => {
      // requests for 2 endpoints and gets back response  
      const response_one = await request.get('/');
      const response_two = await request.get('/first/all');

      // compare the response objects
      expect(JSON.parse(response_one.text).message).toBe('Main page');
      expect(JSON.parse(response_two.text).message).toBe('success');
      
      done();
    })
  })