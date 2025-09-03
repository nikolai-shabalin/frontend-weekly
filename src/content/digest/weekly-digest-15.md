---
title: "Еженедельный дайджест #15: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "Sep 08 2025"
mascotMessages: [
  { text: "Big O — теперь с картинками! 📊", index: 0 },
  { text: "CSS random() — играем в кости 🎲", index: 1 },
  { text: "OKLCH цвета — вижу мир по-новому 🌈", index: 2 },
  { text: "JavaScript — чья торговая марка? 🤔", index: 3 },
  { text: "Plate — собираем редактор как LEGO 🧱", index: 4 },
  { text: "Lambda без холода — греемся ❄️", index: 5 },
  { text: "Bun — 500x быстрее postMessage! 🚀", index: 6 },
  { text: "LiftKit — золотое сечение в UI 🟡", index: 7 },
  { text: "Remix без React — что за дела? 😱", index: 8 },
  { text: "Шрифты загружаем правильно! ✍️", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API

## 🎨 CSS и дизайн
### [Основы Anchor Positioning](https://ishadeed.com/article/anchor-positioning/)
Anchor Positioning — это новая техника в CSS, позволяющая «привязывать» элементы к другим. В статье подробно разбираются базовые концепции: что это, как работает и где может пригодиться.

### [3D-текст слоями: основы](https://css-tricks.com/3d-layered-text-the-basics/)
Как сделать текст с эффектом 3D-слоёв только с помощью HTML и CSS? В статье шаг за шагом объясняется:
- как настроить перспективу,
- как организовать слои,
- как добиться впечатляющего результата.

<TelegramCTA/>

## 📦 JavaScript
- ⏱️ Почему браузеры «душат» таймеры JavaScript — разбор от [Nolan Lawson](https://react.statuscode.com/link/173735/web).

## 📦 TypeScript 
- 🧷 TypeScript 6.0: Дэниел Розенвассер предлагает включать [`--strict`](https://react.statuscode.com/link/173733/web) по умолчанию. Ещё планы — в отдельной [сводке](https://react.statuscode.com/link/173734/web).

## ⚛️ React
### ⚛️ «[React Server Components без фреймворка](https://react.statuscode.com/link/173697/web)»
Автор показывает, как запустить RSC **без** Next.js и даже без минимальных обёрток вроде [Waku](https://react.statuscode.com/link/173698/web). Идея — инструмент, который делит код на клиентскую и серверную части, чтобы вы могли пощупать RSC в «чистом» виде. Полезно, если хотите понять механику RSC без слоя фреймворка.

### 📚 «[react-window 2.0: быстрый рендер больших списков](https://react.statuscode.com/link/173699/web)»
Обновление популярной библиотеки виртуализации списков от Брайана Вона. Цель — эффективно выводить длинные ленты без лагов. Теперь требуется React 18. В качестве альтернативы автор упоминает и [TanStack Virtual](https://react.statuscode.com/link/173700/web). Если у вас таблицы/ленты на тысячи строк — это must‑have.

### 🧩 «[Redux Toolkit 2.9: комплект “всё‑в‑одном” для Redux](https://react.statuscode.com/link/173719/web)»
Свежий релиз приносит ускорение за счёт переписывания внутренностей RTK Query (подписки, поллинг), авто‑отмену запросов при удалении кэш‑энтри, новый `builder.addAsyncThunk` и багфиксы. Если используете RTK Query — апдейт даст ощутимую стабильность и производительность.

### 🧪 «[Используем `Activity` с данными под Suspense](https://react.statuscode.com/link/173709/web)»
В React 19 новый `Activity` скрывает компонент, **сохраняя его состояние**, но размонтируя эффекты, и при этом продолжает подгружать данные под Suspense. В статье — зачем это нужно и как применять в реальных экранах с загрузкой.

### 🔗 «[React on Rails 15: подружить React и Ruby on Rails](https://react.statuscode.com/link/173721/web)»
Фреймворк для SSR‑интеграции с Rails. В v15 гидратация может начинаться ещё **до полной загрузки** страницы. Отдельно доступен (пока платный) вариант с поддержкой [React Server Components](https://react.statuscode.com/link/173723/web) и планом открытой лицензии. Смотрите и [репозиторий](https://react.statuscode.com/link/173724/web).

### 🧱 «[Next.js бесит: “бага на каждом углу”](https://react.statuscode.com/link/173714/web)»
Мнение разработчика о реальных острых углах в Next.js: сочетание App Router, кешей/статов и RSC рождает много краевых случаев. Полезно как чек‑лист проблем, на которые стоит обратить внимание прежде чем тащить Next в прод.

### 📱 «[Что даёт синхронный встроенный SQLite в Expo‑приложениях](https://react.statuscode.com/link/173715/web)»
Кратко: офлайн‑хранилище, которое можно **синхронизировать**. Для мобильных приложений на React Native это упрощает работу с данными без поднятия полноценной БД на сервере.

### 🧵 «[Клиентское состояние из серверного: когда и как выводить](https://react.statuscode.com/link/173716/web)»
Автор разбирает, когда стоит выводить клиент‑стейт из серверного (например, через кэш запросов) и как избегать дублирования источников истины в приложениях на React/TS.

- Сегодня 11 лет со дня, когда Себастьян Маркбяге впервые представил [спецификацию JSX](https://react.statuscode.com/link/173701/web). Да, JSX старше, чем кажется 🙂

## ⚙️ Node.js


## 📊 Видео и статьи
### [VS Code: как восстановить удалённые файлы](https://youtu.be/7r9UwxAkQJY)
Короткое видео о том, как вернуть случайно удалённые файлы в VS Code.
Рассматривается встроенная «локальная история» редактора и способы отката к разным версиям файлов — даже без Git.

- 🧰 Что нового в «Vite‑землях» за месяц: Vite, Vitest, Rolldown, Oxlint и события — [дайджест](https://react.statuscode.com/link/173736/web).

## ⚒️ Инструменты и библиотеки
- 🧱 [Rspack 1.5](https://react.statuscode.com/link/173739/web): быстрее вотчер, оптимизация «баррельных» файлов, расширенная поддержка браузеров — крупный релиз.
- «[react-json-view-lite: дерево из JSON](https://react.statuscode.com/link/173725/web)» — лёгкий просмотрщик JSON с разворачиванием объектов и массивов и сохранением «читаемости». Есть [демо](https://react.statuscode.com/link/173726/web).
- «[react-qrcode-logo 4.0](https://react.statuscode.com/link/173727/web)» — генератор QR‑кодов с поддержкой логотипа.
- «[React Native Reanimated 4.1](https://react.statuscode.com/link/173728/web)» — переосмысление Animated для RN.
- «[React Admin 5.11](https://react.statuscode.com/link/173729/web)» — фреймворк для B2B‑интерфейсов.
- «[React Stripe.js 4.0](https://react.statuscode.com/link/173730/web)» — компоненты для Stripe Elements.
- «[BlockNote 0.37](https://react.statuscode.com/link/173731/web)» — редактор «как в Notion» на блоках.
- «[Ink 6.2.3](https://react.statuscode.com/link/173732/web)» — пишем CLI‑приложения на React.

### Новые версии
