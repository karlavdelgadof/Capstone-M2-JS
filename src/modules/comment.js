export default class Comment {
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
}
