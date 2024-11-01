const Edit_alignmentRightTopIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM34 16C35.1046 16 36 15.1046 36 14C36 12.8954 35.1046 12 34 12L22 12C20.8954 12 20 12.8954 20 14C20 15.1046 20.8954 16 22 16L34 16ZM34 24C35.1046 24 36 23.1046 36 22C36 20.8954 35.1046 20 34 20L18 20C16.8954 20 16 20.8954 16 22C16 23.1046 16.8954 24 18 24L34 24ZM34 32C35.1046 32 36 31.1046 36 30C36 28.8954 35.1046 28 34 28L26 28C24.8954 28 24 28.8954 24 30C24 31.1046 24.8954 32 26 32L34 32Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentRightTop(mode = 'outline') {
            return Edit_alignmentRightTopIcon[mode] || Edit_alignmentRightTopIcon['outline'];
        }
        
        export const Edit_alignmentRightTopModes = Object.keys(Edit_alignmentRightTopIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentRightTop = Edit_alignmentRightTopIcon;