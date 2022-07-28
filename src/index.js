import artistsAPI from './modules/getArtistAPI';
import createCard from './modules/homeUI';
import CommentUI from './modules/commentUI.js';
import Comment from './modules/comment.js';
import './style.css';

const artistList = document.getElementById('artist-list');
const commentPopup = document.getElementById('comment_popup');
const closeModal = document.getElementById('close-modal');
const commetImage = document.getElementById('commet-image');
const commentPageTitle = document.getElementById('comment-page-title');
const artistFacts = document.getElementById('artist-facts');
const commentForm = document.getElementById('comment-form');

artistList.addEventListener('click', async (e) => {
  console.log('here i am');
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
      id,
      name,
      shortcut,
      bios: [{ author }],
    } = await artistsAPI.getArtistById(artistId);
    // add image source
    commetImage.src = `https://api.napster.com/imageserver/v2/artists/${artistId}/images/356x237.jpg`;
    commentPageTitle.textContent = name;
    commentForm.setAttribute('name', id);

    // add artist facts
    CommentUI.addFacts(artistFacts, [type, name, shortcut, author]);
  }
});

closeModal.addEventListener('click', () => {
  // hide comment popup window
  commentPopup.classList.add('hide');
  commentPopup.classList.remove('show');
});

commentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = commentForm.elements[0].value;
  const message = commentForm.elements[1].value;
  const artistId = commentForm.name;
  const result = await Comment.getComments(artistId, name, message);
  console.log(result);
});

document.addEventListener('DOMContentLoaded', async () => {
  const artists = await artistsAPI.getArtist();
  artists.forEach(createCard);
});
