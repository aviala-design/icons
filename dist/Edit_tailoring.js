const Edit_tailoringIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M8 32C8 36.42 11.58 40 16 40L36 40L36 42C36 43.1 36.9 44 38 44C39.1 44 40 43.1 40 42L40 40L42 40C43.1 40 44 39.1 44 38C44 36.9 43.1 36 42 36L16 36C15.6421 36 15.2951 35.953 14.965 35.865L35.865 14.9651C35.953 15.2951 36 15.6421 36 16L36 32L40 32L40 16C40 11.58 36.42 8 32 8L16 8L16 12L32 12C32.3579 12 32.7049 12.047 33.035 12.135L12.135 33.035C12.047 32.7049 12 32.3579 12 32L12 6C12 4.9 11.1 4 10 4C8.9 4 8 4.9 8 6L8 8L6 8C4.9 8 4 8.9 4 10C4 11.1 4.9 12 6 12L8 12L8 32Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_tailoring(mode = 'outline') {
            return Edit_tailoringIcon[mode] || Edit_tailoringIcon['outline'];
        }
        
        export const Edit_tailoringModes = Object.keys(Edit_tailoringIcon);
        
        // 导出图标数据本身
        export const Edit_tailoring = Edit_tailoringIcon;