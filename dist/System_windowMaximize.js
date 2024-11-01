const System_windowMaximizeIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4 36C4 40.4183 7.58172 44 12 44L36 44C40.4183 44 44 40.4183 44 36L44 12C44 7.58172 40.4183 4 36 4L12 4C7.58172 4 4 7.58172 4 12L4 36ZM36 40L12 40C9.79086 40 8 38.2091 8 36L8 12C8 9.79086 9.79086 8 12 8L36 8C38.2091 8 40 9.79086 40 12L40 36C40 38.2091 38.2091 40 36 40Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "colorful": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M12 6L36 6C39.3137 6 42 8.68629 42 12L42 36C42 39.3137 39.3137 42 36 42L12 42C8.68629 42 6 39.3137 6 36L6 12C6 8.68629 8.68629 6 12 6Z",
        "fill": "#BEDCFF"
      },
      {
        "d": "M36 4L12 4C7.58172 4 4 7.58172 4 12L4 36C4 40.4183 7.58172 44 12 44L36 44C40.4183 44 44 40.4183 44 36L44 12C44 7.58172 40.4183 4 36 4ZM8 12C8 9.79086 9.79086 8 12 8L36 8C38.2091 8 40 9.79086 40 12L40 36C40 38.2091 38.2091 40 36 40L12 40C9.79086 40 8 38.2091 8 36L8 12Z",
        "fill-rule": "evenodd",
        "fill": "#4187FF"
      },
      {
        "d": "M4 12L4 32C4 33.1046 4.89543 34 6 34C7.10457 34 8 33.1046 8 32L8 12C8 9.79086 9.79086 8 12 8L36 8C38.2091 8 40 9.79086 40 12L40 32C40 33.1046 40.8954 34 42 34C43.1046 34 44 33.1046 44 32L44 12C44 7.58172 40.4183 4 36 4L12 4C7.58172 4 4 7.58172 4 12Z",
        "fill-rule": "evenodd",
        "fill": "#1764FF"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M8 36L8 12C8 11.4579 8.10457 10.9399 8.3137 10.446C8.51631 9.96753 8.80273 9.54319 9.17296 9.17296C9.54319 8.80273 9.96753 8.51632 10.446 8.31371C10.9398 8.10457 11.4579 8 12 8L36 8C36.5421 8 37.0601 8.10457 37.554 8.3137C38.0325 8.51631 38.4568 8.80273 38.827 9.17296C39.1973 9.54319 39.4837 9.96754 39.6863 10.446C39.8954 10.9398 40 11.4579 40 12L40 36C40 36.5421 39.8954 37.0601 39.6863 37.554C39.4837 38.0325 39.1973 38.4568 38.827 38.827C38.4568 39.1973 38.0325 39.4837 37.554 39.6863C37.0601 39.8954 36.5421 40 36 40L12 40C11.4579 40 10.9398 39.8954 10.446 39.6863C9.96754 39.4837 9.54319 39.1973 9.17296 38.827C8.80273 38.4568 8.51632 38.0325 8.31371 37.554C8.10457 37.0601 8 36.5421 8 36ZM12 4C10.9165 4 9.87857 4.21012 8.8862 4.63036C7.92935 5.03556 7.08213 5.60695 6.34454 6.34454C5.60695 7.08213 5.03556 7.92935 4.63036 8.8862C4.21012 9.87857 4 10.9165 4 12L4 36C4 37.0835 4.21012 38.1215 4.63036 39.1138C5.03556 40.0707 5.60695 40.9179 6.34454 41.6555C7.08212 42.393 7.92934 42.9644 8.8862 43.3696C9.87856 43.7899 10.9165 44 12 44L36 44C37.0835 44 38.1215 43.7899 39.1138 43.3696C40.0707 42.9644 40.9179 42.393 41.6555 41.6555C42.393 40.9179 42.9644 40.0707 43.3696 39.1138C43.7899 38.1215 44 37.0835 44 36L44 12C44 10.9165 43.7899 9.87856 43.3696 8.8862C42.9644 7.92934 42.393 7.08212 41.6555 6.34454C40.9179 5.60695 40.0707 5.03556 39.1138 4.63036C38.1215 4.21012 37.0835 4 36 4L12 4Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getSystem_windowMaximize(mode = 'outline') {
            return System_windowMaximizeIcon[mode] || System_windowMaximizeIcon['outline'];
        }
        
        export const System_windowMaximizeModes = Object.keys(System_windowMaximizeIcon);
        
        // 导出图标数据本身
        export const System_windowMaximize = System_windowMaximizeIcon;