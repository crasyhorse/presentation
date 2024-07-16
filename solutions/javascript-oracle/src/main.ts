const formElem = document.querySelector('form') as HTMLFormElement;
const inputElem = document.getElementById('name') as HTMLInputElement;
const listElem = document.querySelector('ul') as HTMLUListElement;

const oracleMessage = (): string => {
    const index = Math.floor(Math.random() * 3);

    return ['Your commit messages will be full of joy today!', 'Beware of black cats!', '42 represents all meaning of life'][index];
};

const getAdvice = (e: SubmitEvent): void => {
    e.preventDefault();

    const val = inputElem.value;
    const newListItem = document.createElement('li');

    newListItem.textContent = `Hi ${val ? val : 'unknown'}! This is my advice for you: ${oracleMessage()}`;
    listElem.appendChild(newListItem);

    inputElem.value = '';
};

formElem.addEventListener('submit', getAdvice);


