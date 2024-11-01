const Equipment_watchIcon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M21 1L27 1C30.3137 1 33 3.68629 33 7L33 8.25203C36.4505 9.14012 39 12.2723 39 16L39 32C39 35.7277 36.4505 38.8599 33 39.748L33 41C33 44.3137 30.3137 47 27 47L21 47C17.6863 47 15 44.3137 15 41L15 39.748C11.5495 38.8599 9 35.7277 9 32L9 16C9 12.2723 11.5495 9.14012 15 8.25203L15 7C15 3.68629 17.6863 1 21 1ZM29 8L19 8L19 7C19 5.89543 19.8954 5 21 5L27 5C28.1046 5 29 5.89543 29 7L29 8ZM19 40L19 41C19 42.1046 19.8954 43 21 43L27 43C28.1046 43 29 42.1046 29 41L29 40L19 40Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M27 1L21 1C17.6863 1 15 3.68629 15 7L15 8.25203C11.5495 9.14012 9 12.2723 9 16L9 32C9 35.7277 11.5495 38.8599 15 39.748L15 41C15 44.3137 17.6863 47 21 47L27 47C30.3137 47 33 44.3137 33 41L33 39.748C36.4505 38.8599 39 35.7277 39 32L39 16C39 12.2723 36.4505 9.14012 33 8.25203L33 7C33 3.68629 30.3137 1 27 1ZM29 8L29 7C29 5.89543 28.1046 5 27 5L21 5C19.8954 5 19 5.89543 19 7L19 8L29 8ZM29 40L19 40L19 41C19 42.1046 19.8954 43 21 43L27 43C28.1046 43 29 42.1046 29 41L29 40ZM13 16C13 13.7909 14.7909 12 17 12L31 12C33.2091 12 35 13.7909 35 16L35 32C35 34.2091 33.2091 36 31 36L17 36C14.7909 36 13 34.2091 13 32L13 16Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEquipment_watch(mode = 'outline') {
            return Equipment_watchIcon[mode] || Equipment_watchIcon['outline'];
        }
        
        export const Equipment_watchModes = Object.keys(Equipment_watchIcon);
        
        // 导出图标数据本身
        export const Equipment_watch = Equipment_watchIcon;