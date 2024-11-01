const Edit_alignmentLeftBottomIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM26 20C27.1046 20 28 19.1046 28 18C28 16.8954 27.1046 16 26 16L14 16C12.8954 16 12 16.8954 12 18C12 19.1046 12.8954 20 14 20L26 20ZM30 28C31.1046 28 32 27.1046 32 26C32 24.8954 31.1046 24 30 24L14 24C12.8954 24 12 24.8954 12 26C12 27.1046 12.8954 28 14 28L30 28ZM22 36C23.1046 36 24 35.1046 24 34C24 32.8954 23.1046 32 22 32L14 32C12.8954 32 12 32.8954 12 34C12 35.1046 12.8954 36 14 36L22 36Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentLeftBottom(mode = 'outline') {
            return Edit_alignmentLeftBottomIcon[mode] || Edit_alignmentLeftBottomIcon['outline'];
        }
        
        export const Edit_alignmentLeftBottomModes = Object.keys(Edit_alignmentLeftBottomIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentLeftBottom = Edit_alignmentLeftBottomIcon;