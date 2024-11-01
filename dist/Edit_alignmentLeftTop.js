const Edit_alignmentLeftTopIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 3L11 3C6.58172 3 3 6.58172 3 11L3 37C3 41.4183 6.58172 45 11 45L37 45C41.4183 45 45 41.4183 45 37L45 11C45 6.58172 41.4183 3 37 3ZM7 11C7 8.79086 8.79086 7 11 7L37 7C39.2091 7 41 8.79086 41 11L41 37C41 39.2091 39.2091 41 37 41L11 41C8.79086 41 7 39.2091 7 37L7 11ZM26 16C27.1046 16 28 15.1046 28 14C28 12.8954 27.1046 12 26 12L14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16L26 16ZM30 24C31.1046 24 32 23.1046 32 22C32 20.8954 31.1046 20 30 20L14 20C12.8954 20 12 20.8954 12 22C12 23.1046 12.8954 24 14 24L30 24ZM22 32C23.1046 32 24 31.1046 24 30C24 28.8954 23.1046 28 22 28L14 28C12.8954 28 12 28.8954 12 30C12 31.1046 12.8954 32 14 32L22 32Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_alignmentLeftTop(mode = 'outline') {
            return Edit_alignmentLeftTopIcon[mode] || Edit_alignmentLeftTopIcon['outline'];
        }
        
        export const Edit_alignmentLeftTopModes = Object.keys(Edit_alignmentLeftTopIcon);
        
        // 导出图标数据本身
        export const Edit_alignmentLeftTop = Edit_alignmentLeftTopIcon;