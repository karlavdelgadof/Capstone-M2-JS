export default class CommentUI {
  static addFacts = async (parentElement, facts) => {
    // clear old entries
    parentElement.innerHTML = '';
    const fact1 = document.createElement('p'); // [type, name, shortcut, author]
    fact1.textContent = `Name: ${facts[1]}`;
    const fact2 = document.createElement('p');
    fact2.textContent = `Type: ${facts[0]}`;
    const fact3 = document.createElement('p');
    fact3.textContent = `Shortcut: ${facts[2]}`;
    const fact4 = document.createElement('p');
    fact4.textContent = `Author: ${facts[3]}`;

    parentElement.appendChild(fact1);
    parentElement.appendChild(fact2);
    parentElement.appendChild(fact3);
    parentElement.appendChild(fact4);

    return parentElement;
  };

  static showComments = (
    ele,
    { creation_date: date, comment: message, username: name },
  ) => {
    const {
      creation_date: creationDate,
      comment,
      username,
    } = { creation_date: date, comment: message, username: name };
    const comEl = document.createElement('p');
    comEl.innerText = `${creationDate} ${username} ${comment} `;
    // console.log(comEl);
    ele.appendChild(comEl);
    return comEl;
  };
}
