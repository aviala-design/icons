const Equipment_headphoneIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M3 24L3 39L7 39L7 24C7 14.6112 14.6112 7 24 7C33.3888 7 41 14.6112 41 24L41 39L45 39L45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.71",
        "fill": "currentColor"
      },
      {
        "d": "M3 26L3 39C3 42.3137 5.68629 45 9 45L11 45C15.4183 45 19 41.4183 19 37L19 32C19 27.5817 15.4183 24 11 24L3 24L3 26ZM7 28L7 39C7 40.1046 7.89543 41 9 41L11 41C13.2091 41 15 39.2091 15 37L15 32C15 29.7909 13.2091 28 11 28L7 28Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M29 32L29 37C29 41.4183 32.5817 45 37 45L39 45C42.3137 45 45 42.3137 45 39L45 24L37 24C32.5817 24 29 27.5817 29 32ZM41 28L37 28C34.7909 28 33 29.7909 33 32L33 37C33 39.2091 34.7909 41 37 41L39 41C40.1046 41 41 40.1046 41 39L41 28Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M24 7C33.39 7 41 14.61 41 24L37 24C32.58 24 29 27.58 29 32L29 37C29 41.42 32.58 45 37 45L39 45C42.31 45 45 42.31 45 39L45 24C45 12.4 35.6 3 24 3C12.4 3 3 12.4 3 24L3 39C3 42.31 5.69 45 9 45L11 45C15.42 45 19 41.42 19 37L19 32C19 27.58 15.42 24 11 24L7 24C7 14.61 14.61 7 24 7Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M45 24L45 39C45 42.31 42.31 45 39 45L37 45C32.58 45 29 41.42 29 37L29 32C29 27.58 32.58 24 37 24L41 24C41 14.61 33.39 7 24 7C14.61 7 7 14.61 7 24L11 24C15.42 24 19 27.58 19 32L19 37C19 41.42 15.42 45 11 45L9 45C5.69 45 3 42.31 3 39L3 24C3 12.4 12.4 3 24 3C35.6 3 45 12.4 45 24ZM41 28L37 28C34.79 28 33 29.79 33 32L33 37C33 39.21 34.79 41 37 41L39 41C40.1 41 41 40.1 41 39L41 28ZM7 39L7 28L11 28C13.21 28 15 29.79 15 32L15 37C15 39.21 13.21 41 11 41L9 41C7.9 41 7 40.1 7 39Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEquipment_headphone(mode = 'outline') {
            return Equipment_headphoneIcon[mode] || Equipment_headphoneIcon['outline'];
        }
        
        export const Equipment_headphoneModes = Object.keys(Equipment_headphoneIcon);
        
        // 导出图标数据本身
        export const Equipment_headphone = Equipment_headphoneIcon;