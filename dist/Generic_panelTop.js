const Generic_panelTopIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M9 12C9 13.1046 9.89543 14 11 14L20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10L11 10C9.89543 10 9 10.8954 9 12Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M31.5 12C31.5 13.1046 32.3954 14 33.5 14L37 14C38.1046 14 39 13.1046 39 12C39 10.8954 38.1046 10 37 10L33.5 10C32.3954 10 31.5 10.8954 31.5 12Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M24 12C24 13.1046 24.8954 14 26 14L27.5 14C28.6046 14 29.5 13.1046 29.5 12C29.5 10.8954 28.6046 10 27.5 10L26 10C24.8954 10 24 10.8954 24 12Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M38 3L10 3C5.58172 3 2 6.58172 2 11L2 37C2 41.4183 5.58172 45 10 45L38 45C42.4183 45 46 41.4183 46 37L46 11C46 6.58172 42.4183 3 38 3ZM6 11C6 8.79086 7.79086 7 10 7L38 7C40.2091 7 42 8.79086 42 11L42 37C42 39.2091 40.2091 41 38 41L10 41C7.79086 41 6 39.2091 6 37L6 11Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.71",
        "fill": "currentColor"
      },
      {
        "d": "M6 21L6 17L42 17L42 21L6 21Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M38 3C42.4183 3 46 6.58172 46 11L46 37C46 41.4183 42.4183 45 38 45L10 45C5.58172 45 2 41.4183 2 37L2 11C2 6.58172 5.58172 3 10 3L38 3ZM6 21L6 37C6 39.2091 7.79086 41 10 41L38 41C40.2091 41 42 39.2091 42 37L42 21L6 21ZM11 14C9.89543 14 9 13.1046 9 12C9 10.8954 9.89543 10 11 10L20 10C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14L11 14ZM27.5 14C28.6046 14 29.5 13.1046 29.5 12C29.5 10.8954 28.6046 10 27.5 10L26 10C24.8954 10 24 10.8954 24 12C24 13.1046 24.8954 14 26 14L27.5 14ZM33.5 14C32.3954 14 31.5 13.1046 31.5 12C31.5 10.8954 32.3954 10 33.5 10L37 10C38.1046 10 39 10.8954 39 12C39 13.1046 38.1046 14 37 14L33.5 14Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M38 3L10 3C5.58172 3 2 6.58172 2 11L2 37C2 41.4183 5.58172 45 10 45L38 45C42.4183 45 46 41.4183 46 37L46 11C46 6.58172 42.4183 3 38 3ZM6 11C6 8.79086 7.79086 7 10 7L38 7C40.2091 7 42 8.79086 42 11L42 17L6 17L6 11ZM11 14C9.89543 14 9 13.1046 9 12C9 10.8954 9.89543 10 11 10L20 10C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14L11 14ZM29.5 12C29.5 13.1046 28.6046 14 27.5 14L26 14C24.8954 14 24 13.1046 24 12C24 10.8954 24.8954 10 26 10L27.5 10C28.6046 10 29.5 10.8954 29.5 12ZM33.5 14C32.3954 14 31.5 13.1046 31.5 12C31.5 10.8954 32.3954 10 33.5 10L37 10C38.1046 10 39 10.8954 39 12C39 13.1046 38.1046 14 37 14L33.5 14ZM6 21L6 37C6 39.2091 7.79086 41 10 41L38 41C40.2091 41 42 39.2091 42 37L42 21L6 21Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getGeneric_panelTop(mode = 'outline') {
            return Generic_panelTopIcon[mode] || Generic_panelTopIcon['outline'];
        }
        
        export const Generic_panelTopModes = Object.keys(Generic_panelTopIcon);
        
        // 导出图标数据本身
        export const Generic_panelTop = Generic_panelTopIcon;