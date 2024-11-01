const Edit_paragraphAlignmenMiddleIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 8C37 9.10457 36.1046 10 35 10L13 10C11.8954 10 11 9.10457 11 8C11 6.89543 11.8954 6 13 6L35 6C36.1046 6 37 6.89543 37 8ZM32 16C32 17.1046 31.1046 18 30 18L18 18C16.8954 18 16 17.1046 16 16C16 14.8954 16.8954 14 18 14L30 14C31.1046 14 32 14.8954 32 16ZM45 24C45 25.1046 44.1046 26 43 26L5 26C3.8954 26 3 25.1046 3 24C3 22.8954 3.8954 22 5 22L43 22C44.1046 22 45 22.8954 45 24ZM42 32C42 33.1046 41.1046 34 40 34L8 34C6.8954 34 6 33.1046 6 32C6 30.8954 6.8954 30 8 30L40 30C41.1046 30 42 30.8954 42 32ZM42 40C42 41.1046 41.1046 42 40 42L8 42C6.8954 42 6 41.1046 6 40C6 38.8954 6.8954 38 8 38L40 38C41.1046 38 42 38.8954 42 40Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_paragraphAlignmenMiddle(mode = 'outline') {
            return Edit_paragraphAlignmenMiddleIcon[mode] || Edit_paragraphAlignmenMiddleIcon['outline'];
        }
        
        export const Edit_paragraphAlignmenMiddleModes = Object.keys(Edit_paragraphAlignmenMiddleIcon);
        
        // 导出图标数据本身
        export const Edit_paragraphAlignmenMiddle = Edit_paragraphAlignmenMiddleIcon;