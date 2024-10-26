# Icons

A customizable icon library with support for multiple styles.

## Installation

```bash
npm install @your-scope/aviala-icon
# or
npm install aviala-icon
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
#### Export All Icons Name At Console

```javascript
listAvialaIcons();
```