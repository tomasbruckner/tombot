import Bot from "../src/Bot";
import { Restaurants } from "../src/common/enums";

describe("Bot", () => {
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

        console.log = jest.fn();
    });

    test("Slack token throws", () => {
        const testedClass: Bot = new Bot(
            "",
            "123",
            dayInfo,
            rtm,
            web,
            restaurantHandler,
        );

        expect(() => {
            testedClass.start();
        }).toThrow(/^No slack token specified in env TOKEN$/);
    });

    describe("Handle message", () => {
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
                sendMenu: jest.fn().mockResolvedValue("ok"),
            };

            testedClass = new Bot(
                "slack",
                "123",
                dayInfo,
                rtm,
                web,
                restaurantHandler,
            );

            testedClass.start();

            handleMessage = rtm.on.mock.calls[2][1];
        });

        test("Help", () => {
            handleMessage({
                channel: ["D"],
                text: " help",
            });

            const calls = rtm.sendMessage.mock.calls;
            expect(calls.length).toBe(1);
            expect(calls[0][0]).toBe(`Hello to you from Tombot, the amazing MMP bot that can help you with almost anything!
Check out these commands:
        help
        alcapone
        caruso
        drevak
        everest
        karel
        lightofindia
        padagali
        tao
        svatek
        all`);
        });

        test("Ignore message", () => {
            handleMessage({
                channel: ["D"],
                subtype: "message_changed",
                text: "",
            });

            handleMessage({
                channel: ["C"],
                text: "help",
            });

            const calls = rtm.sendMessage.mock.calls;
            expect(calls.length).toBe(0);
        });

        test("Joke", () => {
            handleMessage({
                channel: ["D"],
                text: " joke",
            });

            const calls = rtm.sendMessage.mock.calls;
            expect(calls.length).toBe(1);
        });

        test("AlCapone", done => {
            const promises = handleMessage({
                channel: ["D"],
                text: " alcapone",
            });

            expect(promises.length).toBe(1);

            Promise.all(promises).then(() => {
                const calls = restaurantHandler.sendMenu.mock.calls;
                expect(calls.length).toBe(1);
                expect(calls[0][0]).toBe(Restaurants.AlCapone);

                done();
            });
        });

        test("Light of India", done => {
            const promises = handleMessage({
                channel: ["D"],
                text: " light",
            });

            expect(promises.length).toBe(1);

            Promise.all(promises).then(() => {
                const calls = restaurantHandler.sendMenu.mock.calls;
                expect(calls.length).toBe(1);
                expect(calls[0][0]).toBe(Restaurants.LightOfIndia);

                done();
            });
        });

        test("Tao", done => {
            const promises = handleMessage({
                channel: ["D"],
                text: " tao",
            });

            expect(promises.length).toBe(1);

            Promise.all(promises).then(() => {
                const calls = restaurantHandler.sendMenu.mock.calls;
                expect(calls.length).toBe(1);
                expect(calls[0][0]).toBe(Restaurants.Tao);

                done();
            });
        });

        test("Drevak", done => {
            const promises = handleMessage({
                channel: ["D"],
                text: " drevak",
            });

            expect(promises.length).toBe(1);

            Promise.all(promises).then(() => {
                const calls = restaurantHandler.sendMenu.mock.calls;
                expect(calls.length).toBe(1);
                expect(calls[0][0]).toBe(Restaurants.Drevak);

                done();
            });
        });

        test("All", () => {
            const promises = handleMessage({
                channel: ["D"],
                text: " all",
            });

            const NUMBER_OF_EXPECTED_MENUS = 7;
            expect(promises.length).toBe(NUMBER_OF_EXPECTED_MENUS);
        });
    });
});
