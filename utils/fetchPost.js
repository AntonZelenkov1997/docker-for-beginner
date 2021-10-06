const axios = require("axios");

const fetchPosts = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos/1',
        });

        return response.data
    } catch (e) {
        return String(e)
    }
}

module.exports = fetchPosts