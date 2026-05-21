---
---

# cambridge battlecode

a 6-week programming competition where teams write python bots that fight in a turn-based strategy game, inspired by MIT battlecode. I co-led organisation, built basically all the infrastructure and platform from scratch, co-hosted weekly sprint tournament streams, and hosted the live finals.

- 1,500 players from 50+ countries across 500+ teams
- 5M+ games executed over the competition
- jump trading title sponsor, anthropic sponsor, £15k prize pool
- flew 60 international finalists to cambridge union for live finals with accommodation and flights covered
- [battlecode.cam](https://battlecode.cam) | [game.battlecode.cam](https://game.battlecode.cam) | [youtube](https://www.youtube.com/@CambridgeBattlecode)

## what I built

the game engine is written in rust with PyO3 bindings, compiled to python wheels via maturin and distributed on PyPI so competitors just `pip install cambc` and get the engine + CLI without needing docker or a rust toolchain.

match execution is sandboxed via nsjail with network isolation and a read-only filesystem, running on EC2 Graviton3 instances with the engine pinned to a specific CPU core for timing fairness. bot source files are AES-256 encrypted on disk so opponents can't read each other's code even though both are mounted in the same sandbox.

the scheduler is an idempotent lambda that runs every 10 minutes, creates matches by greedy pairing teams by rating with jitter, then dispatches to an AWS Batch fleet. rating happens inline in the runner via row-level locking so there's no delay between match completion and ladder update.

the platform is TanStack Start + React with Aurora Postgres, and includes a full tournament bracket system with live streaming reveal controls for the finals broadcast. there's also a phaser 3 replay visualiser with a protobuf format and turn-by-turn scrubbing.

## people

I was super fortunate to work with an incredible team: [james leung](https://www.leung.dev), andy wu, summer guo, alex pylypenko, cordelia wang, kotaro yoshizawa, and fredrik williamson.
