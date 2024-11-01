const Edit_alignmentTopCenterIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM18 14C18 12.8954 17.1046 12 16 12C14.8954 12 14 12.8954 14 14L14 22C14 23.1046 14.8954 24 16 24C17.1046 24 18 23.1046 18 22L18 14ZM26 14C26 12.8954 25.1046 12 24 12C22.8954 12 22 12.8954 22 14L22 30C22 31.1046 22.8954 32 24 32C25.1046 32 26 31.1046 26 30L26 14ZM34 14C34 12.8954 33.1046 12 32 12C30.8954 12 30 12.8954 30 14L30 26C30 27.1046 30.8954 28 32 28C33.1046 28 34 27.1046 34 26L34 14Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentTopCenter(mode = 'outline') {
            return Edit_alignmentTopCenterIcon[mode] || Edit_alignmentTopCenterIcon['outline'];
        }
        
        export const Edit_alignmentTopCenterModes = Object.keys(Edit_alignmentTopCenterIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentTopCenter = Edit_alignmentTopCenterIcon;