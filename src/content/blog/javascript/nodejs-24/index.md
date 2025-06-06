---
title: "Node.js 24"
description: "Разбираем основные фичи Node.js 24 (V8 13.6, npm 11, AsyncContextFrame, Permission Model, Undici 7), объясняем сложные термины простыми словами и даём пошаговый план, как подготовить проект к будущему LTS-релизу."
pubDate: "May 06 2025"
---

Сегодня свежий релиз Node.js 24 (6 мая 2025, версия 24.0.0, статус Current).

##  Общая картина
Период “Current” — ближайшие пол-года. LTS-ветка — с октября 2025 года. Именно тогда релиз попадёт в большинство продакшен-проектов. У вас есть несколько месяцев, чтобы всё пощупать.

> ⛏️ Сборка под Windows. Поддержка MSVC убрана, теперь нужен ClangCL. Если вы собирали Node локально (а это полезно хотя бы раз сделать), проверьте toolchain.

## V8 13.6 — движок под капотом
V8 — это движок, который исполняет JavaScript. Обновление до 13.6 приносит новые фичи языка:

| Фича                             | Зачем это                                                                                                    | Мини-пример                                   |
|----------------------------------|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| **Float16Array**                 | Экономит память для массивов половинной точности (16-бит). Полезно для WebGL, ML.                            | `const data = new Float16Array([1.5, 2.25]);` |
| **Explicit Resource Management** | Даёт ключевое слово **`using`** для автоматического закрытия ресурсов. Похоже на `try … finally`, но короче. | `js using const f = await open('log.txt');`   |
| **RegExp.escape**                | Безопасно экранирует строки для вложения в регулярки.                                                        | `const safe = RegExp.escape(userInput)`       |
| **WebAssembly Memory64**         | Модуль WASM может адресовать >4 ГБ памяти. Фреймворки на Rust/Go внутри браузера/Node будут счастливее.      | —                                             |
| **Error.isError**                | Удобная проверка вместо `instanceof Error`, особенно в смесь ES-модулей и CommonJS.                          | `if (Error.isError(err)) …`                   |

##  npm 11 — быстрее, безопаснее, современнее
Улучшены audit-проверки. Более умный workspaces кэш. Сократились время установки и объём `node_modules`. Если вы ещё не пробовали corepack, самое время: corepack enable && corepack prepare npm@11 --activate.

## AsyncLocalStorage ➜ AsyncContextFrame
`AsyncLocalStorage` = способ хранить “глобальные” данные в рамках цепочки `await`-ов (например, request ID для логов). Раньше под капотом были «асинхронные хуки». Теперь по умолчанию используется AsyncContextFrame — более лёгкая реализация, которая:
- даёт прирост производительности (меньше накладных расходов на каждом promise);
- уменьшает вероятность утечек в Edge-кейcах.

```js
import { AsyncLocalStorage } from 'node:async_hooks';

const store = new AsyncLocalStorage();

function handler(req, res) {
  store.run({ requestId: crypto.randomUUID() }, () => {
    doWork().then(() =>
      console.log('id =', store.getStore().requestId)
    );
  });
}
```

##  URLPattern теперь глобален
Раньше надо было `import { URLPattern } from 'urlpattern-polyfill'`. Теперь просто используете:

```js
const route = new URLPattern({ pathname: '/posts/:id' });
console.log(route.exec('https://site.dev/posts/42').pathname.groups.id); // "42"
```

## Улучшения Permission Model
Эксперимент из Node 20 повзрослел:
- Флаг сменился с `--experimental-permission` ➜ `--permission`.
- Цель — запускать скрипты с минимальными правами (чуть-чуть похоже на Deno).

```bash
node --permission=read=./public,write=./cache server.js
```

## Тест-раннер: меньше await, меньше боли
Встроенный модуль node:test теперь сам дожидается завершения саб-тестов. Код становится чище:

```js
test('user CRUD', async (t) => {
  t.test('create', async (t) => { … });
  t.test('delete', async (t) => { … });
  // ничего не await-им вручную
});
```

## Undici 7 — быстрый HTTP-клиент
`Undici` = реализация `fetch` для Node. В седьмой версии:
- меньше аллокаций памяти;
- поддержка `HTTP 103 Early Hints`;
- более понятные ошибки таймаутов.

```js
import { fetch } from 'undici';
const res = await fetch('https://api.example.com/data');
console.log(await res.json());

```
