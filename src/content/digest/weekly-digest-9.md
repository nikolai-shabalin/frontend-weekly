---
title: "Еженедельный дайджест #9: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "July 29 2025"
mascotMessages: [
  { text: "Apple всё так же не пускает чужие движки! 🍏", index: 0 },
  { text: "128 КБ — гордость веба! 💾", index: 1 },
  { text: "WebGPU в Firefox — графика на максималках! 🦊", index: 2 },
  { text: "CSS теперь с условиями! if() рулит! 🧩", index: 3 },
  { text: "Викторина по датам JS — не сойти с ума! 🗓️", index: 4 },
  { text: "Vue 3.6: Vapor-режим, скорость! 💨", index: 5 },
  { text: "React мигрирует с классов на хуки! 🔄", index: 6 },
  { text: "Node 18 — EOL, но Ubuntu спасёт! 🐧", index: 7 },
  { text: "Создаёшь npm-пакет? Гайд внутри! 📦", index: 8 },
  { text: "Hyper Fetch — новый конкурент Axios! ⚡", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API
### [Открыт опрос "Состояние HTML 2025"](https://frontendfoc.us/link/172111/web)
Третий ежегодный опрос от Devographics вернулся! Его цель — узнать, как разработчики используют HTML и веб-платформу. [Блог Леа Веру](https://frontendfoc.us/link/172112/web) объясняет, как результаты влияют на приоритизацию фич в [Interop](https://frontendfoc.us/link/172113/web) — совместный проект браузеров по улучшению совместимости.

### [Дружелюбное введение в SVG](https://frontendfoc.us/link/172110/web)
Джош Комо объясняет основы SVG через визуальные примеры. Это отличная статья для новичков, кто только начал использовать векторную графику на вебе, и хочет разобраться, как она работает.

### [Понимаем Liquid Glass от Apple](https://frontendfoc.us/link/172122/web)
Обзор нового стиля от Apple — Liquid Glass. В статье разбираются первые реакции сообщества, примеры и нюансы с точки зрения доступности.

- [Почему я не доверяю WCAG 2.2 и жду 3.0](https://frontendfoc.us/link/172123/web): Мнение разработчика о недостатках текущего стандарта.
- [Чеклист производительности фронтенда на 2025 год](https://frontendfoc.us/link/172126/web): Краткий список того, что важно не упустить, если вы хотите быстрый сайт.
- [Firefox 141](https://frontendfoc.us/link/172115/web): Вертикальные вкладки и организация через ИИ.
- [Web Speech API: озвучьте ваш сайт](https://frontendfoc.us/link/172129/web): Простое введение в синтез речи в браузере.
- [Next-Level фичи для веба](https://frontendfoc.us/link/172120/web): Видео с обзором Container Queries, `dialog`, `scroll-state()` и других новых API.

## 🎨 CSS и дизайн
### [Так много `animation-range`! Шпаргалка для скролл-анимаций](https://frontendfoc.us/link/172119/web)
Saron Yitbarek собрала список всех новых возможностей, связанных с анимациями, зависящими от прокрутки. Простое и понятное объяснение с примерами. Подходит для тех, кто хочет делать более живые сайты без JavaScript.

<TelegramCTA/>

## 🌐 JavaScript

## ⚛️ React
### [Untitled UI React: свежая библиотека компонентов](https://react.statuscode.com/link/172149/web)
Большая коллекция UI-компонентов с открытым исходным кодом, построенная на Tailwind CSS и React Aria. Можно просто «копировать, вставлять и собирать». Доступна [подробная инструкция](https://react.statuscode.com/link/172150/web). Также есть платная версия с дополнительными компонентами и интеграцией с Figma.

### [Новая документация по React Compiler](https://react.statuscode.com/link/172151/web)
Команда React обновила документацию по компилятору — инструменту для оптимизации на этапе сборки. Это всё ещё релиз-кандидат, но теперь проще понять, как он работает и как его использовать.

- [Zustand: простое управление состоянием](https://react.statuscode.com/link/172154/web) — Если Redux кажется вам слишком тяжёлым, попробуйте Zustand: минималистичная библиотека без лишней сложности.
- [React Router и Server Components: путь вперёд](https://react.statuscode.com/link/172156/web) — Какие перемены ждут пользователей React Router при переходе к серверным компонентам.
- [Создание PWA с логином через соцсети и Okta](https://react.statuscode.com/link/172161/web) — Пошаговое руководство по созданию приложения с авторизацией.

## ⚙️ Node.js
### [Laravel и Node.js: PHP в среде Watt Runtime](https://nodeweekly.com/link/172022/web)
Интересный эксперимент: теперь можно запускать Laravel-приложения (PHP) внутри Node.js через `php-node` и сервер `Watt`. Это сближает два разных мира — PHP и Node.js, и может быть полезно для миграции старых проектов или интеграции функционала Laravel в JS-приложение.

### [Обновления безопасности Node.js (15 июля)](https://nodeweekly.com/link/172026/web)
Вышли версии Node.js:
- [v24.4.1 (Current)](https://nodeweekly.com/link/172027/web)
- [v22.17.1 (LTS)](https://nodeweekly.com/link/172028/web)
- [v20.19.4](https://nodeweekly.com/link/172029/web)

Они исправляют уязвимости: проблему обхода путей в Windows и баг, связанный с хешированием в V8.

- [Node получает поддержку прокси в http/https](https://nodeweekly.com/link/172066/web)
- [Следующая версия pnpm позволит фиксировать Node.js в lock-файле](https://nodeweekly.com/link/172032/web)
- [Создание NPM-пакета в 2025 году](https://nodeweekly.com/link/172033/web) — хороший разбор шагов и отказ от CommonJS.
- [Компрометация пакета eslint-config-prettier](https://nodeweekly.com/link/172030/web) — подробный разбор атаки на npm.

## 🧠 Обучение и статьи
- [Мы перешли на Eleventy и ускорили сайт на 24%](https://nodeweekly.com/link/172035/web)
- [Как построить свой поисковик по шрифтам](https://nodeweekly.com/link/172037/web) — с использованием vision language models.
- [Полноценный AI-агент на 200 строках кода](https://nodeweekly.com/link/172038/web)
- [▶️ Сравнение Figma MCP и Claude Code](https://react.statuscode.com/link/172152/web) — Видео (8 минут), где сравнивают два способа превращения макета в React-код: через Claude и через Figma MCP.
- [Создание 2D-физики в стиле игр на React Native Skia](https://react.statuscode.com/link/172158/web)
- [Навигация и бизнес-метрики](https://frontendfoc.us/link/172130/web): Как плохая архитектура влияет на деньги.
- [Разработка под кнопочные телефоны в 2025 году](https://frontendfoc.us/link/172124/web): Неожиданно актуальный материал.

## ⚒️ Инструменты и библиотеки
- [Reagraph](https://react.statuscode.com/link/172162/web) — WebGL-библиотека для визуализации графов. Имеется [документация](https://react.statuscode.com/link/172163/web) и [Storybook](https://react.statuscode.com/link/172164/web).
- [React Unity WebGL 10.0](https://react.statuscode.com/link/172166/web) — позволяет встроить Unity-приложения в React и наладить взаимодействие между ними.
- [React CodeMirror](https://react.statuscode.com/link/172169/web) — обёртка CodeMirror для React, поддержка тем, подсветки и т.д.
- [fluent-state](https://react.statuscode.com/link/172172/web) — работа с локальным состоянием без редьюсеров, с реактивными вычислениями и вложенностью.
- [React Markdown Editor 4.0.8](https://react.statuscode.com/link/172173/web) — лёгкий Markdown-редактор с подсветкой.
- [React Admin 5.10](https://react.statuscode.com/link/172177/web) — фреймворк для B2B-приложений.
- [Endor: Подключение сервисов (например Postgres) как npm-зависимости](https://nodeweekly.com/link/172034/web) — можно запускать базы через `npm install` и `endor run`.
- [npq: Безопасная установка npm-пакетов](https://nodeweekly.com/link/172039/web) — проверяет пакет на уязвимости до установки.
- [NAPI-RS v3: написание Node.js-расширений на Rust](https://nodeweekly.com/link/172040/web) — теперь с поддержкой WebAssembly.
### Новые версии
- [YouTube.js 15.0](https://nodeweekly.com/link/172045/web) — неофициальный клиент YouTube API, теперь без CommonJS.
- [Bun v1.2.19](https://nodeweekly.com/link/172031/web) — поддержка pnpm-style `node_modules`, обновление пакетов, улучшения Postgres-клиента.
- [NeutralinoJS 6.2](https://nodeweekly.com/link/172048/web)
- [node-oidc-provider 9.4](https://nodeweekly.com/link/172049/web)
- [Corepack 0.34](https://nodeweekly.com/link/172050/web)
- [ESLint Markdown Language Plugin 7.0](https://nodeweekly.com/link/172051/web)
- [on-headers 1.1](https://nodeweekly.com/link/172054/web)
- [express-rate-limit 8.0](https://nodeweekly.com/link/172055/web)
- [Jasmine 5.9](https://nodeweekly.com/link/172056/web)
- [node-oracledb 6.9](https://nodeweekly.com/link/172057/web)
- [Undici 7.12](https://nodeweekly.com/link/172058/web)
- [node-soap 1.2](https://nodeweekly.com/link/172059/web)
