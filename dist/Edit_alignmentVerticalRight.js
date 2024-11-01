const Edit_alignmentVerticalRightIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM28 16C28 14.8954 27.1046 14 26 14C24.8954 14 24 14.8954 24 16L24 32C24 33.1046 24.8954 34 26 34C27.1046 34 28 33.1046 28 32L28 16ZM36 18C36 16.8954 35.1046 16 34 16C32.8954 16 32 16.8954 32 18L32 30C32 31.1046 32.8954 32 34 32C35.1046 32 36 31.1046 36 30L36 18ZM20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20L16 28C16 29.1046 16.8954 30 18 30C19.1046 30 20 29.1046 20 28L20 20Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentVerticalRight(mode = 'outline') {
            return Edit_alignmentVerticalRightIcon[mode] || Edit_alignmentVerticalRightIcon['outline'];
        }
        
        export const Edit_alignmentVerticalRightModes = Object.keys(Edit_alignmentVerticalRightIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentVerticalRight = Edit_alignmentVerticalRightIcon;