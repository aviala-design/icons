const Equipment_batteryFullIcon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M32 37L10 37C5.58 37 2 33.42 2 29L2 19C2 14.58 5.58 11 10 11L32 11C36.42 11 40 14.58 40 19L40 29C40 33.42 36.42 37 32 37ZM36 19L36 29C36 31.21 34.21 33 32 33L10 33C7.79 33 6 31.21 6 29L6 19C6 16.79 7.79 15 10 15L32 15C34.21 15 36 16.79 36 19ZM31 31L11 31C9.34 31 8 29.66 8 28L8 20C8 18.34 9.34 17 11 17L31 17C32.66 17 34 18.34 34 20L34 28C34 29.66 32.66 31 31 31ZM44 31C45.1 31 46 30.1 46 29L46 19C46 17.9 45.1 17 44 17C42.9 17 42 17.9 42 19L42 29C42 30.1 42.9 31 44 31Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEquipment_batteryFull(mode = 'outline') {
            return Equipment_batteryFullIcon[mode] || Equipment_batteryFullIcon['outline'];
        }
        
        export const Equipment_batteryFullModes = Object.keys(Equipment_batteryFullIcon);
        
        // 导出图标数据本身
        export const Equipment_batteryFull = Equipment_batteryFullIcon;