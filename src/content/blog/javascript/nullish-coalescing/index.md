---
title: "Оператор нулевого слияния (nullish coalescing)"
description: "Одним из полезных механизмов в JavaScript, является оператор nullish coalescing (??). Он позволяет аккуратно подставлять значения по умолчанию там, где логический оператор ИЛИ (||) может неудачно «перекрыть» нужные данные."
pubDate: "Apr 12 2025"
---
В своих проектах мне всё чаще и чаще начинает пригождаться оператор `??`. Поделюсь как он работает.

В JavaScript существует понятие «ложных» (falsy) и «истинных» (truthy) значений. К «ложным» значениям относятся `false`, `0`, `NaN`, пустая строка `""`, а также `null` и `undefined`. Эти значения ведут себя особым образом при логических операциях и проверках.

Начиная с ECMAScript 2020, в язык был добавлен оператор nullish coalescing (`??`), который помогает корректно работать с так называемыми «нулевыми» (nullish) значениями – то есть `null` и `undefined`. В отличие от оператора логического ИЛИ (`||`), `??` не заменяет «ложные», но при этом осмысленные значения (вроде `0`, `false` или `""`) на значение по умолчанию.

## Как работает оператор `??`
Главная идея оператора `??` — подставить значение справа только в том случае, если слева оказалось `null` или `undefined`. Все остальные значения, даже если они считаются «ложными» в булевом контексте, оператор `??` пропускает дальше как валидные.

```js
const value = 0;
const defaultValue = 5;

console.log(value ?? defaultValue);
// Результат: 0, т.к. 0 — это не null и не undefined
```

## Сравнение с оператором ||
До появления `??` разработчики использовали оператор логического ИЛИ (`||`) для задания значений по умолчанию. Однако `||` возвращает правую часть при любом «ложном» значении слева, включая `0`, `false` или пустую строку `""`.

```js
const value = 0;
const defaultValue = 5;

console.log(value || defaultValue);
// Результат: 5, т.к. 0 считается «ложным» в JS
```

## Примеры использования
### Выбор роли пользователя
```js
function createUser(login, role) {
  const userRole = role ?? "guest";
  return { login, role: userRole };
}

console.log(createUser("alex", "admin"));
// { login: "alex", role: "admin" }

console.log(createUser("guest", false));
// { login: "guest", role: false }

console.log(createUser("noRole"));
// { login: "noRole", role: "guest" }
```

В функции `createUser` мы подставляем роль "guest", только если переданный параметр `role` равен `null` или `undefined`. Если же роль оказалась `false` — возможно, так задумано (например, выключенная роль или какая-то флажковая логика). Используя `??`, мы не затрём `false` на "guest", в отличие от `||`.

### Преобразование массива
```js
const customArr = [null, 0, undefined, "", 42];

const validatedArr = customArr.map(item => item ?? "Пусто");
console.log(validatedArr);
// ["Пусто", 0, "Пусто", "", 42]
```

Мы проходимся по каждому элементу массива и заменяем `null/undefined` на строку "Пусто". При этом числа `0` и `42`, а также пустая строка `""` останутся без изменений. Так мы чётко указываем: «Заменяй только то, чего нет».

## Источники
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Mastering default values in JavaScript with the nullish coalescing (??) operator](https://allthingssmitty.com/2025/04/10/mastering-default-values-in-javascript-with-the-nullish-coalescing-operator/)
