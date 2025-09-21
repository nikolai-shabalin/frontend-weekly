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
- Крупная атака на цепочку поставок **npm** продолжает распространяться: [что известно сейчас](https://react.statuscode.com/link/174364/web). Совет начинающим: ставьте аудит зависимостей в регулярный чек‑лист.
- [Как сдерживать рост зависимостей](https://react.statuscode.com/link/174335/web): обзор приёмов и тулов для «диеты» вашего `node_modules` (если пропустили выше).

## 📊 Видео и статьи
### 🧭 Safari 26.0 вышел вместе с iOS/macOS 26
В релизе — множество улучшений CSS, новый элемент `<model>` для встраивания 3D на страницу и важное изменение на iOS/iPadOS: **любому сайту** проще стать «веб‑приложением», если пользователь добавляет его на домашний экран. Это расширяет возможности PWA без обходных путей. Читайте обзор: [что нового в Safari 26](https://react.statuscode.com/link/174366/web).


- **pnpm** пишет о защите цепочки поставок: [статья](https://react.statuscode.com/link/174340/web) и релиз **pnpm 10.16** с `minimumReleaseAge`: [заметка о релизе](https://react.statuscode.com/link/174341/web).
- [Как автоматизировать релизы Electron‑приложения](https://react.statuscode.com/link/174365/web): опыт команды **Dolt Workbench** — сборка и выкладка на все платформы одной кнопкой.


## ⚒️ Инструменты и библиотеки

### Обновления
- [TanStack Query 5.89](https://react.statuscode.com/link/174362/web): асинхронные данные, кэширование, фоновые обновления — всё как мы любим, но свежее.
- [API на ClickHouse с React и MooseStack](https://react.statuscode.com/link/174345/web): как собирать «реалтайм‑аналитику» без боли.
- [Компонент денежного ввода v4.0](https://react.statuscode.com/link/174357/web): аккуратно обрабатывает валюты, форматирование и курсор; можно «пощупать» в [демо](https://react.statuscode.com/link/174358/web).
- [DayPicker 9.10](https://react.statuscode.com/link/174360/web): календарь/датапикер с богатой кастомизацией.
- [Feedsmith 2.0](https://react.statuscode.com/link/174367/web): быстрая библиотека для парсинга и генерации RSS/Atom.
- Кто‑то запустил сайт на **одноразовой вейп‑ручке**: [как это вообще возможно](https://react.statuscode.com/link/174368/web) — забавно и познавательно про жёсткие лимиты железа.
- [Bun v1.2.22](https://react.statuscode.com/link/174369/web): очередной апдейт рантайма — стабильнее и шустрее.

