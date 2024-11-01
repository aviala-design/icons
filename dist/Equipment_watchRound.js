const Equipment_watchRoundIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M21 1L27 1C30.3137 1 33 3.68629 33 7L33 14.6191C31.849 13.5146 30.4952 12.6199 29 11.9963L29 7C29 5.89543 28.1046 5 27 5L21 5C19.8954 5 19 5.89543 19 7L19 11.9963C17.5048 12.6199 16.151 13.5146 15 14.6191L15 7C15 3.68629 17.6863 1 21 1ZM15 33.3809L15 41C15 44.3137 17.6863 47 21 47L27 47C30.3137 47 33 44.3137 33 41L33 33.3809C31.849 34.4854 30.4952 35.3801 29 36.0037L29 41C29 42.1046 28.1046 43 27 43L21 43C19.8954 43 19 42.1046 19 41L19 36.0037C17.5048 35.3801 16.151 34.4854 15 33.3809Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.71",
        "fill": "currentColor"
      },
      {
        "d": "M24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9C21.9664 9 20.02 9.3932 18.1607 10.1796C16.3659 10.9387 14.7768 12.01 13.3934 13.3934C12.01 14.7768 10.9387 16.3659 10.1796 18.1607C9.3932 20.02 9 21.9664 9 24C9 32.2843 15.7157 39 24 39ZM19.7189 13.8636C21.0801 13.2879 22.5071 13 24 13C30.0751 13 35 17.9249 35 24C35 30.0751 30.0751 35 24 35C17.9249 35 13 30.0751 13 24C13 22.5071 13.2879 21.0801 13.8636 19.7189C14.4201 18.4031 15.2062 17.2374 16.2218 16.2218C17.2374 15.2062 18.4031 14.4201 19.7189 13.8636Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M21 1L27 1C30.3137 1 33 3.68629 33 7L33 11.9989C36.6433 14.7355 39 19.0925 39 24C39 28.9075 36.6433 33.2645 33 36.0011L33 41C33 44.3137 30.3137 47 27 47L21 47C17.6863 47 15 44.3137 15 41L15 36.0011C11.3567 33.2645 9 28.9075 9 24C9 19.8579 10.4645 16.3223 13.3934 13.3934C13.9101 12.8767 14.4456 12.4056 15 11.9801L15 7C15 3.68629 17.6863 1 21 1ZM29 9.85353C27.4361 9.30077 25.7532 9 24 9C22.2215 9 20.5549 9.26998 19 9.80995L19 7C19 5.89543 19.8954 5 21 5L27 5C28.1046 5 29 5.89543 29 7L29 9.85353ZM19 38.1465L19 41C19 42.1046 19.8954 43 21 43L27 43C28.1046 43 29 42.1046 29 41L29 38.1465C27.4361 38.6992 25.7532 39 24 39C22.2468 39 20.5639 38.6992 19 38.1465Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M27 1L21 1C17.6863 1 15 3.68629 15 7L15 11.9801C14.4456 12.4056 13.9101 12.8767 13.3934 13.3934C10.4645 16.3223 9 19.8579 9 24C9 28.9075 11.3567 33.2645 15 36.0011L15 41C15 44.3137 17.6863 47 21 47L27 47C30.3137 47 33 44.3137 33 41L33 36.0011C36.6433 33.2645 39 28.9075 39 24C39 19.0925 36.6433 14.7355 33 11.9989L33 7C33 3.68629 30.3137 1 27 1ZM29 9.85353L29 7C29 5.89543 28.1046 5 27 5L21 5C19.8954 5 19 5.89543 19 7L19 9.80995C20.5549 9.26998 22.2215 9 24 9C25.7532 9 27.4361 9.30077 29 9.85353ZM29 38.1465C27.4361 38.6992 25.7532 39 24 39C22.2468 39 20.5639 38.6992 19 38.1465L19 41C19 42.1046 19.8954 43 21 43L27 43C28.1046 43 29 42.1046 29 41L29 38.1465ZM16.2218 16.2218C18.3697 14.0739 20.9625 13 24 13C30.0751 13 35 17.9249 35 24C35 30.0751 30.0751 35 24 35C17.9249 35 13 30.0751 13 24C13 20.9624 14.0739 18.3697 16.2218 16.2218Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEquipment_watchRound(mode = 'outline') {
            return Equipment_watchRoundIcon[mode] || Equipment_watchRoundIcon['outline'];
        }
        
        export const Equipment_watchRoundModes = Object.keys(Equipment_watchRoundIcon);
        
        // 导出图标数据本身
        export const Equipment_watchRound = Equipment_watchRoundIcon;