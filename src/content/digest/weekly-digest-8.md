---
title: "Еженедельный дайджест #8: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "July 21 2025"
mascotMessages: [
  { text: "popover=\"hint\" — подсказки без JS! 💡", index: 0 },
  { text: "CSS теперь с if() — условия в стилях! 🧩", index: 1 },
  { text: "Градиенты с текстурой? SVG спасёт! 🎨", index: 2 },
  { text: "Cascade Layers против BEM — кто круче? 🥊", index: 3 },
  { text: "JavaScript растёт — ES2025 уже тут! 🚀", index: 4 },
  { text: "Parcel ломает hoisting? Осторожно! ⚠️", index: 5 },
  { text: "React Three Fiber — анимации на WebGL! 🌌", index: 6 },
  { text: "Node чинит JSON сам — магия! 🪄", index: 7 },
  { text: "Tailwind — спорно, но удобно! 🌀", index: 8 },
  { text: "Copilot Chat теперь для всех! 🤖", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API
### 🔍 [Запрет Apple на сторонние движки браузеров сохраняется, несмотря на закон DMA](https://frontendfoc.us/link/171813/web)
Автор критикует Apple за то, что она формально соблюдает требования Евросоюза, но по сути не даёт разработчикам браузеров использовать свои движки на iOS. Хороший повод вспомнить, как важна конкуренция в экосистеме веба.

### 🎯 ["Я больше всего горжусь этими 128 килобайтами"](https://frontendfoc.us/link/171812/web)
Майк Холл делится историей, как он сделал компактный веб-проект, который уместился в 128 КБ. История о том, как ограничения могут стимулировать креативность и напомнить, что не все пользователи имеют быстрый интернет и мощные устройства.

- 🧪 [Firefox 141 добавит поддержку WebGPU](https://frontendfoc.us/link/171814/web) — сначала для Windows, позже для macOS и Linux.
- 🧪 [WebAssembly: зачем он нужен?](https://frontendfoc.us/link/171877/web) — обзор областей применения WASM в браузере и на сервере.
- 🛠 [Chili3D — CAD на WebAssembly + Three.js](https://frontendfoc.us/link/171834/web) — пример “почти нативной” производительности в браузере.
- 🙏 [Нужен ARIA Notify](https://frontendfoc.us/link/171825/web) — призыв к поддержке API для уведомлений в ARIA.
- 🧭 [Как использовать роли и свойства ARIA правильно](https://frontendfoc.us/link/171826/web)
- 📦 [Почему я снова пишу на чистом HTML и CSS в 2025](https://frontendfoc.us/link/171879/web)
- 🧠 [Как AI влияет на продуктивность open source-разработчиков](https://frontendfoc.us/link/171815/web)
- 🧭 [Когда стоит сохранять позицию прокрутки](https://frontendfoc.us/link/171827/web)
- 🎭 [Шаблоны, а не AI, убили креативность в дизайне](https://frontendfoc.us/link/171828/web)
- [Web Speech API — озвучка сайта](https://javascriptweekly.com/link/171981/web)

## 🎨 CSS и дизайн

- 📐 [Установка длины строки и подгонка текста в CSS](https://frontendfoc.us/link/171818/web) — как использовать `clamp()`, `calc()` и другие инструменты для адаптивной типографики.
- 🧱 [Мультиколонки и фрагментация в CSS](https://frontendfoc.us/link/171820/web) — доклад Рэйчел Эндрю о поддержке CSS-колонок и их особенностях.
- 🌀 [Scroll-Driven Sticky Heading](https://frontendfoc.us/link/171822/web) — интересный пример динамичных заголовков с прокруткой.
- 💡 [Свойство `animation-composition`](https://frontendfoc.us/link/171823/web) — помогает управлять наложением CSS-анимаций.

<TelegramCTA/>

## 🌐 JavaScript

### [Викторина по датам в JavaScript](https://javascriptweekly.com/link/172009/web)
Работа с датами в JavaScript может свести с ума. Эта [викторина](https://javascriptweekly.com/link/172009/web) проверит, насколько хорошо ты знаешь поведение `Date`. Подходит, если хочешь понять, почему всё так странно и когда ждать новую Temporal API.

### [Promise.all(), но лучше](https://javascriptweekly.com/link/171980/web)
Разбираемся, как можно улучшить `Promise.all()` с помощью TypeScript-утилит. Упрощает работу с асинхронным кодом, делая его более читаемым и надёжным.

### [Vue 3.6 Alpha и режим Vapor](https://javascriptweekly.com/link/171964/web)
Предварительный релиз Vue 3.6 с новым режимом **Vapor**, который делает компоненты более компактными и быстрыми.

## ⚛️ React
### [История React в коде](https://react.statuscode.com/link/171774/web)
Если вы начали пользоваться React не с самого начала, эта статья поможет понять, откуда он взялся, как развивался и почему в API происходили важные изменения. Очень крутой обзор для тех, кто хочет глубже понимать философию React.

### [Создание клонов Google Photos на React Native](https://react.statuscode.com/link/171786/web)
Разбор, как создать клон приложения галереи с нуля: работа с фото, интерфейс, логика. Отличный практический кейс.

### [Next.js 15.4 и планы на 16](https://react.statuscode.com/link/171781/web)
Небольшой релиз с акцентом на производительность и поддержку Turbopack. Также авторы делятся, что появится в 16-й версии. Интересно, если вы следите за экосистемой Next.js.

### [Три года миграции с классов на хуки](https://react.statuscode.com/link/171782/web)
Команда делится опытом, как они переводили огромное React-приложение с классов и MobX на функциональные компоненты и хуки. Это может помочь, если вы сами находитесь в середине такой трансформации.

- [Как тестировать React Server Components](https://react.statuscode.com/link/171787/web) — хакерский, но рабочий способ.
- [Синхронизация стора между несколькими окнами Tauri](https://react.statuscode.com/link/171784/web) — пригодится, если вы делаете десктопное приложение.

## ⚙️ Node.js
### [Node v24.4.0 (current версия) вышла](https://nodeweekly.com/link/171730/web)
Новая версия добавляет флаг `--watch-kill-signal` — он управляет тем, какой сигнал отправляется процессу при перезапуске в режиме наблюдения (`watch mode`). Также улучшена работа с `spawn` и `spawnSync`, которые теперь передают флаги permission-модели. Обновлены движок V8 и зависимости.

### [Предложение: переход на ежегодные мажорные релизы Node.js](https://nodeweekly.com/link/171771/web)
Обсуждается идея выпускать новые основные версии Node.js раз в год. При этом срок поддержки стабильных (чётных) релизов сократится с 30 до 24 месяцев. Мнение сообщества приветствуется.

### [Node.js v18 — EOL, но поддержка через Ubuntu Pro до 2032](https://nodeweekly.com/link/171737/web)
Официально поддержка Node.js 18 завершилась, но Canonical продолжит выпускать обновления для пользователей Ubuntu Pro до 2032 года.

### [Node-API теперь доступен в React Native](https://nodeweekly.com/link/171738/web)
Callstack добавила поддержку Node-API в React Native. Это открывает больше возможностей для переиспользования нативного кода между платформами.

### [Анонс TypeScript 5.9 Beta](https://nodeweekly.com/link/171733/web)
Главное нововведение — [поддержка `import defer`](https://nodeweekly.com/link/171734/web), которая позволяет откладывать загрузку модулей. Также появился режим [`node20`](https://nodeweekly.com/link/171733/web), аналогичный `nodenext`, но ориентированный на ES2023. Кроме того, [Go-версия TypeScript](https://nodeweekly.com/link/171736/web) скоро станет официальной частью TypeScript 7.

- [**Производительность менеджеров версий Node.js**](https://nodeweekly.com/link/171741/web) — сравнение скорости запуска оболочки при использовании различных nvm-обёрток. Спойлер: разница может достигать 500 раз, но в реальности это не всегда важно.

## 🧠 Обучение и статьи
### [Как создать NPM-пакет в 2025](https://javascriptweekly.com/link/171975/web)
Полезный гайд от [Matt Pocock](https://javascriptweekly.com/link/171975/web) по созданию npm-пакетов: как всё правильно оформить, какие инструменты использовать и как всё автоматизировать.

### [ESLint 9.31.0](https://javascriptweekly.com/link/171969/web)
Обновление правил для поддержки управления ресурсами.

## ⚒️ Инструменты и библиотеки
- [**Necord** — фреймворк для создания Discord-ботов](https://nodeweekly.com/link/171747/web) на базе Nest и Discord.js. Пример [показывает, как просто это сделать](https://nodeweekly.com/link/171748/web), [репозиторий на GitHub](https://nodeweekly.com/link/171749/web).
- [**Upyo** — кросс-платформенная библиотека отправки email](https://nodeweekly.com/link/171750/web), работает с SMTP и HTTP-провайдерами (например, SendGrid, Amazon SES).
- [**Rewire 9.0** — моки и патчи в unit-тестах](https://nodeweekly.com/link/171752/web): даёт доступ к приватным переменным и позволяет заменять зависимости (только CommonJS).
- [**Envalid 8.1** — проверка переменных окружения](https://nodeweekly.com/link/171753/web): теперь можно убедиться, что приложение запускается только при наличии всех необходимых переменных.
- [**cRonstrue 3.0** — понятное описание cron-выражений](https://nodeweekly.com/link/171755/web): поддерживает ~30 языков и [имеет демо](https://nodeweekly.com/link/171757/web).
- [**react-easy-crop**](https://react.statuscode.com/link/171788/web) — компонент для кадрирования изображений и видео. Есть [репозиторий на GitHub](https://react.statuscode.com/link/171789/web).
- [**ReactPlayer 3.2**](https://react.statuscode.com/link/171790/web) — универсальный плеер для YouTube, Vimeo, HLS, DASH. [Демо здесь](https://react.statuscode.com/link/171791/web).
- [**Hyper Fetch**](https://react.statuscode.com/link/171792/web) — современная альтернатива Axios и TanStack Query. Много фичей и [поддержка Swagger/OpenAPI](https://react.statuscode.com/link/171793/web).
- [**WebGL-эффекты погоды**](https://react.statuscode.com/link/171794/web) — дождь, снег и туман в вашем браузере. [Смотрите демо](https://react.statuscode.com/link/171795/web).
- 📊 [SveltePlot](https://frontendfoc.us/link/171829/web) — библиотека визуализаций для Svelte, построенная на D3.
- 📘 [Eleventy LibDoc](https://frontendfoc.us/link/171831/web) — шаблон для создания красивой документации.
- 🧩 [SplitThing](https://frontendfoc.us/link/171833/web) — делит изображение на сетку и позволяет скачать кусочки.
- 📚 [Design Tokens Glossary](https://frontendfoc.us/link/171836/web) — глоссарий по токенам дизайна.
- 🖼 [Pandabox для Astro](https://frontendfoc.us/link/171839/web) — галерея со световым боксом.
- 🔍 [Проверка SSR](https://frontendfoc.us/link/171837/web) — инструмент для проверки, что рендерится на сервере.
- ✍️ [FontGen](https://frontendfoc.us/link/171838/web) — подбор шрифтов по категориям.
- [Hyper Fetch](https://javascriptweekly.com/link/171992/web) — альтернатива Axios и TanStack Query с поддержкой типизации и OpenAPI.
- [GrowField](https://javascriptweekly.com/link/171996/web) — авторасширяющийся `textarea` без зависимостей.
- [Upyo](https://javascriptweekly.com/link/171984/web) — кросс-платформенная библиотека для отправки email'ов.
- [Tinybase 6.4](https://javascriptweekly.com/link/172004/web) — реактивное хранилище данных для локальных приложений.
- [MUI X 8.8](https://javascriptweekly.com/link/172008/web) — обновление популярных компонентов для React.

### Новые версии
- [ESLint 9.31.0](https://nodeweekly.com/link/171758/web) — поддержка управления ресурсами.
- [Serverless Express 4.17](https://nodeweekly.com/link/171759/web) — Express.js на AWS Lambda и других платформах.
- [NATS.js 3.1](https://nodeweekly.com/link/171760/web) — клиент для системы обмена сообщениями.
- [open 10.2](https://nodeweekly.com/link/171761/web) — открытие ссылок и файлов кросс-платформенно.
- [OpenAI Node 5.9](https://nodeweekly.com/link/171762/web) — официальный клиент для API OpenAI.
- [snakecase-keys 9.0](https://nodeweekly.com/link/171763/web) — преобразование ключей объекта в snake_case.
- [Poolifier 5.1](https://nodeweekly.com/link/171764/web) — управление worker-пулами в Node.js.
- [react-medium-image-zoom 5.3](https://react.statuscode.com/link/171796/web) — зум картинок как на Medium. [Примеры](https://react.statuscode.com/link/171797/web).
- [Wasp 0.17](https://react.statuscode.com/link/171798/web) — фреймворк в стиле Rails на базе React и Node.js. [Проект](https://react.statuscode.com/link/171799/web).
- [React Chessboard 5.2](https://react.statuscode.com/link/171800/web) — компонент шахматной доски. [Примеры](https://react.statuscode.com/link/171801/web).
- [Tinybase 6.4](https://react.statuscode.com/link/171802/web) — реактивное хранилище для локальных приложений.
- [MUI X 8.8](https://react.statuscode.com/link/171803/web) — набор UI-компонентов для React.
