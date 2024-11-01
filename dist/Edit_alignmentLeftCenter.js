const Edit_alignmentLeftCenterIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM26 18C27.1046 18 28 17.1046 28 16C28 14.8954 27.1046 14 26 14L14 14C12.8954 14 12 14.8954 12 16C12 17.1046 12.8954 18 14 18L26 18ZM30 26C31.1046 26 32 25.1046 32 24C32 22.8954 31.1046 22 30 22L14 22C12.8954 22 12 22.8954 12 24C12 25.1046 12.8954 26 14 26L30 26ZM22 34C23.1046 34 24 33.1046 24 32C24 30.8954 23.1046 30 22 30L14 30C12.8954 30 12 30.8954 12 32C12 33.1046 12.8954 34 14 34L22 34Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentLeftCenter(mode = 'outline') {
            return Edit_alignmentLeftCenterIcon[mode] || Edit_alignmentLeftCenterIcon['outline'];
        }
        
        export const Edit_alignmentLeftCenterModes = Object.keys(Edit_alignmentLeftCenterIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentLeftCenter = Edit_alignmentLeftCenterIcon;