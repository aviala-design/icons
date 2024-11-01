const Edit_paragraphAlignmenRightIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M45 8C45 9.10457 44.1046 10 43 10L21 10C19.8954 10 19 9.10457 19 8C19 6.89543 19.8954 6 21 6L43 6C44.1046 6 45 6.89543 45 8ZM45 16C45 17.1046 44.1046 18 43 18L31 18C29.8954 18 29 17.1046 29 16C29 14.8954 29.8954 14 31 14L43 14C44.1046 14 45 14.8954 45 16ZM45 24C45 25.1046 44.1046 26 43 26L5 26C3.8954 26 3 25.1046 3 24C3 22.8954 3.8954 22 5 22L43 22C44.1046 22 45 22.8954 45 24ZM45 32C45 33.1046 44.1046 34 43 34L11 34C9.8954 34 9 33.1046 9 32C9 30.8954 9.8954 30 11 30L43 30C44.1046 30 45 30.8954 45 32ZM45 40C45 41.1046 44.1046 42 43 42L11 42C9.8954 42 9 41.1046 9 40C9 38.8954 9.8954 38 11 38L43 38C44.1046 38 45 38.8954 45 40Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_paragraphAlignmenRight(mode = 'outline') {
            return Edit_paragraphAlignmenRightIcon[mode] || Edit_paragraphAlignmenRightIcon['outline'];
        }
        
        export const Edit_paragraphAlignmenRightModes = Object.keys(Edit_paragraphAlignmenRightIcon);
        
        // 导出图标数据本身
        export const Edit_paragraphAlignmenRight = Edit_paragraphAlignmenRightIcon;