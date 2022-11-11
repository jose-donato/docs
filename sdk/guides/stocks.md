---
title: Testy
more_data:
  - Can be provided
  - as: objects
    or: arrays
---
---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---


## Level 2 title

### Level 3 title

#### Level 4 title

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>


:::tip Use tabs in admonitions

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::



<Admonition type="tip" icon="💡" title="Did you know...">
  <p>
    Use plugins to introduce shorter syntax for the most commonly used JSX
    elements in your project.
  </p>
</Admonition>


### Details element example

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>




:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::


## Horizontal Rules

---

## Typographic replacements

&copy; &reg; &trade; &para; &sect; &plusmn;

&rarr; &larr;

Ellipses: test.. test... test..... test?..... test!....

Dashes: -- ---

Quotes: "Smartypants, double quotes" and 'single quotes'

## Emphasis

This is **bold text**

This is _italic text_

~~Strike through~~

## Lists

### Unordered

- Create a list by starting a line with `-`.
- Sub-lists are made by indenting 2 spaces:
  - Keep going, just with the indentation the same for each list:
    - Next item
    - And another
    - And another
- Very easy!

### Ordered

1. The first item in the top-level list
2. The second item in the top-level list

   1. The first item in a nested list
   2. The second item in a nested list

3. The third item in the top-level list

### Items with multiple paragraphs

- The first paragraph.

  The second paragraph.

- Another item.

## Code

Inline `code`

Code blocks

```txt
Sample text here...
```

Syntax highlighting

```javascript
const foo = bar => ++bar;

console.log(foo(5));
```

## Callouts

You can use various callouts using properties from [our Alert component](/components/information/alert/react/#props).

<Callout title="This is an informational callout.">

It should present additional useful information.

</Callout>

<Callout type="success" title="This is a success callout.">

You can present tips for additional success or mark progress through a guide.

</Callout>

<Callout type="warning" title="This is a warning callout.">

It can warn about potential dangers that might come with specific choices.

</Callout>

<Callout type="critical" title="This is a critical callout." >

It should only present information that could end up destroying previous progress/data.

</Callout>

<Callout title="This is a callout with only a title" />

<Callout
  title="This is a callout with only a title and a custom icon"
  icon={<Meal ariaLabel="Hot food." />}
/>

## Tables

| Package                        | Description                                                |
| ------------------------------ | ---------------------------------------------------------- |
| orbit-components               | All our React components along with API documentation.     |
| orbit-design-tokens            | All visual UI attributes available as tokens.              |
| eslint-plugin-orbit-components | ESLint rules to enforce best practices for our components. |

### Aligned columns

In addition to the default of left alignment, columns can also be right or center aligned.
Set alignment with colons in the header row.

|                         Option |                        Description                         |
| -----------------------------: | :--------------------------------------------------------: |
|               orbit-components |   All our React components along with API documentation.   |
|            orbit-design-tokens |       All visual UI attributes available as tokens.        |
| eslint-plugin-orbit-components | ESLint rules to enforce best practices for our components. |

## Links

External links

[link text](https://github.com/kiwicom/orbit)

Internal links

[link text](.)

Automatically converted link <https://github.com/kiwicom/orbit>

## Images

### Plain Images

![Orbit OFB](images/OFB.jpg)

### Image with caption

![Orbit OFB](images/OFB.jpg "Blast into Orbit")

### Images by reference

You can also add images with a footnote-style syntax.

![Alt text][id]

Use a reference at the end of the document to define the URL location.

### Figma image

TODO.

### Image container

#### Alignment

<ImageContainer align="left" size="small">

![Orbit OFB](images/OFB.jpg)

</ImageContainer>

<ImageContainer align="center" size="small">

![Orbit OFB](images/OFB.jpg)

</ImageContainer>

<ImageContainer align="right" size="small">

![Orbit OFB](images/OFB.jpg)

</ImageContainer>

#### Size

##### Small

<ImageContainer size="small">

![Orbit OFB](images/OFB.jpg)

</ImageContainer>

##### Medium

<ImageContainer size="medium">

![Orbit OFB](images/OFB.jpg)

</ImageContainer>

##### Large

<ImageContainer>

![Orbit OFB](images/OFB.jpg)

</ImageContainer>

#### Border

<ImageContainer size="small" border>

![Orbit OFB](images/OFB.jpg)

</ImageContainer>

## Definition Lists

Orbit
: An open source design system for your next travel project.

Design system
: Components, styles, and patterns to create beautiful consistent designs at scale.

## React examples

<ReactExample exampleId="Wizard-default" />
