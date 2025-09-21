---
title: "Еженедельный дайджест #17: Новости фронтенда"
description: "Самые интересные новости из мира фронтенд-разработки за последнюю неделю"
pubDate: "Sep 22 2025"
mascotMessages: [
  { text: "HTML теперь сам смещает заголовки! 🏷️", index: 0 },
  { text: "CSS: цвета текут, как радуга 🌈", index: 1 },
  { text: "Liquid Glass — эффект, как у Apple! 💧", index: 2 },
  { text: "Тестирую на бюджетниках — как у людей 📱", index: 3 },
  { text: "Andromeda: новый движок на Rust? 🚀", index: 4 },
  { text: "Storybook теперь только ESM! 📦", index: 5 },
  { text: "Reciprocate — реактивность для Web Components ⚡", index: 6 },
  { text: "Безопасные методы массивов — не мутирую! 🛡️", index: 7 },
  { text: "Цвета в CSS теперь ещё плавнее 🎨", index: 8 },
  { text: "Google обновил Learn CSS — учусь новому! 📚", index: 9 }
]
---

import TelegramCTA from '../../components/TelegramCTA.astro';

## 🧪 HTML и API

## 🎨 CSS и дизайн

<TelegramCTA/>

## 📦 JavaScript

## ⚛️ React
### 🛠️ Авария в Cloudflare из‑за ошибочного `useEffect`
В **Cloudflare Dashboard** произошёл сбой, корень которого — не баг в React как таковом, а неудачное использование эффекта, из‑за чего приложение засыпало бекенд лишними запросами. Это хороший повод ещё раз вспомнить про правила зависимостей и идемпотентность эффектов. Подробности — в разборе от Cloudflare: [история сбоя и уроки](https://react.statuscode.com/link/174334/web).

- [Как держать `package.json` под контролем](https://react.statuscode.com/link/174335/web): заметки Тома МакРайта о «гигиене зависимостей» и том, как не разрастить `node_modules` до сотен мегабайт. Полезно новичкам: начните с периодического аудита и инструментов для анализа деревьев зависимостей.
- [Поддержка React Server Components в разных фреймворках](https://react.statuscode.com/link/174337/web): сравнение возможностей **Next.js**, **Vite**, **Waku**, **Forket**, **Parcel**, **React Router** и **RedwoodSDK**. Есть и [репозиторий с тестами](https://react.statuscode.com/link/174338/web), который можно использовать как «шпаргалку».
- [«React победил по умолчанию — и это тормозит инновации»](https://react.statuscode.com/link/174344/web): мнение об эффектах «реакт‑по‑умолчанию». Хороший материал, чтобы посмотреть на экосистему критично.
- В канале **Canary** появился `<Activity />`: [анонс и детали](https://react.statuscode.com/link/174339/web). Ожидается поддержка в ближайшем релизе Next.js.
- Шпаргалка **React 19** от Кента Доддса всё ещё актуальна: [сохранить в закладки](https://react.statuscode.com/link/174342/web).

### 🚀 Expo SDK 54: крупное обновление
Новая версия **Expo** приносит **предсобранные iOS‑билды React Native** (сильно ускоряет сборку), поддержку **iOS 26** и **Liquid Glass**, переход на **React Native 0.81** и **React 19.1**, а также стабильный **Expo File System**. Для начинающих это означает более быстрый цикл «правка‑запуск» и меньшую боль с нативными зависимостями. Читайте релиз: [что нового в SDK 54](https://react.statuscode.com/link/174349/web). Краткий видеообзор: [все изменения за 10 минут](https://react.statuscode.com/link/174352/web).

- [Карта «текущее местоположение» в Expo/React Native](https://react.statuscode.com/link/174346/web): пошаговый гид по разрешениям и отображению точки на карте.
- [Путь Discord к React Native](https://react.statuscode.com/link/174348/web): разговор о мотивации и подводных камнях миграции.

- [Conform 1.10: типобезопасная валидация форм](https://react.statuscode.com/link/174354/web): контроль жизненного цикла отправки, `useForm()`, улучшения интеграции с **Valibot** ([заметки к версии](https://react.statuscode.com/link/174355/web), [Valibot](https://react.statuscode.com/link/174356/web)).
- [TanStack Form 1.20](https://react.statuscode.com/link/174361/web): мощное управление состоянием веб‑форм с типами из коробки.

## ⚙️ Node.js
### pnpm 10.16: “задержанные” обновления зависимостей
Теперь можно указать **минимальный возраст релиза** пакета (например, `1440` минут = 1 день). Тогда свежевышедшие версии не установятся сразу — это снижает риск схватить вредоносную публикацию, которую потом быстро отзывают. Для команд, которые часто делают `pnpm up`, — хороший дополнительный щит. Подробнее: [pnpm 10.16 — Delayed Dependency Updates](https://nodeweekly.com/link/174293/web).

### Node.js 24.8.0 (текущая ветка)
В релизе добавили возможность **инспектировать HTTP/2-запросы** из Node прямо в Chrome DevTools — это удобно, когда вы дебажите стримы, push и нестандартные заголовки. Также подъехали **улучшения в криптографии** и обновление **npm до 11.6**. Если вы работаете с современными API или пишете прокси/шлюзы на Node, стоит попробовать новую версию в отдельной ветке проекта. Подробнее в заметке: [Node.js v24.8.0 (Current)](https://nodeweekly.com/link/174291/web) и в кратком пункте про крипту: [crypto-обновления](https://nodeweekly.com/link/174292/web).

- 📗 Обзор дорожной карты QUIC в Node: что уже сделано и чего ждать в Node 25 — [состояние QUIC](https://nodeweekly.com/link/174306/web).
- 🧪 Как подружить встроенный тест-раннер Node с TypeScript и React — [гайд по тестам](https://nodeweekly.com/link/174307/web).
- Крупная атака на цепочку поставок **npm** продолжает распространяться: [что известно сейчас](https://react.statuscode.com/link/174364/web). Совет начинающим: ставьте аудит зависимостей в регулярный чек‑лист.
- [Как сдерживать рост зависимостей](https://react.statuscode.com/link/174335/web): обзор приёмов и тулов для «диеты» вашего `node_modules` (если пропустили выше).
- Как настроить **Express.js 5** для продакшена в 2025: TypeScript, ESLint/Prettier, структура, логирование — [пошаговое руководство](https://nodeweekly.com/link/174301/web).
- Автоматизация релиза **Electron-приложения** через GitHub Actions на примере Dolt Workbench (с воркфлоу в открытом доступе) — [инженерная заметка](https://nodeweekly.com/link/174302/web) и [workflow-код](https://nodeweekly.com/link/174303/web).
- Скомпилировать несколько CSS-файлов в один: через **PostCSS** или “чистый” Node-скрипт без зависимостей — [разбор подходов](https://nodeweekly.com/link/174308/web).

### Новые атаки через npm-пакеты
Недавно сообщали о крупной атаке на популярные пакеты. К сожалению, волна продолжилась — на этот раз задело и `@ctrl/tinycolor`. Вредоносный код устанавливал **поисковик секретов** и отправлял найденные токены наружу. Проверьте CI-токены, аудит зависимостей и политики публикации. Детали: [сводка атаки](https://nodeweekly.com/link/174294/web), кейс с `@ctrl/tinycolor` — [вторая волна](https://nodeweekly.com/link/174295/web), технический разбор — [подробности](https://nodeweekly.com/link/174296/web).

- Мнение: почему npm стал “самым простым способом доставить малварь” и при чём тут Microsoft — [эссе о проблеме](https://nodeweekly.com/link/174300/web).

## 📊 Видео и статьи
### 🧭 Safari 26.0 вышел вместе с iOS/macOS 26
В релизе — множество улучшений CSS, новый элемент `<model>` для встраивания 3D на страницу и важное изменение на iOS/iPadOS: **любому сайту** проще стать «веб‑приложением», если пользователь добавляет его на домашний экран. Это расширяет возможности PWA без обходных путей. Читайте обзор: [что нового в Safari 26](https://react.statuscode.com/link/174366/web).

- [Как автоматизировать релизы Electron‑приложения](https://react.statuscode.com/link/174365/web): опыт команды **Dolt Workbench** — сборка и выкладка на все платформы одной кнопкой.


## ⚒️ Инструменты и библиотеки
### Feedsmith 2.0 — парсинг и генерация веб-лент
Библиотека умеет читать и создавать **RSS, Atom, JSON Feed, OPML** с поддержкой популярных неймспейсов (iTunes/Podcast, Media RSS, Dublin Core и др.). Работает в браузере и Node. Старт: [анонс Feedsmith](https://nodeweekly.com/link/174309/web), быстрый старт — [tutorial](https://nodeweekly.com/link/174310/web), репозиторий — [GitHub](https://nodeweekly.com/link/174311/web).

- `trash` 10.0 — кроссплатформенно отправляет файлы в системную “Корзину”, вместо `unlink` — [утилита trash](https://nodeweekly.com/link/174312/web).
- `openapi-typescript-server` — генерация **type-safe** TS-серверов из OpenAPI-спек — [кодоген серверов](https://nodeweekly.com/link/174313/web).

### Обновления
- [TanStack Query 5.89](https://react.statuscode.com/link/174362/web): асинхронные данные, кэширование, фоновые обновления — всё как мы любим, но свежее.
- [API на ClickHouse с React и MooseStack](https://react.statuscode.com/link/174345/web): как собирать «реалтайм‑аналитику» без боли.
- [Компонент денежного ввода v4.0](https://react.statuscode.com/link/174357/web): аккуратно обрабатывает валюты, форматирование и курсор; можно «пощупать» в [демо](https://react.statuscode.com/link/174358/web).
- [DayPicker 9.10](https://react.statuscode.com/link/174360/web): календарь/датапикер с богатой кастомизацией.
- [Feedsmith 2.0](https://react.statuscode.com/link/174367/web): быстрая библиотека для парсинга и генерации RSS/Atom.
- Кто‑то запустил сайт на **одноразовой вейп‑ручке**: [как это вообще возможно](https://react.statuscode.com/link/174368/web) — забавно и познавательно про жёсткие лимиты железа.
- [Bun v1.2.22](https://react.statuscode.com/link/174369/web): очередной апдейт рантайма — стабильнее и шустрее.
- `Ow 3.0` — человекочитаемые проверки аргументов функций — [релиз Ow](https://nodeweekly.com/link/174314/web).
- `terminal-image 4.0` — показ изображений в терминале; добавили протокол Kitty — [terminal-image](https://nodeweekly.com/link/174315/web) и [Kitty graphics](https://nodeweekly.com/link/174316/web).
- `npm-publish 4.0` — GitHub Action для публикации в npm; теперь на Node 24 и npm 11 — [action релиз](https://nodeweekly.com/link/174317/web).
- `jsdom 27.0` — реализация WHATWG DOM/HTML на JS — [jsdom 27](https://nodeweekly.com/link/174318/web).
- `LogTape 1.1` — простой мульти-рантайм логгер — [LogTape](https://nodeweekly.com/link/174319/web) и [changelog](https://nodeweekly.com/link/174320/web).
- `Undici 7.16` — мощный HTTP-клиент для Node — [Undici](https://nodeweekly.com/link/174321/web).
- `Hexo 8.0` — популярный блог-генератор — [Hexo 8](https://nodeweekly.com/link/174322/web).
- `node-soap 1.4` — SOAP-клиент и сервер — [node-soap](https://nodeweekly.com/link/174323/web).
