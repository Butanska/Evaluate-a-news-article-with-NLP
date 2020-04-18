import { handleSubmit } from './formHandler';

describe('Test if function is defined', ()=>{
  test('It should be defined', ()=>{
    expect(handleSubmit).toBeDefined;
  });
});