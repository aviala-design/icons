const Generic_panelRightIcon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M10 3L38 3C42.4183 3 46 6.58172 46 11L46 37C46 41.4183 42.4183 45 38 45L10 45C5.58172 45 2 41.4183 2 37L2 11C2 6.58172 5.58172 3 10 3ZM23 7L10 7C7.79086 7 6 8.79086 6 11L6 37C6 39.2091 7.79086 41 10 41L23 41L23 7ZM32 14C30.8954 14 30 13.1046 30 12C30 10.8954 30.8954 10 32 10L37 10C38.1046 10 39 10.8954 39 12C39 13.1046 38.1046 14 37 14L32 14ZM34 20C32.8954 20 32 19.1046 32 18C32 16.8954 32.8954 16 34 16L37 16C38.1046 16 39 16.8954 39 18C39 19.1046 38.1046 20 37 20L34 20Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M10 3L38 3C42.4183 3 46 6.58172 46 11L46 37C46 41.4183 42.4183 45 38 45L10 45C5.58172 45 2 41.4183 2 37L2 11C2 6.58172 5.58172 3 10 3ZM10 7L23 7L23 41L10 41C7.79086 41 6 39.2091 6 37L6 11C6 8.79086 7.79086 7 10 7ZM38 41L27 41L27 7L38 7C40.2091 7 42 8.79086 42 11L42 37C42 39.2091 40.2091 41 38 41ZM30 12C30 13.1046 30.8954 14 32 14L37 14C38.1046 14 39 13.1046 39 12C39 10.8954 38.1046 10 37 10L32 10C30.8954 10 30 10.8954 30 12ZM32 18C32 19.1046 32.8954 20 34 20L37 20C38.1046 20 39 19.1046 39 18C39 16.8954 38.1046 16 37 16L34 16C32.8954 16 32 16.8954 32 18Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getGeneric_panelRight(mode = 'outline') {
            return Generic_panelRightIcon[mode] || Generic_panelRightIcon['outline'];
        }
        
        export const Generic_panelRightModes = Object.keys(Generic_panelRightIcon);
        
        // 导出图标数据本身
        export const Generic_panelRight = Generic_panelRightIcon;