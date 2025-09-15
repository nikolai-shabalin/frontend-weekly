---
title: "Еженедельный дайджест #16: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "Sep 15 2025"
mascotMessages: [
  { text: "Big O с картинками — люблю визуалки! 📊", index: 0 },
  { text: "CSS random() — кидаю кубик 🎲", index: 1 },
  { text: "OKLCH — цвета живее, чем кофе 🌈", index: 2 },
  { text: "JavaScript — чья табличка на двери? 🤔", index: 3 },
  { text: "Plate — собираю редактор как конструктор 🧱", index: 4 },
  { text: "Lambda без холода — запускаюсь мгновенно ❄️", index: 5 },
  { text: "Bun: postMessage летит как ракета 🚀", index: 6 },
  { text: "LiftKit — золотая пропорция по кнопке 🟡", index: 7 },
  { text: "Remix без React — это законно? 😱", index: 8 },
  { text: "Шрифты грузим умно — без скачков ✍️", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API
- **Атрибут `headingoffset` добавлен в HTML** — WHATWG HTML добавил поддержку атрибута для автоматического смещения уровней заголовков внутри контейнера. Это решает проблему, когда встраиваемый контент нарушает иерархию заголовков страницы. Спецификация: [heading levels & offsets](https://html.spec.whatwg.org/multipage/sections.html?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online#heading-levels-&-offsets). Обсуждение: [issue #5033](https://github.com/whatwg/html/commit/e774e8e318e8b40f60b3ee02256fe41e42e84820?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

  🙏 Спасибо Сергею Артёмову за предоставленную новость!

- **Reciprocate для Web Components** — сигнальная реактивность и отражение атрибутов/свойств в кастомных элементах. Анонс: [статья](https://thathtml.blog/2025/09/reciprocate-reactivity-for-html-web-components/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) · демо — [пример](https://codepen.io/jaredcwhite/pen/JoYxOmm?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) · код — [репозиторий](https://codeberg.org/heartml/reciprocate?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

## 🎨 CSS и дизайн
### «Жидкое стекло» в браузере: преломление с CSS и SVG
В статье показано, как воссоздать эффект «Liquid Glass», похожий на анимации у Apple, комбинируя **CSS**, **SVG displacement maps** и простые физические расчёты преломления. Есть хорошие визуализации и песочница (пока лучше всего работает в Chrome). Почитать: [«Liquid Glass in the Browser: Refraction with CSS and SVG»](https://kube.io/blog/liquid-glass-css-svg/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
Кратко для новичков: вы узнаете, как добиться «стеклянного» искажения картинки, не прибегая к WebGL, а только на базовом стеке фронтенда.

### Плавные смены цвета в CSS
Автор объясняет, как «переливать» цвета в интерфейсе: когда хватит простых переходов, где встретите подвохи разных цветовых пространств и как ускорить рендер с помощью **CSS-фильтров**. Читайте: [«Color Shifting in CSS»](https://www.joshwcomeau.com/animation/color-shifting/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
Полезно новичкам: вы поймёте, почему `transition: background 300ms` иногда «ломает» оттенок, и что с этим делать.

### Interop 2026: принимают предложения
Открыта форма, куда можно предложить фичи для совместной реализации браузерами в рамках **Interop 2026**. В статье — критерии «хорошего» предложения и апдейт по прогрессу Interop 2025. Подробнее: [«Make Your Proposals for Interop 2026»](https://web.dev/blog/interop-2026-proposals?hl=en&utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и заметки от WebKit — [комментарии Джен Симмонс](https://webkit.org/blog/17320/submit-your-ideas-for-interop-2026/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
Если вы новичок: Interop — это инициатива, где браузеры договариваются «допилить» конкретные фичи согласованно, чтобы мы меньше писали хаки.

### Выравнивание в CSS: фундамент
Как работают свойства выравнивания в разных раскладках (flex, grid и боксовая модель): не только `align-*`, а вся «семья». Хорошо, чтобы перестать «подбирать на глаз». Разобраться: [Фундамент выравнивания](https://css-tip.com/explore/alignment/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

### Бюджетные и средние смартфоны 2025 и как под них тестировать
Не у всех топовый флагман. Автор сопоставляет реальные low/mid‑tier устройства с пресетами Chrome DevTools, чтобы тестировать «как у пользователей». В детали: [Low/Mid‑tier для реального мира](https://csswizardry.com/2025/08/low-and-mid-tier-mobile-for-the-real-world-2025/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

* **Email Verification Protocol** — идея заменить «магические ссылки» криптографией. Почитать: [описание протокола](https://github.com/dickhardt/email-verification-protocol?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и [прототип/дискуссия](https://groups.google.com/a/chromium.org/g/blink-dev/c/pWfWupaOtJw/m/MS6uaf_WAAAJ?pli=1&utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
* **Интерполяция цветов в CSS** — что такое интерполяция «между двумя цветами» и как она влияет на **градиенты**, **переходы** и **миксы**: [«What You Need to Know About CSS Color Interpolation»](https://css-tricks.com/what-you-need-to-know-about-css-color-interpolation/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
* **Курс Google Learn CSS обновлён** — появились модули про **nesting**, **anchor positioning**, **container queries** и др.: [обзор на web.dev](https://web.dev/blog/learn-css-refresh?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
* **CSS-спецэффект «голографической» карточки Покемонов** — набор демо с 3D-трансформами, градиентами и blend-режимами: [«Pokémon Cards CSS Holographic Effect»](https://poke-holo.simey.me/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
* **CSS Handbook 2025** — бесплатный обновлённый справочник (по подписке на рассылку): [«CSS Handbook (2025)»](https://flaviocopes.com/the-css-handbook-2025-edition/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

<TelegramCTA/>

## 📦 JavaScript
### Andromeda — новый JS/TS‑рантайм
Появился рантайм вокруг движка **Nova** на Rust с обещаниями нативной компиляции в один файл, ускоренного 2D Canvas на GPU и межоп с Rust. Проект молодой, но амбициозный. Посмотреть анонс: [знакомство с Andromeda](https://tryandromeda.dev/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online). А про движок: [Nova engine](https://trynova.dev/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

- **«Безопасные» методы массивов** — почему `toSorted`, `toSpliced` и др. предпочтительнее мутирующих аналогов; с примерами: [обзор методов](https://allthingssmitty.com/2025/09/08/finally-safe-array-methods-in-javascript/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **Микрофронтенды с Module Federation и Vue** — практическая статья с фокусом на сборку и интеграцию: [подход и пример](https://alexop.dev/posts/how-to-build-microfrontends-with-module-federation-and-vue/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
— **Intl Playground.** Быстрый способ посмотреть, как опции `Intl.DateTimeFormat` выглядят «вживую»: зайдите на [песочницу](https://intlin.site/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

## ⚛️ React
### [Storybook 10 (бета): только ESM](https://storybook.js.org/docs/10/releases/migration-guide?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
**Что изменилось:** Storybook переходит на чистый ESM — меньше сложностей с форматами модулей и чуть компактнее установка.
**Почему важно:** если ваш проект ещё зависит от CommonJS‑конфигов, потребуется миграция (есть инструменты‑помощники). Для новичков: ESM — это современный стандарт модулей в браузерах и Node, он упрощает сборку и улучшает DX.

— Ещё по теме: статья о том, как использовать [встроенный тест‑раннер Node.js с TypeScript и React](https://matthewbrown.io/2025/09/04/node-test-runner?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — если только знакомитесь с тестами без Jest/Vitest, это хороший старт.
— 3D по‑человечески: [React Three Timeline](https://pmndrs.github.io/timeline/getting-started/0-introduction?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — пишем поведение в 3D как историю с `async`‑генераторами. Есть [живое демо](https://react-three-timeline-lambo.vercel.app/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и [исходники](https://github.com/pmndrs/timeline/tree/main/examples/showcase?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

## ⚙️ Node.js
### Крупная атака на цепочку поставок npm
Большое фишинговое радио попало к мейнтейнерам и привело к компрометации ряда популярных пакетов — от *Chalk* до *debug*. Если вы публикуете пакеты, включите 2FA и проверьте последние релизы на странные изменения. Подробности и сводка инцидента — в заметке от Socket: [читайте разбор атаки](https://socket.dev/blog/npm-author-qix-compromised-in-major-supply-chain-attack?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online). Дополнительно: упоминания затронутых пакетов — [Chalk](https://github.com/chalk/chalk/issues/656?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online), [DuckDB для Node.js](https://github.com/duckdb/duckdb-node/security/advisories/GHSA-w62p-hx95-gf2c?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online), [debug](https://social.hackerspace.pl/@informatic/115168929981581855?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и [другие](https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

### Node‑серверы приезжают в Cloudflare Workers
Cloudflare добавила поддержку клиентских и серверных API из `node:http` прямо в Workers при включённой [«совместимости с Node.js»](https://developers.cloudflare.com/workers/runtime-apis/nodejs/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online). Это значит, что привычные Express‑подобные приложения можно запускать ближе к пользователю на edge‑инфраструктуре без переписывания под Web API. Детали — в анонсе [«Node HTTP‑серверы в Workers»](https://blog.cloudflare.com/bringing-node-js-http-servers-to-cloudflare-workers/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

### Как держать `package.json` под контролем
Том МакРайт делится практиками «гигиены зависимостей»: чем опасны распухшие `node_modules`, как выявлять неиспользуемое, фиксировать версии и держать скор на CI. Много практических советов и утилит. Начните с этого разбора: [как укротить package.json](https://blog.val.town/gardening-dependencies?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

### Как работает `bun install` изнутри
Лидия Халли из команды Bun разобрала, почему установка пакетов — это сложно в любом менеджере, и как Bun ускоряет процесс: дедупликация, кэширование, разрешение зависимостей и оптимизация файловой системы. Хорошее «погружение под капот» для инженеров. Читайте пост: [за кулисами bun install](https://bun.com/blog/behind-the-scenes-of-bun-install?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

- **Express 5 в продакшене (2025)** — чеклист настройки и лучшие практики: [пошаговый гайд](https://www.reactsquad.io/blog/how-to-set-up-express-5-in-2025?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
— Vercel теперь «из коробки» поддерживает бэкенды на Express и добавил для Node‑функций [graceful shutdown](https://vercel.com/changelog/vercel-functions-now-support-graceful-shutdown?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) (500 мс на очистку) — см. [объявление](https://vercel.com/changelog/zero-configuration-express-backends?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
— Вышел [Node.js v20.19.5 (LTS)](https://nodejs.org/en/blog/release/v20.19.5?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — в основном исправления и обновления зависимостей.
— Чуть раньше вышел [v22.19.0 (LTS)](https://nodejs.org/en/blog/release/v22.19.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online): снят флаг с `--experimental-wasm-modules`, добавлен `server.keepAliveTimeoutBuffer` в `http`, а также возможность использовать системный центр сертификации через переменную окружения `NODE_USE_SYSTEM_CA`.

## 📊 Видео и статьи
- **Почему стоит тестировать страницу без JavaScript** — где ломается JS и какие «перила» ставить. Начать: [тест без JS](https://www.sitepoint.com/test-your-page-without-javascript/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **Оптимизация сторонних скриптов через Web Workers и Partytown** — разгружаем главный поток. Гайд: [оптимизация скриптов](https://www.debugbear.com/blog/partytown-web-workers?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).



## ⚒️ Инструменты и библиотеки
— **Mediabunny** — «комбайн» для работы с медиа без FFmpeg: можно [делать превью](https://mediabunny.dev/examples/thumbnail-generation/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online), [доставать метаданные](https://mediabunny.dev/examples/metadata-extraction/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и даже [собирать видео кодом](https://mediabunny.dev/examples/procedural-generation/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online). Начните со страницы проекта [Mediabunny](https://mediabunny.dev/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и загляните в [репозиторий](https://github.com/Vanilagy/mediabunny?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).

— **sqs-consumer 13.0** — упрощает написание приложений на базе Amazon SQS: просто пишете `async`‑обработчик сообщений. Подробнее: [анонс](https://github.com/bbc/sqs-consumer?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
— **github-script 8.0** — удобный способ вызывать GitHub API прямо из GitHub Actions на JavaScript, теперь с поддержкой Node.js 24. Подробнее: [github-script 8.0](https://github.com/actions/github-script?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
— **Точные длины строк с `Intl.Segmenter`.** Когда `str.length` путает из‑за эмодзи/комбинированных символов — поможет сегментация по графемам. Пример и объяснения: [небольшая заметка](https://blog.sangeeth.dev/posts/accurate-text-lengths-with-intl-segmenter-api/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
— **«Полмиллиарда кликов на VPS за $4».** Практический кейс оптимизации простого сайта на Node.js, который внезапно стал вирусным. Смотрим [разбор](https://www.youtube.com/watch?v=nk3Ti0tCGvA&utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
— **Почему я ушёл с Docker на Podman.** Автор объясняет плюсы Podman: совместимость CLI, rootless, изоляция и безопасность. Читать [статью](https://codesmash.dev/why-i-ditched-docker-for-podman-and-you-should-too?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
— **UDP в Node.js.** Аккуратный технический гид по `dgram` и практикам работы с UDP‑сокетами. Полезно, если пишете системные сервисы. Подробнее: [гайд](https://nodevibe.substack.com/p/udp-in-nodejs-deep-technical-guide?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
— **NodeBook (в разработке).** Глубокое погружение во внутренности Node: уже есть главы про [движок V8](https://www.thenodebook.com/node-arch/v8-engine-intro?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и [циклы событий](https://www.thenodebook.com/node-arch/event-loop-intro?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online); стартовать можно со страницы [NodeBook](https://www.thenodebook.com/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **Peaks.js 4.0** — UI для взаимодействия с аудиоволнами на `<canvas>` (скролл, зум). Подробнее: [Peaks.js 4.0](https://codeberg.org/chrisn/peaks.js?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **Splide** — лёгкий доступный слайдер/карусель на TypeScript, без зависимостей, с хорошим Lighthouse. Сайт: [демо Splide](https://splidejs.com/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) · код — [репозиторий](https://github.com/Splidejs/splide?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **Cosmic UI** — футуристичные компоненты: формы на SVG, логика на Zag. Каталог: [Cosmic UI](https://www.cosmic-ui.com/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) · код — [repo](https://github.com/rizkimuhammada/cosmic-ui?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **mdream** — превращает сайт в «чистый» Markdown и `llms.txt` (для лучшей «читаемости» ИИ и не только). Посмотреть: [mdream на GitHub](https://github.com/harlan-zw/mdream?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **.htaccess‑скрипт** — быстрый способ блокировать трафик по стране на Apache. Взять: [блокировка по стране](https://meiert.com/blog/block-traffic-by-country-via-htaccess/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **BlazeDiff** — «огненно‑быстрые» покадровые сравнения изображений как альтернатива `pixelmatch`. История появления и ссылка на репо: [сравнивать картинки быстрее](https://github.com/teimurjan/blazediff?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) (контекст — [почему понадобилась замена](https://dev.to/teimurjan/building-blazediff-how-i-made-the-fastest-image-diff-up-to-60-faster-with-block-level-optimization-ok7?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и [pixelmatch](https://github.com/mapbox/pixelmatch?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)).
- **Feedsmith 2.0** — парсинг и генерация RSS/Atom/JSON Feed/OPML, есть быстрый старт для браузера и Node. Подробнее: [работа с фидами](https://feedsmith.dev/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) (см. [квикстарт](https://feedsmith.dev/quick-start?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и [репозиторий](https://github.com/macieklamberski/feedsmith?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)).
- **React Bits** — коллекция из 100+ креативных и анимированных React‑компонентов: текст‑эффекты, «хромо‑сетка», карточки и т.п. Полистать галерею: [придать проекту «вау»‑эффект](https://www.reactbits.dev/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) (есть [репозиторий](https://github.com/DavidHDev/react-bits?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online), дополнительные примеры: [grid](https://reactbits.dev/components/chroma-grid?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и [другие эффекты](https://reactbits.dev/text-animations/split-text?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)).

### Обновления
- **Deno 2.5** — пресеты прав в `deno.json`, улучшения DX в `Deno.test`, программный API для `deno bundle`. Краткий обзор: [что нового в Deno 2.5](https://deno.com/blog/v2.5?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **ESLint 9.35.0** — новая проверка `preserve-caught-error`, чтобы не терять исходную ошибку при «обёртывании». Подробнее: [релиз ESLint](https://eslint.org/blog/2025/09/eslint-v9.35.0-released/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) и [описание правила](https://eslint.org/docs/latest/rules/preserve-caught-error?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **Node.js 24.8.0 (Current)** — инспекция HTTP/2 в Chrome DevTools и другие улучшения: [релизная заметка](https://nodejs.org/en/blog/release/v24.8.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **Electron 38** — официальная запись релиза: [итоги релиза](https://www.electronjs.org/blog/electron-38-0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **Ещё**: [Ember 6.7](https://blog.emberjs.com/ember-released-6-7/?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online), [Rspack 1.5.3](https://github.com/web-infra-dev/rspack/releases/tag/v1.5.3?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online), [Expo Router v6](https://expo.dev/blog/expo-router-v6?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online), [Fastify 5.6](https://github.com/fastify/fastify/releases/tag/v5.6.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- **Ink 6.3** — React для CLI‑приложений (его используют многие популярные CLIs): [смотреть релиз](https://github.com/vadimdemedes/ink?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- [serverless-http 4.0](https://github.com/dougmoscrop/serverless-http?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [express-openapi-validator 5.6](https://github.com/cdimascio/express-openapi-validator?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [Prisma 6.15](https://github.com/prisma/prisma/releases/tag/6.15.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [Tinypool 2.0](https://github.com/tinylibs/tinypool?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [Sidequest 1.7](https://github.com/sidequestjs/sidequest?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [MongoDB Node.js Driver 6.19](https://github.com/mongodb/node-mongodb-native/releases/tag/v6.19.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [Electron 38.0](https://github.com/electron/electron?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [express-rate-limit 8.1](https://github.com/express-rate-limit/express-rate-limit?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [JSPyBridge 1.2.5](https://github.com/extremeheat/JSPyBridge?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [NodeBB 4.5](https://github.com/NodeBB/NodeBB/releases/tag/v4.5.0?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online)
- [React Menu 4.5](https://github.com/szhsin/react-menu?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — доступные меню и дропдауны.
- [react‑json‑view‑lite 2.5](https://github.com/AnyRoad/react-json-view-lite?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — дерево для JSON с [демкой](https://anyroad.github.io/react-json-view-lite/?path=%2Fdocs%2Fjson-view--docs&utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online).
- [React Horizontal Heatmap](https://github.com/sakthilkv/react-horizontal-heatmap?utm_source=frontend&utm_medium=digest&utm_campaign=shabalin_online) — горизонтальная тепловая карта для таймлайнов/активности.
