# Fridge Roast: One Line, Biggest Laugh

[![Fridge Roast: One Line, Biggest Laugh](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb.svg)](https://make.fun/competitions/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/gp897318-beep/g290-fridge-roast/rank.svg)](https://make.fun/competitions/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/gp897318-beep/g290-fridge-roast/reward.svg)](https://make.fun/competitions/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)

One line, at most 200 characters, roasting a smart fridge — entered in the
[make.fun competition](https://make.fun/competitions/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb).

## The line

> My smart fridge updated its firmware at 3 a.m., rebooted, and forgot how to be cold — $3,000 of software, outsmarted by a bag of frozen peas.

141 characters, one line. The angle: a firmware update — the most
smart-fridge-specific failure there is — makes the fridge fail at its one job,
staying cold. The turn lands on the first read and dodges the obvious cracks
about ordering groceries or watching you eat.

## How it works

`main.ts` (Node 22+) validates the line against the competition gate
(1–200 characters, a single line, not only whitespace), writes it to
`/output/entry.txt`, then reads it back and asserts it matches byte-for-byte.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
