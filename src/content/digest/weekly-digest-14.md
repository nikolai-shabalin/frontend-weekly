---
title: "Еженедельный дайджест #13: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "Sep 01 2025"
mascotMessages: [
  { text: "SVG больше не магия ✨", index: 0 },
  { text: "CSS теперь с функциями 🧩", index: 1 },
  { text: "Anchor Positioning — без JS 📌", index: 2 },
  { text: "Intl API: переводим нативно 🌍", index: 3 },
  { text: "Lambda без холодных стартов ❄️", index: 4 },
  { text: "jQuery 4.0 — жив и обновлён 🦾", index: 5 },
  { text: "Scrollspy на CSS — легко 👀", index: 6 },
  { text: "Custom Highlight — подсветка везде 🖍️", index: 7 },
  { text: "Жёлтый и фиолетовый — не враги 🟡🟣", index: 8 },
  { text: "PostCSS: опыт изнутри 🛠️", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API
- [Иллюстрированное введение в нотацию Big O](https://nodeweekly.com/link/173320/web) — простое объяснение сложности алгоритмов с примерами на JavaScript.


## 🎨 CSS и дизайн
- [Функция `random()` в CSS](https://nodeweekly.com/link/173323/web) — доступна в Safari Technology Preview, скоро появится в CSS.

<TelegramCTA/>

## 📦 JavaScript

- [Бенчмарки минификаторов JS](https://nodeweekly.com/link/173321/web), новый участник — [cminify](https://nodeweekly.com/link/173322/web).

## 📦 TypeScript 

## ⚛️ React

## ⚙️ Node.js
### [Как Calm перевели свой Rush.js монорепозиторий на Node с поддержкой TypeScript](https://nodeweekly.com/link/173281/web)
С версии Node 23.6 (и LTS начиная с [22.18.0](https://nodeweekly.com/link/173282/web)) появилась возможность запускать TypeScript-код, просто удаляя типы. Команда Calm решила перейти на новый подход, чтобы ускорить работу и улучшить опыт разработчиков. В статье делятся трудностями миграции и итогами.

### [Ускорение экосистемы JavaScript: Semver](https://nodeweekly.com/link/173283/web)
Автор показывает, как библиотеку `semver`, используемую в npm, yarn и pnpm, можно сделать в **33 раза быстрее**. Это часть многолетней серии оптимизаций инструментов в JS-мире.

### [Устранение cold start JavaScript-функций в AWS Lambda](https://nodeweekly.com/link/173289/web)
Новый ahead-of-time компилятор **Porffor** позволяет запускать процессы менее чем за миллисекунду. Это пока больше эксперимент, чем готовое решение для продакшена, но интересное направление развития.

- 📄 [Разбираем `Promise.any()`](https://nodeweekly.com/link/173291/web) — как вернуть результат, когда выполнится хотя бы один промис.
- 📄 [Форматирование единиц измерений с Intl](https://nodeweekly.com/link/173292/web).
- 📄 [Промисы с нуля](https://nodeweekly.com/link/173293/web) — статья для начинающих и продолжающих разработчиков.

## 📊 Видео и статьи

## ⚒️ Инструменты и библиотеки
### [Cronicle: распределённый cron с веб-интерфейсом](https://nodeweekly.com/link/173294/web)
«Красивый заменитель cron» — это таск-менеджер и планировщик задач с UI и поддержкой распределённых систем. [GitHub](https://nodeweekly.com/link/173295/web).

### [ImageJS 1.0: библиотека для обработки изображений](https://nodeweekly.com/link/173296/web)
Поддерживает изменение размера, обрезку, фильтры, цветовые корректировки и многое другое. Работает как в Node.js, так и в браузере. Поддержка TypeScript и новая API. [GitHub](https://nodeweekly.com/link/173300/web).

### [google-spreadsheet 5.0](https://nodeweekly.com/link/173302/web)
Обёртка над Google Sheets API для Node. Позволяет работать с ячейками, строками и таблицами, поддерживает разные способы авторизации. [GitHub](https://nodeweekly.com/link/173303/web).

- [Bun v1.2.1](https://nodeweekly.com/link/173284/web) — добавлен `Bun.SQL` с поддержкой MySQL, SQLite и Postgres, а также **500x ускоренный `postMessage(string)`** ([подробности](https://nodeweekly.com/link/173285/web)).
- [ESLint 9.34.0](https://nodeweekly.com/link/173286/web) — теперь поддерживает многопоточный линтинг, что ускоряет большие проекты.
- [Vercel Functions](https://nodeweekly.com/link/173287/web) теперь умеют обрабатывать `fetch`-запросы.
- [Next.js 15.5](https://nodeweekly.com/link/173288/web) — стабильная поддержка Node.js middleware runtime.

### Новые версии
- [Repomix 1.4](https://nodeweekly.com/link/173306/web) — упаковка репозитория в один файл, теперь с историей коммитов.
- [pg-promise 12.0](https://nodeweekly.com/link/173307/web) — Postgres-клиент для Node, теперь только ES6 Promises.
- [yoctocolors 2.1.2](https://nodeweekly.com/link/173308/web) — минималистичная альтернатива Chalk для раскраски текста в терминале.
- [Faker 10.0](https://nodeweekly.com/link/173310/web) — генерация тестовых данных, теперь только ESM.
- [Sidequest.js 1.6](https://nodeweekly.com/link/173311/web) — планировщик фоновых задач для Node.
- [Secretlint 11.2](https://nodeweekly.com/link/173312/web) — предотвращает коммиты с паролями и токенами.
- [OpenAI Node 5.15](https://nodeweekly.com/link/173313/web) — официальный клиент OpenAI для Node.js.
- [InversifyJS 7.9](https://nodeweekly.com/link/173314/web) — IoC-контейнер для Node.
- [Node-SSH 1.17](https://nodeweekly.com/link/173315/web) — SSH2-клиент и сервер на JS.
- [pnpm 10.15](https://nodeweekly.com/link/173316/web) — быстрый менеджер пакетов.
- [Undici 7.15](https://nodeweekly.com/link/173317/web) — мощный HTTP-клиент для Node.



### Новые релизы
- [Repomix 1.4](https://nodeweekly.com/link/173306/web) — упаковка репозитория в один файл, теперь с историей коммитов.
- [pg-promise 12.0](https://nodeweekly.com/link/173307/web) — Postgres-клиент для Node, теперь только ES6 Promises.
- [yoctocolors 2.1.2](https://nodeweekly.com/link/173308/web) — минималистичная альтернатива Chalk для раскраски текста в терминале.
- [Faker 10.0](https://nodeweekly.com/link/173310/web) — генерация тестовых данных, теперь только ESM.
- [Sidequest.js 1.6](https://nodeweekly.com/link/173311/web) — планировщик фоновых задач для Node.
- [Secretlint 11.2](https://nodeweekly.com/link/173312/web) — предотвращает коммиты с паролями и токенами.
- [OpenAI Node 5.15](https://nodeweekly.com/link/173313/web) — официальный клиент OpenAI для Node.js.
- [InversifyJS 7.9](https://nodeweekly.com/link/173314/web) — IoC-контейнер для Node.
- [Node-SSH 1.17](https://nodeweekly.com/link/173315/web) — SSH2-клиент и сервер на JS.
- [pnpm 10.15](https://nodeweekly.com/link/173316/web) — быстрый менеджер пакетов.
- [Undici 7.15](https://nodeweekly.com/link/173317/web) — мощный HTTP-клиент для Node.
