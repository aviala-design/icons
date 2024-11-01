const Edit_alignmentHorizontalBottomIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM30 20C31.1046 20 32 19.1046 32 18C32 16.8954 31.1046 16 30 16L18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20L30 20ZM32 28C33.1046 28 34 27.1046 34 26C34 24.8954 33.1046 24 32 24L16 24C14.8954 24 14 24.8954 14 26C14 27.1046 14.8954 28 16 28L32 28ZM28 36C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32L20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36L28 36Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentHorizontalBottom(mode = 'outline') {
            return Edit_alignmentHorizontalBottomIcon[mode] || Edit_alignmentHorizontalBottomIcon['outline'];
        }
        
        export const Edit_alignmentHorizontalBottomModes = Object.keys(Edit_alignmentHorizontalBottomIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentHorizontalBottom = Edit_alignmentHorizontalBottomIcon;