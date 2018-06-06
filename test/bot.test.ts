import Bot from '../src/Bot';
import * as enums from '../src/common/interfaces';
import { Restaurants } from '../src/common/enums/restaurants';

const originalLog = console.log;
let dayInfo: any;
let rtm: any;
let web: any;
let restaurantHandler: any;
let cron: any;

afterAll(() => {
    console.log = originalLog;
});

beforeEach(() => {
    dayInfo = {
        getDayInfo: jest.fn(),
    };
    rtm = {
        on: jest.fn(),
        start: jest.fn(),
    };
    web = {
        chat: {
            postMessage: jest.fn(),
        },
    };
    restaurantHandler = jest.fn();
    cron = function () {
        this.start = jest.fn();
    };

    console.log = jest.fn();
});

describe('Cron', () => {
    const originalError = console.error;
    let cron = jest.fn();
    let testedClass: Bot;
    let web: any = {
        channels: {
            history: jest.fn(),
        },
    };

    beforeEach(() => {
        testedClass = new Bot(
            'slack',
            'zomato',
            dayInfo,
            rtm,
            web,
            restaurantHandler,
            cron,
        );

        console.error = jest.fn();
    })

    test('Cron settings', () => {
        expect(cron.mock.calls[0][0].timeZone).toBe('Europe/Prague');
        expect(cron.mock.calls[0][0].start).toBe(false);
        expect(cron.mock.calls[0][0].cronTime).toBe('0 8 * * 1-5');
    });

    test('Send all resolve', done => {
        web.channels.history.mockResolvedValue({
            messages: [],
        });

        const onTick = cron.mock.calls[0][0].onTick;

        onTick().then(() => {
            const mockError: any = console.error;
            expect(mockError.mock.calls.length).toBe(1);
            done();
        });
    });

    test('Send all resolve', done => {
        web.channels.history.mockResolvedValue({
            messages: [{
                text: " all",
            }],
        });

        const onTick = cron.mock.calls[0][0].onTick;

        onTick().then(() => {
            const mockError: any = console.error;
            expect(mockError.mock.calls.length).toBe(0);
            done();
        });
    });
});

test('Slack token throws', () => {
    const testedClass: Bot = new Bot(
        '',
        'zomato',
        dayInfo,
        rtm,
        web,
        restaurantHandler,
        cron,
    );

    expect(() => {
        testedClass.start();
    }).toThrow(/^No slack token specified in env TOKEN$/);
});

test('Zomato key throws', () => {
    const testedClass: Bot = new Bot(
        'slack',
        '',
        dayInfo,
        rtm,
        web,
        restaurantHandler,
        cron,
    );

    expect(() => {
        testedClass.start();
    }).toThrow(/^No Zomato api key specified in env ZOMATO$/);
});

test('Start', () => {
    const startMock = jest.fn();
    cron = function () {
        this.start = startMock;
    };

    const testedClass: Bot = new Bot(
        'slack',
        'zomato',
        dayInfo,
        rtm,
        web,
        restaurantHandler,
        cron,
    );

    testedClass.start();

    const rtmCalls = rtm.on.mock.calls;
    expect(rtmCalls.length).toBe(3);
    expect(rtm.start.mock.calls.length).toBe(1);
    expect(startMock.mock.calls.length).toBe(1);

    expect(rtmCalls[0][0]).toBe('authenticated');

    const authenticatedResult = rtmCalls[0][1]({
        self: {
            id: 2,
        },
        team: {
            id: 11,
        },
    });

    const log: any = console.log;

    expect(log.mock.calls.length).toBe(1);

    rtmCalls[1][1]();

    expect(log.mock.calls.length).toBe(2);
});


