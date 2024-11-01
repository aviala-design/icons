const Edit_alignmentBottomLeftIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM24 18C24 16.8954 23.1046 16 22 16C20.8954 16 20 16.8954 20 18L20 34C20 35.1046 20.8954 36 22 36C23.1046 36 24 35.1046 24 34L24 18ZM32 22C32 20.8954 31.1046 20 30 20C28.8954 20 28 20.8954 28 22L28 34C28 35.1046 28.8954 36 30 36C31.1046 36 32 35.1046 32 34L32 22ZM16 26C16 24.8954 15.1046 24 14 24C12.8954 24 12 24.8954 12 26L12 34C12 35.1046 12.8954 36 14 36C15.1046 36 16 35.1046 16 34L16 26Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentBottomLeft(mode = 'outline') {
            return Edit_alignmentBottomLeftIcon[mode] || Edit_alignmentBottomLeftIcon['outline'];
        }
        
        export const Edit_alignmentBottomLeftModes = Object.keys(Edit_alignmentBottomLeftIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentBottomLeft = Edit_alignmentBottomLeftIcon;