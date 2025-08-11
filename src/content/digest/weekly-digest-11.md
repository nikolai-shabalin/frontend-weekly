---
title: "Еженедельный дайджест #11: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "Aug 11 2025"
mascotMessages: [
  { text: "MDN — 20 лет! 🎉", index: 0 },
  { text: "CSS-карусель без JS! 🎠", index: 1 },
  { text: "Masonry в Chrome! 🧱", index: 2 },
  { text: "Scroll-Spy на CSS! 🧭", index: 3 },
  { text: "React 19.1.1 вышел! ⚛️", index: 4 },
  { text: "TanStack DB — новая БД! 💾", index: 5 },
  { text: "Node.js с TypeScript! 🐧", index: 6 },
  { text: "Reanimated 4 — анимации! ✨", index: 7 },
  { text: "Transformers.js 3.7! 🤖", index: 8 },
  { text: "pnpm 10.14 — новые фичи! 📦", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API

## 🎨 CSS и дизайн

<TelegramCTA/>

## 🌐 JavaScript

## TypeScript 
### TypeScript 5.9 — мягкий релиз, но с полезными штрихами
Версия без «громких» фич, но приятная в быту: поддержка [`import defer`](https://nodeweekly.com/link/172659/web) (эксперимент веб‑платформы для ленивых импортов), новая опция компилятора [`--module node20`](https://nodeweekly.com/link/172660/web), а в IDE появились «раскрывающиеся» подсказки типов (проще разглядывать сложные типы). В посте также приподнимают занавес над **TypeScript 6.0** (переходный релиз) и будущим **Go‑портом TypeScript**, который станет TS 7.0. Читайте [официальный анонс](https://nodeweekly.com/link/172658/web).

## ⚙️ Node.js
### Как V8 делает `JSON.stringify` более чем в 2 раза быстрее
Команда V8 оптимизировала сериализацию JSON, поэтому вызовы `JSON.stringify` заметно ускорились — это важно для API‑ответов, кеширования и логирования. Улучшение попадёт в Node, когда он обновится до V8 13.8 (сейчас Node 24 использует 13.6). Если коротко: переписали «горячие» участки, уменьшили лишние проверки и сделали работу с буферами эффективнее. Подробности — в статье [на блоге V8](https://nodeweekly.com/link/172656/web).

### Node.js 24.5.0 (Current)
Обновление «текущей» ветки: апгрейд до OpenSSL 3.5, снят флаг с `--experimental-wasm-modules`, а модули `node:http` и `node:https` теперь умеют работать через прокси. Список изменений — в [анонсе релиза](https://nodeweekly.com/link/172657/web).

### Node.js 22.18 (LTS): «полоскаем» типы по умолчанию
В LTS‑ветке включили экспериментальную поддержку запуска TypeScript «напрямую»: можно писать `node app.ts`, а Node автоматически удалит типы перед исполнением. Это не полноценный компилятор TS, но удобно для скриптов и прототипов. Детали — в [заметке команды](https://nodeweekly.com/link/172669/web).

- Коротко: npm добавил возможность **безопасно публиковать пакеты из CI/CD** через OpenID Connect (OIDC). Это убирает хранение долгоживущих токенов. Подробнее — в [объявлении npm](https://nodeweekly.com/link/172662/web).


## 🧠 Обучение и статьи

## ⚒️ Инструменты и библиотеки

- Dependency Cruiser 17 — инструмент для **визуализации зависимостей** вашего проекта. Можно посмотреть реальные графы популярных реп — ссылка на примеры [здесь](https://nodeweekly.com/link/172673/web) и сам проект — [на GitHub](https://nodeweekly.com/link/172672/web).

### Новые версии
- **CsvToMarkdownTable 1.6** — конвертер CSV → Markdown‑таблица: [npm‑страница](https://nodeweekly.com/link/172680/web).
- **OpenAI Node 5.11** — официальный SDK к API OpenAI: [релиз](https://nodeweekly.com/link/172681/web).
- **Undici 7.13** — HTTP‑клиент от команды Node: [релиз](https://nodeweekly.com/link/172684/web).
- **Chalk 5.5** — раскраска строк в терминале: [релиз](https://nodeweekly.com/link/172685/web).
