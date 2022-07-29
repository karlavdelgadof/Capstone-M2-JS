import artistsAPI from './modules/getArtistAPI.js';
import createCard from './modules/homeUI.js';
import './style.css';

document.addEventListener('DOMContentLoaded', async () => {
  const artists = await artistsAPI.getArtist();
  artists.forEach(createCard);
});
