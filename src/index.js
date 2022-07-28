import artistsAPI from './modules/getArtistAPI';
import createCard from './modules/homeUI';
import './style.css';

const artistList = document.getElementById('artist-list');
const commentPopup = document.getElementById('comment_popup');
const closeModal = document.getElementById('close-modal');

artistList.addEventListener('click', async (e) => {
  if (e.target.className === 'comment') {
    // get artist id
    const artistId = e.path[2].id;

    // show popup window
    commentPopup.classList.remove('hide');
    commentPopup.classList.add('show');

    // get artist data
    const {
      type,
      id,
      name,
      shortcut,
      bios: [{ author }],
    } = await artistsAPI.getArtistById(artistId);
    const source = `https://api.napster.com/imageserver/v2/artists/${artistId}/images/356x237.jpg`;

    
  }
});

closeModal.addEventListener('click', () => {
  // hide comment popup window
  commentPopup.classList.add('hide');
  commentPopup.classList.remove('show');
});

document.addEventListener('DOMContentLoaded', async () => {
  const artists = await artistsAPI.getArtist();
  console.log(artists);
  artists.forEach(createCard);
});
