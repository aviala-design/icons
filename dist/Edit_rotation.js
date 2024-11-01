const Edit_rotationIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M7.99 5.8C7.98 5.74 7.97 5.67 7.96 5.61C7.95 5.55 7.93 5.48 7.91 5.42C7.89 5.36 7.87 5.3 7.85 5.23C7.82 5.17 7.79 5.11 7.76 5.06C7.73 5 7.7 4.94 7.66 4.89C7.63 4.83 7.59 4.78 7.55 4.73C7.5 4.68 7.46 4.63 7.41 4.59C7.37 4.54 7.32 4.5 7.27 4.45C7.22 4.41 7.17 4.37 7.11 4.34C7.06 4.3 7 4.27 6.94 4.24C6.89 4.21 6.83 4.18 6.77 4.15C6.7 4.13 6.64 4.11 6.58 4.09C6.52 4.07 6.45 4.05 6.39 4.04C6.33 4.03 6.26 4.02 6.2 4.01C6.13 4 6.07 4 6 4C5.93 4 5.87 4 5.8 4.01C5.74 4.02 5.67 4.03 5.61 4.04C5.55 4.05 5.48 4.07 5.42 4.09C5.36 4.11 5.3 4.13 5.23 4.15C5.17 4.18 5.11 4.21 5.06 4.24C5 4.27 4.94 4.3 4.89 4.34C4.83 4.37 4.78 4.41 4.73 4.45C4.68 4.5 4.63 4.54 4.59 4.59C4.54 4.63 4.5 4.68 4.45 4.73C4.41 4.78 4.37 4.83 4.34 4.89C4.3 4.94 4.27 5 4.24 5.06C4.21 5.11 4.18 5.17 4.15 5.23C4.13 5.3 4.11 5.36 4.09 5.42C4.07 5.48 4.05 5.55 4.04 5.61C4.03 5.67 4.02 5.74 4.01 5.8C4 5.87 4 5.93 4 6L4 36C4 37.08 4.21 38.12 4.63 39.11C5.04 40.07 5.61 40.92 6.34 41.66C7.08 42.39 7.93 42.96 8.89 43.37C9.88 43.79 10.92 44 12 44L42 44C42.07 44 42.13 44 42.2 43.99C42.26 43.98 42.33 43.97 42.39 43.96C42.45 43.95 42.52 43.93 42.58 43.91C42.64 43.89 42.7 43.87 42.77 43.85C42.83 43.82 42.88 43.79 42.94 43.76C43 43.73 43.06 43.7 43.11 43.66C43.17 43.63 43.22 43.59 43.27 43.55C43.32 43.5 43.37 43.46 43.41 43.41C43.46 43.37 43.5 43.32 43.55 43.27C43.59 43.22 43.63 43.17 43.66 43.11C43.7 43.06 43.73 43 43.76 42.94C43.79 42.88 43.82 42.83 43.85 42.77C43.87 42.7 43.89 42.64 43.91 42.58C43.93 42.52 43.95 42.45 43.96 42.39C43.97 42.33 43.98 42.26 43.99 42.2C44 42.13 44 42.07 44 42C44 41.93 44 41.87 43.99 41.8C43.98 41.74 43.97 41.67 43.96 41.61C43.95 41.55 43.93 41.48 43.91 41.42C43.89 41.36 43.87 41.3 43.85 41.23C43.82 41.17 43.79 41.12 43.76 41.06C43.73 41 43.7 40.94 43.66 40.89C43.63 40.83 43.59 40.78 43.55 40.73C43.5 40.68 43.46 40.63 43.41 40.59C43.37 40.54 43.32 40.5 43.27 40.45C43.22 40.41 43.17 40.37 43.11 40.34C43.06 40.3 43 40.27 42.94 40.24C42.88 40.21 42.83 40.18 42.77 40.15C42.7 40.13 42.64 40.11 42.58 40.09C42.52 40.07 42.45 40.05 42.39 40.04C42.33 40.03 42.26 40.02 42.2 40.01C42.13 40 42.07 40 42 40L27.9114 40C27.709 37.7352 27.1604 35.5436 26.27 33.43C25.16 30.8 23.59 28.47 21.56 26.44C19.53 24.41 17.2 22.84 14.57 21.73C12.4564 20.8396 10.2648 20.291 8 20.0886L8 6C8 5.93 8 5.87 7.99 5.8ZM8 24.1072L8 36C8 36.54 8.1 37.06 8.31 37.55C8.52 38.03 8.8 38.46 9.17 38.83C9.54 39.2 9.97 39.48 10.45 39.69C10.94 39.9 11.46 40 12 40L23.8923 40C23.7043 38.2749 23.2702 36.6037 22.59 34.99C21.68 32.84 20.39 30.93 18.73 29.27C17.07 27.61 15.16 26.32 13.01 25.41C11.395 24.7292 9.72751 24.295 8 24.1072Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_rotation(mode = 'outline') {
            return Edit_rotationIcon[mode] || Edit_rotationIcon['outline'];
        }
        
        export const Edit_rotationModes = Object.keys(Edit_rotationIcon);
        
        // 导出图标数据本身
        export const Edit_rotation = Edit_rotationIcon;