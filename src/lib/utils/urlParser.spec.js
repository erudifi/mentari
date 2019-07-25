import { getGoogleStorageFilename } from './urlParser';

test('getGoogleStorageFilename', () => {
  const testString = 'https://storage.googleapis.com/example-production/an-upload%2FAnUpload-123.png';
  const expectedResult = 'AnUpload-123.png';
  expect(getGoogleStorageFilename(testString)).toEqual(expectedResult);
});