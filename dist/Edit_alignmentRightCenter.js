const Edit_alignmentRightCenterIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM34 18C35.1046 18 36 17.1046 36 16C36 14.8954 35.1046 14 34 14L22 14C20.8954 14 20 14.8954 20 16C20 17.1046 20.8954 18 22 18L34 18ZM34 26C35.1046 26 36 25.1046 36 24C36 22.8954 35.1046 22 34 22L18 22C16.8954 22 16 22.8954 16 24C16 25.1046 16.8954 26 18 26L34 26ZM34 34C35.1046 34 36 33.1046 36 32C36 30.8954 35.1046 30 34 30L26 30C24.8954 30 24 30.8954 24 32C24 33.1046 24.8954 34 26 34L34 34Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentRightCenter(mode = 'outline') {
            return Edit_alignmentRightCenterIcon[mode] || Edit_alignmentRightCenterIcon['outline'];
        }
        
        export const Edit_alignmentRightCenterModes = Object.keys(Edit_alignmentRightCenterIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentRightCenter = Edit_alignmentRightCenterIcon;