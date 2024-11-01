const Edit_paragraphsIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M16 6L9 6C5.68629 6 3 8.68629 3 12L3 19C3 22.3137 5.68629 25 9 25L16 25C19.3137 25 22 22.3137 22 19L22 12C22 8.68629 19.3137 6 16 6ZM26 12.001C24.8954 12.001 24 11.1056 24 10.001C24 8.89643 24.8954 8.001 26 8.001L44 8.001C45.1046 8.001 46 8.89643 46 10.001C46 11.1056 45.1046 12.001 44 12.001L26 12.001ZM7 12C7 10.8954 7.89543 10 9 10L16 10C17.1046 10 18 10.8954 18 12L18 19C18 20.1046 17.1046 21 16 21L9 21C7.89543 21 7 20.1046 7 19L7 12ZM26 22C24.8954 22 24 21.1046 24 20C24 18.8954 24.8954 18 26 18L44 18C45.1046 18 46 18.8954 46 20C46 21.1046 45.1046 22 44 22L26 22ZM5.0098 32.001C3.90523 32.001 3.0098 31.1056 3.0098 30.001C3.0098 28.8964 3.90523 28.001 5.0098 28.001L44.0098 28.001C45.1144 28.001 46.0098 28.8964 46.0098 30.001C46.0098 31.1056 45.1144 32.001 44.0098 32.001L5.0098 32.001ZM5.0098 42.001C3.90523 42.001 3.0098 41.1056 3.0098 40.001C3.0098 38.8964 3.90523 38.001 5.0098 38.001L44.0098 38.001C45.1144 38.001 46.0098 38.8964 46.0098 40.001C46.0098 41.1056 45.1144 42.001 44.0098 42.001L5.0098 42.001Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_paragraphs(mode = 'outline') {
            return Edit_paragraphsIcon[mode] || Edit_paragraphsIcon['outline'];
        }
        
        export const Edit_paragraphsModes = Object.keys(Edit_paragraphsIcon);
        
        // 导出图标数据本身
        export const Edit_paragraphs = Edit_paragraphsIcon;