const Edit_polylineIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M20 38L4 38C2.89543 38 2 38.8954 2 40C2 41.1046 2.89543 42 4 42L20 42C23.3137 42 26 39.3137 26 36L26 12C26 10.8954 26.8954 10 28 10L44 10C45.1046 10 46 9.10457 46 8C46 6.89543 45.1046 6 44 6L28 6C24.6863 6 22 8.68629 22 12L22 36C22 37.1046 21.1046 38 20 38Z",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_polyline(mode = 'outline') {
            return Edit_polylineIcon[mode] || Edit_polylineIcon['outline'];
        }
        
        export const Edit_polylineModes = Object.keys(Edit_polylineIcon);
        
        // 导出图标数据本身
        export const Edit_polyline = Edit_polylineIcon;