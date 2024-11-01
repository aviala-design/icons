const Edit_alignmentBottomCenterIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM26 18C26 16.8954 25.1046 16 24 16C22.8954 16 22 16.8954 22 18L22 34C22 35.1046 22.8954 36 24 36C25.1046 36 26 35.1046 26 34L26 18ZM34 22C34 20.8954 33.1046 20 32 20C30.8954 20 30 20.8954 30 22L30 34C30 35.1046 30.8954 36 32 36C33.1046 36 34 35.1046 34 34L34 22ZM18 26C18 24.8954 17.1046 24 16 24C14.8954 24 14 24.8954 14 26L14 34C14 35.1046 14.8954 36 16 36C17.1046 36 18 35.1046 18 34L18 26Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentBottomCenter(mode = 'outline') {
            return Edit_alignmentBottomCenterIcon[mode] || Edit_alignmentBottomCenterIcon['outline'];
        }
        
        export const Edit_alignmentBottomCenterModes = Object.keys(Edit_alignmentBottomCenterIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentBottomCenter = Edit_alignmentBottomCenterIcon;