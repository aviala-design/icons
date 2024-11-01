const Edit_paragraphAlignmenBothIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M45 8C45 9.10457 44.1046 10 43 10L5 10C3.8954 10 3 9.10457 3 8C3 6.89543 3.8954 6 5 6L43 6C44.1046 6 45 6.89543 45 8ZM45 16C45 17.1046 44.1046 18 43 18L5 18C3.8954 18 3 17.1046 3 16C3 14.8954 3.8954 14 5 14L43 14C44.1046 14 45 14.8954 45 16ZM45 24C45 25.1046 44.1046 26 43 26L5 26C3.8954 26 3 25.1046 3 24C3 22.8954 3.8954 22 5 22L43 22C44.1046 22 45 22.8954 45 24ZM45 32C45 33.1046 44.1046 34 43 34L5 34C3.8954 34 3 33.1046 3 32C3 30.8954 3.8954 30 5 30L43 30C44.1046 30 45 30.8954 45 32ZM45 40C45 41.1046 44.1046 42 43 42L5 42C3.8954 42 3 41.1046 3 40C3 38.8954 3.8954 38 5 38L43 38C44.1046 38 45 38.8954 45 40Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_paragraphAlignmenBoth(mode = 'outline') {
            return Edit_paragraphAlignmenBothIcon[mode] || Edit_paragraphAlignmenBothIcon['outline'];
        }
        
        export const Edit_paragraphAlignmenBothModes = Object.keys(Edit_paragraphAlignmenBothIcon);
        
        // 导出图标数据本身
        export const Edit_paragraphAlignmenBoth = Edit_paragraphAlignmenBothIcon;