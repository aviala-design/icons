const Edit_connectionOnBothSidesIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M28.2231 13L28 13C26.9 13 26 13.9 26 15L26 33C26 36.31 23.31 39 20 39L19.7769 39C18.8673 43.0076 15.2826 46 11 46C6.03 46 2 41.97 2 37C2 32.03 6.03 28 11 28C15.2826 28 18.8673 30.9924 19.7769 35L20 35C21.1 35 22 34.1 22 33L22 15C22 11.69 24.69 9 28 9L28.2231 9C29.1327 4.99235 32.7174 2 37 2C41.97 2 46 6.03 46 11C46 15.97 41.97 20 37 20C32.7174 20 29.1327 17.0076 28.2231 13ZM32 11C32 13.76 34.24 16 37 16C39.76 16 42 13.76 42 11C42 8.24 39.76 6 37 6C34.24 6 32 8.24 32 11ZM11 32C13.76 32 16 34.24 16 37C16 39.76 13.76 42 11 42C8.24 42 6 39.76 6 37C6 34.24 8.24 32 11 32Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_connectionOnBothSides(mode = 'outline') {
            return Edit_connectionOnBothSidesIcon[mode] || Edit_connectionOnBothSidesIcon['outline'];
        }
        
        export const Edit_connectionOnBothSidesModes = Object.keys(Edit_connectionOnBothSidesIcon);
        
        // 导出图标数据本身
        export const Edit_connectionOnBothSides = Edit_connectionOnBothSidesIcon;