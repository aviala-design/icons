const Symbol_radioPointIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": []
  }
};
        
        export function getSymbol_radioPoint(mode = 'outline') {
            return Symbol_radioPointIcon[mode] || Symbol_radioPointIcon['outline'];
        }
        
        export const Symbol_radioPointModes = Object.keys(Symbol_radioPointIcon);
        
        // 导出图标数据本身
        export const Symbol_radioPoint = Symbol_radioPointIcon;