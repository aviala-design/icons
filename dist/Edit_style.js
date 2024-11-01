const Edit_styleIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M13 10C11.34 10 10 11.34 10 13C10 14.66 11.34 16 13 16C14.66 16 16 14.66 16 13C16 11.34 14.66 10 13 10ZM35 10C33.34 10 32 11.34 32 13C32 14.66 33.34 16 35 16C36.66 16 38 14.66 38 13C38 11.34 36.66 10 35 10ZM13 32C11.34 32 10 33.34 10 35C10 36.66 11.34 38 13 38C14.66 38 16 36.66 16 35C16 33.34 14.66 32 13 32ZM35 32C33.34 32 32 33.34 32 35C32 36.66 33.34 38 35 38C36.66 38 38 36.66 38 35C38 33.34 36.66 32 35 32Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_style(mode = 'outline') {
            return Edit_styleIcon[mode] || Edit_styleIcon['outline'];
        }
        
        export const Edit_styleModes = Object.keys(Edit_styleIcon);
        
        // 导出图标数据本身
        export const Edit_style = Edit_styleIcon;