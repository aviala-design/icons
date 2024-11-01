const Edit_booleanGroupsIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M18 34L18 36C18 36.54 18.1 37.06 18.31 37.55C18.52 38.03 18.8 38.46 19.17 38.83C19.54 39.2 19.97 39.48 20.45 39.69C20.94 39.9 21.46 40 22 40L36 40C36.54 40 37.06 39.9 37.55 39.69C38.03 39.48 38.46 39.2 38.83 38.83C39.2 38.46 39.48 38.03 39.69 37.55C39.9 37.06 40 36.54 40 36L40 22C40 21.46 39.9 20.94 39.69 20.45C39.48 19.97 39.2 19.54 38.83 19.17C38.46 18.8 38.03 18.52 37.55 18.31C37.06 18.1 36.54 18 36 18L34 18L34 26C34 27.08 33.79 28.12 33.37 29.11C32.96 30.07 32.39 30.92 31.66 31.66C30.92 32.39 30.07 32.96 29.11 33.37C28.12 33.79 27.08 34 26 34L18 34ZM30 14L22 14C20.92 14 19.88 14.21 18.89 14.63C17.93 15.04 17.08 15.61 16.34 16.34C15.61 17.08 15.04 17.93 14.63 18.89C14.21 19.88 14 20.92 14 22L14 30L12 30C11.46 30 10.94 29.9 10.45 29.69C9.97 29.48 9.54 29.2 9.17 28.83C8.8 28.46 8.52 28.03 8.31 27.55C8.1 27.06 8 26.54 8 26L8 12C8 11.46 8.1 10.94 8.31 10.45C8.52 9.97 8.8 9.54 9.17 9.17C9.54 8.8 9.97 8.52 10.45 8.31C10.94 8.1 11.46 8 12 8L26 8C26.54 8 27.06 8.1 27.55 8.31C28.03 8.52 28.46 8.8 28.83 9.17C29.2 9.54 29.48 9.97 29.69 10.45C29.9 10.94 30 11.46 30 12L30 14ZM34 14L34 12C34 10.92 33.79 9.88 33.37 8.89C32.96 7.93 32.39 7.08 31.66 6.34C30.92 5.61 30.07 5.04 29.11 4.63C28.12 4.21 27.08 4 26 4L12 4C10.92 4 9.88 4.21 8.89 4.63C7.93 5.04 7.08 5.61 6.34 6.34C5.61 7.08 5.04 7.93 4.63 8.89C4.21 9.88 4 10.92 4 12L4 26C4 27.08 4.21 28.12 4.63 29.11C5.04 30.07 5.61 30.92 6.34 31.66C7.08 32.39 7.93 32.96 8.89 33.37C9.88 33.79 10.92 34 12 34L14 34L14 36C14 37.08 14.21 38.12 14.63 39.11C15.04 40.07 15.61 40.92 16.34 41.66C17.08 42.39 17.93 42.96 18.89 43.37C19.88 43.79 20.92 44 22 44L36 44C37.08 44 38.12 43.79 39.11 43.37C40.07 42.96 40.92 42.39 41.66 41.66C42.39 40.92 42.96 40.07 43.37 39.11C43.79 38.12 44 37.08 44 36L44 22C44 20.92 43.79 19.88 43.37 18.89C42.96 17.93 42.39 17.08 41.66 16.34C40.92 15.61 40.07 15.04 39.11 14.63C38.12 14.21 37.08 14 36 14L34 14ZM30 18L30 26C30 26.54 29.9 27.06 29.69 27.55C29.48 28.03 29.2 28.46 28.83 28.83C28.46 29.2 28.03 29.48 27.55 29.69C27.06 29.9 26.54 30 26 30L18 30L18 22C18 21.46 18.1 20.94 18.31 20.45C18.52 19.97 18.8 19.54 19.17 19.17C19.54 18.8 19.97 18.52 20.45 18.31C20.94 18.1 21.46 18 22 18L30 18Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_booleanGroups(mode = 'outline') {
            return Edit_booleanGroupsIcon[mode] || Edit_booleanGroupsIcon['outline'];
        }
        
        export const Edit_booleanGroupsModes = Object.keys(Edit_booleanGroupsIcon);
        
        // 导出图标数据本身
        export const Edit_booleanGroups = Edit_booleanGroupsIcon;