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
    const data = await response.text();
    return data;
  };
}
