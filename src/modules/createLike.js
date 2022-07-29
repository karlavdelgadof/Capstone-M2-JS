export default class InvolvementAPI {
  static async recordLike(id) {
    const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q2EecIDolyiDguQmkFIj/likes/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
      }),
    });
    const response = await result.text();
    return response;
  }

  static async getLikes() {
    const result = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q2EecIDolyiDguQmkFIj/likes/');
    const data = await result.json();

    return data;
  }

  static async displayLikes(id) {
    const likes = await InvolvementAPI.getLikes();
    const artistLikes = likes.filter((item) => item.item_id === id);
    const nLikes = artistLikes[0].likes;
    return nLikes;
  }
}
