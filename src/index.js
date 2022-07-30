import artistsAPI from './modules/getArtistAPI.js';
import createCard from './modules/homeUI.js';
import CommentUI from './modules/commentUI.js';
import Comment from './modules/comment.js';
import modalWindow from './modules/modal.js';
import './style.css';

const artistCount = document.getElementById('artist-counter');

const commentPopup = document.getElementById('comment_popup');
const artistList = document.getElementById('artist-list');
const body = document.querySelector('body');

artistList.addEventListener('click', async (e) => {
  const artistId = e.target.parentElement.parentElement.id;
  commentPopup.innerHTML = '';
  commentPopup.appendChild(modalWindow(artistId));
  if (e.target.className === 'more') {
    const commetImage = document.getElementById('commet-image');
    const commentPageTitle = document.getElementById('comment-page-title');
    const artistFacts = document.getElementById('artist-facts');
    const commentList = document.getElementById('display-comments');
    const commentCount = document.getElementById('commets-count');
    commetImage.src = '';
    commentPageTitle.textContent = '';
    commentCount.textContent = '';
    commentList.textContent = '';

    // get artist id
    const artistId = e.path[2].id;
    commentPopup.classList.remove('hide');
    commentPopup.classList.add('show');
    const {
      type,
      id,
      name,
      shortcut,
      bios: [{ author }],
    } = await artistsAPI.getArtistById(artistId);
    commetImage.src = `https://api.napster.com/imageserver/v2/artists/${artistId}/images/356x237.jpg`;
    commentPageTitle.textContent = name;
    CommentUI.addFacts(artistFacts, [type, name, shortcut, author]);
    const result = await Comment.getComments(id);

    commentCount.innerHTML = `Comments (${Comment.commentCounter(result)})`;

    if (result.length > 0) {
      result.forEach((comment) => CommentUI.showComments(commentList, comment));
    }
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
  const commentList = document.getElementById('display-comments');
  const date = new Date();
  const dateString = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  commentList.appendChild(
    CommentUI.addComments(commentList, {
      creation_date: dateString,
      comment: message,
      username: name,
    }),
  );

  Comment.postComments(artistId, name, message);
});

document.addEventListener('DOMContentLoaded', async () => {
  const artists = await artistsAPI.getArtist();
  artistCount.textContent = `(${artists.length})`;
  artists.forEach(createCard);
});
