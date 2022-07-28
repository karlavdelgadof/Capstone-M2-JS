import Comment from '../comment.js';

describe('Test the count comments method', () => {
  const comments = [
    { comment: 'Hello', creation_date: '2022-07-28', username: 'Jane' },
    { username: 'Jane', creation_date: '2022-07-28', comment: 'Hello' },
    { username: 'bhjbhj', comment: 'jhvjh', creation_date: '2022-07-28' },
    { username: 'Jane', comment: 'Hello', creation_date: '2022-07-28' },
  ];

  describe('Get the length of the array', () => {
    test('Array length should be 4', () => {});
  });
});
