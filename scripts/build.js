const fs = require('fs');
const path = require('path');

const svgDir = path.resolve(__dirname, '../src/icons');
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

function parseIconName(filename) {
    const baseName = path.basename(filename, '.svg');
    const parts = baseName.split('-');
    const mode = parts[parts.length - 1];

    const modes = ['outline', 'fill', 'colorful', 'black'];
    const hasMode = modes.includes(mode);

    const name = hasMode ? parts.slice(0, -1).join('-') : baseName;

    return {
        name,
        mode: hasMode ? mode : 'outline'
    };
}

// function convertSvgToJs() {
//     const icons = {};

//     fs.readdirSync(svgDir).forEach((file) => {
//         if (path.extname(file) === '.svg') {
//             const svgContent = fs.readFileSync(
//                 path.join(svgDir, file),
//                 'utf-8'
//             );

//             const { name, mode } = parseIconName(file);

//             const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
//             const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

//             const paths = [];
//             const pathRegex = /<path([^>]+)>/g;
//             let match;

//             while ((match = pathRegex.exec(svgContent)) !== null) {
//                 const attributes = {};
//                 const attrRegex = /(\w+)="([^"]+)"/g;
//                 let attrMatch;

//                 while ((attrMatch = attrRegex.exec(match[1])) !== null) {
//                     attributes[attrMatch[1]] = attrMatch[2];
//                 }

//                 paths.push(attributes);
//             }

//             if (!icons[name]) {
//                 icons[name] = {};
//             }

//             icons[name][mode] = {
//                 viewBox,
//                 paths
//             };
//         }
//     });

//     return icons;
// }

function convertSvgToJs() {
    const icons = {};

    fs.readdirSync(svgDir).forEach((file) => {
        if (path.extname(file) === '.svg') {
            const svgContent = fs.readFileSync(
                path.join(svgDir, file),
                'utf-8'
            );

            const { name, mode } = parseIconName(file);

            const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
            const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

            const paths = [];
            const pathRegex = /<path([^>]+)>/g;
            let match;

            while ((match = pathRegex.exec(svgContent)) !== null) {
                const attributes = {};
                const attrRegex = /(\w+)="([^"]+)"/g;
                let attrMatch;

                while ((attrMatch = attrRegex.exec(match[1])) !== null) {
                    // 将 rule 属性转换为 fill-rule
                    const attrName = attrMatch[1] === 'rule' ? 'fill-rule' : attrMatch[1];
                    attributes[attrName] = attrMatch[2];
                }

                paths.push(attributes);
            }

            if (!icons[name]) {
                icons[name] = {};
            }

            icons[name][mode] = {
                viewBox,
                paths
            };
        }
    });

    return icons;
}

function generateJsFile(icons) {
    const jsContent = `
      const icons = ${JSON.stringify(icons, null, 2)};
      
      // 添加获取图标信息的函数
      function listAllIcons() {
        console.group('Available Icons:');
        Object.entries(icons).forEach(([iconName, modes]) => {
          console.group(\`🔹 \${iconName}\`);
          const availableModes = Object.keys(modes);
          console.log(\`Available modes: \${availableModes.join(', ')}\`);
          console.groupEnd();
        });
        console.groupEnd();
        
        return {
          total: Object.keys(icons).length,
          icons: Object.entries(icons).map(([name, modes]) => ({
            name,
            modes: Object.keys(modes)
          }))
        };
      }

      class AvialaIcon extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: 'open' });
        }
        
        static get observedAttributes() {
          return ['name', 'color', 'mode'];
        }
  
        attributeChangedCallback() {
          this.render();
        }
  
        render() {
          const name = this.getAttribute('name');
          const requestedMode = this.getAttribute('mode') || 'outline';
          const color = this.getAttribute('color') || 'currentColor';
  
          const iconSet = icons[name];
          if (!iconSet) {
            console.warn(\`Icon "\${name}" not found\`);
            return;
          }
  
          let useMode = requestedMode;
          if (!iconSet[useMode]) {
            useMode = 'outline';
          }
  
          const icon = iconSet[useMode];
          if (!icon) {
            console.warn(\`No valid icon found for "\${name}"\`);
            return;
          }
  
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('viewBox', icon.viewBox);
          svg.style.cssText = 'width: 100%; height: 100%; display: block;';
  
          icon.paths.forEach(pathData => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
            // 创建一个新的属性对象，避免修改原始数据
            const attributes = { ...pathData };
            
            switch(useMode) {
              case 'outline':
                // Outline 模式：设置描边颜色，移除填充
                if (attributes.fill === 'currentColor' || !attributes.stroke) {
                  attributes.fill = color;
                }
                break;
                
              case 'fill':
                // Fill 模式：设置填充颜色，移除描边
                if (attributes.fill === 'currentColor' || !attributes.fill) {
                  attributes.fill = color;
                }
                delete attributes.stroke;
                delete attributes['stroke-width'];
                break;
                
              case 'colorful':
              case 'black':
                // Colorful 和 Black 模式：保持原始颜色
                break;
            }
            
            // 应用属性到路径元素
            Object.entries(attributes).forEach(([key, value]) => {
              path.setAttribute(key, value);
            });
            
            svg.appendChild(path);
          });
  
          this.shadowRoot.innerHTML = \`
            <style>
              :host {
                display: inline-block;
                width: 1em;
                height: 1em;
                line-height: 1;
              }
            </style>
          \`;
          this.shadowRoot.appendChild(svg);
        }
      }
  
      customElements.define('aviala-icon', AvialaIcon);
  
      const iconNames = ${JSON.stringify(Object.keys(icons))};
  
      if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
          iconNames,
          listAllIcons
        };
      } else {
        window.listAvialaIcons = listAllIcons;
      }
    `;

    fs.writeFileSync(path.join(distDir, 'index.js'), jsContent);
}

const icons = convertSvgToJs();
generateJsFile(icons);
console.log('Build completed!');