const Equipment_mouseIcon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M26 3L28 3C33.5228 3 38 7.47715 38 13L38 32C38 39.732 31.732 46 24 46C16.268 46 10 39.732 10 32L10 13C10 7.47715 14.4771 3 20 3L22 3L22 16C22 17.1046 22.8954 18 24 18C25.1046 18 26 17.1046 26 16L26 3Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M28 3L20 3C14.4771 3 10 7.47715 10 13L10 32C10 39.732 16.268 46 24 46C31.732 46 38 39.732 38 32L38 13C38 7.47715 33.5228 3 28 3ZM22 7L22 16C22 17.1046 22.8954 18 24 18C25.1046 18 26 17.1046 26 16L26 7L28 7C31.3137 7 34 9.68629 34 13L34 32C34 37.5228 29.5228 42 24 42C18.4771 42 14 37.5228 14 32L14 13C14 9.68629 16.6863 7 20 7L22 7Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEquipment_mouse(mode = 'outline') {
            return Equipment_mouseIcon[mode] || Equipment_mouseIcon['outline'];
        }
        
        export const Equipment_mouseModes = Object.keys(Equipment_mouseIcon);
        
        // 导出图标数据本身
        export const Equipment_mouse = Equipment_mouseIcon;