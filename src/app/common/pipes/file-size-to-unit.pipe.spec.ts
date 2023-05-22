import { FileSizeToUnitPipe } from './file-size-to-unit.pipe';

describe('FileSizeToUnitPipe', () => {
  const pipe = new FileSizeToUnitPipe();

  it('creates an instance of File-Size-To-Unit Pipe', () => {
    expect(pipe).toBeTruthy();
  });

  // it(`return readable file size unit`, () => {
  //   const fileInBytes: number = 7181631;
  //   const returnedSizeUnit = pipe.transform(fileInBytes);
  //   const expectedResult: string = '7 MB';

  //   expect(returnedSizeUnit).toEqual(expectedResult);
  // });
});