# The Grid

<p class="lead">Problem: You've got tons of content, each needing different sized vertical columns, and don't know how to quick and easily get it all done. Solution: The awesome grid!</p>

---

## Overview

The grid is built around two key elements: rows and columns. Rows create a max-width and contain the columns, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.

---

## Nesting

In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of <div> tags to create vertical columns.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 columns">...</div>
  <div class="small-6 medium-8 large-9 columns">...</div>
</div>
```

<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-3 columns">3</div>
</div>
<div class="row display">
  <div class="small-12 large-2 columns">2</div>
  <div class="small-12 large-8 columns">8</div>
  <div class="small-12 large-2 columns">2</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-9 columns">9</div>
</div>
<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-8 columns">8</div>
</div>
<div class="row display">
  <div class="small-12 large-5 columns">5</div>
  <div class="small-12 large-7 columns">7</div>
</div>
<div class="row display">
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-6 columns">6</div>
</div>

---

## Nesting Rows

In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

```html
<div class="row">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>
```

<div class="row display">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>

---

## Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="row">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>
```

<div class="row display">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row display">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>



# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---

<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #48aadf"></span>
      #48aadf
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #878787"></span>
      #878787
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #D2D2D2"></span>
      #D2D2D2
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #bbe9c5"></span>
      #bbe9c5
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #f6dec1"></span>
      #f6dec1
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #f4c6c8"></span>
      #f4c6c8
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #bce2ec"></span>
      #bce2ec
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #167aa2"></span>
      #167aa2
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #e0f0f3"></span>
      #e0f0f3
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #9bcbde"></span>
      #9bcbde
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #fffcef"></span>
      #fffcef
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #ecf7f2"></span>
      #ecf7f2
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #f4e9e2"></span>
      #f4e9e2
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #eee1e6"></span>
      #eee1e6
    </div>
  </div>
</div>



# Typography

<p class="lead">This design uses Proxima Nova for headings and paragraph text.</p>

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such.

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.



# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="button button-primary">Regular button</a>
<a href="#" class="button button-primary button-small">Small button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="button button-secondary">Regular button</a>
<a href="#" class="button button-secondary button-small">Small button</a>
```
---

## Button Variations

There are many different button colour variations that can be used on a page.

```html_example
<a href="#" class="button button-alt">Alternate button</a>
<a href="#" class="button button-booked">Booked button</a>
```
---

## Round and Circle Buttons

```html_example
<a href="#" class="button button-primary button-round">Rounded button</a>
<a href="#" class="button button-alt button-circle">
  <span class="icon icon-question-mark"></span>
</a>
```



# Images

You can classes to images to easily change any image's style.

```html_example
<img src="assets/images/avatar.png" class="image-circle">
<img src="assets/images/avatar.png" class="image-bordered">
```



# Helper Classes

## Text Colours

You add colour to text to convey meaning with these helper classes.

```html_example
<p class="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="text-header-alt">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

## Text Alignment

There are also classes to help text in your application.

```html_example
<p class="text-align-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="text-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="text-align-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

## Text Formatting

We change the format of text using helper classes.

```html_example
<p class="font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<p class="text-underline">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

## Spacing

There are a bunch of classes that allow you to control padding and margin. To do so, you would add a class of the following format:

```
.[spacing]-[orientation]-[rem-unit]
```

- _Spacing_ can either be: `margin` or `padding`.
- _Orientation_ represents where you want to apply the _spacing_ can either be: `top`, `bottom`, `left` or `right`.
- _Rem-unit_ represents how much _spacing_ you want to apply in rems. This ranges from 0 - 2.

```html_example
<p class="margin-bottom-0">No margin on the bottom.</p>
<p class="padding-top-2">Padding of 2rem at the top.</p>
<p class="margin-left-1">Margin of 1rem on the left</p>
```



# Callouts

We haved added changed the styles for callouts. There are many different variations.

```html_example
<div class="callout callout-primary">Callout primary</div>
<div class="callout callout-warning">Callout warning</div>
<div class="callout callout-alert">Callout alert</div>
<div class="callout callout-success">Callout success</div>
<div class="callout callout-info">Callout info</div>
```

## Formatting callouts

You can format callouts by adding borders or manipulating the border radius.

```html_example
<div class="callout callout-primary callout-round">Callout with round corners</div>
<div class="callout callout-info callout-bordered">Callout with border</div>
```



# Tabs

We haved added two types of tabs that can be used by the classes `.tabs`.


```html_example
<ul class="tabs" data-tabs="" id="task-lesson-tabs">
  <li class="tabs-title is-active">
    <a href="#study-tasks" aria-selected="true">Study tasks</a>
  </li>
  <li class="tabs-title">
    <a href="#booked-lessons" id="booked-lessons-button">Booked Lessons</a>
  </li>
</ul>
```

And with `.tabs-alt`.

```html_example
<ul class="tabs tabs-alt" data-tabs="" id="task-lesson-tabs">
  <li class="tabs-title is-active">
    <a href="#study-tasks" aria-selected="true">Study tasks</a>
  </li>
  <li class="tabs-title">
    <a href="#booked-lessons" id="booked-lessons-button">Booked Lessons</a>
  </li>
</ul>
```

## Formatting tabs

You can also make tabs rounded with the `.tabs-rounded` class.

```html_example
<ul class="tabs tabs-alt tabs-rounded" data-tabs="" id="task-lesson-tabs">
  <li class="tabs-title is-active">
    <a href="#study-tasks" aria-selected="true">Study tasks</a>
  </li>
  <li class="tabs-title">
    <a href="#booked-lessons" id="booked-lessons-button">Booked Lessons</a>
  </li>
</ul>
```



# Progress Bars

We can create standard progress bars and control the meter with the `aria-valuenow` attribute.

```html_example
<div class="progress progress-" role="progressbar" tabindex="0" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-meter"></div>
</div>
<div class="progress progress-" role="progressbar" tabindex="0" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-meter"></div>
</div>
<div class="progress progress-" role="progressbar" tabindex="0" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-meter"></div>
</div>
```

We can also add checkpoints with labels and position them with the `.progress-checkpoint-[n]` class. _n_ represents the how far along the meter you want the checkpoint to be. It's a number from 0 - 100 in multiples of ten. To give a checkpoint a disabled look and feel, simply add the `is-disabled` class to the element with the `progress-checkpoint` class.

```html_example
<div class="progress progress-" role="progressbar" tabindex="0" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-meter"></div>
  <div class="progress-checkpoint progress-checkpoint-0">
    <p>Checkpoint 1</p>
  </div>
  <div class="progress-checkpoint progress-checkpoint-50">
    <p>Checkpoint 2</p>
  </div>
  <div class="progress-checkpoint progress-checkpoint-100 is-disabled">
    <p>Checkpoint 3</p>
  </div>
</div>
<div class="progress progress-" role="progressbar" tabindex="0" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-meter"></div>
  <div class="progress-checkpoint progress-checkpoint-30 is-disabled">
    <p>Checkpoint 1</p>
  </div>
  <div class="progress-checkpoint progress-checkpoint-70 is-disabled">
    <p>Checkpoint 2</p>
  </div>
</div>
```