const Direction_arrowCloseIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M24 7.82843L37.5847 21.4132L37.5858 21.4142C37.9477 21.7761 38.4477 22 39 22C40.1046 22 41 21.1046 41 20C41 19.4477 40.7761 18.9477 40.4142 18.5858L40.4134 18.585L26.8284 5C25.2663 3.43791 22.7337 3.43791 21.1716 5L7.587 18.5846L7.5858 18.5858C7.2239 18.9477 7 19.4477 7 20C7 21.1046 7.8954 22 9 22C9.5523 22 10.0523 21.7761 10.4142 21.4142L10.4156 21.4128L24 7.82843ZM24 40.1715L37.5847 26.5867L37.5858 26.5857C37.9477 26.2238 38.4477 25.9999 39 25.9999C40.1046 25.9999 41 26.8953 41 27.9999C41 28.5522 40.7761 29.0522 40.4142 29.4141L40.4134 29.4149L26.8284 42.9999C25.2663 44.562 22.7337 44.562 21.1716 42.9999L7.587 29.4153L7.5858 29.4141C7.2239 29.0522 7 28.5522 7 27.9999C7 26.8953 7.8954 25.9999 9 25.9999C9.5523 25.9999 10.0523 26.2238 10.4142 26.5857L10.4156 26.5871L24 40.1715Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getDirection_arrowClose(mode = 'outline') {
            return Direction_arrowCloseIcon[mode] || Direction_arrowCloseIcon['outline'];
        }
        
        export const Direction_arrowCloseModes = Object.keys(Direction_arrowCloseIcon);
        
        // 导出图标数据本身
        export const Direction_arrowClose = Direction_arrowCloseIcon;