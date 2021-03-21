<<<<<<< HEAD:js/Api.js
import UI from './UI.js';

class API {
    async getLink(input) {
        try {
            const url = `https://api.shrtco.de/v2/shorten?url=${input}`;
            const response = await fetch(url);
            const data = await response.json();
            if (!data.ok) {
                const error = new Error(data.error);
                throw error;
            } else {
                return data;
            }
        } catch (err) {
            alert(err);
            ui.toggleloading();
            ui.resetForm();
        }
    }
}

const ui = new UI();

export default API;
=======
//
import UI from './UI.js';

class API {
    async getLink(input) {
        try {
            const url = `https://api.shrtco.de/v2/shorten?url=${input}`;
            const response = await fetch(url);
            const data = await response.json();
            if (!data.ok) {
                const error = new Error(data.error);
                throw error;
            } else {
                return data;
            }
        } catch (err) {
            alert(err);
            ui.toggleloading();
            ui.resetForm();
        }
    }
}

const ui = new UI();

export default API;
>>>>>>> 77a08e8a974ec16a707e88acb6cb13ca0f913f0b:js/API.js
