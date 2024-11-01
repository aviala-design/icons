const Equipment_batteryEmptyIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M10 37L32 37C36.42 37 40 33.42 40 29L40 19C40 14.58 36.42 11 32 11L10 11C5.58 11 2 14.58 2 19L2 29C2 33.42 5.58 37 10 37ZM36 29L36 19C36 16.79 34.21 15 32 15L10 15C7.79 15 6 16.79 6 19L6 29C6 31.21 7.79 33 10 33L32 33C34.21 33 36 31.21 36 29ZM46 29C46 30.1 45.1 31 44 31C42.9 31 42 30.1 42 29L42 19C42 17.9 42.9 17 44 17C45.1 17 46 17.9 46 19L46 29Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEquipment_batteryEmpty(mode = 'outline') {
            return Equipment_batteryEmptyIcon[mode] || Equipment_batteryEmptyIcon['outline'];
        }
        
        export const Equipment_batteryEmptyModes = Object.keys(Equipment_batteryEmptyIcon);
        
        // 导出图标数据本身
        export const Equipment_batteryEmpty = Equipment_batteryEmptyIcon;