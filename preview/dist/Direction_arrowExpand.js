const Direction_arrowExpandIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M24 18.1716L37.5847 4.58682L37.5858 4.58582C37.9477 4.22393 38.4477 4.00002 39 4.00002C40.1046 4.00002 41 4.89543 41 6.00002C41 6.55233 40.7761 7.05233 40.4142 7.41423L40.4134 7.41503L26.8284 21C25.2663 22.5621 22.7337 22.5621 21.1716 21L7.587 7.41543L7.5858 7.41423C7.2239 7.05233 7 6.55233 7 6.00002C7 4.89543 7.8954 4.00002 9 4.00002C9.5523 4.00002 10.0523 4.22393 10.4142 4.58582L10.4156 4.58722L24 18.1716ZM24 29.8284L37.5847 43.4132L37.5858 43.4142C37.9477 43.7761 38.4477 44 39 44C40.1046 44 41 43.1046 41 42C41 41.4477 40.7761 40.9477 40.4142 40.5858L40.4134 40.585L26.8284 27C25.2663 25.4379 22.7337 25.4379 21.1716 27L7.587 40.5846L7.5858 40.5858C7.2239 40.9477 7 41.4477 7 42C7 43.1046 7.8954 44 9 44C9.5523 44 10.0523 43.7761 10.4142 43.4142L10.4156 43.4128L24 29.8284Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getDirection_arrowExpand(mode = 'outline') {
            return Direction_arrowExpandIcon[mode] || Direction_arrowExpandIcon['outline'];
        }
        
        export const Direction_arrowExpandModes = Object.keys(Direction_arrowExpandIcon);
        
        // 导出图标数据本身
        export const Direction_arrowExpand = Direction_arrowExpandIcon;