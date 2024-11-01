const Symbol_cloud_fill_Icon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M16.56 12.1C14.58 12.1 12.68 12.49 10.87 13.28C9.13 14.05 7.58 15.12 6.24 16.5C4.9 17.88 3.87 19.46 3.14 21.25C2.38 23.1 2 25.03 2 27.05C2 29.07 2.38 31 3.14 32.85C3.87 34.64 4.9 36.22 6.24 37.6C7.58 38.98 9.13 40.05 10.87 40.82C12.68 41.61 14.58 42 16.56 42L34 42C35.63 42 37.19 41.68 38.68 41.04C40.12 40.42 41.39 39.54 42.5 38.42C43.6 37.29 44.46 36 45.06 34.54C45.69 33.04 46 31.46 46 29.81C46 28.51 45.8 27.24 45.41 26.02C45.02 24.83 44.46 23.72 43.73 22.71C43 21.7 42.14 20.82 41.15 20.08C40.61 19.67 40.05 19.32 39.46 19.02C39.52 18.52 39.55 18.02 39.55 17.52C39.55 15.97 39.26 14.48 38.68 13.06C38.12 11.68 37.33 10.46 36.31 9.4C35.28 8.33 34.09 7.5 32.76 6.92C31.36 6.31 29.9 6 28.38 6C27.16 6 25.98 6.2 24.83 6.59C23.72 6.98 22.7 7.52 21.76 8.24C20.83 8.94 20.03 9.78 19.35 10.74C19.01 11.21 18.71 11.71 18.45 12.23C17.83 12.14 17.2 12.1 16.56 12.1Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getSymbol_cloud_fill_(mode = 'outline') {
            return Symbol_cloud_fill_Icon[mode] || Symbol_cloud_fill_Icon['outline'];
        }
        
        export const Symbol_cloud_fill_Modes = Object.keys(Symbol_cloud_fill_Icon);
        
        // 导出图标数据本身
        export const Symbol_cloud_fill_ = Symbol_cloud_fill_Icon;