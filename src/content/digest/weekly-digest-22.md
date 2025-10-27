---
title: "Еженедельный дайджест #22: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "Oct 27 2025"
mascotMessages: [
  { text: "View Transitions везде! 🎉", index: 0 },
  { text: "React Compiler стабильный! ⚡", index: 1 },
  { text: "Next.js 16 с Turbopack! 🚀", index: 2 },
  { text: "Playwright агенты готовы! 🤖", index: 3 },
  { text: "Bun 1.3 — фулл-стек! 💪", index: 4 },
  { text: "Prettier 10 лет! 🎨", index: 5 },
  { text: "CSS Grid через линии! 📐", index: 6 },
  { text: "Node.js 25 вышел! 🟢", index: 7 },
  { text: "React Native 0.82! 📱", index: 8 },
  { text: "Triplex открытый! 🎮", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и Платформа
* В Baseline «Newly available» попали [**URLPattern**](https://frontendfoc.us/link/175935/web) и [**view transitions в рамках одной страницы**](https://frontendfoc.us/link/175936/web) — меньше полифиллов, больше уверенности «можно брать в прод».
* Safari Technology Preview 230: свежие фиксы и эксперименты — [заметки релиза](https://frontendfoc.us/link/175937/web).
* Google сворачивает часть технологий **Privacy Sandbox** из-за низкого принятия — [подробности решения](https://frontendfoc.us/link/175934/web).
* Ранний W3C-бэкап: как повысить *надёжность JavaScript* в Сети с помощью подхода **WAICT** — [разбор инициативы](https://frontendfoc.us/link/175955/web).
* Двухлетний опыт использования **Signed Exchanges (SXG)**: где помогает и почему, похоже, не взлетит массово. Итоги: [выводы по SXG](https://frontendfoc.us/link/176005/web) и что это за технология — [краткая справка](https://frontendfoc.us/link/176006/web).

## Доступность (A11y) и UI-паттерны
* Cостояния ARIA: чем отличаются `aria-selected` и `aria-current`, когда их применять и как не путаться. Понятное объяснение: [что со «состояниями» в ARIA](https://frontendfoc.us/link/175948/web).
* «Проблема двух кнопок»: почему активная кнопка порой неочевидна и как сделать интерфейс естественным. Читайте [о двух кнопках и ясности состояния](https://frontendfoc.us/link/175943/web).
* Распространённые заблуждения о скринридерах — [мифы и реальность](https://frontendfoc.us/link/175956/web).
* Когда использовать **modal** против **dialog** и почему это не одно и то же — [краткий гид по выбору](https://frontendfoc.us/link/175957/web).

## 🎨 CSS и дизайн
### 25 крутых возможностей CSS за 25 минут
Энергичное выступление от Адама Аргайла: современный CSS уже умеет *авто-подгон размеров полей, стили скроллбаров, матфункции, анимации, «привязанные» к прокрутке* и многое другое. У видео есть и конспект со слайдами — удобно, если хотите примеры кода без просмотра. Смотрите [видео-доклад](https://frontendfoc.us/link/175928/web) и листайте [слайды со списком фич](https://frontendfoc.us/link/175929/web).

### Эволюция «мэсонри» (кирпичной раскладки)
Высокоуровневый обзор того, как развивалась идея CSS-мейсонри: от первых предложений до текущего состояния спецификаций и обсуждений. Полезно, чтобы понимать, почему некоторые фичи идут к нам годами. Читайте про [эволюцию Masonry](https://frontendfoc.us/link/175931/web).

### Контекстно-зависимые компоненты и новая функция `inherit()`

Функция [`inherit()`](https://frontendfoc.us/link/175941/web) (ещё в разработке) работает похоже на `var()`, но открывает путь к компонентам, которые «подстраиваются» под окружение — без тонны пропов и темизации. Небольшой гид по идеям и кейсам: как это упростит дизайн-системы. Разбор: [как `inherit()` упростит дизайн-системы](https://frontendfoc.us/link/175940/web).

### Подводный камень у `@starting-style`

`@starting-style` позволяет делать «входные» анимации через обычные CSS-переходы (поддержка ~85%). Автор показывает, где фича заходит отлично, а где ведёт к неожиданностям. Детали: [главный «гоча» `@starting-style`](https://frontendfoc.us/link/175944/web) и [таблица поддержки](https://frontendfoc.us/link/175946/web).

### Anchor Positioning — актуальное состояние, осень 2025

Короткий апдейт по якорному позиционированию: что уже можно использовать, что экспериментально и где подводные камни. Обзор: [обновления Anchor Positioning](https://frontendfoc.us/link/175951/web).

* «Кому летающие машины, когда у нас есть `display: grid`» — вдохновляющая заметка о радостях современного CSS: [немного любви к Grid](https://frontendfoc.us/link/175954/web).
* Большой современный разбор **CSS-layout** от Dr. Axel Rauschmayer: Flexbox, Grid, медиазапросы и контейнер-квери — отличная «шпаргалка» не только для новичков — [прочитать материал](https://javascriptweekly.com/link/176137/web).

<TelegramCTA/>

## 📦 JavaScript
### JSON: `import` против `fetch` — что выбрать

**Импорт атрибуты** теперь широко поддерживаются, и JSON можно грузить через `import` с атрибутами, а не только `fetch`. Джейк Арчибальд разбирает, когда импорт удобнее, а когда проще остаться на `fetch`: [прочитать разбор](https://javascriptweekly.com/link/176110/web). Для старта загляните и в [**описание import attributes**](https://javascriptweekly.com/link/176111/web).

* **URL Pattern API** пополнил **Baseline: Newly available** — удобный способ матчить и разбирать URL-шаблоны: [детали](https://javascriptweekly.com/link/176101/web).
* **Асинхронные циклы без ловушек**: почему `await` в `for...of` — последовательно, почему `map(async …)` «не ждёт», и какие шаблоны реально работают — [разбор](https://javascriptweekly.com/link/176112/web).
* **Boa v0.21** — JS-движок на Rust с поддержкой **Temporal**: [релиз](https://javascriptweekly.com/link/176102/web).

## TypeScript

* **Решаем головоломку NYT «Pips» на TypeScript** — хороший повод прокачать алгоритмическое мышление: [прочитать](https://javascriptweekly.com/link/176118/web).
* **4 нестандартных способа кастинга в TypeScript** — полезные трюки для рефакторинга типов: [заметка](https://javascriptweekly.com/link/176121/web).

## ⚛️ React
### Vitest 4.0: Vite-нативный тест-раннер стал ещё мощнее

Вышел крупный релиз **Vitest 4.0** — тест-фреймворка на базе Vite и с совместимостью с Jest. В 4.0 добавили [визуальные регрессионные тесты](https://javascriptweekly.com/link/176086/web), стабилизировали [**Browser Mode** — запуск тестов прямо в браузере](https://javascriptweekly.com/link/176087/web), завезли поддержку Playwright Traces и многое другое. Если сомневаетесь, посмотрите [сравнение с другими раннерами](https://javascriptweekly.com/link/176088/web) — станет понятнее, когда Vitest удобнее Jest.
Источник: [**анонс Vitest 4.0**](https://javascriptweekly.com/link/176085/web)

* Начиная с Angular 21, Vitest становится тест-раннером «по умолчанию», заменяя Karma/Jasmine — [подробности](https://javascriptweekly.com/link/176089/web).

### Next.js 16: стабильные Turbopack и React Compiler, новый кеш и MCP-сервер

На Next.js Conf представили **Next.js 16**. В релиз вошли стабильные поддержка Turbopack и React Compiler, новые «компоненты кеширования», а также **MCP-сервер** для AI-ассистированного дебага. Если работаете с App Router — будет чем развлекаться.
Посмотреть можно [**анонс и описание**](https://javascriptweekly.com/link/176090/web) и [трансляцию конфы](https://javascriptweekly.com/link/176091/web).

* **Solito 5.0**: мост между React Native и Next.js для переиспользования навигации. Теперь с поддержкой Next.js 16 и Expo 54, при этом без зависимости от React Native Web — [анонс](https://javascriptweekly.com/link/176129/web) и [сайт проекта](https://javascriptweekly.com/link/176130/web).

* **React vs Backbone в 2025** — ностальгический разбор, зачем нам был Backbone и как далеко ушёл React: [прочитать заметку](https://javascriptweekly.com/link/176098/web).

* **React и Remix выбирают разные пути развития** — коротко про размежевание подходов: [статья](https://javascriptweekly.com/link/176119/web).

* «**Год с App Router и почему мы уходим**» — опыт команды и их причины сменить стек: [заметка](https://javascriptweekly.com/link/176120/web).


## ⚙️ Node.js
### Node.js 25: релиз «Current»

Вышел **Node.js v25.0.0** — в этом релизе по умолчанию включено **Web Storage**, ускорен `JSON.stringify`, в модель разрешений добавлен флаг `--allow-net`, появились встроенные конвертеры base64/hex для `Uint8Array`, а также оптимизации для WebAssembly и JIT. С выходом 25-й ветки **Node 24** скоро станет «active LTS», а **Node 22** перейдёт в «maintenance LTS». Подробнее в заметке на сайте [nodejs.org](https://nodeweekly.com/link/175881/web) и в описании [permission model](https://nodeweekly.com/link/175882/web).

* 💡 Вышел **LTS-патч**: [Node v22.21.0](https://nodeweekly.com/link/175883/web) — добавлены `--use-env-proxy` и переменная окружения `NODE_USE_ENV_PROXY` для работы через прокси.
* ▶️ Записи докладов **Nordic.js 2025** уже на YouTube: посмотрите выступление Joyee Cheung про [поставку пакетов в 2025](https://nodeweekly.com/link/175922/web) и доклад Marco Ippolito про [файл `node.config.json` в Node 23](https://nodeweekly.com/link/175923/web). Плейлист — [тут](https://nodeweekly.com/link/175921/web).
* Слайды **Ruy Adorno** с JSConf: [«Что нового и что дальше в Node.js»](https://nodeweekly.com/link/175920/web). Анонс события — [JSConf](https://nodeweekly.com/link/175919/web).
* **CLI на Ace (Node/Bun)**: как сделать мини-приложение «закладки» на фреймворке Ace от команды AdonisJS. Короткая, практичная статья с примерами. Почитать: [«Building CLIs with Ace»](https://nodeweekly.com/link/175885/web), посмотреть [Ace](https://nodeweekly.com/link/175886/web) и его [репозиторий](https://nodeweekly.com/link/175887/web); про AdonisJS — [здесь](https://nodeweekly.com/link/175888/web).
* **Backpressure и DTrace в Node.js**: автор показывает, как отключение backpressure резко увеличивает нагрузку на GC, и как это померить с помощью DTrace. Разбор полезен всем, кто работает с потоками. Читать: [эссе Tyler Hillery](https://nodeweekly.com/link/175889/web) и введение в [backpressure](https://nodeweekly.com/link/175890/web).
* **Покрытие кода в Node Test Runner**: у встроенного тест-раннера есть нативная поддержка coverage — документация объясняет, как её включить и использовать. Подробнее: [руководство](https://nodeweekly.com/link/175892/web).
* **Почему `typeof null === "object"`?** Исторический экскурс с деталями стандарта — полезно, если вы когда-то спотыкались об это поведение. Подробности: [разбор](https://nodeweekly.com/link/175893/web).
* **Bun 1.3.1** — минорное обновление после большого 1.3: [релиз-ноты](https://javascriptweekly.com/link/176103/web) и [анонс 1.3 для контекста](https://javascriptweekly.com/link/176104/web).
* **Deno Deploy** — сводка свежих улучшений платформы деплоя от команды Deno: [читать апдейты](https://javascriptweekly.com/link/176099/web).

## 📊 Видео и статьи

## 🤖 ИИ
* **ChatGPT Atlas** — новый Chromium-браузер с «встроенным» ИИ-чатом и агентами. Пока доступен на macOS, Windows и мобильные версии обещаны позже. Узнайте подробнее на [странице анонса](https://frontendfoc.us/link/175933/web).


## ⚒️ Инструменты и библиотеки
* **Wretch 3.0** — обёртка над `fetch` с «читаемым» fluent-API: меньше бойлерплейта, лучше обработка ошибок, умные ретраи и прогресс загрузки. Ознакомиться: [анонс 3.0](https://nodeweekly.com/link/175896/web) и [примеры](https://nodeweekly.com/link/175895/web). Страница проекта: [Wretch](https://nodeweekly.com/link/175894/web).
* **Graffle 7.3** — лёгкий GraphQL-клиент (ранее `graphql-request`), теперь с поддержкой **CommonJS** для Jest и не-ESM-систем. Подробнее: [релиз 7.3](https://nodeweekly.com/link/175897/web).
* **DOMPurify 3.3** — быстрый и «толерантный» санитайзер HTML от XSS; поддерживает Node и современные браузеры. Потестировать можно в [лайв-демо](https://nodeweekly.com/link/175899/web). Репозиторий: [DOMPurify](https://nodeweekly.com/link/175898/web).
* **ImapFlow** — современная и простая библиотека IMAP-клиента для взаимодействия с почтовыми серверами. Смотреть: [сайт проекта](https://nodeweekly.com/link/175900/web).
* **ATSippy** — клиент для **Bluesky Jetstream** с переподключением и сжатием; поможет слушать «файрхоза» событий Bluesky. Подробности: [ATSippy](https://nodeweekly.com/link/175924/web) и описание [Jetstream](https://nodeweekly.com/link/175925/web).
* **Obra Icons** — аккуратный набор из 1000+ иконок: скачивайте в **SVG/PNG** или копируйте код под **React/Svelte**. На странице можно сразу [поиграть с толщиной и размером](https://frontendfoc.us/link/175958/web).
* **Web Codegen Scorer** — утилита от команды Angular для оценки качества веб-кода, который генерируют ИИ-модели. Помогает сравнивать модели и отслеживать прогресс. Смотрите [инструмент на GitHub](https://frontendfoc.us/link/175960/web).
* **JustGage 2.0** — приборные круговые индикаторы на **чистом SVG** с анимацией. Есть [песочница-плейграунд](https://frontendfoc.us/link/176009/web). Подробнее: [о релизе 2.0](https://frontendfoc.us/link/176008/web).
* **Format JSON Online** — комбайн для JSON: форматирование, проверка, преобразования и даже **ИИ-помощь** в исправлении/генерации. Пробуйте [набор инструментов](https://frontendfoc.us/link/175961/web).
* **Грейскейл → STL** — браузерный конвертер из оттенков серого в 3D-модель (под **Three.js**). Полезно для «барельефов», карт высот и 3D-печати. Код: [репозиторий](https://frontendfoc.us/link/175962/web) и [демо-страница](https://frontendfoc.us/link/175964/web).
* **ColorMate** — простые генераторы палитр, градиентов и извлечения цветов из изображений. Откройте [набор цветовых утилит](https://frontendfoc.us/link/175965/web).
* **Публичный фотосток WordPress** — 28 000+ изображений в паблик-домене: [забирайте свободные фото](https://frontendfoc.us/link/175938/web).
* **Biome 2.3** — быстрый форматтер/линтер теперь с поддержкой **Vue, Svelte и Astro**: [анонс](https://javascriptweekly.com/link/176105/web).
* **ESLint 9.38.0**, **Astro 5.15**, **pnpm 10.19**, **Rspack 1.6.0 beta1** — [сводка релизов](https://javascriptweekly.com/link/176106/web), [Astro](https://javascriptweekly.com/link/176107/web), [pnpm](https://javascriptweekly.com/link/176108/web), [Rspack beta](https://javascriptweekly.com/link/176148/web).
* **Ky 1.13** — минималистичный HTTP-клиент на базе Fetch. Удобнее, чем «чистый» Fetch, и альтернатива Axios. В 1.13 добавили [**context** для переиспользуемых клиентов](https://javascriptweekly.com/link/176127/web). Примеры — [посмотреть](https://javascriptweekly.com/link/176125/web), релиз — [читать](https://javascriptweekly.com/link/176126/web), репозиторий — [открыть](https://javascriptweekly.com/link/176124/web).
* **JustGage 2.0** — рисуем и анимируем «приборные» SVG-шкалы на чистых браузерных API; есть playground — [демо и опции](https://javascriptweekly.com/link/176122/web).
* **MaxIntervalCover** — библиотека для вычисления оптимального набора непересекающихся интервалов (полезна для планировщиков/таймлайнов) — [репозиторий](https://javascriptweekly.com/link/176131/web).
* **p-limit 7.2** — ограничиваем конкурентность промисов; теперь `.map()` принимает любой `Iterable`, а не только массив — [релиз](https://javascriptweekly.com/link/176132/web).
* **Repomix 1.8** — «упаковывает» весь репозиторий в один LLM-дружелюбный файл; появились плагины для **Claude Code** — [анонс](https://javascriptweekly.com/link/176133/web).
* **ESLint Markdown Language Plugin 7.5** — линт JS/TSX-блоков прямо в Markdown — [релиз](https://javascriptweekly.com/link/176134/web).

### Обновления
* [Faker 10.1](https://nodeweekly.com/link/175901/web) — генератор фейковых данных для тестов и сидов.
* 🤖 [Repomix 1.8](https://nodeweekly.com/link/175902/web) — упаковывает репозиторий в единый «LLM-дружелюбный» файл; есть плагины для **Claude Code**.
* [node-oracledb 6.10](https://nodeweekly.com/link/175903/web) — драйвер Oracle DB; добавлен **AQ** в Thin-режиме.
* [node-rdkafka 3.6](https://nodeweekly.com/link/175904/web) — биндинги к **librdkafka**.
* 🤖 [OpenAI Node 6.6](https://nodeweekly.com/link/175905/web) — официальный SDK для API OpenAI.
* [zx 8.8.5](https://nodeweekly.com/link/175906/web) — удобные шелл-скрипты на Node.
* [terminal-image 4.1](https://nodeweekly.com/link/175907/web) — вывод изображений в терминале.
* [Got 14.6](https://nodeweekly.com/link/175908/web) — «человечный» HTTP-клиент.
* [Pino 10.1](https://nodeweekly.com/link/175909/web) — очень быстрый JSON-логгер.
* [ESLint 9.38.0](https://nodeweekly.com/link/175910/web) — актуальная версия линтера с flat-конфигом.
