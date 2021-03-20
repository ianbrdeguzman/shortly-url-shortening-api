import API from './API.js';
import UI from './UI.js';
import Storage from './Storage.js';

class App {
    update() {
        this.toggleMenu();
        this.submitForm();
        Storage.load();
        this.copyLink();
    }
    submitForm() {
        const form = document.querySelector('form');
        form.addEventListener('submit', async (e) => {
            const input = document.querySelector('#url').value;
            e.preventDefault();
            if (input) {
                ui.toggleLoading();
                const data = await api.getLink(input);
                const { original_link, short_link } = data.result;
                ui.createLink(original_link, short_link);
                ui.toggleLoading();
                ui.resetForm();
                this.copyLink();
                this.storeLinks();
            } else {
                ui.showError();
            }
        });
    }
    toggleMenu() {
        document.querySelector('#menu-btn').addEventListener('click', () => {
            document.querySelector('ul').classList.toggle('active');
        });
    }
    copyLink() {
        const copyBtns = document.querySelectorAll('.copy');
        copyBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                const text = e.target.previousElementSibling.textContent;
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                textarea.remove();
                ui.showCopied(e.target);
                this.storeLinks();
            });
        });
    }
    storeLinks() {
        Storage.clear();
        const links = document.querySelectorAll('.link-content');
        console.log(links[0].outerHTML);
        links.forEach((link, index) => {
            Storage.save(link.outerHTML, index);
        });
    }
}

const app = new App();
const api = new API();
const ui = new UI();

app.update();
