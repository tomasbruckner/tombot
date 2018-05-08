const fs = require('fs');
const RTMClient = require('@slack/client').RTMClient;
const WebClient = require('@slack/client').WebClient;
const Nepal = require('./menus/nepal');
const Beranek = require('./menus/beranek');
const GreenCat = require('./menus/greenCat');
const LightOfIndia = require('./menus/lightOfIndia');
const LLoyds = require('./menus/lloyds');
const Selepka = require('./menus/selepka');

const SLACK_TOKEN = process.env.TOKEN;
const ZOMATO_KEY = process.env.ZOMATO;

if (!SLACK_TOKEN) {
    return console.error('No slack token specified in env TOKEN');
}

if (!ZOMATO_KEY) {
    return console.error('No Zomato api key specified in env ZOMATO');
}

let NAMES;

try {
    NAMES = JSON.parse(fs.readFileSync('./data/names.json', 'utf8'));
} catch (e) {
    console.error('No data/names.json file');
    return;
}

let PUBLIC_HOLIDAYS;

try {
    PUBLIC_HOLIDAYS = JSON.parse(fs.readFileSync('./data/publicHolidays.json', 'utf8'));
} catch (e) {
    console.error('No data/publicHolidays.json file');
    return;
}

main();
return;

function main() {
    const rtm = new RTMClient(SLACK_TOKEN, {
        useRtmConnect: true,
        dataStore: false
    });

    const web = new WebClient(SLACK_TOKEN);

    let channelListPromise = web.channels.list();

    let appData = {};

    rtm.on('authenticated', (connectData) => {
        appData.selfId = connectData.self.id;
        console.log(`Logged in as ${appData.selfId} of team ${connectData.team.id}`);
    });

    rtm.on('connected', () => {
        console.log(`Ready`);

        channelListPromise.then((res) => {
            const channel = res.channels.find(c => c.is_member);

            if (!channel) {
                console.log('This bot does not belong to any channels, invite it to at least one and try again');
            }
        })
    });

    rtm.on('message', handleMessage.bind(this, { rtm, appData, web }));

    rtm.start();
}

function handleMessage({ appData, rtm, web }, message) {
    // For structure of `message`, see https://api.slack.com/events/message
    if (message.subtype === 'message_changed') {
        return;
    }

    if (message.text.includes(`<@${appData.selfId}>`) || message.channel[0] === 'D') {        
        let all = false;

        if (/\bhelp(\b|\?)/i.test(message.text)) {
            const helpMessage = getHelpMessage();
            rtm.sendMessage(helpMessage, message.channel);
        }

        if (/\b(all)(\b|\?)/i.test(message.text)) {
            all = true;
        }

        if (all || /\b(svatek|meniny|nameday|name day)(\b|\?)/i.test(message.text)) {
            const res = getDayInfo();
            rtm.sendMessage(res, message.channel);
        }

        if (/\b(joke|vtip)(\b|\?)/i.test(message.text)) {
            rtm.sendMessage('http://files.explosm.net/comics/Rob/myothercat.png', message.channel);
        }

        if (all || /\b(lloyds|loyds)(\b|\?)/i.test(message.text)) {
            sendMenu({ getMenu: LLoyds.getMenu, web, message });
        }

        if (all || /\b(nepal)(\b|\?)/i.test(message.text)) {
            sendMenu({ getMenu: Nepal.getMenu, web, message });
        }

        if (all || /\b(beranek)(\b|\?)/i.test(message.text)) {
            sendMenu({ getMenu: Beranek.getMenu, web, message });
        }

        if (all || /\b(selepka|selepova)(\b|\?)/i.test(message.text)) {
            sendMenu({ getMenu: Selepka.getMenu, web, message });
        }

        if (all || /\b(light|lightofindia)(\b|\?)/i.test(message.text)) {
            sendMenu({ getMenu: LightOfIndia.getMenu, web, message });
        }

        if (all || /\b(cat|kocka)(\b|\?)/i.test(message.text)) {
            sendMenu({ getMenu: GreenCat.getMenu, web, message });
        }
    }
}

function getHelpMessage() {
    return `Hello to you from Tombot, the amazing TechFides worker that can help you with almost anything!
Check out these commands:
        help
        beranek
        kocka
        lightofindia
        lloyds
        nepal
        selepka
        svatek
        all`;
}

function sendMenu({ getMenu, web, message }) {
    getMenu({ zomatoApiKey: ZOMATO_KEY }).then(menu => {
        web.chat
            .postMessage({ channel: message.channel, text: '', attachments: menu })
            .then(console.log)
            .catch(console.error);
    })
    .catch(console.error);
}

function getCurrentDate() {
    const date = new Date();

    return `${date.getDate()}. ${date.getMonth() + 1}.`;
}

function getDayInfo() {
    const date = getCurrentDate();
    const names = NAMES[date];
    const publicHoliday = PUBLIC_HOLIDAYS[date];
    let dayInfo = `Dnes je ${date} `;

    if (names) {
        dayInfo += `Svatek ma: ${names.join(', ')}. Gratulujeme!\n`;
    }

    if (publicHoliday) {
        dayInfo += `Statni svatek: ${publicHoliday.name}!\n${publicHoliday.description}\n`;
    }

    return dayInfo;
}
