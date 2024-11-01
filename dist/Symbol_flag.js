const Symbol_flagIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37.5236 12.0603L13.7023 3.12732L12.2979 6.87264L36.1191 15.8056C37.0104 16.1398 36.9748 17.4125 36.0663 17.6964L12.4035 25.091L13.5966 28.909L37.2594 21.5144C41.802 20.0948 41.9798 13.7314 37.5236 12.0603Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M15 5C15 3.89543 14.1046 3 13 3C11.8954 3 11 3.89543 11 5L11 43C11 44.1046 11.8954 45 13 45C14.1046 45 15 44.1046 15 43L15 5Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M13.7484 3.14474C13.5172 3.05139 13.2646 3 13 3C11.8954 3 11 3.89543 11 5L11 43C11 44.1046 11.8954 45 13 45C14.1046 45 15 44.1046 15 43L15 28.4705L37.2593 21.5145C41.8019 20.0949 41.9797 13.7315 37.5235 12.0604L13.7484 3.14474Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M13.7416 3.14202C13.5123 3.05039 13.262 3 13 3C11.8954 3 11 3.89543 11 5L11 43C11 44.1046 11.8954 45 13 45C14.1046 45 15 44.1046 15 43L15 28.4704L37.2594 21.5144C41.802 20.0948 41.9798 13.7313 37.5236 12.0603L13.7416 3.14202ZM15 24.2796L36.0663 17.6964C36.9748 17.4125 37.0104 16.1398 36.1191 15.8056L15 7.8859L15 24.2796Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getSymbol_flag(mode = 'outline') {
            return Symbol_flagIcon[mode] || Symbol_flagIcon['outline'];
        }
        
        export const Symbol_flagModes = Object.keys(Symbol_flagIcon);
        
        // 导出图标数据本身
        export const Symbol_flag = Symbol_flagIcon;