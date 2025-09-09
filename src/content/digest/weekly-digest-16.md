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


## 🎨 CSS и дизайн


<TelegramCTA/>

## 📦 JavaScript
— **Intl Playground.** Быстрый способ посмотреть, как опции `Intl.DateTimeFormat` выглядят «вживую»: зайдите на [песочницу](https://nodeweekly.com/link/173958/web).

## 📦 TypeScript 

## ⚛️ React


## ⚙️ Node.js
### Node‑серверы приезжают в Cloudflare Workers
Cloudflare добавила поддержку клиентских и серверных API из `node:http` прямо в Workers при включённой [«совместимости с Node.js»](https://nodeweekly.com/link/173917/web). Это значит, что привычные Express‑подобные приложения можно запускать ближе к пользователю на edge‑инфраструктуре без переписывания под Web API. Детали — в анонсе [«Node HTTP‑серверы в Workers»](https://nodeweekly.com/link/173915/web).

### Node‑серверы приезжают в Cloudflare Workers
Cloudflare добавила поддержку клиентских и серверных API из `node:http` прямо в Workers при включённой [«совместимости с Node.js»](https://nodeweekly.com/link/173917/web). Это значит, что привычные Express‑подобные приложения можно запускать ближе к пользователю на edge‑инфраструктуре без переписывания под Web API. Детали — в анонсе [«Node HTTP‑серверы в Workers»](https://nodeweekly.com/link/173915/web).

— Vercel теперь «из коробки» поддерживает бэкенды на Express и добавил для Node‑функций [graceful shutdown](https://nodeweekly.com/link/173919/web) (500 мс на очистку) — см. [объявление](https://nodeweekly.com/link/173918/web).
— Вышел [Node.js v20.19.5 (LTS)](https://nodeweekly.com/link/173924/web) — в основном исправления и обновления зависимостей.
— Чуть раньше вышел [v22.19.0 (LTS)](https://nodeweekly.com/link/173925/web): снят флаг с `--experimental-wasm-modules`, добавлен `server.keepAliveTimeoutBuffer` в `http`, а также возможность использовать системный центр сертификации через переменную окружения `NODE_USE_SYSTEM_CA`.
— **Новый рантайм Andromeda (на движке Nova).** Rust‑реализация с упором на GPU‑графику, сборку в один файл и безопасную память. Детали: [анонс](https://nodeweekly.com/link/173955/web) и страница [Nova](https://nodeweekly.com/link/173956/web).

## 📊 Видео и статьи


## ⚒️ Инструменты и библиотеки
— **Mediabunny** — «комбайн» для работы с медиа без FFmpeg: можно [делать превью](https://nodeweekly.com/link/173932/web), [доставать метаданные](https://nodeweekly.com/link/173933/web) и даже [собирать видео кодом](https://nodeweekly.com/link/173934/web). Начните со страницы проекта [Mediabunny](https://nodeweekly.com/link/173930/web) и загляните в [репозиторий](https://nodeweekly.com/link/173935/web).

— **sqs-consumer 13.0** — упрощает написание приложений на базе Amazon SQS: просто пишете `async`‑обработчик сообщений. Подробнее: [анонс](https://nodeweekly.com/link/173937/web).
— **github-script 8.0** — удобный способ вызывать GitHub API прямо из GitHub Actions на JavaScript, теперь с поддержкой Node.js 24. Подробнее: [github-script 8.0](https://nodeweekly.com/link/173938/web)
— **Точные длины строк с `Intl.Segmenter`.** Когда `str.length` путает из‑за эмодзи/комбинированных символов — поможет сегментация по графемам. Пример и объяснения: [небольшая заметка](https://nodeweekly.com/link/173926/web).
— **«Полмиллиарда кликов на VPS за $4».** Практический кейс оптимизации простого сайта на Node.js, который внезапно стал вирусным. Смотрим [разбор](https://nodeweekly.com/link/173927/web).
— **Почему я ушёл с Docker на Podman.** Автор объясняет плюсы Podman: совместимость CLI, rootless, изоляция и безопасность. Читать [статью](https://nodeweekly.com/link/173928/web).
— **UDP в Node.js.** Аккуратный технический гид по `dgram` и практикам работы с UDP‑сокетами. Полезно, если пишете системные сервисы. Подробнее: [гайд](https://nodeweekly.com/link/173929/web).
— **NodeBook (в разработке).** Глубокое погружение во внутренности Node: уже есть главы про [движок V8](https://nodeweekly.com/link/173921/web) и [циклы событий](https://nodeweekly.com/link/173922/web); стартовать можно со страницы [NodeBook](https://nodeweekly.com/link/173920/web).

### Обновления
- [serverless-http 4.0](https://nodeweekly.com/link/173939/web)
- [express-openapi-validator 5.6](https://nodeweekly.com/link/173940/web)
- [Prisma 6.15](https://nodeweekly.com/link/173941/web)
- [Tinypool 2.0](https://nodeweekly.com/link/173942/web)
- [Sidequest 1.7](https://nodeweekly.com/link/173943/web)
- [MongoDB Node.js Driver 6.19](https://nodeweekly.com/link/173944/web)
- [Electron 38.0](https://nodeweekly.com/link/173945/web)
- [express-rate-limit 8.1](https://nodeweekly.com/link/173946/web)
- [Fastify 5.6](https://nodeweekly.com/link/173947/web)
- [JSPyBridge 1.2.5](https://nodeweekly.com/link/173948/web)
- [NodeBB 4.5](https://nodeweekly.com/link/173949/web)
- [ESLint 9.35.0](https://nodeweekly.com/link/173950/web)
