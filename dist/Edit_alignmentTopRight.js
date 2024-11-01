const Edit_alignmentTopRightIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM20 14C20 12.8954 19.1046 12 18 12C16.8954 12 16 12.8954 16 14L16 22C16 23.1046 16.8954 24 18 24C19.1046 24 20 23.1046 20 22L20 14ZM28 14C28 12.8954 27.1046 12 26 12C24.8954 12 24 12.8954 24 14L24 30C24 31.1046 24.8954 32 26 32C27.1046 32 28 31.1046 28 30L28 14ZM36 14C36 12.8954 35.1046 12 34 12C32.8954 12 32 12.8954 32 14L32 26C32 27.1046 32.8954 28 34 28C35.1046 28 36 27.1046 36 26L36 14Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentTopRight(mode = 'outline') {
            return Edit_alignmentTopRightIcon[mode] || Edit_alignmentTopRightIcon['outline'];
        }
        
        export const Edit_alignmentTopRightModes = Object.keys(Edit_alignmentTopRightIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentTopRight = Edit_alignmentTopRightIcon;