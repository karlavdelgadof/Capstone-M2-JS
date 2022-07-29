const createForm = () => {
  const theForm = document.createElement('form');
  theForm.setAttribute('method', 'POST');
  theForm.setAttribute('id', 'comment-form');

  const nameField = document.createElement('input');
  nameField.setAttribute('type', 'text');
  nameField.setAttribute('placeholder', 'Your name ...');
  nameField.setAttribute('id', 'name-field');

  const textArea = document.createElement('textarea');
  textArea.setAttribute('placeholder', 'Type your comment here ...');
  textArea.setAttribute('id', 'textarea-field');

  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('id', 'submit-comment');
  submitBtn.setAttribute('value', 'Submit');

  theForm.appendChild(nameField);
  theForm.appendChild(textArea);
  theForm.appendChild(submitBtn);

  return theForm;
};

const createDiv = (classArr) => {
  const divider = document.createElement('div');
  divider.classList.add(...classArr);
  return divider;
};

const createIdDiv = (id) => {
  const idDiv = document.createElement('div');
  idDiv.setAttribute('id', id);
  return idDiv;
};

const createImage = () => {
  const imageTag = document.createElement('img');
  imageTag.setAttribute('id', 'commet-image');
  imageTag.setAttribute('src', 'close-modal');
  return imageTag;
};

const createModalBtn = () => {
  const modalBtn = document.createElement('button');
  modalBtn.setAttribute('type', 'button');
  modalBtn.setAttribute('id', 'close-modal');
  modalBtn.textContent = 'X';
  return modalBtn;
};

const mainTitle = (tag, id) => {
  const header = document.createElement(tag);
  header.setAttribute('id', id);
  return header;
};

const createModal = () => {
  const commentWrapper = createDiv(['comment-wrapper']);
  const artistImage = createDiv(['artist-image']);

  const ImageTag = createImage();
  const modalBtn = createModalBtn();

  artistImage.appendChild(ImageTag);
  artistImage.appendChild(modalBtn);

  const h1Title = mainTitle('h1', 'comment-page-title');

  const artistFact = createIdDiv('artist-facts');

  const h2Title = mainTitle('h2', 'commets-count');

  const displayComments = createIdDiv('display-comments');

  const theForm = createForm();

  commentWrapper.appendChild(artistImage);
  commentWrapper.appendChild(h1Title);
  commentWrapper.appendChild(artistFact);
  commentWrapper.appendChild(h2Title);
  commentWrapper.appendChild(displayComments);
  commentWrapper.appendChild(theForm);

  return commentWrapper;
};

export default createModal;

/*
<div class="commet-wrapper">
            <!-- image & close button button div -->
            <div class="artist-image">
                <img id="commet-image" src=""/>
                <button type="button" id="close-modal"> x </button>
            </div>

            <h1 id="comment-page-title"></h1>
            <div id="artist-facts"></div>
            <h2 id="commets-count"></h2>
            <div id="display-comments"></div>
            <form action="POST" id="comment-form">
                <input type="text" placeholder="Your name" id="name-field">
                <textarea placeholder="Type your comment here ..." id="textarea-field"></textarea>
                <input type="submit" id="submit-comment" value="Submit"/>
            </form>
         </div>


*/ 
