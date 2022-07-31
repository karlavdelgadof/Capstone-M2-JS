export default class Comment {
  static postComments = async (artistId, username, comment) => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DDR3QxgE4QHuteJe2GL7/comments',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: artistId,
          username,
          comment,
        }),
      },
    );
    const data = await response.json();
    return data;
  };

  static getComments = async (artistId) => {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DDR3QxgE4QHuteJe2GL7/comments?item_id=${artistId}`,
      {
        method: 'GET',
        header: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    const data = await response.text();
    return JSON.parse(data);
  };

  static commentCounter = (commentsArray) => {
    if (commentsArray.length) return commentsArray.length;
    return 0;
  };
}
