const Direction_arrowDown_black_1Icon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M24.0011 4.25C22.8965 4.24997 22.001 5.14538 22.001 6.24995L22 41.7499C22 42.8545 22.8954 43.75 23.9999 43.75C25.1045 43.75 26 42.8547 26 41.7501L26.001 6.25006C26.001 5.14549 25.1056 4.25004 24.0011 4.25Z",
        "fill-rule": "evenodd",
        "fill": "#787878"
      },
      {
        "d": "M38.5854 25.5861L38.5858 25.5858C38.9477 25.2239 39.4477 25 40 25C41.1046 25 42 25.8954 42 27C42 27.5523 41.7761 28.0523 41.4142 28.4142L41.4138 28.4146L26.8284 43C25.2663 44.5621 22.7337 44.5621 21.1716 43L6.5858 28.4142C6.2239 28.0523 6 27.5523 6 27C6 25.8954 6.8954 25 8 25C8.5523 25 9.0523 25.2239 9.4142 25.5858L9.4153 25.5868L24 40.1716L38.5854 25.5861Z",
        "fill-rule": "evenodd",
        "fill": "#424242"
      }
    ]
  }
};
        
        export function getDirection_arrowDown_black_1(mode = 'outline') {
            return Direction_arrowDown_black_1Icon[mode] || Direction_arrowDown_black_1Icon['outline'];
        }
        
        export const Direction_arrowDown_black_1Modes = Object.keys(Direction_arrowDown_black_1Icon);
        
        // 导出图标数据本身
        export const Direction_arrowDown_black_1 = Direction_arrowDown_black_1Icon;