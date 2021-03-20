class Api {
    shortenLink() {
        const input = document.querySelector('#url');

        const url = `https://api.shrtco.de/v2/shorten?url=${input.value}`;
        const form = document.querySelector('form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (input) {
                try {
                    console.log('input is not empty');
                    const response = await fetch(url);
                    console.log(response);
                    const data = await response.json();
                    console.log(data);
                } catch (err) {
                    console.error(err);
                }
            } else {
                console.log('input is empty');
                form.classList.add('error');
            }
        });
    }
}

export default Api;
