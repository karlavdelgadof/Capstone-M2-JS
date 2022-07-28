import artistsAPI from './modules/getArtistAPI';
import createCard from './modules/homeUI';
import './style.css';

document.addEventListener('DOMContentLoaded', async () => {
  const artists = await artistsAPI.getArtist();
  artists.forEach(createCard);
});

