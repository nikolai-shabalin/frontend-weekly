---
title: "Еженедельный дайджест #10: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "July 29 2025"
mascotMessages: [
  { text: "HTML 2025: опрос открыт! 📝", index: 0 },
  { text: "SVG теперь проще простого! 🖼️", index: 1 },
  { text: "Liquid Glass: Apple удивляет! 🍏", index: 2 },
  { text: "Firefox с WebGPU и вкладками! 🦊", index: 3 },
  { text: "CSS if(): условия в стиле! 🧩", index: 4 },
  { text: "React: хуки и новый UI! ⚛️", index: 5 },
  { text: "Node 18 — EOL, но не беда! 🐧", index: 6 },
  { text: "Создай свой npm-пакет! 📦", index: 7 },
  { text: "AI-агент на 200 строк! 🤖", index: 8 },
  { text: "Reagraph: графы на WebGL! 📊", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API
- [Как работает JSX в Astro](https://react.statuscode.com/link/172423/web)

## 🎨 CSS и дизайн
<TelegramCTA/>

## 🌐 JavaScript
### 📚 [Много-много рантаймов JavaScript за последнее десятилетие](https://nodeweekly.com/link/172334/web)
Автор потратил целый год, чтобы собрать большую статью о различных средах выполнения JS: от Node.js до облачных платформ и малоизвестных движков. Отличный способ расширить кругозор по экосистеме JavaScript.

- 📄 [Операторы логического присваивания в JavaScript](https://nodeweekly.com/link/172344/web) — короткий, но полезный обзор новых возможностей вроде `x ||= y` и `x &&= y`. Экономят код и читаемы.

## TypeScript
- 🧪 [TypeScript 5.9 RC](https://nodeweekly.com/link/172335/web) — релиз-кандидат. Важное нововведение: `import defer` и поддержка `--module node20`.
- 📄 [Проблема типов в многорепозиторной архитектуре](https://nodeweekly.com/link/172343/web) — как работать с типами между несколькими репами. Подходит тем, кто использует монорепы или микросервисы.


## ⚛️ React
### [TanStack DB: Встраиваемая клиентская база данных для TanStack Query](https://react.statuscode.com/link/172410/web)
**TanStack DB** — новая клиентская база данных, которая позволяет выполнять живые запросы с миллисекундной задержкой и поддерживает "оптимистичные" обновления. Это особенно полезно, если ты работаешь с `TanStack Query` и хочешь ещё больше гибкости в хранении данных прямо в приложении.

### [Зачем вообще нужен `useCallback`](https://react.statuscode.com/link/172412/web)
В статье разбирается, почему `useCallback` и `useMemo` часто кажутся бесполезными. Автор объясняет, как один неперемемоизированный проп может свести на нет всё кэширование и как React Compiler и `useEffectEvent` могут помочь в будущем.

### [Как Parcel собирает React Server Components](https://react.statuscode.com/link/172416/web)
Parcel недавно добавил поддержку React Server Components. В статье объясняется, как это работает, что значит директива `"use client"` и зачем всё это нужно.

### [Предкомпиляция React Native для iOS в версии 0.81](https://react.statuscode.com/link/172418/web)
React Native теперь будет собираться для iOS быстрее в 10 раз благодаря предкомпиляции. Пока в RC, но уже можно попробовать и оценить прирост скорости.

### [Reanimated 4: Анимации в стиле CSS для React Native](https://react.statuscode.com/link/172424/web)
Обновление библиотеки Reanimated приносит мощные инструменты для анимаций в React Native. Теперь можно делать плавные и выразительные анимации без лишней боли — как в CSS, но с полным контролем в JS. Есть даже [видео-демо](https://react.statuscode.com/link/172425/web), чтобы быстро вникнуть.

- [Remix 3: конец архитектуры, ориентированной на React](https://react.statuscode.com/link/172421/web)

## ⚙️ Node.js
- 📄 [Руководство Node.js-разработчика по Unix domain сокетам](https://nodeweekly.com/link/172339/web) — Unix-сокеты работают быстрее TCP и полезны для взаимодействия между процессами. Простой вводный материал.
- 📺 [Создатель Bun о совместимости с Node.js](https://nodeweekly.com/link/172340/web) — интервью с автором Bun, где он рассказывает, почему основное внимание уходит не на фичи, а на полную совместимость с Node.js.
- 📄 [Как построить MCP-сервер на Node.js для LLM](https://nodeweekly.com/link/172342/web) — объясняется, как давать LLM доступ к данным через серверы, написанные на Node.js.

## 🧠 Обучение и статьи

## Безопасность
- 🔐 [Google представил OSS Rebuild](https://nodeweekly.com/link/172336/web) — новый инструмент для проверки безопасности open source пакетов через сравнение артефактов.
- ⚠️ [Атака через npm и пакет `is`](https://nodeweekly.com/link/172337/web) — hijack через фишинговый домен. Подробнее: [как крали логины разработчиков](https://nodeweekly.com/link/172338/web).

## ⚒️ Инструменты и библиотеки
- 🧪 [AudioTee.js](https://nodeweekly.com/link/172345/web) — библиотека для захвата системного звука на macOS из Node.js. Основана на Swift. [Исходники на GitHub](https://nodeweekly.com/link/172346/web).
- 🤖 [Transformers.js 3.7](https://nodeweekly.com/link/172347/web) — запуск ML-моделей прямо в браузере. Обновление включает поддержку распознавания речи и новые модели. [Подробнее о серверной инференции](https://nodeweekly.com/link/172348/web).
- 🧩 [match-sorter 8.1](https://nodeweekly.com/link/172350/web) — фильтрация и сортировка массивов по лучшему совпадению. [Попробовать вживую](https://nodeweekly.com/link/172351/web).

### Новые версии
- [Rooks.js 8.4](https://react.statuscode.com/link/172428/web) — почти 100 React-хуков для разных нужд: определение онлайна, голосовой ввод, отслеживание клавиш и т.п.
- [Better Upload](https://react.statuscode.com/link/172426/web) — загрузка файлов напрямую в S3 из React-приложений.
- [React Three Viverse](https://react.statuscode.com/link/172429/web) — создание 3D-приложений на основе Three.js и React Three Fiber.
- [Tinybase 6.5](https://react.statuscode.com/link/172433/web) — реактивное хранилище для локальных приложений.
- [TanStack Form 1.15](https://react.statuscode.com/link/172434/web) — типобезопасные формы в вебе.
- [IntentUI 3.3](https://react.statuscode.com/link/172435/web) — компоненты на базе React Aria.
- [Preact 10.27](https://react.statuscode.com/link/172436/web) — мини-версия React (всего 3KB).
- [BlockNote 0.35](https://react.statuscode.com/link/172437/web) — редактор в стиле Notion.
- [React-three-fiber 9.3](https://react.statuscode.com/link/172438/web) — рендерер Three.js под React.
- [Ink 6.1](https://react.statuscode.com/link/172439/web) — написание CLI-приложений на React.
- 📦 [Inquirer 12.9](https://nodeweekly.com/link/172352/web) — терминальные интерактивные формы.
- 🧵 [Node File Trace 0.30](https://nodeweekly.com/link/172353/web) — трекинг используемых файлов в приложении.
- 🧩 [MongoDB Node.js Driver 6.18](https://nodeweekly.com/link/172354/web)
- ⏱ [node-rate-limiter-flexible 7.2](https://nodeweekly.com/link/172355/web) — лимитирование запросов. Добавлена поддержка Drizzle ORM.
- ✍️ [Ghost 6.0 RC](https://nodeweekly.com/link/172357/web) — новый релиз платформы для блогов.
- ☁️ [@google-cloud/bigtable 6.2](https://nodeweekly.com/link/172358/web)
- 🌐 [Axios 1.11](https://nodeweekly.com/link/172359/web)
- 🖼 [TIFF 7.1](https://nodeweekly.com/link/172360/web)
- 👮‍♂️ [ESLint v9.32.0](https://nodeweekly.com/link/172361/web)
