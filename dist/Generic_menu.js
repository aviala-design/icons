const Generic_menuIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M6 38.7C6 39.8045 6.89543 40.7 8 40.7L41 40.7C42.1046 40.7 43 39.8045 43 38.7C43 37.5954 42.1046 36.7 41 36.7L8 36.7C6.89543 36.7 6 37.5954 6 38.7Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M6 23.85C6 24.9545 6.89543 25.85 8 25.85L41 25.85C42.1046 25.85 43 24.9545 43 23.85C43 22.7454 42.1046 21.85 41 21.85L8 21.85C6.89543 21.85 6 22.7454 6 23.85Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M6 9C6 10.1046 6.89543 11 8 11L41 11C42.1046 11 43 10.1046 43 9C43 7.89543 42.1046 7 41 7L8 7C6.89543 7 6 7.89543 6 9Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7L41 7C42.1046 7 43 7.89543 43 9C43 10.1046 42.1046 11 41 11L8 11ZM6 23.85C6 24.9546 6.89543 25.85 8 25.85L41 25.85C42.1046 25.85 43 24.9546 43 23.85C43 22.7454 42.1046 21.85 41 21.85L8 21.85C6.89543 21.85 6 22.7454 6 23.85ZM6 38.7C6 39.8046 6.89543 40.7 8 40.7L41 40.7C42.1046 40.7 43 39.8046 43 38.7C43 37.5954 42.1046 36.7 41 36.7L8 36.7C6.89543 36.7 6 37.5954 6 38.7Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getGeneric_menu(mode = 'outline') {
            return Generic_menuIcon[mode] || Generic_menuIcon['outline'];
        }
        
        export const Generic_menuModes = Object.keys(Generic_menuIcon);
        
        // 导出图标数据本身
        export const Generic_menu = Generic_menuIcon;