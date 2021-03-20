class Storage {
    static save(link, index) {
        localStorage.setItem(index, link);
    }
    static load() {
        const container = document.querySelector('.links-container');
        for (let i = 0; i < localStorage.length; i++) {
            container.insertAdjacentHTML('beforeend', localStorage[i]);
        }
    }
    static clear() {
        localStorage.clear();
    }
}

export default Storage;
