export default class CommentUI {
  static addFacts = async (parentElement, facts) => {
    parentElement.innerHTML = '';
    const fact1 = document.createElement('p');
    fact1.textContent = `Type: ${facts[0]}`;
    const fact3 = document.createElement('p');
    fact3.textContent = `Shortcut: ${facts[2]}`;
    const fact4 = document.createElement('p');
    fact4.textContent = `Author: ${facts[3]}`;

    parentElement.appendChild(fact1);
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
    ele.appendChild(comEl);
    return comEl;
  };

  static addComments = (
    ele,
    { creation_date: date, comment: message, username: name },
  ) => this.showComments(ele, {
    creation_date: date,
    comment: message,
    username: name,
  });

  static addComments = (ele,
    { creation_date: date, comment: message, username: name }) => this.showComments(ele,
    { creation_date: date, comment: message, username: name });
}
