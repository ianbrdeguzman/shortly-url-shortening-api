import API from './API.js';
import UI from './UI.js';

class App {
    update() {
        this.submitForm();
        this.toggleMenu();
    }
    submitForm() {
        const form = document.querySelector('form');
        form.addEventListener('submit', async (e) => {
            const input = document.querySelector('#url').value;
            e.preventDefault();
            if (input) {
                ui.toggleloading();
                const data = await api.getLink(input);
                const { original_link, short_link } = data.result;
                ui.createLink(original_link, short_link);
                ui.toggleloading();
                ui.resetForm();
                this.copyLink();
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
            });
        });
    }
}

const app = new App();
const api = new API();
const ui = new UI();

app.update();
