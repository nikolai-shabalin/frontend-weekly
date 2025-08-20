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
### [Интерактивное руководство по SVG Paths](https://frontendfoc.us/link/173004/web)
Josh W. Comeau продолжает разбирать мир SVG. В этот раз он показывает, как работает элемент `<path>`. Обычно он кажется «магическим» и непонятным, но автор объясняет всё простым языком и с примерами. Отличный материал для тех, кто хочет уверенно рисовать иконки, фигуры и сложные формы в SVG.

- [Email is 'Easy'](https://frontendfoc.us/link/173033/web) — забавный квиз: нужно угадать, какие e-mail адреса валидны. Некоторые ответы удивляют.
- [Скрытые элементы с помощью `hidden=until-found`](https://frontendfoc.us/link/173022/web) — объяснение нового HTML-атрибута.

## 🎨 CSS и дизайн

### [Результаты опроса *State of CSS 2025*](https://frontendfoc.us/link/173006/web)
Каждый год сообщество фронтенд-разработчиков делится опытом использования CSS. В этом отчёте видно, насколько язык ушёл далеко от простой стилизации. CSS теперь активно применяют для анимаций, доступности и сложных макетов. Интересный факт: около **80% участников уже используют селектор `:has()`**.

### [Пять полезных CSS-функций с новой директивой `@function`](https://frontendfoc.us/link/173007/web)
В Chrome 139 появилась поддержка CSS-функций. Una Kravets делится практическими примерами того, как они могут упростить жизнь разработчикам. Пока поддержка ограничена, но будущее у этой возможности большое.

### [Нежное введение в Anchor Positioning](https://frontendfoc.us/link/173012/web)
Теперь в CSS можно позиционировать элементы относительно других с помощью `anchor()`. Это сильно упрощает жизнь — например, для всплывающих подсказок больше не нужен JS.

### [Эффект Scrollspy только на CSS](https://frontendfoc.us/link/173013/web)
Sara Soueidan показывает, как с помощью `scroll-marker-group` и `:target-current` можно реализовать подсветку активных ссылок при прокрутке. И всё это без JS, доступно и просто.

### [“Не существует CSS Reset”](https://frontendfoc.us/link/173016/web)
Адам Стоддард рассуждает о том, что “reset” — это миф. Единственный настоящий дефолт — это стили браузера, а всё остальное — лишь набор удобных нормализаций.

### [Жёлтый, фиолетовый и миф о доступности цветовых палитр](https://frontendfoc.us/link/173019/web)
Стефани Вальтер разбивает миф о том, что доступность ограничивает выбор цветов. На самом деле достаточно правильно учитывать контраст по стандартам WCAG.

- [Что мы узнали, создавая PostCSS](https://frontendfoc.us/link/173023/web) — заметки Андрея Ситника.
- [Изменение размера DOM-элементов в 2 строки CSS](https://frontendfoc.us/link/173024/web).

<TelegramCTA/>

## 📦 JavaScript
### [Сила Intl API](https://frontendfoc.us/link/173015/web)
Современный JS уже содержит встроенный инструмент для интернационализации — `Intl`. Раньше приходилось тянуть тяжёлые библиотеки, а теперь можно обойтись нативным решением. Статья подробно показывает, как с ним работать.

- **[Простой ликбез по массивам в JavaScript](https://nodeweekly.com/link/172999/web)** — отличная шпаргалка для новичков.
- **[jQuery 4.0 RC1](https://nodeweekly.com/link/173000/web)** — релиз‑кандидат легендарной библиотеки.

## 📦 TypeScript 

## ⚛️ React
### [Размышления о сообществе React](https://react.statuscode.com/link/173038/web)
Ли Робинсон (ранее из Vercel), один из ключевых людей в развитии **Next.js** и **React**, делится откровенными мыслями о будущем сообщества. Он поднимает темы:
- рост популярности **React Server
Components**;
- конфликт интересов между коммерческими и открытыми инициативами;
- проблема выгорания у разработчиков;
- напоминание, что за всем этим стоят реальные люди.

### [Next.js 15.5](https://react.statuscode.com/link/173039/web)
Вышла версия **Next.js 15.5**. Главное:
- Turbopack-сборки (в бета-режиме);
- стабильная работа Node.js middleware;
- улучшения для TypeScript;
- `next lint` устаревает;
- подготовка к Next.js 16 с предупреждениями о будущих изменениях.

### [React Mock Interview: три разработчика решают задачу](https://react.statuscode.com/link/173040/web)
50-минутное видео, где три известных разработчика (**Kent C. Dodds, Piyush Agarwal, Jack Herrington**) решают одно и то же задание по React - создание формы с валидацией. Отличный способ посмотреть, как по-разному можно подойти к решению одной задачи.

### [React Native 0.81](https://react.statuscode.com/link/173041/web)
Главные изменения:
- поддержка **Android 16** и новые обязательные
- edge-to-edge интерфейсы;
- предсобранные iOS-сборки, что ускоряет процесс сборки до 10 раз.

💡 Параллельно стартовал [двухнедельный бета-период Expo SDK 54](https://react.statuscode.com/link/173043/web), который включает поддержку **React Native 0.81** и **React 19.1**.

- 📺 [Три новых фичи TanStackQuery](https://react.statuscode.com/link/173044/web) - короткий разбор возможностей.
- 📄 [React Cache: это про согласованность](https://react.statuscode.com/link/173045/web) - почему `cache` важен не только для оптимизации, но и для согласованного рендера.
- 📄 [Сочетание серверных и клиентских компонентов на практике](https://react.statuscode.com/link/173046/web).

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

## 📊 Полезные статьи
- [Что такое Baseline и как его использовать](https://frontendfoc.us/link/173017/web).
- [Как исправить медленный сайт: 4 совета по производительности](https://frontendfoc.us/link/173070/web).
- [Сколько стоит доступность?](https://frontendfoc.us/link/173025/web).

## 🌐 Браузеры
- 🦊 [Firefox столкнулся с проблемами производительности](https://frontendfoc.us/link/173009/web), но Mozilla обещает исправление.
- ✨ [OpenAI тестирует браузер на основе Chromium](https://frontendfoc.us/link/173010/web).
- 🧑‍🎨 [MDN обновляет дизайн](https://frontendfoc.us/link/173035/web), чтобы сделать интерфейс проще и удобнее.
- ✅ [Изменения в проекте Baseline](https://frontendfoc.us/link/173011/web).

## ⚒️ Инструменты и библиотеки
### [Panda CSS 1.0](https://frontendfoc.us/link/173027/web)
Создатель Chakra UI представил новый инструмент для CSS-in-JS. Он генерирует стили на этапе сборки, даёт типизацию и работает с Next.js, Vite, Astro и даже серверными компонентами.

### Sidequest.js — фоновые задачи для Node с масштабированием
Новый процессор фоновых задач, который «из коробки» масштабируется и дружит с TypeScript. Есть **[веб‑панель](https://nodeweekly.com/link/172960/web)** для мониторинга, поддержка нескольких бекендов хранения и **[репозиторий на GitHub](https://nodeweekly.com/link/172961/web)**. Проект **[представлен на сайте](https://nodeweekly.com/link/172959/web)** и распространяется под LGPL‑3.0.
Если вы когда‑то склеивали очереди задач вручную (Bull, Agenda и пр.), здесь понравится современная эргономика и TS‑первый подход.

- [LooksSame](https://nodeweekly.com/link/172973/web) — библиотека для визуального сравнения изображений (под регрессионные тесты). Сравнение «по‑человечески», с учетом восприятия цвета. Важно: только PNG, чтобы не тянуть тяжёлые зависимости.
- [zx v8.8](https://nodeweekly.com/link/172974/web) — «сахар» для shell‑скриптов на Node: удобные обертки над `child_process`, экранирование аргументов, адекватные дефолты. Пайпинг стал гибче. [Документация](https://nodeweekly.com/link/172975/web).
- [Pyodide](https://nodeweekly.com/link/172977/web) — CPython, скомпилированный в WebAssembly. Работает в браузере и [в Node](https://nodeweekly.com/link/172978/web): можно импортировать и запускать Python‑код прямо из JS.
- [QuickJS Sandbox 3.0](https://nodeweekly.com/link/172979/web) — безопасный запуск JS/TS в песочнице на базе [QuickJS](https://nodeweekly.com/link/172980/web): изоляция, минимальная поддержка Node‑модулей и виртуальная ФС. [Исходники](https://nodeweekly.com/link/172981/web).
- [YIKES](https://nodeweekly.com/link/172982/web) — движок текстовых приключений на LLM. Ранний эксперимент, но интересный формат для игр и интерактива.
- [Hoverly](https://frontendfoc.us/link/173030/web) — эффекты при наведении на ссылки и заголовки.
- [PatternCraft](https://frontendfoc.us/link/173031/web) — коллекция паттернов и градиентов для фона.
- [Kelp](https://frontendfoc.us/link/173032/web) — UI-библиотека на Web Components без этапа сборки.


### Новые версии
- [NVM Desktop 4.1](https://nodeweekly.com/link/172983/web) — десктоп‑менеджер множественных версий Node (macOS/Windows/Linux).
- [fdir 6.5](https://nodeweekly.com/link/172984/web) — быстрый обход директорий и glob‑поиск; появился ESM‑сборник.
- [Strong SOAP 5.0](https://nodeweekly.com/link/172985/web) — SOAP‑клиент с мок‑сервером; фактически переписанный `node-soap`.
- [Ghost 6.0](https://nodeweekly.com/link/172986/web) — платформа блогов на Node.
- [Fastify 5.5](https://nodeweekly.com/link/172987/web) — скоростной веб‑фреймворк.
- [CryptoES 3.0](https://nodeweekly.com/link/172988/web) — набор криптоалгоритмов.
- [Prisma 6.14](https://nodeweekly.com/link/172989/web) — ORM для Node + TypeScript.
- [Undici 7.14](https://nodeweekly.com/link/172990/web) — мощный HTTP‑клиент для Node.
- [node‑soap 1.3](https://nodeweekly.com/link/172991/web) — SOAP‑клиент и сервер.
- [ESLint 9.33.0](https://nodeweekly.com/link/172992/web) — плановое обновление.
- [Oxlint](https://react.statuscode.com/link/173068/web) - линтер с поддержкой типов (превью).
- [pnpm 10.15](https://react.statuscode.com/link/173069/web) - новая версия популярного пакетного менеджера.
