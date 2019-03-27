import { CopyrightPipe } from './copyright.pipe';

fdescribe('CopyrightPipe', () => {

  it('create an instance', () => {
    const pipe = new CopyrightPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display current year at the end', () => {
    const pipe = new CopyrightPipe();

    const result = pipe.transform('Pipe Testing');

    expect(result).toBe('Pipe Testing ' + new Date().getFullYear());
  });
});
