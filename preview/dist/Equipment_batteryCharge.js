const Equipment_batteryChargeIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M17 15C18.1 15 19 14.1 19 13C19 11.9 18.1 11 17 11L10 11C5.58 11 2 14.58 2 19L2 29C2 33.42 5.58 37 10 37L11 37C12.1 37 13 36.1 13 35C13 33.9 12.1 33 11 33L10 33C7.79 33 6 31.21 6 29L6 19C6 16.79 7.79 15 10 15L17 15ZM24.9961 11C26.1061 11 26.9961 11.9 26.9961 13C26.9961 13.49 26.8261 13.93 26.5361 14.28L20.2161 22L25.9961 22C27.6861 22 28.6161 23.96 27.5461 25.27L18.5561 36.25C18.1961 36.71 17.6261 37 16.9961 37C15.8961 37 14.9961 36.1 14.9961 35C14.9961 34.51 15.1761 34.07 15.4661 33.72L21.7761 26L15.9961 26C14.3161 26 13.3861 24.04 14.4561 22.73L23.4461 11.75C23.8061 11.29 24.3661 11 24.9961 11ZM31 15C29.9 15 29 14.1 29 13C29 11.9 29.9 11 31 11L32 11C36.42 11 40 14.58 40 19L40 29C40 33.42 36.42 37 32 37L25 37C23.9 37 23 36.1 23 35C23 33.9 23.9 33 25 33L32 33C34.21 33 36 31.21 36 29L36 19C36 16.79 34.21 15 32 15L31 15ZM44 31C45.1 31 46 30.1 46 29L46 19C46 17.9 45.1 17 44 17C42.9 17 42 17.9 42 19L42 29C42 30.1 42.9 31 44 31Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEquipment_batteryCharge(mode = 'outline') {
            return Equipment_batteryChargeIcon[mode] || Equipment_batteryChargeIcon['outline'];
        }
        
        export const Equipment_batteryChargeModes = Object.keys(Equipment_batteryChargeIcon);
        
        // 导出图标数据本身
        export const Equipment_batteryCharge = Equipment_batteryChargeIcon;