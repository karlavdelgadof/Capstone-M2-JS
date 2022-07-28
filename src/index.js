import artistsAPI from './modules/getArtistAPI.js';
import createCard from './modules/homeUI.js';
import Comment from './modules/comment.js';

import './style.css';

const artistList = document.getElementById('artist-list');
const commentPopup = document.getElementById('comment_popup');
const closeModal = document.getElementById('close-modal');
const commetImage = document.getElementById('commet-image');
const commentPageTitle = document.getElementById('comment-page-title');
const artistFacts = document.getElementById('artist-facts');

artistList.addEventListener('click', async (e) => {
  if (e.target.className === 'more') {
    // clear out earlier values
    commetImage.src = '';
    commentPageTitle.textContent = '';

    // get artist id
    const artistId = e.path[2].id;

    // show popup window
    commentPopup.classList.remove('hide');
    commentPopup.classList.add('show');

    // get artist data
    const {
      type,
      name,
      shortcut,
      bios: [{ author }],
    } = await artistsAPI.getArtistById(artistId);
    // add image source
    commetImage.src = `https://api.napster.com/imageserver/v2/artists/${artistId}/images/356x237.jpg`;
    commentPageTitle.textContent = name;

    // add artist facts
    Comment.addFacts(artistFacts, [type, name, shortcut, author]);
  }
});

closeModal.addEventListener('click', () => {
  // hide comment popup window
  commentPopup.classList.add('hide');
  commentPopup.classList.remove('show');
});

document.addEventListener('DOMContentLoaded', async () => {
  const artists = await artistsAPI.getArtist();
  artists.forEach(createCard);
});
