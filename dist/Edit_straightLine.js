const Edit_straightLineIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M43.213 5.46902L43.2233 5.46048C43.5697 5.17289 44.0146 5 44.5 5C45.6046 5 46.5 5.89543 46.5 7C46.5 7.61921 46.2186 8.1727 45.7767 8.53956L45.7647 8.54945L4.78697 42.531L4.7767 42.5396C4.43033 42.8271 3.98536 43 3.5 43C2.39543 43 1.5 42.1046 1.5 41C1.5 40.3808 1.7814 39.8273 2.22333 39.4605L2.23531 39.4505L43.213 5.46902Z",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_straightLine(mode = 'outline') {
            return Edit_straightLineIcon[mode] || Edit_straightLineIcon['outline'];
        }
        
        export const Edit_straightLineModes = Object.keys(Edit_straightLineIcon);
        
        // 导出图标数据本身
        export const Edit_straightLine = Edit_straightLineIcon;