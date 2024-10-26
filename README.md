![cover](./README/cover.png)

<div align="center">

Aviala Design Icons

### A customizable icon library with support for multiple styles.
</div>

---

### Installation

```bash
npm install @aviala-design/icons
# or
yarn add @aviala-design/icons
```

### Uesd

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
---
#### Output Icons Name At Console
Output the icon name and supported attributes on the console to facilitate viewing of currently supported icons.

```bash
listAvialaIcons();
```
The output content should be like this:
```bash
> user
Available modes: black, colorful, fill, outline
```