const createForm = (artistId) => {
  const theForm = document.createElement('form');
  theForm.setAttribute('method', 'POST');
  theForm.setAttribute('id', 'comment-form');
  theForm.className = artistId;

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
  modalBtn.innerHTML = '&times;';
  return modalBtn;
};

const mainTitle = (tag, id) => {
  const header = document.createElement(tag);
  header.setAttribute('id', id);
  return header;
};

const createModal = (artistId) => {
  const commentWrapper = createDiv(['comment-wrapper']);

  const artistImage = createDiv(['artist-image']);
  const grpImgh1 = createIdDiv('grpImgH1');

  const ImageTag = createImage();
  const h1Title = mainTitle('h1', 'comment-page-title');

  grpImgh1.appendChild(ImageTag);
  grpImgh1.appendChild(h1Title);

  const modalBtn = createModalBtn();

  artistImage.appendChild(grpImgh1);
  artistImage.appendChild(modalBtn);

  const artistFact = createIdDiv('artist-facts');

  const h2Title = mainTitle('h2', 'commets-count');

  const displayComments = createIdDiv('display-comments');

  const theForm = createForm(artistId);

  commentWrapper.appendChild(artistImage);
  commentWrapper.appendChild(artistFact);
  commentWrapper.appendChild(h2Title);
  commentWrapper.appendChild(displayComments);
  commentWrapper.appendChild(theForm);

  return commentWrapper;
};

export default createModal;
