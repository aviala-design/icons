const Edit_curveIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M46.5 7C46.5 7.15348 46.4827 7.30292 46.45 7.44648C45.8065 10.5378 44.4094 13.6068 42.2589 16.6534C37.8605 22.8845 31.7742 26 24 26C17.6075 26 12.6105 28.5511 9.00894 33.6534C7.17782 36.2475 5.99689 38.8191 5.46615 41.3684C5.29326 42.297 4.47873 43 3.5 43C2.39543 43 1.5 42.1046 1.5 41C1.5 40.8465 1.5173 40.697 1.55004 40.5534C2.19357 37.4621 3.59057 34.3931 5.74106 31.3466C10.1395 25.1155 16.2258 22 24 22C30.3925 22 35.3895 19.4489 38.9911 14.3466C40.8222 11.7525 42.0032 9.18084 42.5339 6.63155C42.7068 5.70298 43.5213 5 44.5 5C45.6046 5 46.5 5.89543 46.5 7Z",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_curve(mode = 'outline') {
            return Edit_curveIcon[mode] || Edit_curveIcon['outline'];
        }
        
        export const Edit_curveModes = Object.keys(Edit_curveIcon);
        
        // 导出图标数据本身
        export const Edit_curve = Edit_curveIcon;