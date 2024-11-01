const Edit_paragraphAlignmenLeftIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M29 8C29 9.10457 28.1046 10 27 10L5 10C3.8954 10 3 9.10457 3 8C3 6.89543 3.8954 6 5 6L27 6C28.1046 6 29 6.89543 29 8ZM19 16C19 17.1046 18.1046 18 17 18L5 18C3.8954 18 3 17.1046 3 16C3 14.8954 3.8954 14 5 14L17 14C18.1046 14 19 14.8954 19 16ZM45 24C45 25.1046 44.1046 26 43 26L5 26C3.8954 26 3 25.1046 3 24C3 22.8954 3.8954 22 5 22L43 22C44.1046 22 45 22.8954 45 24ZM39 32C39 33.1046 38.1046 34 37 34L5 34C3.8954 34 3 33.1046 3 32C3 30.8954 3.8954 30 5 30L37 30C38.1046 30 39 30.8954 39 32ZM39 40C39 41.1046 38.1046 42 37 42L5 42C3.8954 42 3 41.1046 3 40C3 38.8954 3.8954 38 5 38L37 38C38.1046 38 39 38.8954 39 40Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_paragraphAlignmenLeft(mode = 'outline') {
            return Edit_paragraphAlignmenLeftIcon[mode] || Edit_paragraphAlignmenLeftIcon['outline'];
        }
        
        export const Edit_paragraphAlignmenLeftModes = Object.keys(Edit_paragraphAlignmenLeftIcon);
        
        // 导出图标数据本身
        export const Edit_paragraphAlignmenLeft = Edit_paragraphAlignmenLeftIcon;