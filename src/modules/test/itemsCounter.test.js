/** * @jest-environment jsdom */

test('Array [1,2,3,4,5,6] should return 6', () => {
  const mockAPI = () => Promise.resolve({ items: [1, 2, 3, 4, 5, 6] });
  mockAPI().then((result) => {
    const artistArr = result.items;
    const artistCounter = artistArr.length;
    expect(artistCounter).toBe(6);
  });
});
