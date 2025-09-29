---
title: "Еженедельный дайджест #18: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "Sep 29 2025"
mascotMessages: [
  { text: "Safari 26 с 3D моделями — вау! 🦎", index: 0 },
  { text: "corner-shape — углы как у Apple! 🔺", index: 1 },
  { text: "Liquid Glass в Expo — красота! ✨", index: 2 },
  { text: "Cloudflare сломался из-за useEffect 😅", index: 3 },
  { text: "Deno борется с Oracle за JS! ⚔️", index: 4 },
  { text: "npm атакуют песчаные черви! 🐛", index: 5 },
  { text: "Node.js теперь с HTTP/2 в DevTools 🔧", index: 6 },
  { text: "WebAssembly 3.0 — новый стандарт! 🦀", index: 7 },
  { text: "React Router 7.9 с middleware 🛣️", index: 8 },
  { text: "Solid.js лучше React? Спорно! 🤔", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API

## 🎨 CSS и дизайн

<TelegramCTA/>

## 📦 JavaScript

## ⚛️ React
### TanStack Start достиг версии-кандидата 1.0
Фреймворк [TanStack Start](https://react.statuscode.com/link/174676/web) — это попытка создать полноценное решение для разработки React-приложений с поддержкой SSR и типобезопасностью, но без излишней сложности. Сейчас он вышел в стадию Release Candidate (v1.0), то есть почти готов к финальному релизу. Авторы приглашают сообщество протестировать его и дать обратную связь. Это отличный выбор, если вы ищете современный, гибкий и производительный инструмент для создания как SPA, так и серверных приложений на React.

### Middleware теперь стабильна в React Router
В [React Router 7.9.0](https://react.statuscode.com/link/174678/web) официально стабилизирована поддержка middleware через флаг `future.v8_middleware`. Middleware позволяет перехватывать и обрабатывать запросы до того, как они достигнут компонентов — это полезно для аутентификации, логирования или модификации данных. [Подробности и примеры использования](https://react.statuscode.com/link/174677/web) помогут понять, как применять эту функцию на практике.

### Возможно, вам нужен `useSyncExternalStore`
Если вы часто используете `useEffect` для обновления состояния через `useState` на основе внешних данных (например, из глобального хранилища или WebSocket), то, скорее всего, вам подойдёт хук [`useSyncExternalStore`](https://react.statuscode.com/link/174683/web). Он создан специально для синхронизации React-состояния с внешними источниками и помогает избежать лишних ререндеров и гонок состояний.

- **Сравнение Solid и React** — автор делится впечатлениями: Solid показал, насколько React мог бы быть быстрее и проще, но, вероятно, никогда не станет таким из-за своей архитектуры. [Читать сравнение](https://react.statuscode.com/link/174725/web).
- **Что язык Elm научил автора о `useReducer` в React** — размышления о том, как строгие ограничения в Elm помогают писать более предсказуемый код, и как применить эти идеи в React с помощью `useReducer`. [Статья](https://react.statuscode.com/link/174687/web).
- **Создание 3D-визуализации погоды с React Three Fiber** — пошаговое руководство по созданию интерактивной 3D-карты погоды с использованием Three.js и React. [Перейти к туториалу](https://react.statuscode.com/link/174689/web).
- **Анимация элементов с Framer Motion в React** — вводный гайд по созданию плавных и выразительных анимаций с популярной библиотекой Framer Motion. [Изучить примеры](https://react.statuscode.com/link/174691/web).

## ⚙️ Node.js

## 📊 Видео и статьи
- **GitHub укрепляет безопасность npm** — в ответ на недавние инциденты с компрометацией пакетов, GitHub представил план по улучшению безопасности цепочки поставок в npm. [Подробнее](https://react.statuscode.com/link/174723/web).

- **Проблемы измерения прогресса загрузки через fetch** — Jake Archibald объясняет, почему стандартные потоки (`ReadableStream`, `WritableStream`) не всегда подходят для отслеживания прогресса загрузки/выгрузки файлов. [Анализ](https://react.statuscode.com/link/174724/web).

- **Интервью с создателем Vue.js** — Evan You рассказал о своём пути от Google до создания Vue, отношениях между Next.js и Nuxt, а также о своём новом проекте [void(0)](https://react.statuscode.com/link/174727/web). [Видеоинтервью](https://react.statuscode.com/link/174726/web).

## ⚒️ Инструменты и библиотеки
### React Old Icons: 2000+ ретро-иконок
Библиотека [React Old Icons](https://react.statuscode.com/link/174693/web) предоставляет более 2000 иконок из старых операционных систем (Windows 95, Mac OS и др.) в виде React-компонентов. Отлично подойдёт для ностальгических проектов или тематических интерфейсов. Важно: иконки могут быть защищены авторским правом, поэтому [используйте их осторожно](https://react.statuscode.com/link/174695/web). [GitHub-репозиторий](https://react.statuscode.com/link/174697/web).

### ESLint-плагин против лишних `useEffect`
Плагин [`eslint-plugin-react-you-might-not-need-an-effect`](https://react.statuscode.com/link/174699/web) автоматически находит и помечает ненужные или избыточные вызовы `useEffect`, которые часто возникают из-за непонимания жизненного цикла компонентов. Это поможет сделать код чище и эффективнее. [Подробнее о проблеме](https://react.statuscode.com/link/174701/web).

### nuqs: типобезопасное управление состоянием через URL
Библиотека [nuqs](https://react.statuscode.com/link/174705/web) позволяет работать с параметрами URL как с обычным состоянием React (`useState`), но с полной типизацией и синхронизацией. Поддерживает Next.js, Remix, React Router и другие роутеры. Очень удобно для фильтров, поиска и настроек интерфейса. [GitHub-репозиторий](https://react.statuscode.com/link/174707/web).

### react-native-big-calendar: календарь в стиле Google Calendar
Компонент [`react-native-big-calendar`](https://react.statuscode.com/link/174709/web) реализует полноценный календарь для React Native с поддержкой недельного и месячного вида, похожий на Google Calendar или Outlook. Можно [посмотреть демо](https://react.statuscode.com/link/174710/web) в Storybook.

### Обновления
- **react-medium-image-zoom 5.4** — компонент для увеличения изображений в стиле Medium.com. [Примеры работы](https://react.statuscode.com/link/174713/web). [Ссылка на релиз](https://react.statuscode.com/link/174711/web).
- **react-jsx-parser 2.4.1** — парсит строку с JSX и рендерит её как React-компоненты. Полезно для динамического контента. [Релиз](https://react.statuscode.com/link/174715/web).
- **Wasp 0.18** — фреймворк в стиле Ruby on Rails, но для Node.js и React с использованием Prisma. Позволяет быстро создавать full-stack-приложения. [Официальный сайт](https://react.statuscode.com/link/174719/web). [Релиз](https://react.statuscode.com/link/174717/web).
- **Ink 6.3.1** — библиотека для создания CLI-приложений с помощью React. [Релиз](https://react.statuscode.com/link/174720/web).
- **ESLint v9.36.0** — очередной релиз популярного линтера. [Ссылка](https://react.statuscode.com/link/174722/web).

