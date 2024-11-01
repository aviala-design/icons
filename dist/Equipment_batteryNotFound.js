const Equipment_batteryNotFoundIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M32 37L10 37C5.58 37 2 33.42 2 29L2 19C2 14.58 5.58 11 10 11L32 11C36.42 11 40 14.58 40 19L40 29C40 33.42 36.42 37 32 37ZM36 19L36 29C36 31.21 34.21 33 32 33L10 33C7.79 33 6 31.21 6 29L6 19C6 16.79 7.79 15 10 15L32 15C34.21 15 36 16.79 36 19ZM44 31C45.1 31 46 30.1 46 29L46 19C46 17.9 45.1 17 44 17C42.9 17 42 17.9 42 19L42 29C42 30.1 42.9 31 44 31ZM27.4142 27.5855L23.8286 23.9999L27.4126 20.4159C28.1975 19.631 28.1904 18.3653 27.4126 17.5875C26.6348 16.8097 25.3691 16.8026 24.5842 17.5875L21.0002 21.1715L17.4158 17.5871C16.6309 16.8022 15.3652 16.8093 14.5874 17.5871C13.8096 18.3649 13.8025 19.6306 14.5874 20.4155L18.1718 23.9999L14.5858 27.5859C13.808 28.3637 13.808 29.6365 14.5858 30.4143C15.3636 31.1921 16.6364 31.1921 17.4142 30.4143L21.0002 26.8283L24.5858 30.4139C25.3636 31.1917 26.6364 31.1917 27.4142 30.4139C28.192 29.6361 28.192 28.3633 27.4142 27.5855Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEquipment_batteryNotFound(mode = 'outline') {
            return Equipment_batteryNotFoundIcon[mode] || Equipment_batteryNotFoundIcon['outline'];
        }
        
        export const Equipment_batteryNotFoundModes = Object.keys(Equipment_batteryNotFoundIcon);
        
        // 导出图标数据本身
        export const Equipment_batteryNotFound = Equipment_batteryNotFoundIcon;