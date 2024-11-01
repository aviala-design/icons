const Symbol_informationIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M20.5 9.5C20.5 7.57 22.07 6 24 6C25.93 6 27.5 7.57 27.5 9.5C27.5 11.43 25.93 13 24 13C22.07 13 20.5 11.43 20.5 9.5ZM26.5 17C26.5 15.9 25.6 15 24.5 15L20.5 15C19.4 15 18.5 15.9 18.5 17C18.5 18.1 19.4 19 20.5 19L22.5 19L22.5 39L18 39C16.9 39 16 39.9 16 41C16 42.1 16.9 43 18 43L30 43C31.1 43 32 42.1 32 41C32 39.9 31.1 39 30 39L26.5 39L26.5 17Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getSymbol_information(mode = 'outline') {
            return Symbol_informationIcon[mode] || Symbol_informationIcon['outline'];
        }
        
        export const Symbol_informationModes = Object.keys(Symbol_informationIcon);
        
        // 导出图标数据本身
        export const Symbol_information = Symbol_informationIcon;