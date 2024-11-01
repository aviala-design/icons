const Edit_alignmentHorizontalCenterIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM30 18C31.1046 18 32 17.1046 32 16C32 14.8954 31.1046 14 30 14L18 14C16.8954 14 16 14.8954 16 16C16 17.1046 16.8954 18 18 18L30 18ZM32 26C33.1046 26 34 25.1046 34 24C34 22.8954 33.1046 22 32 22L16 22C14.8954 22 14 22.8954 14 24C14 25.1046 14.8954 26 16 26L32 26ZM28 34C29.1046 34 30 33.1046 30 32C30 30.8954 29.1046 30 28 30L20 30C18.8954 30 18 30.8954 18 32C18 33.1046 18.8954 34 20 34L28 34Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentHorizontalCenter(mode = 'outline') {
            return Edit_alignmentHorizontalCenterIcon[mode] || Edit_alignmentHorizontalCenterIcon['outline'];
        }
        
        export const Edit_alignmentHorizontalCenterModes = Object.keys(Edit_alignmentHorizontalCenterIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentHorizontalCenter = Edit_alignmentHorizontalCenterIcon;