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

    // Define all possible modes including compound modes
    const modes = ['outline', 'fill', 'colorful', 'black', 'fill-colorful', 'fill-black'];

    // Add special handling for Colorful-A and Colorful-B patterns
    const colorfulVariantMatch = baseName.match(/(colorful-[A-Z])$/i);
    if (colorfulVariantMatch) {
        const mode = colorfulVariantMatch[1].toLowerCase();
        const name = baseName.slice(0, -(mode.length + 1)); // +1 for the hyphen
        return { name, mode };
    }

    // First try to match compound modes
    const compoundModes = modes.filter(mode => mode.includes('-'));
    for (const mode of compoundModes) {
        if (baseName.endsWith(mode)) {

            const name = baseName.slice(0, -(mode.length + 1));
            return { name, mode };
        }
    }

    // Then try simple modes
    const mode = parts[parts.length - 1];
    const simpleModes = modes.filter(mode => !mode.includes('-'));
    const hasMode = simpleModes.includes(mode);

    const name = hasMode ? parts.slice(0, -1).join('-') : baseName;

    return {
        name,
        mode: hasMode ? mode : 'outline'
    };

}
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
                    const attrName = attrMatch[1] === 'rule' ? 'fill-rule' : attrMatch[1];
                    let attrValue = attrMatch[2];

                    // 处理黑色主题的颜色转换
                    if (attrName === 'fill') {
                        if (mode === 'fill-black' || mode === 'black') {
                            if (attrValue === '#424242') {
                                attrValue = 'currentColor';
                            } else if (attrValue === '#787878') {
                                attrValue = 'currentColor';
                                attributes['fill-opacity'] = '0.71'; // Add 71% opacity
                            } else if (attrValue === '#FFFFFF') {
                                attrValue = '#FFFFFF'; // Keep white color
                            }
                        } else if (attrValue === '#FFFFFF') {
                            attrValue = '#FFFFFF'; // Keep white color in all other modes
                        }
                    }

                    attributes[attrName] = attrValue;
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

// function generateJsFile(icons) {
//     const jsContent = `
//       const icons = ${JSON.stringify(icons, null, 2)};
      
//       function listAllIcons() {
//         const totalIcons = Object.keys(icons).length;
//         console.groupCollapsed('%cAviala Design Icons ^1.0.3', 'color: gray; font-weight: normal', '\\nAvailable Icons total:', totalIcons);
//         Object.entries(icons).forEach(([iconName, modes]) => {
//           console.groupCollapsed(\`🔹 \${iconName}\`);
//           const availableModes = Object.keys(modes);
//           console.log(\`Available modes: \${availableModes.join(', ')}\`);
//           console.groupEnd();
//         });
//         console.groupEnd();
        
//         return {
//           total: totalIcons,
//           icons: Object.entries(icons).map(([name, modes]) => ({
//             name,
//             modes: Object.keys(modes)
//           }))
//         };
//       }
//         class AvialaIcon extends HTMLElement {
//         constructor() {
//           super();
//           this.attachShadow({ mode: 'open' });
//         }
        
//         static get observedAttributes() {
//           return ['name', 'color', 'mode'];
//         }
  
//         attributeChangedCallback() {
//           this.render();
//         }
  
//         render() {
//           const name = this.getAttribute('name');
//           const requestedMode = this.getAttribute('mode') || 'outline';
//           const color = this.getAttribute('color') || 'currentColor';
  
//           const iconSet = icons[name];
//           if (!iconSet) {
//             console.error("Icon '" + name + "' not found / 没有找到 '" + name + "' 图标");
//             return;
//           }

//           let useMode = requestedMode;
  
//           if (!iconSet[useMode]) {
//             console.warn("Mode '" + useMode + "' not found for '" + name + "', falling back to outline mode / '" + name + "' 图标没有找到样式 '" + useMode + "', 已回退为描边样式");
//             useMode = 'outline';
//           }
  
//           const icon = iconSet[useMode];
//           if (!icon) {
//             console.warn("No valid icon found for '" + name + "' / 没有找到有效的 '" + name + "' 图标");
//             return;
//           }
  
//           const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//           svg.setAttribute('viewBox', icon.viewBox);
//           svg.style.cssText = 'width: 100%; height: 100%; display: block;';
  
//           icon.paths.forEach(pathData => {
//             const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
//             // 创建一个新的属性对象，避免修改原始数据
//             const attributes = { ...pathData };
            
//           switch(useMode) {
//               case 'outline':
//                   if (attributes.fill === 'currentColor' || (!attributes.stroke && attributes.fill !== '#FFFFFF')) {
//                       attributes.fill = color;
//                   }
//                   break;
                    
//               case 'fill':
//                   if (attributes.fill === 'currentColor' || (!attributes.fill && attributes.fill !== '#FFFFFF')) {
//                       attributes.fill = color;
//                   }
//                   delete attributes.stroke;
//                   delete attributes['stroke-width'];
//                   break;
                    
//               case 'fill-colorful':
//               case 'colorful':
//                   // 保持原始颜色
//                   break;
                    
//               case 'fill-black':
//               case 'black':
//                   if (attributes.fill !== '#FFFFFF') {
//                       // 只在非白色的情况下应用颜色变换
//                       if (attributes.fill === 'currentColor') {
//                           attributes.fill = color;
//                       }
//                   }
//                   delete attributes.stroke;
//                   delete attributes['stroke-width'];
//                   break;
//           }            // 应用属性到路径元素
//             Object.entries(attributes).forEach(([key, value]) => {
//               path.setAttribute(key, value);
//             });
            
