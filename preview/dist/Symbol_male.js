const Symbol_maleIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37.1716 8L28.0002 8C26.9002 8 26.0002 7.1 26.0002 6C26.0002 4.9 26.9002 4 28.0002 4L40.0002 4C42.2102 4 44.0002 5.79 44.0002 8L44.0002 20C44.0002 21.1 43.1002 22 42.0002 22C40.9002 22 40.0002 21.1 40.0002 20L40.0002 10.8282L30.9251 19.9033C32.8539 22.4272 34 25.5805 34 29C34 37.28 27.28 44 19 44C10.72 44 4 37.28 4 29C4 20.72 10.72 14 19 14C22.4195 14 25.5728 15.1461 28.0967 17.0749L37.1716 8ZM30 29C30 35.08 25.08 40 19 40C12.92 40 8 35.08 8 29C8 22.92 12.92 18 19 18C25.08 18 30 22.92 30 29Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getSymbol_male(mode = 'outline') {
            return Symbol_maleIcon[mode] || Symbol_maleIcon['outline'];
        }
        
        export const Symbol_maleModes = Object.keys(Symbol_maleIcon);
        
        // 导出图标数据本身
        export const Symbol_male = Symbol_maleIcon;