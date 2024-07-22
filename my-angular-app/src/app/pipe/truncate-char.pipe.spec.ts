import { TruncateCharPipe } from './truncate-char.pipe';

describe('TruncateCharPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateCharPipe();
    expect(pipe).toBeTruthy();
  });
});
