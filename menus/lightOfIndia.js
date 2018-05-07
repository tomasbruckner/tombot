const slackMenuHandler = require('./slackMenuHandler');
const request = require('request');
const cheerio = require('cheerio');

const URL = 'http://www.lightofindia.cz/lang-cs/denni-menu';

module.exports = {
    getMenu,
};

function getMenu() {
    return new Promise((resolve, reject) => {
        request(URL, (err, res, body) => {
            if (err) {
                return reject(err);
            } else if (!res || res.statusCode !== 200) {
                return reject(res);
            }

            let nodes;
            try {
                const $ = cheerio.load(body);
                nodes = $(`td[valign="top"]`)[0].childNodes;
            } catch (e) {
                return reject(e);
            }

            const slackMenu = createSlackMenu({ dailyMenu: getDishes({ nodes }) });
            return resolve(slackMenu);

        });
    });
}

function getDishes({ nodes }) {
    const dayIndex = new Date().getDay();

    if (dayIndex === 0 || dayIndex > 5) {
        return [];
    }

    for (let i = 0, h2 = 0; i, nodes.length; i++) {
        if (nodes[i].type === 'tag' && nodes[i].name === 'h2') {
            h2++;
        }

        if (h2 === dayIndex) {
            let dishes = [];
            while (nodes[++i].type === 'text' || nodes[i].name === 'br') {
                if (nodes[i].name === 'br') {
                    continue;
                }

                const dish = nodes[i].data;
                dishes.push({
                    dish: {
                        name: getMenuName({ dish }),
                        price: getMenuPrice({ dish }),
                    }
                });
            }

            return dishes;
        }
    }
}

function getMenuName({ dish }) {
    return dish.trim().replace(/\d+Kč ?/i, '');
}

function getMenuPrice({ dish }) {
    let price = '';

    const matches = dish.match(/\d+Kč/i);

    if (matches) {
        price = matches[0];
    }

    return price;
}

function createSlackMenu({ dailyMenu }) {
    const opts = {
        dailyMenu,
        title: "Light of India's menu",
        title_link: "http://www.lightofindia.cz/lang-cs/denni-menu",
    };

    return slackMenuHandler.createSlackMenu(opts);
}
