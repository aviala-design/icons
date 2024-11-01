const Equipment_usbDrive_blackIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M19 17L29 17L29 7L19 7L19 17ZM33 17C36.3137 17 39 19.6863 39 23L39 38C39 42.4183 35.4183 46 31 46L17 46C12.5817 46 9 42.4183 9 38L9 23C9 22.1871 9.15744 21.4084 9.47233 20.6639C9.77605 19.9458 10.2044 19.3103 10.7574 18.7574C11.3103 18.2044 11.9458 17.776 12.6639 17.4723C13.4084 17.1574 14.1871 17 15 17L15 7C15 4.79086 16.7909 3 19 3L29 3C31.2091 3 33 4.79086 33 7L33 17ZM15 21L33 21C34.1046 21 35 21.8954 35 23L35 38C35 40.2091 33.2091 42 31 42L17 42C14.7909 42 13 40.2091 13 38L13 23C13 22.7279 13.0521 22.4686 13.1564 22.2221C13.2575 21.9831 13.4006 21.771 13.5858 21.5858C13.771 21.4006 13.9831 21.2574 14.2221 21.1563C14.4686 21.0521 14.7278 21 15 21Z",
        "fill-rule": "evenodd",
        "fill": "#787878"
      },
      {
        "d": "M20 25C18.8954 25 18 25.8954 18 27L18 36C18 37.1046 18.8954 38 20 38C21.1046 38 22 37.1046 22 36L22 27C22 25.8954 21.1046 25 20 25Z",
        "fill-rule": "evenodd",
        "fill": "#424242"
      },
      {
        "d": "M28 25C26.8954 25 26 25.8954 26 27L26 36C26 37.1046 26.8954 38 28 38C29.1046 38 30 37.1046 30 36L30 27C30 25.8954 29.1046 25 28 25Z",
        "fill-rule": "evenodd",
        "fill": "#424242"
      }
    ]
  }
};
        
        export function getEquipment_usbDrive_black(mode = 'outline') {
            return Equipment_usbDrive_blackIcon[mode] || Equipment_usbDrive_blackIcon['outline'];
        }
        
        export const Equipment_usbDrive_blackModes = Object.keys(Equipment_usbDrive_blackIcon);
        
        // 导出图标数据本身
        export const Equipment_usbDrive_black = Equipment_usbDrive_blackIcon;