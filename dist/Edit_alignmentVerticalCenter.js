const Edit_alignmentVerticalCenterIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16L22 32C22 33.1046 22.8954 34 24 34C25.1046 34 26 33.1046 26 32L26 16ZM34 18C34 16.8954 33.1046 16 32 16C30.8954 16 30 16.8954 30 18L30 30C30 31.1046 30.8954 32 32 32C33.1046 32 34 31.1046 34 30L34 18ZM18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20L14 28C14 29.1046 14.8954 30 16 30C17.1046 30 18 29.1046 18 28L18 20Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentVerticalCenter(mode = 'outline') {
            return Edit_alignmentVerticalCenterIcon[mode] || Edit_alignmentVerticalCenterIcon['outline'];
        }
        
        export const Edit_alignmentVerticalCenterModes = Object.keys(Edit_alignmentVerticalCenterIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentVerticalCenter = Edit_alignmentVerticalCenterIcon;