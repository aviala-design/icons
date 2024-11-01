![cover](https://raw.githubusercontent.com/aviala-design/icons/refs/heads/main/README/cover.png)

<div align="center">

**Aviala Design Icons**

# A customizable icon library with support for multiple styles.

There are ***1000+*** icons available  
Now can get it on [npm](https://www.npmjs.com/package/@aviala-design/icons)
</div>
  
  
## Installation

```bash
npm install @aviala-design/icons
# or
yarn add @aviala-design/icons
```

## Import
All:
```javascript
import { allIcons, getIcon } from 'all.js';
```
Some one:
```javascript
import { Generic_home } from 'Generic_home.js';
```

## Uesd

```html
<aviala-icon name="user" mode="fill" color="#ff0000" class="medium-icon"></aviala-icon>
```
```javascript
const icon = document.createElement('aviala-icon');
icon.setAttribute('name', 'user');
icon.setAttribute('mode', 'colorful');
icon.classList.add('medium-icon');
document.body.appendChild(icon);
```