const Edit_orderedListIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M7 19L7 9.25306C6.52949 9.36041 6.01463 9.40255 5.4554 9.37946L5 9.37946C3.89543 9.37946 3 8.48403 3 7.37946C3 6.27489 3.89543 5.37946 5 5.37946L5.4999 5.37946C5.53204 5.37946 5.56416 5.38024 5.59627 5.38179C6.02069 5.40226 6.30469 5.16985 6.44828 4.68454C6.78053 3.56151 7.52776 3 8.68997 3C9.96576 3 11 4.03424 11 5.31003L11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19ZM17 11.5C17 12.6046 17.8954 13.5 19 13.5L44 13.5C45.1046 13.5 46 12.6046 46 11.5C46 10.3954 45.1046 9.5 44 9.5L19 9.5C17.8954 9.5 17 10.3954 17 11.5ZM3 33.1738L3 32.2794C3 31.3993 3.22434 30.5389 3.67301 29.6981C4.63288 27.8994 6.24187 27 8.5 27C10.7581 27 12.3671 27.8994 13.327 29.6981C13.7757 30.5389 14 31.3993 14 32.2794L14 33.1738C14 35.24 12.499 37.1238 9.4969 38.8251C8.72768 39.261 8.13619 39.6527 7.72243 40L12 40C13.1046 40 14 40.8954 14 42C14 43.1046 13.1046 44 12 44L5 44C3.89543 44 3 43.1046 3 42L3 41.0327C3 38.9505 4.50822 37.0546 7.52467 35.3451C9.17489 34.4099 10 33.6861 10 33.1738L10 32.2794C10 31.9202 9.91132 31.6366 9.73397 31.4287C9.49019 31.1429 9.07887 31 8.5 31C7.84146 31 7.40879 31.1938 7.20199 31.5813C7.06733 31.8336 7 32.0663 7 32.2794L7 33.1738C7 34.2784 6.10457 35.1738 5 35.1738C3.89543 35.1738 3 34.2784 3 33.1738ZM17 36C17 37.1046 17.8954 38 19 38L44 38C45.1046 38 46 37.1046 46 36C46 34.8954 45.1046 34 44 34L19 34C17.8954 34 17 34.8954 17 36Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_orderedList(mode = 'outline') {
            return Edit_orderedListIcon[mode] || Edit_orderedListIcon['outline'];
        }
        
        export const Edit_orderedListModes = Object.keys(Edit_orderedListIcon);
        
        // 导出图标数据本身
        export const Edit_orderedList = Edit_orderedListIcon;