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

## Главные новости

<TelegramCTA/>

## 🧪 HTML и API

## 🎨 CSS и дизайн

## 🌐 JavaScript

- [JavaScript → Rust: переписывание инструментов](https://nodeweekly.com/link/171444/web) — Обзор тренда на использование Rust в JS-инфраструктуре.
- [Реактивный менеджер состояния на Proxy](https://nodeweekly.com/link/171445/web) — Минималистичный способ сделать свой стейт-менеджер.

## ⚛️ React

## ⚙️ Node.js
### 🧰 [jsonrepair: Исправление недействительных JSON-документов](https://nodeweekly.com/link/171417/web)
Инструмент, который автоматически чинит JSON-файлы с ошибками. Это полезно, когда, например, API или LLM возвращают некорректные данные. Можно использовать через CLI или онлайн-редактор ([попробовать здесь](https://nodeweekly.com/link/171418/web)).

### 🐛 [Безопасное усечение по кодовым точкам: исправление проблем с эмодзи в Node](https://nodeweekly.com/link/171425/web)
Если вы нарезаете строки с эмодзи с помощью `slice`, это может привести к ошибкам, особенно в CSV-импортах. Статья показывает, как использовать spread-оператор для корректного обрезания строк.

### 📄 [Новые инструменты для работы с документацией API в Node.js](https://nodeweekly.com/link/171421/web)
Команда Node работает над обновлением документации API. Проект [api-docs-tooling](https://nodeweekly.com/link/171422/web) позволяет автоматически генерировать более удобные страницы. [Скриншот](https://nodeweekly.com/link/171423/web), [подробнее о процессе](https://nodeweekly.com/link/171424/web).

## 🧠 Обучение и статьи
- 🌐 [Am I Online?](https://nodeweekly.com/link/171428/web) — Как надёжно определить, онлайн ли ваше приложение.
- 🎨 [Создание ИИ-помощника по выбору цвета](https://nodeweekly.com/link/171419/web) — Использование разных технологий для создания системы подсказок цвета. [Попробовать](https://nodeweekly.com/link/171420/web).
- [Rspack 1.4](https://nodeweekly.com/link/171446/web) — Быстрый сборщик (альтернатива webpack), теперь работает и в браузере.
- [Copilot Chat от Microsoft открыт для всех](https://nodeweekly.com/link/171447/web) — Расширение для VS Code теперь с открытым исходным кодом.


## ⚒️ Инструменты и библиотеки
- 🔧 [Bruno](https://nodeweekly.com/link/171429/web) — Альтернатива Postman для тестирования API. Работает как десктопное приложение, построено на Node и Electron.
- 🧵 [Poolifier 5.0](https://nodeweekly.com/link/171430/web) — Библиотека для создания пула воркеров с поддержкой `worker_threads` и `cluster`. Теперь можно отменять задачи.
- 🤖 [grammY](https://nodeweekly.com/link/171432/web) — Фреймворк для создания Telegram-ботов. Поддерживает последние фичи Telegram API. [GitHub](https://nodeweekly.com/link/171433/web)
- 🔥 [0x 6.0](https://nodeweekly.com/link/171434/web) — Инструмент для профилирования Node-процессов и создания flamegraph в одну команду.

### 📦 Обновления пакетов

- [Babel 7.28.0](https://nodeweekly.com/link/171435/web) — Поддержка TS-конфигов, `Explicit Resource Management` из ES2026 и режим `CommonJS sourceType`.
- [Inquirer.js 12.7](https://nodeweekly.com/link/171436/web) — CLI-интерфейсы: ввод, списки и прочее.
- [Repomix 1.1](https://nodeweekly.com/link/171437/web) — Упаковка репозитория в один AI-удобный файл.
- [Secretlint 10.2](https://nodeweekly.com/link/171438/web) — Линтер, предотвращающий попадание секретов в репозиторий.
- [Faker 9.9](https://nodeweekly.com/link/171439/web) — Генератор фейковых данных.
- [Oxlint 1.6](https://nodeweekly.com/link/171440/web) — Линтер для JS/TS, написанный на Rust.
