<div align="center">
<picture>
  <source srcset="https://github.com/user-attachments/assets/bef128f6-43f0-446d-9e6f-4bf5dbc40ecc" media="(prefers-color-scheme: light)">
  <source srcset="https://github.com/user-attachments/assets/73d65878-7188-4456-9d4e-de4133685f35" media="(prefers-color-scheme: dark)">
  <img src="https://github.com/user-attachments/assets/bef128f6-43f0-446d-9e6f-4bf5dbc40ecc" alt="Cover">
</picture>

### Aviala Design Icons

# A customizable icon library with support for multiple styles.

🎉 There are **𝟷𝟶𝟶𝟶+** icons available 🎉

[`Preview`](https://aviala-design-icons.github.io) [`Get`](https://www.npmjs.com/package/@aviala-design/icons) [`DesignSources`](https://js.design/community?category=teamHome&id=633a635990e635c1991ee5fb)
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
