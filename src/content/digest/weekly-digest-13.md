---
title: "Еженедельный дайджест #13: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "Aug 25 2025"
mascotMessages: [
  { text: "HTML живее всех живых 🦴", index: 0 },
  { text: "@layer приручает каскад 🎨", index: 1 },
  { text: "TypeScript 5.9 — без шума 📝", index: 2 },
  { text: "SPA? Сервер снова в моде 🌐", index: 3 },
  { text: "Web Workers ускоряют React ⚡", index: 4 },
  { text: "V8 разогнал JSON.stringify 🚀", index: 5 },
  { text: "Node 22.18 — TS прямо в рантайме 🔧", index: 6 },
  { text: "FlashList v2 — списки без тормозов 📱", index: 7 },
  { text: "React Native Audio API — звук везде 🎵", index: 8 },
  { text: "Dependency Cruiser рисует графы 🔍", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API

## 🎨 CSS и дизайн

<TelegramCTA/>

## 📦 JavaScript
- **[Простой ликбез по массивам в JavaScript](https://nodeweekly.com/link/172999/web)** — отличная шпаргалка для новичков.
- **[jQuery 4.0 RC1](https://nodeweekly.com/link/173000/web)** — релиз‑кандидат легендарной библиотеки.

## 📦 TypeScript 

## ⚛️ React и экосистема

## ⚙️ Node.js
### Node.js 24.6.0 (Current)
Небольшой, но полезный релиз. Теперь можно использовать доверенные сертификаты из системы, просто установив переменную окружения `NODE_USE_SYSTEM_CA` (аналог `--use-system-ca`). В модуле `zlib` появилась поддержка словарей Zstd, а в `http` добавили опцию `keepAliveTimeoutBuffer` для тонкой настройки keep‑alive. Подробнее в заметке **[о релизе](https://nodeweekly.com/link/172962/web)**.

**Коротко по платформе:**
- На официальном сайте Node появилась понятная страница **[про процесс End‑of‑Life (EOL)](https://nodeweekly.com/link/172963/web)**: когда версия считается «устаревшей», что может сломаться, и статус поддерживаемых веток.
- Если у вас много проектов на Vercel с «умирающими» версиями Node, теперь можно **[массово обновить конфиги](https://nodeweekly.com/link/172964/web)**.
- В превью: **[Oxlint с типо‑осознанным (type‑aware) линтингом](https://nodeweekly.com/link/172965/web)** — полезно, если вы хотите быстрый линтер, который учитывает типы.

### Поддержка Express в Cloudflare Workers (локальная разработка)
Cloudflare добавляет прямую поддержку **[Express‑приложений](https://nodeweekly.com/link/172966/web)** в среде Workers. Пока это работает для локальной разработки, но движение показательное: многие до сих пор живут на Express, несмотря на появление «экспресс‑лайков» вроде **[Hono](https://nodeweekly.com/link/172967/web)**. Сам Express по‑прежнему **[остается самым популярным вариантом](https://nodeweekly.com/link/172968/web)**, поэтому такой мост упростит миграции и эксперименты.

- **[Как неверный парсинг Shopify‑вебхука привёл к удалению базы](https://nodeweekly.com/link/172970/web)** — история о том, как `undefined` попал в Prisma и чем это закончилось. Полезный пост‑мортем про валидации и защитные проверки.
- **[npm добавил OIDC для Trusted Publishing в CI/CD](https://nodeweekly.com/link/172971/web)** — разбор нового способа безопасно публиковать пакеты из пайплайнов с OpenID Connect.
- **[Как читать flame‑графы в Node.js](https://nodeweekly.com/link/172972/web)** — понятное введение в профилирование и визуализацию времени выполнения.
- **[Rari: замена Node.js на Rust‑бэкенд для рендера RSC](https://nodeweekly.com/link/172996/web)** — демонстрация заметного прироста производительности при рендеринге React Server Components.

## ⚒️ Инструменты и библиотеки
### Sidequest.js — фоновые задачи для Node с масштабированием
Новый процессор фоновых задач, который «из коробки» масштабируется и дружит с TypeScript. Есть **[веб‑панель](https://nodeweekly.com/link/172960/web)** для мониторинга, поддержка нескольких бекендов хранения и **[репозиторий на GitHub](https://nodeweekly.com/link/172961/web)**. Проект **[представлен на сайте](https://nodeweekly.com/link/172959/web)** и распространяется под LGPL‑3.0.
Если вы когда‑то склеивали очереди задач вручную (Bull, Agenda и пр.), здесь понравится современная эргономика и TS‑первый подход.

- **[LooksSame](https://nodeweekly.com/link/172973/web)** — библиотека для визуального сравнения изображений (под регрессионные тесты). Сравнение «по‑человечески», с учетом восприятия цвета. Важно: только PNG, чтобы не тянуть тяжёлые зависимости.
- **[zx v8.8](https://nodeweekly.com/link/172974/web)** — «сахар» для shell‑скриптов на Node: удобные обертки над `child_process`, экранирование аргументов, адекватные дефолты. Пайпинг стал гибче. **[Документация](https://nodeweekly.com/link/172975/web)**.
- **[Pyodide](https://nodeweekly.com/link/172977/web)** — CPython, скомпилированный в WebAssembly. Работает в браузере и **[в Node](https://nodeweekly.com/link/172978/web)**: можно импортировать и запускать Python‑код прямо из JS.
- **[QuickJS Sandbox 3.0](https://nodeweekly.com/link/172979/web)** — безопасный запуск JS/TS в песочнице на базе **[QuickJS](https://nodeweekly.com/link/172980/web)**: изоляция, минимальная поддержка Node‑модулей и виртуальная ФС. **[Исходники](https://nodeweekly.com/link/172981/web)**.
- **[YIKES](https://nodeweekly.com/link/172982/web)** — движок текстовых приключений на LLM. Ранний эксперимент, но интересный формат для игр и интерактива.

### Новые версии
- **[NVM Desktop 4.1](https://nodeweekly.com/link/172983/web)** — десктоп‑менеджер множественных версий Node (macOS/Windows/Linux).
- **[fdir 6.5](https://nodeweekly.com/link/172984/web)** — быстрый обход директорий и glob‑поиск; появился ESM‑сборник.
- **[Strong SOAP 5.0](https://nodeweekly.com/link/172985/web)** — SOAP‑клиент с мок‑сервером; фактически переписанный `node-soap`.
- **[Ghost 6.0](https://nodeweekly.com/link/172986/web)** — платформа блогов на Node.
- **[Fastify 5.5](https://nodeweekly.com/link/172987/web)** — скоростной веб‑фреймворк.
- **[CryptoES 3.0](https://nodeweekly.com/link/172988/web)** — набор криптоалгоритмов.
- **[Prisma 6.14](https://nodeweekly.com/link/172989/web)** — ORM для Node + TypeScript.
- **[Undici 7.14](https://nodeweekly.com/link/172990/web)** — мощный HTTP‑клиент для Node.
- **[node‑soap 1.3](https://nodeweekly.com/link/172991/web)** — SOAP‑клиент и сервер.
- **[ESLint 9.33.0](https://nodeweekly.com/link/172992/web)** — плановое обновление.
