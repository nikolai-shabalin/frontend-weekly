---
title: "Еженедельный дайджест #21: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "Oct 20 2025"
mascotMessages: [
  { text: "React Foundation — независимость от Meta! 🎉", index: 0 },
  { text: "Vite+ для команд — enterprise-версия 🚀", index: 1 },
  { text: "View Transitions 2025 — автоматические имена ✨", index: 2 },
  { text: "Playwright Agents — автономные тесты 🤖", index: 3 },
  { text: "Core Web Vitals сэкономили 30k лет! ⏱️", index: 4 },
  { text: "Coinbase Design System — открытый код 💎", index: 5 },
  { text: "Object.groupBy() — без reduce() 🎯", index: 6 },
  { text: "Next.js 16 Beta — Turbopack по умолчанию ⚡", index: 7 },
  { text: "Deno vs npm — безопасность по умолчанию 🛡️", index: 8 },
  { text: "Prettier — 10 лет без споров о стиле 🎨", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API

## 🎨 CSS и дизайн

<TelegramCTA/>

## 📦 JavaScript
* Забавный эксперимент: **pipeline-композиция** с оператором `|` на чистом JS через `Symbol.toPrimitive` и немного магии. Разбор «[pipeline-style composition](https://nodeweekly.com/link/175572/web)» и код «[clever code](https://nodeweekly.com/link/175573/web)».

## ⚛️ React
### Triplex: открытый визуальный рабочий стол для React и React Three Fiber
**О чём это:** инструмент **Triplex** из коммерческого стал опенсорсным и вошёл в коллектив [Poimandres](https://react.statuscode.com/link/175663/web) (они делают [React Three Fiber](https://react.statuscode.com/link/175662/web), Zustand, Jotai). Теперь он поддерживает не только 3D‑сцены, но и обычные DOM‑компоненты, а ещё появился [расширение для VS Code](https://react.statuscode.com/link/175665/web). Если вы хотите «раскладывать» компоненты в сцене визуально и сразу видеть результат — это как раз оно. Подробнее читайте на [странице анонса Triplex](https://react.statuscode.com/link/175661/web).

### React Compiler v1.0 — стабильный
**Что случилось:** **[React Compiler](https://react.statuscode.com/link/175667/web)** официально считается стабильным (v1.0). Он анализирует код и автоматически расставляет мемоизацию — фактически это «авто‑`useMemo`/`useCallback`», но тонкую настройку всё ещё можно делать руками. Детали в заметке [на react.dev](https://react.statuscode.com/link/175666/web).

### Next.js 16 Beta, React 19.2 и React Compiler 1.0
В бете **Next.js 16** объявили стабильную поддержку **Turbopack**, поддержку **React 19.2** и интеграцию **React Compiler**. Это делает новый стек более быстрым «из коробки». Подробности: «[Next.js 16 Beta](https://nodeweekly.com/link/175581/web)», а сам компилятор — «[React Compiler v1.0](https://nodeweekly.com/link/175582/web)».
- **Новый фильм-документалка о Vite** от авторов предыдущих фильмов про Node/Angular/React — отличный формат, чтобы понять, почему Vite так взлетел: «[Документальный фильм про Vite ▶️](https://nodeweekly.com/link/175577/web)».
- **Vite+ (Viteplus)** — надстройка с дополнительными инструментами: линтер, прогон тестов, таски для монорепы и др. Обратите внимание на условия лицензии. Анонс «[Vite+](https://nodeweekly.com/link/175578/web)», список фич — «[extra features](https://nodeweekly.com/link/175579/web)», лицензия — «[licensing](https://nodeweekly.com/link/175580/web)».
- [Структура папок в React за 5 шагов (обновление 2025)](https://react.statuscode.com/link/175674/web) — простая схема раскладки файлов и модулей для начинающих.
- [Контекстное наследование в TanStack Router](https://react.statuscode.com/link/175677/web) — как передавать общий контекст в маршрутизаторе без боли.

### React Native 0.82: «новая эра»
**Ключевое:** релиз **[React Native 0.82](https://react.statuscode.com/link/175670/web)** впервые полностью работает на [Новой архитектуре](https://react.statuscode.com/link/175671/web). Плюс появилась экспериментальная опция движка JS [Hermes V1](https://react.statuscode.com/link/175673/web) — обещают быстрее. Если у вас зрелое нативное приложение, посмотрите также материал от Expo: [как добавлять Expo без полного переписывания](https://react.statuscode.com/link/175675/web).

- [react-native-pdf 7.0](https://react.statuscode.com/link/175690/web) — компонент PDF для RN.
- [React PDF 10.2](https://react.statuscode.com/link/175691/web) — аналог для обычных React‑приложений

## ⚙️ Node.js
### Современный гид по чтению и записи файлов в Node.js
Подробный разбор всех способов работы с файлами: обещания (promises), **streams**, параллельная обработка, файловые дескрипторы и приёмы экономии памяти. Отлично подойдёт новичкам, чтобы понять когда выбирать потоковую обработку, а когда — простые методы из `fs/promises`. Читайте «[A Modern Guide to Reading and Writing Files in Node](https://nodeweekly.com/link/175544/web)».

### Bun 1.3: «фулл-стек» рантайм JavaScript
Bun всё чаще можно ставить как **drop-in** замену Node: встроенный dev-сервер с HMR, клиенты MySQL/Postgres/SQLite/Redis, мощные WebSocket-ы, **изолированные установки пакетов** по умолчанию и крупные улучшения совместимости с Node (особенно вокруг `worker_threads`). Подробнее в «[Bun 1.3](https://nodeweekly.com/link/175548/web)», про изолированные установки — «[isolated package installs](https://nodeweekly.com/link/175549/web)», про совместимость — «[Node.js compatibility](https://nodeweekly.com/link/175550/web)».

### Kaluma 1.3: крошечный JS-рантайм для Raspberry Pi Pico 2
Да, JavaScript помещается даже на **RP2350**-плате. Kaluma даёт знакомые «нодовые» удобства поверх лёгкого движка **JerryScript**. Детали: «[Kaluma 1.3](https://nodeweekly.com/link/175560/web)» и «[JerryScript](https://nodeweekly.com/link/175561/web)».

### Как подружить Python ASGI и Node.js
Команда Platformatic сделала нативный мост **@platformatic/python-node**, который встраивает интерпретатор Python в приложение Node и говорит на протоколе **ASGI**. Это продолжение идеи после их **php-node**. Посмотрите «[A Way to Integrate Python ASGI with Node.js Apps](https://nodeweekly.com/link/175545/web)», исходники пакета — «[@platformatic/python-node](https://nodeweekly.com/link/175547/web)», а первую работу ребят — «[php-node](https://nodeweekly.com/link/175546/web)».

* **Node.js 24.10.0 (Current)** — небольшой релиз с обновлениями зависимостей и исправлениями ошибок. Сводка: «[Node.js v24.10.0](https://nodeweekly.com/link/175551/web)».
* Публикуете пакеты в npm? Обратите внимание на изменения безопасности от GitHub: переходите с **classic tokens** и проверьте настройки публикации: «[GitHub усиливает безопасность npm](https://nodeweekly.com/link/175552/web)».
* **Память в контейнерах и Node 20+** — нужно ли вручную задавать размер кучи в Docker/Kubernetes, или Node уже «знает» про лимиты контейнера? Кратко и по делу: «[Node.js 20+ Memory Management in Containers](https://nodeweekly.com/link/175553/web)».
* **Node 22 стал LTS** — что можно смело использовать прямо сейчас? Короткий гид по фичам: «[Node.js 22 Features You Should Be Using](https://nodeweekly.com/link/175555/web)».
* **TypeScript и Node** — не только «type-erasure», но и как жить с типами Node, инструментами и ограничениями экосистемы: «[гайд по TypeScript с Node](https://nodeweekly.com/link/175583/web)».

## 📊 Видео и статьи
- **Happy DOM 20.0** — headless-реализация браузерного окружения, теперь выполнение JS **по умолчанию отключено** (повышает детерминизм тестов): «[Happy DOM 20.0](https://nodeweekly.com/link/175567/web)».
- [Рождение Prettier](https://react.statuscode.com/link/175699/web) — Vjeux вспоминает, как десять лет назад появился [Prettier](https://react.statuscode.com/link/175700/web) и почему форматирование «по AST» стало стандартом.


## 🤖 ИИ
### Playwright 1.56 и «агенты» для LLM
В релиз добавили **Playwright Agents** — описания шагов, которые помогают LLM автоматически строить тесты. Смотрите релиз «[Playwright 1.56](https://nodeweekly.com/link/175565/web)» и новинку «[Playwright Agents ▶️](https://nodeweekly.com/link/175566/web)».

* **GitHub Copilot CLI** — с чего начать и как заставить ИИ помогать вам в терминале: «[How to Get Started with GitHub Copilot CLI](https://nodeweekly.com/link/175556/web)».
- [llama.ui 2.38](https://react.statuscode.com/link/175692/web) — минималистичный интерфейс AI‑ассистента, работающий целиком в браузере.

## ⚒️ Инструменты и библиотеки
* **jsonriver** — потоковый парсер JSON, который выдаёт «всё более полноценные» значения по мере прихода данных (подходит для сетевых ответов и LLM-потоков): «[jsonriver](https://nodeweekly.com/link/175557/web)».
* **xmlbuilder2 4.0** — сборка XML из JS-объектов, парсинг и сериализация, удобное API с чейнингом: «[xmlbuilder2](https://nodeweekly.com/link/175558/web)».
* **Serialize JavaScript 7.0** — сериализует не только «чистый» JSON, но и RegExp, даты, функции и даже `Infinity`: «[Serialize JavaScript 7.0](https://nodeweekly.com/link/175559/web)».
* **Crosspost 1.0** — библиотека и CLI, чтобы одной командой публиковать посты в Mastodon, Bluesky, X, Discord, Telegram и др.: «[Crosspost](https://nodeweekly.com/link/175584/web)».
* **MaxIntervalCover.js** — находит оптимальное подмножество непересекающихся интервалов (полезно для планирования/расписаний): «[MaxIntervalCover.js](https://nodeweekly.com/link/175562/web)».
* **Sidequest 1.10** — масштабируемый фоновой джоб-процессор для Node, включили WAL-режим для SQLite ради производительности: «[Sidequest 1.10](https://nodeweekly.com/link/175568/web)».
* **Got 14.5** — человеко-дружелюбная HTTP-библиотека, отличный выбор поверх `fetch`: «[Got 14.5](https://nodeweekly.com/link/175571/web)».
* **Ow 3.1** — читабельная цепочечная валидация аргументов функций и данных: «[Ow 3.1](https://nodeweekly.com/link/175570/web)».
- [React Chrono 3.0](https://react.statuscode.com/link/175678/web) — интерактивная «лента времени» (горизонтальная/вертикальная, вложенные таймлайны, автоплей, поддержка React 19 и интеграция с Google Fonts; [документация](https://react.statuscode.com/link/175681/web), [релиз v3.0](https://react.statuscode.com/link/175682/web)).
- [React‑to‑Print](https://react.statuscode.com/link/175685/web) — контроль печати React‑компонентов (например, билеты и счета); есть [гайд по использованию](https://react.statuscode.com/link/175686/web).
- [React Knob Headless](https://react.statuscode.com/link/175687/web) — безстилевой и доступный «крутилка‑дайлер» как примитив; [репозиторий](https://react.statuscode.com/link/175688/web).
- [jsonriver — потоковый JSON‑парсер](https://react.statuscode.com/link/175694/web) — парсит данные по мере прихода (из сети или LLM) и отдаёт «всё более полные» значения.

### Обновления

