---
title: 'Итоги 2024 года в CSS'
description: 'Посмотрим какие CSS-свойства были добавлены в браузеры в 2024'
pubDate: 'Dec 10 2024'
heroImage: '/css-2024.png'
---

Пора подводить итоги 2024 года. В браузеры добавилось достаточно новых CSS-свойств. Давайте вспомним их.

> Я постоянно собираю все CSS-свойства в проекте https://nikolai-shabalin.github.io/css-properties/

В материале сортировка будет по возможному применению в проектах. Чем выше в списке, тем вероятнее будет использоваться на постоянной основе. Это исключительно моё мнение основанное на внутренних ощущениях. Материал имеет исключительно информационный характер.

## Быстрая навигация
- [field-sizing](#field-sizing)
- [CSS Anchor Positioning](#css-anchor-positioning)
- [CSS Text Module Level 4](#css-text-module-level-4)
- [Анимирование изменения размера элемента](#анимирование-изменения-размера-элемента)
- [CSS Pseudo-Elements Module Level 4](#css-pseudo-elements-module-level-4)
- [reading-flow](#reading-flow)
- [View Transitions Module Level 2](#css-view-transitions-module-level-2)
- [:state](#state)

## `field-sizing`

`field-sizing` - это CSS-свойство, которое позволяет разработчикам управлять размером полей формы. Свойство позволяет устанавливать размеры полей формы в зависимости от их содержимого.

```css
textarea {
  field-sizing: content;
}
```

<textarea style="field-sizing: content; min-height: 3rem">
удалите
текст
внутри
меня
и посмотрите
как изменится размер по высоте
</textarea>

Посмотреть демонстрацию https://developer.chrome.com/docs/css-ui/css-field-sizing

### Полезные ссылки
- [Спецификация](https://drafts.csswg.org/css-ui/#field-sizing)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing)
- [Caniuse](https://caniuse.com/mdn-css_properties_field-sizing)

## CSS Anchor Positioning
Anchor Positioning это группа CSS-свойств для управления размерами якоря, а также позиционированием элементов относительно якоря. Эти свойства настолько мощные, что мы пока не в состоянии представить их применение в реальных проектах. Посмотрим, что будет в 2025 году.

Поиграйте в игру, чтобы поближе познакомиться с Anchor Positioning: https://anchoreum.com/.

### Список всех свойств группы
- `anchor` - устанавливает якорь для элемента;
- `anchor-scope` - устанавливает область видимости для якоря;
- `anchor-size` - устанавливает размер якоря;
- `anchor-name` - устанавливает имя якоря;
- `position-anchor` - устанавливает позицию элемента относительно якоря;
- `position-try` - пытается установить позицию элемента относительно якоря;
- `position-try-order` - устанавливает порядок попыток установить позицию элемента относительно якоря;
- `position-visibility` - устанавливает видимость элемента относительно якоря;
- `@position-try` - пытается установить позицию элемента относительно якоря;

### Полезные ссылки
- [Спецификация](https://drafts.csswg.org/css-anchor-position-1/)
- [MDN](https://caniuse.com/css-anchor-positioning)
- [Caniuse](https://caniuse.com/mdn-css_properties_anchor)
- [Статья "Anchor Positioning Is Disruptive"](https://www.oddbird.net/2024/11/18/anchor-position-yearbook/)
- [Гайд от css-tricks](https://css-tricks.com/css-anchor-positioning-guide/)

## CSS Text Module Level 4
Новые CSS-свойства для работы с текстом:

- `text-wrap-style` - управляет способом обертывания текста внутри элемента.
- `text-wrap-mode` - управляет тем, будет ли текст внутри элемента обернут.
- `text-spacing-trim` - управляет внутренним интервалом, установленным для китайских/японских/корейских знаков препинания между соседними символами и в начале или конце текстовых строк.

```css
h1, h2, h3 {
  text-wrap-style: balanced;
  text-wrap-mode: nowrap;
}

p {
  text-wrap-style: pretty;
  text-wrap-mode: wrap;
}
```

Посмотрите демонстрацию https://developer.chrome.com/docs/css-ui/css-text-wrap-balance

`text-spacing-trim` судя по описанию использоваться не будет.

### Полезные ссылки
- [Спецификация](https://drafts.csswg.org/css-text-4/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-spacing-trim)
- [Caniuse](https://caniuse.com/?search=text-spacing-trim)

## Анимирование изменения размера элемента
### `interpolate-size`
`interpolate-size` - это CSS-свойство, которое позволяет анимировать изменение размера элемента, в том числе элементам со значениями:
- `auto`, например `height: auto`;
- `min-content`;
- `max-content`;
- `fit-content`.

```css
.element {
  height: 0;
  transition: height 1s ease-in;
  interpolate-size: allow-keywords;
}

.element:hover {
  height: max-content;
}
```

### `calc-size()`
`calc-size()` - CSS-функция позволяет выполнять вычисления для внутренних значений размера, таких как `auto`, `fit-content`, и `max-content`. Всё это не поддерживается обычной функцией `calc()`.

```css
.element {
  width: calc-size(auto, size);
  height: calc-size(max-content, size);
}
```

Посмотреть демонстрацию https://developer.chrome.com/docs/css-ui/animate-to-height-auto

### Полезные ссылки
- [Спецификация](https://drafts.csswg.org/css-values-5/#interpolate-size)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size)
- [Caniuse](https://caniuse.com/mdn-css_properties_interpolate-size)
- [Animate to height: auto](https://developer.chrome.com/docs/css-ui/animate-to-height-auto)

## CSS Pseudo-Elements Module Level 4
В спецификацию добавлены новые псевдоэлементы:
- `::details-content` - псевдоэлемент для стилизации содержимого элемента `<details>`;
- `::grammar-error` - псевдоэлемент для стилизации грамматических ошибок;
- `::spelling-error` - псевдоэлемент для стилизации орфографических ошибок.

Прочтите статью по `grammar-error` и `spelling-error` https://www.azabani.com/2021/05/17/spelling-grammar.html

Прочтите статью по `::details-content` https://css-tricks.com/almanac/pseudo-selectors/d/details-content/

## `reading-flow`
`reading-flow` - это CSS-свойство, которое позволяет разработчикам управлять направлением чтения текста внутри элемента. Свойство позволяет устанавливать направление чтения текста внутри элемента в зависимости от языка. Свойство работает совместно с гридовым и флексовым контекстом. На данный идут обсуждения реализации в браузерах.

```css
.element {
  reading-flow: flex-visual;
}
```

Посмотрите подробное обсуждение и примеры использования https://developer.chrome.com/blog/reading-flow-display-contents

### Полезные ссылки
- [Спецификация](https://drafts.csswg.org/css-display-4/#reading-flow)
- [Caniuse](https://caniuse.com/mdn-css_properties_reading-flow)

## CSS View Transitions Module Level 2
Спецификация обновляется до уровня 2. Добавлены новые свойства для управления переходами между видами.

К сожалению более подробно новые свойства не рассмотреть не рассматривая полностью View Transitions. Поэтому рекомендую ознакомиться с демонстрацией https://developer.chrome.com/docs/web-platform/view-transitions

### Список свойств группы
- `@view-transition` - определяет глобальные стили и анимации для переходов между различными представлениями.
- `view-transition-class` - привязывает элементы к их будущим состояниям, обеспечивая анимированный переход при смене представления.
- `active-view-transition` - обозначает, что в данный момент происходит активный переход между представлениями.
- `active-view-transition-type` - указывает тип применяемого анимированного перехода между состояниями.

### Полезные ссылки
- [Спецификация](https://drafts.csswg.org/css-view-transitions-2)

## `:state`
Позволяет найти элемент с кастомным состоянием. Например, если у вас есть элемент с состоянием `loading`, то вы можете найти его с помощью псевдокласса `:state(loading)`.

```css
button:state(loading) {
  cursor: wait;
}
```

### Полезные ссылки
- [Спецификация](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-custom)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:state)
- [Caniuse](https://caniuse.com/mdn-css_selectors_state)




