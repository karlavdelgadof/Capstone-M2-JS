import artistsAPI from './modules/getArtistAPI';
import createCard from './modules/homeUI';
import './style.css';

const artistList = document.getElementById('artist-list');
const commentPopup = document.getElementById('comment_popup');
console.log(commentPopup);

artistList.addEventListener('click', (e) => {
  if (e.target.className === 'comment') {
    // show popup window
    commentPopup.classList.remove('hide');
    commentPopup.classList.add('show');
  }
});

document.addEventListener('DOMContentLoaded', async () => {
  const artists = await artistsAPI.getArtist();
  console.log(artists);
  artists.forEach(createCard);
});
