---
title: "Еженедельный дайджест #7: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "July 14 2025"
mascotMessages: [
{ text: "PNG снова в моде — теперь с HDR! 🖼️", index: 0 },
{ text: "CSS умеет gap-декорации, вау! 💥", index: 1 },
{ text: "ES2025 принят — JavaScript растёт! 🚀", index: 2 },
{ text: "React всё ещё запутан? Не переживай! 🧩", index: 3 },
{ text: "Node.js теперь с Web API и import maps! ⚙️", index: 4 },
{ text: "Deno снова bundler — всё в одном файле! 📦", index: 5 },
{ text: "Пробовал blob-фигуры в CSS? 🎨", index: 6 },
{ text: "Вышел Polypane 25 — браузер для профи! 🕵️", index: 7 },
{ text: "Cloudflare запускает контейнеры! ☁️", index: 8 },
{ text: "Transformers.js теперь с Gemma 3n! 🤖", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🥇 Главные новости

<TelegramCTA/>

## 🧪 HTML и API
### [Что такое `popover=hint`?](https://frontendfoc.us/link/171461/web)
Новое значение `popover="hint"` позволяет показывать подсказки, которые накладываются друг на друга в нужном порядке. Очень полезно для создания сложных UI без JS.

- [Гайд по уведомлениям с хорошим UX](https://frontendfoc.us/link/171472/web) — подборка паттернов и анти-паттернов от Vitaly Friedman.
- [Команда Edge достигла < 300мс First Contentful Paint по всему миру](https://frontendfoc.us/link/171458/web)
- [Автоматизация доступности с помощью Storybook 9](https://frontendfoc.us/link/171470/web)

## 🎨 CSS и дизайн
### [Условные конструкции в CSS с новой функцией `if()`](https://frontendfoc.us/link/171454/web)
Функция `if()` — это революционное нововведение, которое позволяет делать условия прямо в CSS. Теперь можно использовать условную логику внутри `media`, `supports` и `style`-запросов. Пока поддерживается только в Chrome 137+, но это только начало. В статье есть много наглядных примеров.

→ Дополнительно: [забавная демка логических вентилей на CSS](https://frontendfoc.us/link/171455/web)

### [CSS-интеллект: будущее "умного" языка](https://frontendfoc.us/link/171456/web)
Автор размышляет, как CSS эволюционирует в язык с логикой и условиями. Всё больше возможностей появляется, но не станет ли CSS слишком сложным?

### [Лучшая работа с формами с помощью `shape()` в CSS](https://frontendfoc.us/link/171462/web)
Заключительная часть серии статей об использовании CSS-функции `shape()` — в фокусе команды `close` и `move`. Эти команды редкие, но в нужный момент незаменимы.

### [CSS Cascade Layers против BEM и Utility-классов: как управлять специфичностью](https://www.smashingmagazine.com/2025/06/css-cascade-layers-bem-utility-classes-specificity-control/?utm_source=CSS-Weekly&utm_campaign=Issue-614&utm_medium=web)
Интересное сравнение трёх подходов к стилям: каскадные слои CSS, методология BEM и утилитарные классы. Автор показывает, как они могут сочетаться для лучшего контроля специфичности.

### [Зернистые градиенты (Grainy Gradients)](https://frontendmasters.com/blog/grainy-gradients/?utm_source=CSS-Weekly&utm_campaign=Issue-614&utm_medium=web)
Ана Тудор показывает, как сделать градиенты с лёгкой текстурой, избегая полос (banding), используя SVG displacement карты. Красиво и креативно!

### [Обзор функции `if()` в CSS](https://css-tricks.com/lightly-poking-at-the-css-if-function-in-chrome-137/?utm_source=CSS-Weekly&utm_campaign=Issue-614&utm_medium=web)
Обзор новой CSS-функции `if()`, появившейся в Chrome 137+. Позволяет писать условия прямо внутри CSS, без JS.

### [Понимание corner-shape и силы superellipse](https://frontendmasters.com/blog/understanding-css-corner-shape-and-the-power-of-the-superellipse/?utm_source=CSS-Weekly&utm_campaign=Issue-614&utm_medium=web)
Полезный разбор нового свойства `corner-shape` и функции `superellipse()`. Подходит как для простых скруглений, так и для более сложных форм.

### [Публичные и приватные CSS cascade layers в дизайн-системе](https://gomakethings.com/public-and-private-css-cascade-layers-in-a-design-system/?utm_source=CSS-Weekly&utm_campaign=Issue-614&utm_medium=web)
Крис Фердинанди рассказывает, как разделять каскадные слои на публичные и приватные, чтобы упростить поддержку компонентов.

- [Tailwind — худшая форма CSS, кроме всех остальных](https://frontendfoc.us/link/171471/web) — ироничное, но полезное мнение о пользе Tailwind.

## 🌐 JavaScript
### 📌 [Подробный обзор последнего заседания TC39](https://javascriptweekly.com/link/171672/web)
Команда Igalia делится большим обзором заседания комитета, который управляет развитием ECMAScript. Обсуждаются новые фичи, такие как `Array.fromAsync`, `Temporal API`, управление ресурсами и идеи по `AsyncContext`. Это полезное чтиво, если ты хочешь понимать, как рождаются новые возможности в языке.

### 📌 [Почему hoisting в JavaScript может ломать сборку](https://javascriptweekly.com/link/171689/web)
Создатель Parcel пишет о том, что "scope hoisting" — техника, которую используют сборщики, может **создавать ошибки** в современных приложениях. Он даже подумывает убрать её в Parcel 3.


- [JavaScript → Rust: переписывание инструментов](https://nodeweekly.com/link/171444/web) — Обзор тренда на использование Rust в JS-инфраструктуре.
- [Реактивный менеджер состояния на Proxy](https://nodeweekly.com/link/171445/web) — Минималистичный способ сделать свой стейт-менеджер.
- [TypeScript 5.9 Beta](https://react.statuscode.com/link/171501/web) вышел.

## ⚛️ React
### 🎥 [Как создать кинетическую анимацию изображения с помощью React Three Fiber](https://react.statuscode.com/link/171495/web)
Эффектная анимация для Web, созданная с помощью [React Three Fiber](https://react.statuscode.com/link/171497/web) — библиотеки, позволяющей использовать WebGL через React. В статье подробно объясняется, как это работает. Можно [посмотреть пример вживую](https://react.statuscode.com/link/171496/web).

### ☁️ [Рендеринг анимаций КТ-сканов в облаке](https://react.statuscode.com/link/171509/web)
React Three Fiber можно использовать не только для эффектных визуализаций, но и для научных проектов. Пример — анимации медицинских КТ-сканов.

### ▶️ [Что React-разработчику нужно знать о Signals](https://react.statuscode.com/link/171499/web)
Автор SolidJS делится опытом, как "сигналы" — новый тренд в реактивности — отличаются от подхода React. Видео на 10 минут, но сделано с душой и вниманием к деталям.

### 🌍 [Как Patreon обновил систему интернационализации](https://react.statuscode.com/link/171507/web)
История перехода с устаревшей i18n-библиотеки на более современный подход в React-приложении. Использовались codemods, чтобы автоматизировать миграцию.

## ⚙️ Node.js
### 🧰 [jsonrepair: Исправление недействительных JSON-документов](https://nodeweekly.com/link/171417/web)
Инструмент, который автоматически чинит JSON-файлы с ошибками. Это полезно, когда, например, API или LLM возвращают некорректные данные. Можно использовать через CLI или онлайн-редактор ([попробовать здесь](https://nodeweekly.com/link/171418/web)).

### 🐛 [Безопасное усечение по кодовым точкам: исправление проблем с эмодзи в Node](https://nodeweekly.com/link/171425/web)
Если вы нарезаете строки с эмодзи с помощью `slice`, это может привести к ошибкам, особенно в CSV-импортах. Статья показывает, как использовать spread-оператор для корректного обрезания строк.

### 📄 [Новые инструменты для работы с документацией API в Node.js](https://nodeweekly.com/link/171421/web)
Команда Node работает над обновлением документации API. Проект [api-docs-tooling](https://nodeweekly.com/link/171422/web) позволяет автоматически генерировать более удобные страницы. [Скриншот](https://nodeweekly.com/link/171423/web), [подробнее о процессе](https://nodeweekly.com/link/171424/web).

- [Обновления всех версий Node.js](https://react.statuscode.com/link/171534/web) на следующей неделе из-за уязвимостей

## 🧠 Обучение и статьи
- 🌐 [Am I Online?](https://nodeweekly.com/link/171428/web) — Как надёжно определить, онлайн ли ваше приложение.
- 🎨 [Создание ИИ-помощника по выбору цвета](https://nodeweekly.com/link/171419/web) — Использование разных технологий для создания системы подсказок цвета. [Попробовать](https://nodeweekly.com/link/171420/web).
- [Rspack 1.4](https://nodeweekly.com/link/171446/web) — Быстрый сборщик (альтернатива webpack), теперь работает и в браузере.
- [Copilot Chat от Microsoft открыт для всех](https://nodeweekly.com/link/171447/web) — Расширение для VS Code теперь с открытым исходным кодом.
[100 лендингов DevTools — что работает в 2025 году](https://frontendfoc.us/link/171468/web)
- [Генерация alt-текста с помощью ИИ](https://jaredcunha.com/blog/writing-alt-text-with-ai?utm_source=CSS-Weekly&utm_campaign=Issue-614&utm_medium=web) — как LLM-модели могут помочь с написанием полезных альтернативных описаний изображений.
- [Как пользоваться консолью разработчика в Chrome](https://www.debugbear.com/blog/chrome-browser-console?utm_source=CSS-Weekly&utm_campaign=Issue-614&utm_medium=web) — от основ до продвинутых трюков.
- [Как отключить CORS в Chrome для тестирования](https://youtu.be/vVdLKIjJ2rI?utm_source=CSS-Weekly&utm_campaign=Issue-614&utm_medium=web) — короткое видео с советом.

## ⚒️ Инструменты и библиотеки
- [VS Code 1.102](https://javascriptweekly.com/link/171683/web), [Angular 20.1](https://javascriptweekly.com/link/171685/web), [Ember 6.5](https://javascriptweekly.com/link/171684/web)
- 🧱 [BlockNote 0.33](https://react.statuscode.com/link/171510/web) — Блоковый редактор в стиле Notion. Есть перетаскивание, Slash-команды, поддержка ИИ и куча [примеров](https://react.statuscode.com/link/171512/web). Основан на ProseMirror и TipTap. Также можно добавить [AI-функции](https://react.statuscode.com/link/171511/web).
- 🧠 [Поддержка MCP в Next.js](https://react.statuscode.com/link/171513/web) — Доступ к пользовательским данным для AI-приложений типа Claude и Cursor.
- 🖌️ [Unistyles 3.0](https://react.statuscode.com/link/171514/web) — Производительная библиотека стилизации для React Native, использующая C++ и интеграцию с [Fabric](https://react.statuscode.com/link/171515/web). Подробнее в [блоге Expo](https://react.statuscode.com/link/171516/web).
- 🔧 [Bruno](https://nodeweekly.com/link/171429/web) — Альтернатива Postman для тестирования API. Работает как десктопное приложение, построено на Node и Electron.
- 🧵 [Poolifier 5.0](https://nodeweekly.com/link/171430/web) — Библиотека для создания пула воркеров с поддержкой `worker_threads` и `cluster`. Теперь можно отменять задачи.
- 🤖 [grammY](https://nodeweekly.com/link/171432/web) — Фреймворк для создания Telegram-ботов. Поддерживает последние фичи Telegram API. [GitHub](https://nodeweekly.com/link/171433/web)
- 🔥 [0x 6.0](https://nodeweekly.com/link/171434/web) — Инструмент для профилирования Node-процессов и создания flamegraph в одну команду.
- [@vitejs/plugin-rsc](https://react.statuscode.com/link/171506/web) теперь официально в организации Vite.
- [line-numbers](https://frontendfoc.us/link/171478/web) — web-компонент, добавляющий номера строк к HTML-коду.
- [Monorail](https://frontendfoc.us/link/171581/web) — визуализация CSS-анимаций с keyframes.
- [snapDOM 1.8](https://frontendfoc.us/link/171582/web) — делает скриншоты HTML-элементов в виде SVG.
- [Vecto3D](https://frontendfoc.us/link/171476/web) — превращает SVG в 3D-модели.
- [URL to Any](https://frontendfoc.us/link/171482/web) — преобразует веб-страницы в PDF, Markdown и другие форматы.
- [Spark для Three.js](https://frontendfoc.us/link/171483/web) — продвинутый рендерер 3D Gaussian Splatting.

### 📦 Обновления пакетов
- [Babel 7.28.0](https://nodeweekly.com/link/171435/web) — Поддержка TS-конфигов, `Explicit Resource Management` из ES2026 и режим `CommonJS sourceType`.
- [Inquirer.js 12.7](https://nodeweekly.com/link/171436/web) — CLI-интерфейсы: ввод, списки и прочее.
- [Repomix 1.1](https://nodeweekly.com/link/171437/web) — Упаковка репозитория в один AI-удобный файл.
- [Secretlint 10.2](https://nodeweekly.com/link/171438/web) — Линтер, предотвращающий попадание секретов в репозиторий.
- [Faker 9.9](https://nodeweekly.com/link/171439/web) — Генератор фейковых данных.
- [Oxlint 1.6](https://nodeweekly.com/link/171440/web) — Линтер для JS/TS, написанный на Rust.
- [Next.js Boilerplate 5.0](https://react.statuscode.com/link/171518/web) — Стартовый шаблон с авторизацией, БД, i18n и формами.
- 📅 [React DayPicker 9.8](https://react.statuscode.com/link/171519/web) — Кастомный выбор даты, теперь с улучшенной навигацией с клавиатуры.
- 🔍 [React Scan 0.4](https://react.statuscode.com/link/171520/web) — Сканер медленных рендеров.
- 🌌 [react-force-graph 1.48](https://react.statuscode.com/link/171521/web) — Компонент для графов с силовым расположением.
- 📊 [Ant Design Charts 2.6](https://react.statuscode.com/link/171522/web) — Графики в стиле Ant Design. [Демо и примеры](https://react.statuscode.com/link/171523/web).
- 🎨 [Material UI 7.2](https://react.statuscode.com/link/171524/web) — Компоненты на основе Material Design.
- 🤖 [React ChatBotify 2.2](https://react.statuscode.com/link/171525/web) — Создание чат-ботов.
- 💅 [stylex 0.14.0](https://react.statuscode.com/link/171526/web) — Стилизатор от Facebook.
- ♟ [React Chessboard 5.1](https://react.statuscode.com/link/171527/web) — Отображение шахматных досок. [Примеры](https://react.statuscode.com/link/171528/web).
- 📉 [Recharts 3.1](https://react.statuscode.com/link/171529/web) — Графики на базе D3.
