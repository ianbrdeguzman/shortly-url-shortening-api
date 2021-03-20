import Api from './Api.js';

const api = new Api();
api.shortenLink();

document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('active');
});
