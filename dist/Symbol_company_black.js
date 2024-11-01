const Symbol_company_blackIcon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M20 36L20 42C20.0077 42.5491 20.203 43.0205 20.5858 43.4142C20.9795 43.797 21.4509 43.9923 22 44L34 44C34.5491 43.9923 35.0205 43.797 35.4142 43.4142C35.797 43.0205 35.9923 42.5491 36 42L36 36C36 33.7909 34.2091 32 32 32L24 32C21.7909 32 20 33.7909 20 36ZM32 40L32 36L24 36L24 40L32 40Z",
        "fill-rule": "evenodd",
        "fill": "#424242"
      },
      {
        "d": "M12 12L12 44L38 44C41.3137 44 44 41.3137 44 38L44 12C44 7.58172 40.4183 4 36 4L20 4C15.5817 4 12 7.58172 12 12ZM16 40L38 40C39.1046 40 40 39.1046 40 38L40 12C40 9.79086 38.2091 8 36 8L20 8C17.7909 8 16 9.79086 16 12L16 40Z",
        "fill-rule": "evenodd",
        "fill": "#787878"
      },
      {
        "d": "M4 25L4 38C4 41.3137 6.68629 44 10 44L14 44C14.5491 43.9923 15.0205 43.797 15.4142 43.4142C15.797 43.0205 15.9923 42.5491 16 42L16 19C15.9923 18.4509 15.797 17.9795 15.4142 17.5858C15.0205 17.203 14.5491 17.0077 14 17L12 17C7.58172 17 4 20.5817 4 25ZM12 21C9.79086 21 8 22.7909 8 25L8 38C8 39.1046 8.89543 40 10 40L12 40L12 21Z",
        "fill-rule": "evenodd",
        "fill": "#787878"
      },
      {
        "d": "M19.5 14C19.5 15.0879 20.3954 15.9699 21.5 15.9699L35 15.9699C36.1046 15.9699 37 15.0879 37 14C37 12.912 36.1046 12.03 35 12.03L21.5 12.03C20.3954 12.03 19.5 12.912 19.5 14Z",
        "fill-rule": "evenodd",
        "fill": "#424242"
      },
      {
        "d": "M19.5 21C19.5 22.0879 20.3954 22.9699 21.5 22.9699L35 22.9699C36.1046 22.9699 37 22.0879 37 21C37 19.912 36.1046 19.03 35 19.03L21.5 19.03C20.3954 19.03 19.5 19.912 19.5 21Z",
        "fill-rule": "evenodd",
        "fill": "#424242"
      }
    ]
  }
};
        
        export function getSymbol_company_black(mode = 'outline') {
            return Symbol_company_blackIcon[mode] || Symbol_company_blackIcon['outline'];
        }
        
        export const Symbol_company_blackModes = Object.keys(Symbol_company_blackIcon);
        
        // 导出图标数据本身
        export const Symbol_company_black = Symbol_company_blackIcon;