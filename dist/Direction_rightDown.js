const Direction_rightDownIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M44 6C44 6.55228 43.7761 7.05228 43.4142 7.41421L7.41421 43.4142C7.05228 43.7761 6.55228 44 6 44C4.89543 44 4 43.1046 4 42C4 41.4477 4.22386 40.9477 4.58579 40.5858L40.5858 4.58579C40.9477 4.22386 41.4477 4 42 4C43.1046 4 44 4.89543 44 6ZM40.5858 23.5858L40.585 23.5865L23.5865 40.585L23.5858 40.5858C23.2239 40.9477 23 41.4477 23 42C23 43.1046 23.8954 44 25 44C25.5523 44 26.0523 43.7761 26.4142 43.4142L43.4142 26.4142C43.7761 26.0523 44 25.5523 44 25C44 23.8954 43.1046 23 42 23C41.4477 23 40.9477 23.2239 40.5858 23.5858Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getDirection_rightDown(mode = 'outline') {
            return Direction_rightDownIcon[mode] || Direction_rightDownIcon['outline'];
        }
        
        export const Direction_rightDownModes = Object.keys(Direction_rightDownIcon);
        
        // 导出图标数据本身
        export const Direction_rightDown = Direction_rightDownIcon;