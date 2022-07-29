import InvolvementAPI from "./createLike";

const artistsList = document.getElementById('artist-list');

const createCard = async (artist) => {
  const artistCard = document.createElement('div');
  artistCard.className = 'artist';
  artistCard.setAttribute('id', artist.id);
  artistsList.appendChild(artistCard);

  const artistImg = document.createElement('img');
  artistImg.className = 'artist-img';
  artistImg.src = `https://api.napster.com/imageserver/v2/artists/${artist.id}/images/356x237.jpg`;
  artistCard.appendChild(artistImg);

  const artistInfo = document.createElement('div');
  artistInfo.className = 'artist-info';
  artistCard.appendChild(artistInfo);

  const topInfo = document.createElement('div');
  topInfo.className = 'top-info';
  artistInfo.appendChild(topInfo);

  const artistName = document.createElement('h3');
  artistName.textContent = artist.name;
  topInfo.appendChild(artistName);

  const likesCont = document.createElement('div')
  likesCont.className = 'likes-container';
  topInfo.appendChild(likesCont) 

  const likesIcon = document.createElement('i');
  likesIcon.classList.add('fa-solid', 'fa-heart');
  likesCont.appendChild(likesIcon);

  let clicks = 0;

  likesIcon.addEventListener('click', () => {
    clicks += 1
    likesIcon.classList.add('liked');
    const isLiked = (num) => {
      if (num % 2 != 0) {
        InvolvementAPI.recordLike(artist.id)
      } else {
        likesIcon.classList.remove('liked');
        InvolvementAPI.displayLikes(artist.id)
      }
    }
    isLiked(clicks)
  })
  
  const likesCount = document.createElement('span');
  likesCount.className = 'likes';
  likesCount.textContent = await InvolvementAPI.displayLikes(artist.id);
  likesCont.appendChild(likesCount);

  const commentBtn = document.createElement('button');
  commentBtn.className = 'more';
  commentBtn.setAttribute('type', 'button');
  commentBtn.textContent = '+ More';
  artistInfo.appendChild(commentBtn);
  
  InvolvementAPI.getLikes()
};

export default createCard;