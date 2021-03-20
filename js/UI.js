class UI {
    showError() {
        const form = document.querySelector('form');
        form.classList.add('error');
        setTimeout(() => {
            form.classList.remove('error');
        }, 5000);
    }
    toggleloading() {
        const loading = document.querySelector('.loading-container');
        loading.classList.toggle('active');
    }
    resetForm() {
        document.querySelector('form').reset();
    }
    showCopied(button) {
        button.style.backgroundColor = 'hsl(257, 27%, 26%)';
        button.textContent = 'Copied!';
    }
    createLink(originalLink, shortLink) {
        const container = document.querySelector('.links-container');
        const html = `
                <div class="link-content active">
                    <div>
                        <p>${originalLink}</p>
                    </div>
                    <div>
                        <p>https://${shortLink}</p>
                        <button class="btn copy">Copy</button>
                    </div>
                </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    }
}

export default UI;
