import { WordBreakPipe } from './word-break.pipe';

describe('Pipe: word - break', () => {
  let pipe: WordBreakPipe;

  beforeEach(() => {
    pipe = new WordBreakPipe();
  });

  it('shuold created', () => {
    expect(pipe).toBeTruthy();
  });

  it('providing empty string', () => {
    expect(pipe.transform('', 3)).toBe('');
  });

  it('providing  string break to 0 characters', () => {
    expect(pipe.transform('testing', 0)).toBe('...');
  });

  it('providing string with less charecters than break', () => {
    expect(pipe.transform('testing', 10)).toBe('testing');
  });

  it('providing a value returns value', () => {
    expect(pipe.transform('this is a long string', 8)).toBe('this is ...');
  });


});
