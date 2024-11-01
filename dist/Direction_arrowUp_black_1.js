const Direction_arrowUp_black_1Icon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M24.0011 44C25.1056 44 26.001 43.1045 26.001 41.9999L26 6.49995C26 5.39535 25.1045 4.49997 23.9999 4.5C22.8954 4.50003 22 5.39546 22 6.50006L22.001 42.0001C22.001 43.1046 22.8965 44 24.0011 44Z",
        "fill-rule": "evenodd",
        "fill": "#787878"
      },
      {
        "d": "M9.41421 22.6642L9.41458 22.6639L24 8.0784L38.5847 22.6632L38.5858 22.6642C38.9477 23.0261 39.4477 23.25 40 23.25C41.1046 23.25 42 22.3546 42 21.25C42 20.6977 41.7761 20.1977 41.4142 19.8358L26.8284 5.25C25.2663 3.6879 22.7337 3.6879 21.1716 5.25L6.58615 19.8354L6.58579 19.8358C6.22386 20.1977 6 20.6977 6 21.25C6 22.3546 6.89543 23.25 8 23.25C8.55229 23.25 9.05228 23.0261 9.41421 22.6642Z",
        "fill-rule": "evenodd",
        "fill": "#424242"
      }
    ]
  }
};
        
        export function getDirection_arrowUp_black_1(mode = 'outline') {
            return Direction_arrowUp_black_1Icon[mode] || Direction_arrowUp_black_1Icon['outline'];
        }
        
        export const Direction_arrowUp_black_1Modes = Object.keys(Direction_arrowUp_black_1Icon);
        
        // 导出图标数据本身
        export const Direction_arrowUp_black_1 = Direction_arrowUp_black_1Icon;