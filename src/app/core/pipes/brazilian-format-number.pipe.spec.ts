import { BrazilianNumberFormatPipe } from './brazilian-format-number.pipe';

describe('Pipe: word - break', () => {
  let pipe: BrazilianNumberFormatPipe;

  beforeEach(() => {
    pipe = new BrazilianNumberFormatPipe();
  });

  it('shuold created', () => {
    expect(pipe).toBeTruthy();
  });

  it('providing empty string', () => {
    expect(pipe.transform('')).toBe('');
  });
  it('providing 1 number string', () => {
    expect(pipe.transform('R$3')).toBe('R$ 3');
  });

  it('providing  not valid string - without numbers', () => {
    expect(pipe.transform('R$')).toBe('');
  });

  it('providing valid string ', () => {
    expect(pipe.transform('R$1,500.25')).toBe('R$ 1.500,25');
  });



});
