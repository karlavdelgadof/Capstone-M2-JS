export default class artistsAPI {
  static async getArtist() {
    const response = await fetch(
      'https://api.napster.com/v2.2/artists/top?apikey=ZjA0ZmYxZmItOTI1Ni00YTdjLWEzMTYtMjAyZDc1OTc3NzBh&limit=30&offset=22',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data.artists;
  }

  static getArtistById = async (artistId) => {
    const response = await fetch(
      `https://api.napster.com/v2.2/artists/${artistId}?apikey=ZjA0ZmYxZmItOTI1Ni00YTdjLWEzMTYtMjAyZDc1OTc3NzBh`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data.artists[0];
  };
}