describe('Handle message', () => {
    let testedClass: Bot;
    let handleMessage: any;

    beforeEach(() => {
        rtm = {
            on: jest.fn(),
            sendMessage: jest.fn(),
            start: jest.fn(),
        };

        web = {
            chat: {
                postMessage: jest.fn(),
            },
        };

        restaurantHandler = {
            sendMenu: jest.fn().mockResolvedValue('ok'),
        };

        testedClass = new Bot(
            'slack',
            'zomato',
            dayInfo,
            rtm,
            web,
            restaurantHandler,
            cron,
        );

        testedClass.start();

        handleMessage = rtm.on.mock.calls[2][1];
    });

    test('Help', () => {
        handleMessage({
            text: ' help',
            channel: ['D'],
        });

        const calls = rtm.sendMessage.mock.calls;
        expect(calls.length).toBe(1);
        expect(calls[0][0]).toBe(`Hello to you from Tombot, the amazing TechFides worker that can help you with almost anything!
Check out these commands:
        help
        alcapone
        beranek
        kocka
        lightofindia
        lloyds
        nepal
        selepka
        svatek
        all`);
    });

    test('Ignore message', () => {
        handleMessage({
            text: '',
            channel: ['D'],
            subtype: 'message_changed',
        });

        handleMessage({
            text: 'help',
            channel: ['C'],
        });

        const calls = rtm.sendMessage.mock.calls;
        expect(calls.length).toBe(0);
    });

    test('Joke', () => {
        handleMessage({
            text: ' joke',
            channel: ['D'],
        });

        const calls = rtm.sendMessage.mock.calls;
        expect(calls.length).toBe(1);
    });

    test('AlCapone', done => {
        const promises = handleMessage({
            text: ' alcapone',
            channel: ['D'],
        });

        expect(promises.length).toBe(1);

        Promise.all(promises).then(() => {
            const calls = restaurantHandler.sendMenu.mock.calls;
            expect(calls.length).toBe(1);
            expect(calls[0][0]).toBe(Restaurants.AlCapone);

            done();
        });
    });

    test('Beranek', done => {
        const promises = handleMessage({
            text: ' beranek',
            channel: ['D'],
        });

        expect(promises.length).toBe(1);

        Promise.all(promises).then(() => {
            const calls = restaurantHandler.sendMenu.mock.calls;
            expect(calls.length).toBe(1);
            expect(calls[0][0]).toBe(Restaurants.Beranek);

            done();
        });
    });

    test('Zelena Kocka', done => {
        const promises = handleMessage({
            text: ' kocka',
            channel: ['D'],
        });

        expect(promises.length).toBe(1);

        Promise.all(promises).then(() => {
            const calls = restaurantHandler.sendMenu.mock.calls;
            expect(calls.length).toBe(1);
            expect(calls[0][0]).toBe(Restaurants.ZelenaKocka);

            done();
        });
    });

    test('Ligh of India', done => {
        const promises = handleMessage({
            text: ' light',
            channel: ['D'],
        });

        expect(promises.length).toBe(1);

        Promise.all(promises).then(() => {
            const calls = restaurantHandler.sendMenu.mock.calls;
            expect(calls.length).toBe(1);
            expect(calls[0][0]).toBe(Restaurants.LightOfIndia);

            done();
        });
    });

    test('LLods', done => {
        const promises = handleMessage({
            text: ' lloyds',
            channel: ['D'],
        });

        expect(promises.length).toBe(1);

        Promise.all(promises).then(() => {
            const calls = restaurantHandler.sendMenu.mock.calls;
            expect(calls.length).toBe(1);
            expect(calls[0][0]).toBe(Restaurants.LLoyds);

            done();
        });
    });

    test('Nepal', done => {
        const promises = handleMessage({
            text: ' nepal',
            channel: ['D'],
        });

        expect(promises.length).toBe(1);

        Promise.all(promises).then(() => {
            const calls = restaurantHandler.sendMenu.mock.calls;
            expect(calls.length).toBe(1);
            expect(calls[0][0]).toBe(Restaurants.Nepal);

            done();
        });
    });

    test('Selepka', done => {
        const promises = handleMessage({
            text: ' selepka',
            channel: ['D'],
        });

        expect(promises.length).toBe(1);

        Promise.all(promises).then(() => {
            const calls = restaurantHandler.sendMenu.mock.calls;
            expect(calls.length).toBe(1);
            expect(calls[0][0]).toBe(Restaurants.Selepka);

            done();
        });
    });

    test('All', () => {
        const promises = handleMessage({
            text: ' all',
            channel: ['D'],
        });

        expect(promises.length).toBe(8);
    });
});
