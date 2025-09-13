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

- **Атрибут `headingoffset` добавлен в HTML** — WHATWG HTML добавил поддержку атрибута для автоматического смещения уровней заголовков внутри контейнера. Это решает проблему, когда встраиваемый контент нарушает иерархию заголовков страницы. Спецификация: [heading levels & offsets](https://html.spec.whatwg.org/multipage/sections.html#heading-levels-&-offsets). Обсуждение: [issue #5033](https://github.com/whatwg/html/commit/e774e8e318e8b40f60b3ee02256fe41e42e84820).

  🙏 Спасибо Сергею Артёмову за предоставленную новость!

- **Reciprocate для Web Components** — сигнальная реактивность и отражение атрибутов/свойств в кастомных элементах. Анонс: [статья](https://frontendfoc.us/link/173989/web) · демо — [пример](https://frontendfoc.us/link/173990/web) · код — [репозиторий](https://frontendfoc.us/link/173991/web).

## 🎨 CSS и дизайн
### Liquid Glass в браузере: преломление с CSS и SVG
Подробный разбор, как в вебе воссоздать «жидкое стекло» в стиле Apple: сочетание CSS‑фильтров, SVG displacement map и простых законов преломления. Есть песочница с демо (лучше в Chrome). Читать: [Liquid Glass в браузере](https://frontendfoc.us/link/173968/web).

### Плавная смена цвета в CSS
Как анимировать **цвет** так же красиво, как позицию и форму: разница цветовых пространств, подводные камни и как ускоряться через CSS‑фильтры. Подробнее: [Color Shifting в CSS](https://frontendfoc.us/link/174098/web).


### Interop 2026: как подать идею для веб‑платформы
Открыт приём предложений в Interop 2026 — программу согласованной реализации фич в браузерах. Что такое «хорошая заявка» и прогресс Interop 2025. Подробности: [гайд по заявкам](https://frontendfoc.us/link/173969/web) · форма — [отправить идею](https://frontendfoc.us/link/173970/web) · комментарии WebKit — [заметки Jen Simmons](https://frontendfoc.us/link/173971/web).

### Бюджетные и средние смартфоны 2025 и как под них тестировать
Не у всех топовый флагман. Автор сопоставляет реальные low/mid‑tier устройства с пресетами Chrome DevTools, чтобы тестировать «как у пользователей». В детали: [Low/Mid‑tier для реального мира](https://frontendfoc.us/link/173978/web).

### Выравнивание в CSS: фундамент
Как работают свойства выравнивания в разных раскладках (flex, grid и боксовая модель): не только `align-*`, а вся «семья». Хорошо, чтобы перестать «подбирать на глаз». Разобраться: [Фундамент выравнивания](https://frontendfoc.us/link/173980/web).

### Интерполяция цветов в CSS простыми словами
Интерполяция — это «какие цвета между двумя точками». В статье — как это влияет на градиенты, переходы и `color-mix()`. Читать: [Интерполяция цвета](https://frontendfoc.us/link/173977/web).

- **CSS‑холография карточек Pokémon** — 3D‑трансформы, градиенты и режимы смешения. Смотреть: [демо‑подборка](https://frontendfoc.us/link/173987/web).

<TelegramCTA/>

## 📦 JavaScript
— **Intl Playground.** Быстрый способ посмотреть, как опции `Intl.DateTimeFormat` выглядят «вживую»: зайдите на [песочницу](https://nodeweekly.com/link/173958/web).

## 📦 TypeScript 

## ⚛️ React
### [Storybook 10 (бета): только ESM](https://react.statuscode.com/link/174013/web)
**Что изменилось:** Storybook переходит на чистый ESM — меньше сложностей с форматами модулей и чуть компактнее установка.
**Почему важно:** если ваш проект ещё зависит от CommonJS‑конфигов, потребуется миграция (есть инструменты‑помощники). Для новичков: ESM — это современный стандарт модулей в браузерах и Node, он упрощает сборку и улучшает DX.

— Ещё по теме: статья о том, как использовать [встроенный тест‑раннер Node.js с TypeScript и React](https://react.statuscode.com/link/174022/web) — если только знакомитесь с тестами без Jest/Vitest, это хороший старт.
— А также: «наконец‑то» [безопасные методы массивов в JS](https://react.statuscode.com/link/174024/web) — объясняют новые методы, которые не мутируют исходный массив и помогают писать предсказуемее в React‑коде.
— 3D по‑человечески: [React Three Timeline](https://react.statuscode.com/link/174030/web) — пишем поведение в 3D как историю с `async`‑генераторами. Есть [живое демо](https://react.statuscode.com/link/174031/web) и [исходники](https://react.statuscode.com/link/174032/web).



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
- **Курс web.dev «Learn CSS» обновлён** — девять новых модулей: вложенность, якорное позиционирование, контейнерные запросы и др. К курсу: [обновлённый Learn CSS](https://frontendfoc.us/link/173972/web).
- **Почему стоит тестировать страницу без JavaScript** — где ломается JS и какие «перила» ставить. Начать: [тест без JS](https://frontendfoc.us/link/173983/web).
- **Оптимизация сторонних скриптов через Web Workers и Partytown** — разгружаем главный поток. Гайд: [оптимизация скриптов](https://frontendfoc.us/link/173984/web).

## ⚒️ Инструменты и библиотеки
— **Mediabunny** — «комбайн» для работы с медиа без FFmpeg: можно [делать превью](https://nodeweekly.com/link/173932/web), [доставать метаданные](https://nodeweekly.com/link/173933/web) и даже [собирать видео кодом](https://nodeweekly.com/link/173934/web). Начните со страницы проекта [Mediabunny](https://nodeweekly.com/link/173930/web) и загляните в [репозиторий](https://nodeweekly.com/link/173935/web).

— **sqs-consumer 13.0** — упрощает написание приложений на базе Amazon SQS: просто пишете `async`‑обработчик сообщений. Подробнее: [анонс](https://nodeweekly.com/link/173937/web).
— **github-script 8.0** — удобный способ вызывать GitHub API прямо из GitHub Actions на JavaScript, теперь с поддержкой Node.js 24. Подробнее: [github-script 8.0](https://nodeweekly.com/link/173938/web)
— **Точные длины строк с `Intl.Segmenter`.** Когда `str.length` путает из‑за эмодзи/комбинированных символов — поможет сегментация по графемам. Пример и объяснения: [небольшая заметка](https://nodeweekly.com/link/173926/web).
— **«Полмиллиарда кликов на VPS за $4».** Практический кейс оптимизации простого сайта на Node.js, который внезапно стал вирусным. Смотрим [разбор](https://nodeweekly.com/link/173927/web).
— **Почему я ушёл с Docker на Podman.** Автор объясняет плюсы Podman: совместимость CLI, rootless, изоляция и безопасность. Читать [статью](https://nodeweekly.com/link/173928/web).
— **UDP в Node.js.** Аккуратный технический гид по `dgram` и практикам работы с UDP‑сокетами. Полезно, если пишете системные сервисы. Подробнее: [гайд](https://nodeweekly.com/link/173929/web).
— **NodeBook (в разработке).** Глубокое погружение во внутренности Node: уже есть главы про [движок V8](https://nodeweekly.com/link/173921/web) и [циклы событий](https://nodeweekly.com/link/173922/web); стартовать можно со страницы [NodeBook](https://nodeweekly.com/link/173920/web).
- **Peaks.js 4.0** — UI для взаимодействия с аудиоволнами на `<canvas>` (скролл, зум). Подробнее: [Peaks.js 4.0](https://frontendfoc.us/link/173993/web).
- **Splide** — лёгкий доступный слайдер/карусель на TypeScript, без зависимостей, с хорошим Lighthouse. Сайт: [демо Splide](https://frontendfoc.us/link/173994/web) · код — [репозиторий](https://frontendfoc.us/link/173995/web).
- **Cosmic UI** — футуристичные компоненты: формы на SVG, логика на Zag. Каталог: [Cosmic UI](https://frontendfoc.us/link/173997/web) · код — [repo](https://frontendfoc.us/link/173998/web).
- **mdream** — превращает сайт в «чистый» Markdown и `llms.txt` (для лучшей «читаемости» ИИ и не только). Посмотреть: [mdream на GitHub](https://frontendfoc.us/link/173996/web).
- **.htaccess‑скрипт** — быстрый способ блокировать трафик по стране на Apache. Взять: [блокировка по стране](https://frontendfoc.us/link/173999/web).

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
- [Ink 6.3](https://react.statuscode.com/link/174038/web) — строим CLI‑приложения на React (его используют многие инструменты — [примеры](https://react.statuscode.com/link/174039/web)).
- [React Menu 4.5](https://react.statuscode.com/link/174040/web) — доступные меню и дропдауны.
- [react‑json‑view‑lite 2.5](https://react.statuscode.com/link/174041/web) — дерево для JSON с [демкой](https://react.statuscode.com/link/174042/web).
- [React Horizontal Heatmap](https://react.statuscode.com/link/174037/web) — горизонтальная тепловая карта для таймлайнов/активности.
