const artistsList = document.getElementById('artist-list');

const createCard = (artist) => {
  const artistCard = document.createElement('div');
  artistCard.className = 'artist';
  artistCard.setAttribute('id', artist.id
  artistsList.appendChild(artistCard);

  const artistImg = document.createElement('img');
  artistImg.className = 'artist-img';
  artistImg.src = `https://api.napster.com/imageserver/v2/artists/${artist.id}/images/356x237.jpg`
  artistCard.appendChild(artistImg);

  const artistInfo = document.createElement('div');
  artistInfo.className = 'artist-info';
  artistCard.appendChild(artistInfo);

  const topInfo = document.createElement('div')
  topInfo.className = 'top-info';
  artistInfo.appendChild(topInfo)

  const artistName = document.createElement('h3');
  artistName.textContent = artist.name
  topInfo.appendChild(artistName);

  const likesIcon = document.createElement('i');
  likesIcon.classList.add('fa-solid', 'fa-heart')
  topInfo.appendChild(likesIcon);

  const likesCount = document.createElement('span');
  likesCount.className = 'likes'
  likesCount.textContent = artist.likes
  topInfo.appendChild(likesCount);

  const commentBtn = document.createElement('button');
  commentBtn.className = 'comment';
  commentBtn.setAttribute('type', 'button');
  commentBtn.textContent = 'Comments';
  artistInfo.appendChild(commentBtn);

  const reservationBtn = document.createElement('button');
  reservationBtn.className = 'reservation';
  reservationBtn.setAttribute('type', 'button');
  reservationBtn.textContent = 'Reservation'
  artistInfo.appendChild(reservationBtn);
}

export default createCard