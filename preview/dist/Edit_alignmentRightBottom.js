const Edit_alignmentRightBottomIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM34 20C35.1046 20 36 19.1046 36 18C36 16.8954 35.1046 16 34 16L22 16C20.8954 16 20 16.8954 20 18C20 19.1046 20.8954 20 22 20L34 20ZM34 28C35.1046 28 36 27.1046 36 26C36 24.8954 35.1046 24 34 24L18 24C16.8954 24 16 24.8954 16 26C16 27.1046 16.8954 28 18 28L34 28ZM34 36C35.1046 36 36 35.1046 36 34C36 32.8954 35.1046 32 34 32L26 32C24.8954 32 24 32.8954 24 34C24 35.1046 24.8954 36 26 36L34 36Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentRightBottom(mode = 'outline') {
            return Edit_alignmentRightBottomIcon[mode] || Edit_alignmentRightBottomIcon['outline'];
        }
        
        export const Edit_alignmentRightBottomModes = Object.keys(Edit_alignmentRightBottomIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentRightBottom = Edit_alignmentRightBottomIcon;