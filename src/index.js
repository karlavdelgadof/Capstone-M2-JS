import './style.css';


const artists = [
  {
      id: 27,
      name: "Daft Punk",
      link: "https://www.deezer.com/artist/27",
      share: "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1658865293&utm_medium=web",
      picture: "https://api.deezer.com/artist/27/image",
      picture_small: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
      picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
      picture_big: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
      picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
      nb_album: 31,
      nb_fan: 4306754,
      radio: true,
      tracklist: "https://api.deezer.com/artist/27/top?limit=50",
      type: "artist",
      likes: 40

  },
  {
    id: 28,
    name: "MAGIC",
    link: "https://www.deezer.com/artist/27",
    share: "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1658865293&utm_medium=web",
    picture: "https://api.deezer.com/artist/27/image",
    picture_small: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
    picture_big: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
    picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
    nb_album: 32,
    nb_fan: 5306754,
    radio: true,
    tracklist: "https://api.deezer.com/artist/27/top?limit=50",
    type: "artist",
    likes: 40
  },
  {
    id: 29,
    name: "James Bay",
    link: "https://www.deezer.com/artist/27",
    share: "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1658865293&utm_medium=web",
    picture: "https://api.deezer.com/artist/27/image",
    picture_small: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
    picture_big: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
    picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
    nb_album: 33,
    nb_fan: 6306754,
    radio: true,
    tracklist: "https://api.deezer.com/artist/27/top?limit=50",
    type: "artist",
    likes: 40
  },
  {
    id: 30,
    name: "Anchor",
    link: "https://www.deezer.com/artist/27",
    share: "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1658865293&utm_medium=web",
    picture: "https://api.deezer.com/artist/27/image",
    picture_small: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
    picture_big: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
    picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
    nb_album: 34,
    nb_fan: 7306754,
    radio: true,
    tracklist: "https://api.deezer.com/artist/27/top?limit=50",
    type: "artist",
    likes: 40

  },
  {
    id: 31,
    name: "Bring me the horizon",
    link: "https://www.deezer.com/artist/27",
    share: "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1658865293&utm_medium=web",
    picture: "https://api.deezer.com/artist/27/image",
    picture_small: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
    picture_big: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
    picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
    nb_album: 35,
    nb_fan: 8306754,
    radio: true,
    tracklist: "https://api.deezer.com/artist/27/top?limit=50",
    type: "artist",
    likes: 40
  },
  {
    id: 32,
    name: "AKON",
    link: "https://www.deezer.com/artist/27",
    share: "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1658865293&utm_medium=web",
    picture: "https://api.deezer.com/artist/27/image",
    picture_small: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
    picture_big: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
    picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
    nb_album: 36,
    nb_fan: 9306754,
    radio: true,
    tracklist: "https://api.deezer.com/artist/27/top?limit=50",
    type: "artist",
    likes: 40
  },
]

const artistsList = document.getElementById('artist-list');
const createCard = (card) => {
  const artistCard = document.createElement('div');
  artistCard.className = 'artist';
  artistsList.appendChild(artistCard);

  const artistImg = document.createElement('img');
  artistImg.className = 'artist-img';
  artistImg.src = card.picture_medium
  artistCard.appendChild(artistImg);

  const artistInfo = document.createElement('div');
  artistInfo.className = 'artist-info';
  artistCard.appendChild(artistInfo);

  const topInfo = document.createElement('div')
  topInfo.className = 'top-info';
  artistInfo.appendChild(topInfo)

  const artistName = document.createElement('h3');
  artistName.textContent = card.name
  topInfo.appendChild(artistName);

  const likesIcon = document.createElement('i');
  likesIcon.classList.add('fa-solid', 'fa-heart')
  topInfo.appendChild(likesIcon);

  const likesCount = document.createElement('span');
  likesCount.className = 'likes'
  likesCount.textContent = card.likes
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

artists.forEach(createCard)