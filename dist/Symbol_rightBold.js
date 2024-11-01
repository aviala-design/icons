const Symbol_rightBoldIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M36.4683 11.9459L36.4647 11.9494L18.5833 29.2539L11.0352 21.9493L11.0317 21.9459C10.3118 21.2491 9.33099 20.8203 8.25 20.8203C6.04086 20.8203 4.25 22.6112 4.25 24.8203C4.25 25.9484 4.71703 26.9675 5.46831 27.6947L5.47239 27.6987L13.4836 35.4514C16.3267 38.2029 20.8399 38.2029 23.6831 35.4514L42.028 17.6983L42.0317 17.6947C42.783 16.9675 43.25 15.9485 43.25 14.8203C43.25 12.6112 41.4591 10.8203 39.25 10.8203C38.169 10.8203 37.1882 11.2491 36.4683 11.9459Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getSymbol_rightBold(mode = 'outline') {
            return Symbol_rightBoldIcon[mode] || Symbol_rightBoldIcon['outline'];
        }
        
        export const Symbol_rightBoldModes = Object.keys(Symbol_rightBoldIcon);
        
        // 导出图标数据本身
        export const Symbol_rightBold = Symbol_rightBoldIcon;