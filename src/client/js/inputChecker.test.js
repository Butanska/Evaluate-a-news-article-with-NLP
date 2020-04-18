import { urlValidation } from './inputChecker';

describe('RegExp to check if input is a valid URL', ()=>{
  test('It should be a valid URL', ()=>{
    let regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const validURL = 'https://www.soompi.com/article/1385301wpp/son-ye-jin-makes-generous-donation-to-help-fight-against-coronavirus';
    expect(regex.test(validURL)).toBe(true);
  });
});