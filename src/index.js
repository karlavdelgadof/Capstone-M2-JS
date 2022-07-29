import artistsAPI from './modules/getArtistAPI';
import createCard from './modules/homeUI';
import CommentUI from './modules/commentUI.js';
import Comment from './modules/comment.js';
import modalWindow from './modules/modal.js';
import './style.css';

const commentPopup = document.getElementById('comment_popup');
const artistList = document.getElementById('artist-list');

artistList.addEventListener('click', async (e) => {
  const artistId = e.target.parentElement.parentElement.id;
  commentPopup.appendChild(modalWindow(artistId));
  if (e.target.className === 'more') {
    const commetImage = document.getElementById('commet-image');
    const commentPageTitle = document.getElementById('comment-page-title');
    const artistFacts = document.getElementById('artist-facts');
    commetImage.src = '';
    commentPageTitle.textContent = '';
    const artistId = e.path[2].id;
    commentPopup.classList.remove('hide');
    commentPopup.classList.add('show');
    const {
      type,
      name,
      shortcut,
      bios: [{ author }],
    } = await artistsAPI.getArtistById(artistId);
    commetImage.src = `https://api.napster.com/imageserver/v2/artists/${artistId}/images/356x237.jpg`;
    commentPageTitle.textContent = name;
    CommentUI.addFacts(artistFacts, [type, name, shortcut, author]);
  }
});

commentPopup.addEventListener('click', (e) => {
  if (e.target.id === 'close-modal') {
    commentPopup.classList.add('hide');
    commentPopup.classList.remove('show');
  }
});

commentPopup.addEventListener('submit', async (e) => {
  e.preventDefault();
  const commentForm = e.target;
  const name = commentForm.elements[0].value;
  const message = commentForm.elements[1].value;
  const artistId = commentForm.className;
  commentForm.elements[0].value = '';
  commentForm.elements[1].value = '';
  const result = await Comment.postComments(artistId, name, message);
  // console.log(result);
});

document.addEventListener('DOMContentLoaded', async () => {
  const artists = await artistsAPI.getArtist();
  artists.forEach(createCard);
});
