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

## 🧪 HTML и API

## 🎨 CSS и дизайн

<TelegramCTA/>

## 📦 JavaScript

## ⚛️ React

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

## 📊 Видео и статьи

## 🤖 ИИ

## ⚒️ Инструменты и библиотеки
* **Wretch 3.0** — обёртка над `fetch` с «читаемым» fluent-API: меньше бойлерплейта, лучше обработка ошибок, умные ретраи и прогресс загрузки. Ознакомиться: [анонс 3.0](https://nodeweekly.com/link/175896/web) и [примеры](https://nodeweekly.com/link/175895/web). Страница проекта: [Wretch](https://nodeweekly.com/link/175894/web).
* **Graffle 7.3** — лёгкий GraphQL-клиент (ранее `graphql-request`), теперь с поддержкой **CommonJS** для Jest и не-ESM-систем. Подробнее: [релиз 7.3](https://nodeweekly.com/link/175897/web).
* **DOMPurify 3.3** — быстрый и «толерантный» санитайзер HTML от XSS; поддерживает Node и современные браузеры. Потестировать можно в [лайв-демо](https://nodeweekly.com/link/175899/web). Репозиторий: [DOMPurify](https://nodeweekly.com/link/175898/web).
* **ImapFlow** — современная и простая библиотека IMAP-клиента для взаимодействия с почтовыми серверами. Смотреть: [сайт проекта](https://nodeweekly.com/link/175900/web).
* **ATSippy** — клиент для **Bluesky Jetstream** с переподключением и сжатием; поможет слушать «файрхоза» событий Bluesky. Подробности: [ATSippy](https://nodeweekly.com/link/175924/web) и описание [Jetstream](https://nodeweekly.com/link/175925/web).

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
