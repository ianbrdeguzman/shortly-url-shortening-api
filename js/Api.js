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
