---
title: "Еженедельный дайджест #35: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "Mar 02 2026"
mascotMessages: [
  { text: "Фронти в эфире — выпуск #35! 🗞️", index: 0 },
  { text: "Я слежу за Interop 2026! 🤝", index: 1 },
  { text: "Я уже тестирую Chrome 145! 🚀", index: 2 },
  { text: "Я выбираю безопасный setHTML! 🔒", index: 3 },
  { text: "Я форматируюсь с Oxfmt beta! ⚡", index: 4 },
  { text: "Я загнал код в React Doctor! 🩺", index: 5 },
  { text: "Я снова в styled-components! 💅", index: 6 },
  { text: "Я радуюсь экономному Node! 🧠", index: 7 },
  { text: "Я изучаю WebMCP для агентов! 🤖", index: 8 },
  { text: "Я приближаю мир с OpenSeadragon! 🔍", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и Платформа
### [Всё, что вы не хотели знать про `visually-hidden`](https://dbushell.com/2026/02/20/visually-hidden/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
Глубокое погружение в «визуально скрытый, но доступный для скринридеров» контент. Разбираются нюансы, почему разные реализации могут вести себя по‑разному, и где легко случайно ухудшить доступность (например, скрыть фокус или «сломать» чтение).

### [Interop 2026: браузеры наконец догоняют друг друга](https://www.youtube.com/watch?v=UVIeyRE6zLU&utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
Подкаст/разбор инициатив Interop: цель — чтобы важные веб‑фичи работали **одинаково во всех движках**. Обсуждают то, где особенно много пользы для фронтенда: container style queries, anchor positioning, scroll‑driven animations, view transitions и т. п. (Внутри есть ссылка на [контекст про Interop этого года](https://webkit.org/blog/17818/announcing-interop-2026/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).)


### Как стилизовать новый псевдоэлемент `::search-text`

В статье [How to Style the New ::search-text](https://css-tricks.com/how-to-style-the-new-search-text-and-other-highlight-pseudo-elements/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) объясняется, как работать с новым псевдоэлементом `::search-text`.

Он позволяет стилизовать **результаты поиска по странице** (например, когда пользователь использует встроенный поиск браузера).

Это открывает новые возможности для улучшения UX — можно настраивать цвет фона, текста и другие параметры подсветки.

- [Как уважать системный размер текста на мобильных ОС](https://adrianroselli.com/2026/02/honoring-mobile-os-text-size.html?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — почему увеличение текста в Android/iOS не всегда масштабирует текст на веб‑странице и что с этим делать.
- [Нативные HTML‑компоненты не гарантируют хороший UX](https://adamsilver.io/blog/native-html-components-dont-guarantee-good-ux/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — напоминание, что «native» ≠ «удобно»: важно учитывать контекст, поведение, ожидания и доступность.
- [Navigation API стала Baseline (Newly Available) во всех основных браузерах](https://web.dev/blog/baseline-navigation-api?hl=en&utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — это значит, что API считается достаточно доступным «по умолча
- [PWAscore: сравнение возможностей PWA в мобильных браузерах](https://pwascore.com/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — «скоркарды» по Chrome/Firefox на Android и Safari на iOS на основе 200+ PWA‑фич.
- [Sugarcube Toolkit: дизайн‑токены в CSS‑переменные, утилиты и стили компонентов](https://sugarcube.sh/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — тулкит, который превращает токены стандарта [W3C DTCG](https://www.designtokens.org?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) в удобные артефакты; [документация здесь](https://sugarcube.sh/docs/introduction/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- [Page Gym: тест скорости страниц и оптимизация](https://pagegym.com/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — метрики LCP/FCP/CLS, выбор региона и режима (desktop/mobile), сравнение прогонов и история тестов.
- [Как публиковать в npm из GitHub Actions](https://glebbahmutov.com/blog/npm-publish-from-github/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — про новый OIDC trusted publishing workflow.
- [Полезные «магические» файлы Git](https://nesbitt.io/2026/02/05/git-magic-files.html?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — `.gitignore`, `.gitmessage` и другие.

### Теперь JS-модули можно использовать в Service Workers
С релизом Firefox 147 стало возможным [использовать JS-модули в service workers](https://bsky.app/profile/patrickbrosset.com/post/3mfloileyvs27?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) во всех основных браузерах. Это упрощает архитектуру проектов и делает код более модульным.

## 🎨 CSS и дизайн
### [`border-shape`: будущее «неквадратного» веба](https://una.im/border-shape?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
Una Kravets показывает эксперименты с новым CSS‑свойством [`border-shape`](https://drafts.csswg.org/css-borders-4/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online#border-shape), которое может сделать «геометрию» интерфейсов гораздо богаче (не только прямоугольники и скругления). Фича пока ранняя: сейчас она доступна **только за флагом Chromium**, поэтому это скорее «потрогать будущее» и понять, какие паттерны дизайна станут проще.

- Бонус: взгляд изнутри на то, как реализуют [`corner-shape`](https://developer.chrome.com/blog/implementing-corner-shape?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — и что именно уже можно [использовать в Chrome и Edge](https://frontendmasters.com/blog/understanding-css-corner-shape-and-the-power-of-the-superellipse/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) прямо сейчас.

### [Скоро появится стандартная «ленивая загрузка» для `<video>` и `<audio>`](https://scottjehl.com/posts/lazy-media/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
Обновление по стандартизации lazy‑loading для HTML‑элементов видео и аудио. Идея простая: браузер сможет **сам откладывать загрузку** медиа, пока оно не нужно (например, до появления в области видимости), без костылей на JS. Сейчас это ещё не стандарт, но поддержка уже «приземлилась» за флагом в Chrome Canary.

- [Спрайты в вебе без GIF: CSS‑анимации кадрами](https://www.joshwcomeau.com/animation/sprites/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — как делать «покадровку» через `steps()` и управлять изображениями через `object-fit`.

- [Подчёркивание ссылок в CSS](https://www.alwaystwisted.com/articles/underlining-links-with-css?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — шпаргалка по `text-decoration-*`, чтобы underline выглядел аккуратно и предсказуемо.
- [Типографические шкалы в CSS с `:heading()`, `sibling-index()` и `pow()`](https://www.alwaystwisted.com/articles/building-typographic-scales-with-headings-sibling-index-and-pow?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — идея, как держать размеры заголовков/текста согласованными «почти формулой».
- [Как кастомизировать списки в CSS: подробный гайд](https://piccalil.li/blog/an-in-depth-guide-to-customising-lists-with-css/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — много примеров, как уйти от «стандартных маркеров» и сделать списки частью дизайна, не ломая семантику.

### [Возможный будущий селектор `:near()`](https://css-tricks.com/potentially-coming-to-a-browser-near-you/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
Концепт псевдокласса `:near()` — чтобы реагировать на то, что курсор **рядом с элементом**, а не строго «на нём». Потенциально полезно для подсказок, раскрывающихся меню и «пред‑hover» эффектов. В статье также есть [ссылка на обсуждение идеи](https://github.com/w3c/csswg-drafts/issues/13271?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).



<TelegramCTA/>

## 📦 JavaScript
### Oxfmt Beta: сверхбыстрый форматтер JavaScript на Rust

[Oxfmt Beta — быстрый форматтер JavaScript](https://oxc.rs/blog/2026-02-24-oxfmt-beta?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — это на 100% совместимая альтернатива [Prettier](https://prettier.io/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online), написанная на Rust. Проект является «сестрой» [Oxlint](https://oxc.rs/blog/2025-06-10-oxlint-stable.html?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и заявляет производительность в **30 раз быстрее Prettier** и в 3 раза быстрее Biome.

С последнего альфа-релиза добавили:
- форматирование встроенных языков (JSX, YAML, HTML и др.),
- сортировку Tailwind CSS классов,
- сортировку импортов.

Инструмент ориентирован на быструю работу в больших кодовых базах и CI.

## ⚛️ React и фреймворки
### [Запустился React Foundation](https://react.dev/blog/2026/02/24/the-react-foundation?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
React, React Native и JSX теперь принадлежат не Meta, а независимому фонду под эгидой Linux Foundation. Это обычно означает более «нейтральное» управление: решения и торговые марки закреплены за организацией, а не за одной компанией. В управляющий совет вошли крупные участники экосистемы (вроде Meta, Vercel, Microsoft), а исполнительным директором назначен Seth Webster.

### React Doctor: быстрая диагностика React-кода
[React Doctor](https://www.react.doctor/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — инструмент от создателя React Scan. Сканирует кодовую базу и выставляет оценку от 0 до 100.
Можно посмотреть [репозиторий на GitHub](https://github.com/millionco/react-doctor?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
💡 Есть аналог для Angular — [Angular Doctor](https://github.com/antonygiomarxdev/angular-doctor?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- [Как делать «абстракции запросов» правильно](https://tkdodo.eu/blog/creating-query-abstractions?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — почему оборачивать `useQuery` в кастомные хуки часто **плохая** идея (теряются типы и гибкость), и как помогает API `queryOptions` для типизации и использования вне компонентов.
- [«Слишком короткая жизнь, чтобы руками писать типы API»: React на базе OpenAPI](https://evilmartians.com/chronicles/lifes-too-short-to-hand-write-api-types-openapi-driven-react?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — как уменьшить рассинхрон типов фронта и бэка, если считать OpenAPI «источником правды». В статье показывают связку генерации клиентских типов/SDK (например, через [Hey API](https://heyapi.dev/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)), типобезопасного мокинга сетевых запросов и валидации данных (например, Zod).
- [Как собирать дизайн‑компоненты с `action props` на Async React](https://aurorascharff.no/posts/building-design-components-with-action-props-using-async-react/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — идея: вместо того чтобы передавать кучу коллбеков, задавать «действия» как пропсы и аккуратно работать с асинхронностью внутри компонента.
- [Как строить формы в React на основе JSON Schema](https://surveyjs.hashnode.dev/build-dynamic-json-driven-forms-react?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — обзор подхода «форма описывается JSON‑схемой», а UI собирается динамически. Полезно для опросов/конструкторов форм.

### [Опубликованы результаты опроса State of React Native 2025](https://results.stateofreactnative.com/en-US/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
Software Mansion и Devographics выложили результаты большого опроса по RN. Там много данных про используемые библиотеки и практики, а ещё интересно увидеть, что заметная часть разработчиков уже [перешла на новую архитектуру React Native](https://results.stateofreactnative.com/en-US/react-native-architecture/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).


## 📘 TypeScript

## ⚙️ Node.js
### [Вышел AdonisJS v7 — «батарейки в комплекте» фреймворк для Node.js](https://adonisjs.com/blog/v7?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
AdonisJS — это фреймворк «всё‑в‑одном»: аутентификация, ORM, очереди, тестирование и другие типичные вещи идут как единая система, а не набор разрозненных пакетов. В версии 7 обновили и «осовременили» проект, добавили интеграцию с OpenTelemetry, новые стартовые наборы (starter kits) для быстрого старта, генерацию barrel‑файлов и заявляют end‑to‑end типобезопасность. Отдельно — [новый сайт проекта](https://adonisjs.com/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
Если уже используешь Adonis v6, пригодится [гайд по миграции с v6 на v7](https://docs.adonisjs.com/v6-to-v7?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

### [Как защититься от Path Traversal атак в Node](https://nodejsdesignpatterns.com/blog/nodejs-path-traversal-security/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
Path traversal — это когда злоумышленник подсовывает «хитрый» путь к файлу (например, с `../`), чтобы добраться до файлов, которые приложение не собиралось показывать. В статье разбирают типичный сценарий атаки и практические способы защиты (валидация путей, нормализация, белые списки, правильная работа с файловой системой). Если времени мало — автор обещает TL;DR с выжимкой.
- [Node.js v25.7.0 (Current)](https://nodejs.org/en/blog/release/v25.7.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и [v24.14.0 (LTS)](https://nodejs.org/en/blog/release/v24.14.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) вышли; модуль [<code>node:sqlite</code>](https://nodejs.org/docs/latest/api/sqlite.html?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) перешёл в стадию release candidate (почти «готов к бою»).
- Идёт работа над тем, чтобы добавить в core Node «нативный логгер»: сначала — [прогресс и обсуждение](https://github.com/nodejs/node/pull/60468?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online), а вот [черновые (в процессе) доки](https://github.com/mertcanaltin/node/blob/d8334dcea284140ddef703001676d82b21a71a15/doc/api/logger.md?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) к будущей фиче.
- Проект Node ужесточил приём отчётов о уязвимостях: после повышения порога «signal score» на HackerOne, теперь ещё и [не принимают репорты от “новых исследователей без сигнала”](https://nodejs.org/en/blog/announcements/hackerone-signal-requirement?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online), чтобы отсеять поток низкокачественных заявок.

## 🤖 ИИ

## ⚒️ Инструменты и библиотеки
### [OpenSeadragon 6.0 — просмотрщик сверхбольших изображений в браузере](http://openseadragon.github.io/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
Если у вас есть карты, сканы, снимки или любая «огромная» графика, которую нужно **приближать и таскать**, OpenSeadragon — одно из самых проверенных решений. В версии 6 заявлены асинхронный и кэш‑управляемый пайплайн, что делает работу эффективнее на больших объёмах. Есть отдельная ссылка на [анонс версии 6](https://github.com/openseadragon/openseadragon/releases/tag/v6.0.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
### [Yoopta Editor 6.0 — headless‑редактор «как Notion» для React](https://yoopta.dev/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
MIT‑лицензия, блочная модель (paragraph/heading/list и т.п.), плагины и готовые UI‑части поверх headless‑ядра. Посмотреть вживую можно в [песочнице‑playground](https://yoopta.dev/playground?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

- [Первая бета WordPress 7.0](https://wordpress.org/news/2026/02/wordpress-7-0-beta-1/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — главный фокус: добавление совместного редактирования в реальном времени (real‑time collaboration).

- [Beautiful Mermaid 1.0](https://github.com/lukilabs/beautiful-mermaid?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online#readme) — рендеринг Mermaid-диаграмм в SVG или ASCII.
- 📊 [Plotly.js 3.4](https://github.com/plotly/plotly.js/releases/tag/v3.4.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — библиотека визуализации данных (графики, карты и др.). Есть [примеры](https://plotly.com/javascript/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- 📄 [DOCX 9.6.0](https://docx.js.org/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — генерация `.docx` файлов из JavaScript.
- [Building an Endless Procedural Snake with Three.js and WebGL](https://tympanus.net/codrops/2026/02/10/building-an-endless-procedural-snake-with-three-js-and-webgl/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — создание процедурной 3D-анимации.
- [Edge — шаблонизатор для Node, максимально похожий на JS](https://edgejs.dev/docs/introduction?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online): идея в том, чтобы писать логику в шаблонах почти как в JavaScript, без отдельного «языка шаблонов» как у [Nunjucks](https://mozilla.github.io/nunjucks/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) или [Pug](https://github.com/pugjs/pug?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- [bignumber.js 10.0 — точная арифметика с большими числами](https://mikemcl.github.io/bignumber.js/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online): полезно, когда `Number` и даже `BigInt` не подходят (например, нужны большие дробные значения или контроль точности).
- [Bun v1.3.10](https://bun.com/blog/bun-v1.3.10?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — добавили `build --compile --target=browser` (см. [описание фичи](https://bun.com/blog/bun-v1.3.10?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online#compile-target-browser-for-self-contained-html-output)), чтобы собирать **самодостаточные HTML‑файлы** со всеми инлайн‑ассетами (включая полностью клиентские React‑приложения).
- [Deno 2.7](https://deno.com/blog/v2.7?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — без «реактовых» фич, но полезно знать: стабилизировали поддержку Temporal API, улучшили совместимость с Node.js, добавили новые

### Обновления
- [Vuetify 4.0](https://v4.vuetifyjs.com/en/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — крупный релиз UI-фреймворка для Vue. Есть [гайд по обновлению](https://vuetifyjs.com/en/getting-started/upgrade-guide/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online#quick-start-with-vuetify-mcp).
- [npm v11.10.0](https://github.blog/changelog/2026-02-18-npm-bulk-trusted-publishing-config-and-script-security-now-generally-available/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — поддержка массового trusted publishing и новый флаг `--min-release-age`.
- [ESLint 10.0.2](https://eslint.org/blog/2026/02/eslint-v10.0.2-released/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [Hono 4.12](https://github.com/honojs/hono/releases/tag/v4.12.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [Deno 2.6.10](https://github.com/denoland/deno/releases/tag/v2.6.10?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [Electron 40.6](https://github.com/electron/electron/releases/tag/v40.6.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [Three.js r183](https://github.com/mrdoob/three.js/releases/tag/r183?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [Slowmo](https://slowmo.dev/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — инструмент для замедления времени в браузере (CSS-анимации, transitions, `requestAnimationFrame`).
- [pnpm v10.30.0](https://github.com/pnpm/pnpm/releases/tag/v10.30.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — команда [`pnpm why`](https://pnpm.io/cli/why?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) теперь показывает обратное дерево зависимостей.
- [Emscripten 5.0.2](https://github.com/emscripten-core/emscripten/blob/main/ChangeLog.md?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online#502---022526) — компилятор LLVM → WebAssembly: обновления/чистки, меньше «хака» под Node.
- [BullMQ v5.70](https://github.com/taskforcesh/bullmq?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — надёжные Redis‑очереди для Node (фоновые задачи, ретраи, расписания).
- [Orange ORM 5.2](https://github.com/alfateam/orange-orm/releases/tag/v5.2.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — обновление ORM.
- [Basic FTP 5.2](https://github.com/patrickjuchli/basic-ftp?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — простой FTP‑клиент для Node.
- [React PDF 10.4](https://projects.wojtekmaj.pl/react-pdf/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — показ PDF в React‑приложениях; в релизе [v10.4.0](https://github.com/wojtekmaj/react-pdf/releases/tag/v10.4.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) добавили возможность переопределять цвета, используемые при рендеринге.
- [React DayPicker 9.14](https://github.com/gpbl/react-day-picker/releases/tag/v9.14.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — настраиваемый компонент выбора даты.
- [ReactToPrint 3.3](https://github.com/MatthewHerbst/react-to-print?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — печать содержимого React‑компонентов.
