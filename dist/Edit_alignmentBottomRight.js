const Edit_alignmentBottomRightIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM28 18C28 16.8954 27.1046 16 26 16C24.8954 16 24 16.8954 24 18L24 34C24 35.1046 24.8954 36 26 36C27.1046 36 28 35.1046 28 34L28 18ZM36 22C36 20.8954 35.1046 20 34 20C32.8954 20 32 20.8954 32 22L32 34C32 35.1046 32.8954 36 34 36C35.1046 36 36 35.1046 36 34L36 22ZM20 26C20 24.8954 19.1046 24 18 24C16.8954 24 16 24.8954 16 26L16 34C16 35.1046 16.8954 36 18 36C19.1046 36 20 35.1046 20 34L20 26Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentBottomRight(mode = 'outline') {
            return Edit_alignmentBottomRightIcon[mode] || Edit_alignmentBottomRightIcon['outline'];
        }
        
        export const Edit_alignmentBottomRightModes = Object.keys(Edit_alignmentBottomRightIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentBottomRight = Edit_alignmentBottomRightIcon;