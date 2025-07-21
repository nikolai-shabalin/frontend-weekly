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

## 🎨 CSS и дизайн

<TelegramCTA/>

## 🌐 JavaScript

## ⚛️ React

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

## ⚒️ Инструменты и библиотеки
- [**Necord** — фреймворк для создания Discord-ботов](https://nodeweekly.com/link/171747/web) на базе Nest и Discord.js. Пример [показывает, как просто это сделать](https://nodeweekly.com/link/171748/web), [репозиторий на GitHub](https://nodeweekly.com/link/171749/web).
- [**Upyo** — кросс-платформенная библиотека отправки email](https://nodeweekly.com/link/171750/web), работает с SMTP и HTTP-провайдерами (например, SendGrid, Amazon SES).
- [**Rewire 9.0** — моки и патчи в unit-тестах](https://nodeweekly.com/link/171752/web): даёт доступ к приватным переменным и позволяет заменять зависимости (только CommonJS).
- [**Envalid 8.1** — проверка переменных окружения](https://nodeweekly.com/link/171753/web): теперь можно убедиться, что приложение запускается только при наличии всех необходимых переменных.
- [**cRonstrue 3.0** — понятное описание cron-выражений](https://nodeweekly.com/link/171755/web): поддерживает ~30 языков и [имеет демо](https://nodeweekly.com/link/171757/web).

- [ESLint 9.31.0](https://nodeweekly.com/link/171758/web) — поддержка управления ресурсами.
- [Serverless Express 4.17](https://nodeweekly.com/link/171759/web) — Express.js на AWS Lambda и других платформах.
- [NATS.js 3.1](https://nodeweekly.com/link/171760/web) — клиент для системы обмена сообщениями.
- [open 10.2](https://nodeweekly.com/link/171761/web) — открытие ссылок и файлов кросс-платформенно.
- [OpenAI Node 5.9](https://nodeweekly.com/link/171762/web) — официальный клиент для API OpenAI.
- [snakecase-keys 9.0](https://nodeweekly.com/link/171763/web) — преобразование ключей объекта в snake_case.
- [Poolifier 5.1](https://nodeweekly.com/link/171764/web) — управление worker-пулами в Node.js.
