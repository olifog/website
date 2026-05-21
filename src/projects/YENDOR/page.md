---
---

# YENDOR

a nethack-inspired programming game where you write code to control a bot navigating dungeons. we designed a new programming language from scratch and then built the entire game in it over 7 days for a game jam.

- [play it](https://olifog.itch.io/yendor) | [github](https://github.com/olifog/YENDOR)
- **won 1st place overall** in the [langjam gamejam](https://itch.io/jam/langjamgamejam/results) (34 entries, run by austin henley, CMU professor)

## the language: nh

we called it nh, which is sort of an evil child of C, Python, and OCaml. it compiles via Bison to C, then to WASM via Emscripten, with a custom garbage-collected C runtime in between that provides OpenGL bindings to the nh code. the entire game (minus shaders) is written in nh, which was an interesting constraint since we were designing the language at the same time as trying to build something real in it.

- [self-interpreter](https://github.com/olifog/YENDOR/tree/main/interpreter)
- [game code](https://github.com/olifog/YENDOR/tree/main/game)

## team

me, [seb hall](https://sebhall.vercel.app), ken lin, yoonjae hwang
