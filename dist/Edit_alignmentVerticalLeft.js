const Edit_alignmentVerticalLeftIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM24 16C24 14.8954 23.1046 14 22 14C20.8954 14 20 14.8954 20 16L20 32C20 33.1046 20.8954 34 22 34C23.1046 34 24 33.1046 24 32L24 16ZM32 18C32 16.8954 31.1046 16 30 16C28.8954 16 28 16.8954 28 18L28 30C28 31.1046 28.8954 32 30 32C31.1046 32 32 31.1046 32 30L32 18ZM16 20C16 18.8954 15.1046 18 14 18C12.8954 18 12 18.8954 12 20L12 28C12 29.1046 12.8954 30 14 30C15.1046 30 16 29.1046 16 28L16 20Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentVerticalLeft(mode = 'outline') {
            return Edit_alignmentVerticalLeftIcon[mode] || Edit_alignmentVerticalLeftIcon['outline'];
        }
        
        export const Edit_alignmentVerticalLeftModes = Object.keys(Edit_alignmentVerticalLeftIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentVerticalLeft = Edit_alignmentVerticalLeftIcon;