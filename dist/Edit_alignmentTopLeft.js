const Edit_alignmentTopLeftIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14L12 22C12 23.1046 12.8954 24 14 24C15.1046 24 16 23.1046 16 22L16 14ZM24 14C24 12.8954 23.1046 12 22 12C20.8954 12 20 12.8954 20 14L20 30C20 31.1046 20.8954 32 22 32C23.1046 32 24 31.1046 24 30L24 14ZM32 14C32 12.8954 31.1046 12 30 12C28.8954 12 28 12.8954 28 14L28 26C28 27.1046 28.8954 28 30 28C31.1046 28 32 27.1046 32 26L32 14Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentTopLeft(mode = 'outline') {
            return Edit_alignmentTopLeftIcon[mode] || Edit_alignmentTopLeftIcon['outline'];
        }
        
        export const Edit_alignmentTopLeftModes = Object.keys(Edit_alignmentTopLeftIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentTopLeft = Edit_alignmentTopLeftIcon;