const Edit_alignmentHorizontalTopIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM30 16C31.1046 16 32 15.1046 32 14C32 12.8954 31.1046 12 30 12L18 12C16.8954 12 16 12.8954 16 14C16 15.1046 16.8954 16 18 16L30 16ZM32 24C33.1046 24 34 23.1046 34 22C34 20.8954 33.1046 20 32 20L16 20C14.8954 20 14 20.8954 14 22C14 23.1046 14.8954 24 16 24L32 24ZM28 32C29.1046 32 30 31.1046 30 30C30 28.8954 29.1046 28 28 28L20 28C18.8954 28 18 28.8954 18 30C18 31.1046 18.8954 32 20 32L28 32Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentHorizontalTop(mode = 'outline') {
            return Edit_alignmentHorizontalTopIcon[mode] || Edit_alignmentHorizontalTopIcon['outline'];
        }
        
        export const Edit_alignmentHorizontalTopModes = Object.keys(Edit_alignmentHorizontalTopIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentHorizontalTop = Edit_alignmentHorizontalTopIcon;