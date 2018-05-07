const request = require('request');
const slackMenuHandler = require('./slackMenuHandler');

const BERANEK_URL = 'https://developers.zomato.com/api/v2.1/dailymenu?res_id=16506737';

module.exports = {
    getMenu,
};

function getMenu({ zomatoApiKey }) {
    return new Promise((resolve, reject) => {
        request({
            url: BERANEK_URL,
            headers: {
                user_key: zomatoApiKey,
            },
        }, (err, res, body) => {
            if (err) {
                return reject(err);
            } else if (!res || res.statusCode !== 200) {
                return reject(res);
            }
            
            try {
                const dailyMenu = JSON.parse(body);
                const slackMenu = createSlackMenu({ dailyMenu });

                resolve(slackMenu);
            } catch (e) {
                return reject(body);
            }
        });
    });
}

function createSlackMenu({ dailyMenu }) {
    const opts = {
        dailyMenu,
        title: "U Bileho beranka's menu",
        title_link: "http://www.ubilehoberanka.cz/menu-dne",
    };

    return slackMenuHandler.createSlackMenu(opts);
}
