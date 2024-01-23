# Tombot SlackBot
Simple implementation of [slack](https://slack.com/) bot that tells you, who has name day today (in czech) and daily menu for some restaurants.

## How to use it
Send him message in #lunchtime channel:
```
@tombot help
```

Or you can send him Direct message without *@tombot*:
```
help
```

### Supported commands
- help
- alcapone
- drevak
- lightofindia
- tao
- padagali
- svatek - shows whose name day is today
- all - shows menu for every restaurant + name day

## How to run it
```bash
TOKEN=xoxb-3188123 node index.js
```

Use your own API key for TOKEN.

Alternatively, you can move `process.template.json` to `process.json`, set your variables there and run `pm2 start`. PM2 si a process manager, that will automatically restart your application if it crashes.

### Docker
There is also Docker support. Just run `docker-compose up`.