//             svg.appendChild(path);
//           });
  
//           this.shadowRoot.innerHTML = \`
//             <style>
//               :host {
//                 display: inline-block;
//                 width: 1em;
//                 height: 1em;
//                 line-height: 1;
//               }
//             </style>
//           \`;
//           this.shadowRoot.appendChild(svg);
//         }
//       }
  
//       customElements.define('aviala-icon', AvialaIcon);
  
//       const iconNames = ${JSON.stringify(Object.keys(icons))};
  
//       if (typeof module !== 'undefined' && module.exports) {
//         module.exports = {
//           iconNames,
//           listAllIcons
//         };
//       } else {
//         window.listAvialaIcons = listAllIcons;
//       }
//     `;

//     fs.writeFileSync(path.join(distDir, 'index.js'), jsContent);
// }

const icons = convertSvgToJs();
// generateJsFile(icons);
console.log('Build completed!');

// 添加文件名清理函数
function cleanFileName(fileName) {
    return fileName
        .replace(/\s+\((\d+)\)/g, '_$1') // Convert (1) to _1
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .replace(/-fill\s+/g, '_fill_') // Handle -fill spaces
        .replace(/\s*-\s*/g, '_') // Replace hyphens with underscores
        .replace(/[^a-zA-Z0-9_]/g, ''); // Remove any other invalid characters
}

// 新增生成单个图标文件的函数
function generateSingleIconFile(iconName, iconData) {
    const cleanedIconName = cleanFileName(iconName);
    const iconContent = `
        const ${cleanedIconName}Icon = ${JSON.stringify(iconData, null, 2)};
        
        export function get${cleanedIconName}(mode = 'outline') {
            return ${cleanedIconName}Icon[mode] || ${cleanedIconName}Icon['outline'];
        }
        
        export const ${cleanedIconName}Modes = Object.keys(${cleanedIconName}Icon);
        
        // 导出图标数据本身
        export const ${cleanedIconName} = ${cleanedIconName}Icon;
    `;
    
    fs.writeFileSync(
        path.join(distDir, `${cleanedIconName}.js`), 
        iconContent.trim()
    );
}

// 在 convertSvgToJs 函数后面添加遍历生成单个文件的逻辑
Object.entries(icons).forEach(([iconName, iconData]) => {
    generateSingleIconFile(iconName, iconData);
});

// 添加生成汇总文件的函数
function generateIconsBundle() {
    const bundleContent = `
        ${Object.keys(icons).map(iconName => 
            `import { ${cleanFileName(iconName)} } from './${cleanFileName(iconName)}.js';`
        ).join('\n')}
        
        export const allIcons = {
            ${Object.keys(icons).map(iconName => {
                const cleanedName = cleanFileName(iconName);
                return `${cleanedName}: ${cleanedName}`;
            }).join(',\n            ')}
        };
        
        export function getIcon(name) {
            return allIcons[name] || null;
        }

        // export function listAvialaIcons(logToConsole = true) {
        //     const totalIcons = Object.keys(allIcons).length;
        //     if (logToConsole) {
        //         console.groupCollapsed('%cAviala Design Icons ^1.0.5', 'color: gray; font-weight: normal', '\\nAvailable Icons total:', totalIcons);
        //         Object.entries(allIcons).forEach(([iconName, modes]) => {
        //             console.groupCollapsed(\`🔹 \${iconName}\`);
        //             const availableModes = Object.keys(modes);
        //             console.log(\`Available modes: \${availableModes.join(', ')}\`);
        //             console.groupEnd();
        //         });
        //         console.groupEnd();
        //     }
            
        //     return {
        //         total: totalIcons,
        //         icons: Object.entries(allIcons).map(([name, modes]) => ({
        //             name,
        //             modes: Object.keys(modes)
        //         }))
        //     };
        // }

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
    
                const iconSet = allIcons[name];
                if (!iconSet) {
                    console.error("Icon '" + name + "' not found");
                    return;
                }
    
                let useMode = requestedMode;
    
                if (!iconSet[useMode]) {
                    console.warn("Mode '" + useMode + "' not found for '" + name + "', falling back to outline mode");
                    useMode = 'outline';
                }
    
                const icon = iconSet[useMode];
                if (!icon) {
                    console.warn("No valid icon found for '" + name + "'");
                    return;
                }
    
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('viewBox', icon.viewBox);
                svg.style.cssText = 'width: 100%; height: 100%; display: block;';
    
                icon.paths.forEach(pathData => {
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    const attributes = { ...pathData };
                    
                    switch(useMode) {
                        case 'outline':
                            if (attributes.fill === 'currentColor' || (!attributes.stroke && attributes.fill !== '#FFFFFF')) {
                                attributes.fill = color;
                            }
                            break;
                        case 'fill':
                            if (attributes.fill === 'currentColor' || (!attributes.fill && attributes.fill !== '#FFFFFF')) {
                                attributes.fill = color;
                            }
                            delete attributes.stroke;
                            delete attributes['stroke-width'];
                            break;
                        case 'fill-colorful':
                        case 'colorful':
                            break;
                        case 'fill-black':
                        case 'black':
                            if (attributes.fill !== '#FFFFFF') {
                                if (attributes.fill === 'currentColor') {
                                    attributes.fill = color;
                                }
                            }
                            delete attributes.stroke;
                            delete attributes['stroke-width'];
                            break;
                    }
                    
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
    `;
    
    fs.writeFileSync(
        path.join(distDir, 'all.js'),
        bundleContent.trim()
    );
}// 在生成完单个文件后调用此函数
generateIconsBundle();
