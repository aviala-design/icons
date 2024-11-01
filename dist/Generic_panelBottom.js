const Generic_panelBottomIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M9 36C9 37.1046 9.89543 38 11 38L20 38C21.1046 38 22 37.1046 22 36C22 34.8954 21.1046 34 20 34L11 34C9.89543 34 9 34.8954 9 36Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M31.5 36C31.5 37.1046 32.3954 38 33.5 38L37 38C38.1046 38 39 37.1046 39 36C39 34.8954 38.1046 34 37 34L33.5 34C32.3954 34 31.5 34.8954 31.5 36Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M24 36C24 37.1046 24.8954 38 26 38L27.5 38C28.6046 38 29.5 37.1046 29.5 36C29.5 34.8954 28.6046 34 27.5 34L26 34C24.8954 34 24 34.8954 24 36Z",
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
        "d": "M6 31L6 27L42 27L42 31L6 31Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M38 3L10 3C5.58172 3 2 6.58172 2 11L2 37C2 41.4183 5.58172 45 10 45L38 45C42.4183 45 46 41.4183 46 37L46 11C46 6.58172 42.4183 3 38 3ZM42 27L42 11C42 8.79086 40.2091 7 38 7L10 7C7.79086 7 6 8.79086 6 11L6 27L42 27ZM9 36C9 37.1046 9.89543 38 11 38L20 38C21.1046 38 22 37.1046 22 36C22 34.8954 21.1046 34 20 34L11 34C9.89543 34 9 34.8954 9 36ZM29.5 36C29.5 37.1046 28.6046 38 27.5 38L26 38C24.8954 38 24 37.1046 24 36C24 34.8954 24.8954 34 26 34L27.5 34C28.6046 34 29.5 34.8954 29.5 36ZM31.5 36C31.5 37.1046 32.3954 38 33.5 38L37 38C38.1046 38 39 37.1046 39 36C39 34.8954 38.1046 34 37 34L33.5 34C32.3954 34 31.5 34.8954 31.5 36Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M38 3L10 3C5.58172 3 2 6.58172 2 11L2 37C2 41.4183 5.58172 45 10 45L38 45C42.4183 45 46 41.4183 46 37L46 11C46 6.58172 42.4183 3 38 3ZM6 11C6 8.79086 7.79086 7 10 7L38 7C40.2091 7 42 8.79086 42 11L42 27L6 27L6 11ZM6 31L6 37C6 39.2091 7.79086 41 10 41L38 41C40.2091 41 42 39.2091 42 37L42 31L6 31ZM11 38C9.89543 38 9 37.1046 9 36C9 34.8954 9.89543 34 11 34L20 34C21.1046 34 22 34.8954 22 36C22 37.1046 21.1046 38 20 38L11 38ZM29.5 36C29.5 37.1046 28.6046 38 27.5 38L26 38C24.8954 38 24 37.1046 24 36C24 34.8954 24.8954 34 26 34L27.5 34C28.6046 34 29.5 34.8954 29.5 36ZM33.5 38C32.3954 38 31.5 37.1046 31.5 36C31.5 34.8954 32.3954 34 33.5 34L37 34C38.1046 34 39 34.8954 39 36C39 37.1046 38.1046 38 37 38L33.5 38Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getGeneric_panelBottom(mode = 'outline') {
            return Generic_panelBottomIcon[mode] || Generic_panelBottomIcon['outline'];
        }
        
        export const Generic_panelBottomModes = Object.keys(Generic_panelBottomIcon);
        
        // 导出图标数据本身
        export const Generic_panelBottom = Generic_panelBottomIcon;