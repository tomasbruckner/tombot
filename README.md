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
- beranek
- kocka
- lightofindia
- lloyds
- nepal
- selepka
- svatek - shows whose name day is today
- all - shows menu for every restaurant + name day

## How to run it

```bash
TOKEN=xoxb-3188123  ZOMATO=ec19ca2 node index.js
```

Use your own API key for  TOKEN and ZOMATO.
