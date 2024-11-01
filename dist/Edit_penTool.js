const Edit_penToolIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M27.1682 37.9984L13.6382 37.9984C13.1682 37.9984 12.7182 37.9184 12.2782 37.7584C11.8482 37.6084 11.4582 37.3784 11.1082 37.0984C10.7582 36.8084 10.4582 36.4684 10.2282 36.0784C9.97816 35.6784 9.80816 35.2484 9.71816 34.7784L4.62816 9.3284C4.48816 8.6584 4.52816 7.9884 4.73816 7.3384C4.92816 6.7184 5.25816 6.1784 5.71816 5.7184C6.17816 5.25841 6.71816 4.92841 7.33816 4.73841C7.98816 4.52841 8.65816 4.48841 9.32816 4.62841L34.7882 9.7184C35.2482 9.8084 35.6782 9.9784 36.0782 10.2284C36.4682 10.4584 36.8082 10.7584 37.0982 11.1084C37.3782 11.4584 37.6082 11.8484 37.7582 12.2784C37.9182 12.7184 37.9982 13.1684 37.9982 13.6384L37.9982 27.1684L44.0082 33.1784C44.3882 33.5584 44.6782 33.9984 44.8782 34.4984C45.0782 34.9784 45.1782 35.4784 45.1782 35.9984C45.1782 36.5184 45.0782 37.0184 44.8782 37.4984C44.6782 37.9984 44.3882 38.4384 44.0082 38.8284L38.8282 44.0084C38.4382 44.3884 37.9982 44.6784 37.4982 44.8784C37.0182 45.0784 36.5182 45.1784 35.9982 45.1784C35.4782 45.1784 34.9782 45.0784 34.4982 44.8784C33.9982 44.6784 33.5582 44.3884 33.1782 44.0084L27.1682 37.9984ZM13.6382 33.9984L9.25361 12.0756L19.0538 21.8824C19.0176 22.0851 18.9999 22.2916 18.9999 22.5001C18.9999 22.9701 19.0899 23.4301 19.2799 23.8601C19.4499 24.2801 19.6999 24.6501 20.0199 24.9801C20.3499 25.3001 20.7199 25.5501 21.1399 25.7201C21.5699 25.9101 22.0299 26.0001 22.4999 26.0001C22.9699 26.0001 23.4299 25.9101 23.8599 25.7201C24.2799 25.5501 24.6499 25.3001 24.9799 24.9801C25.2999 24.6501 25.5499 24.2801 25.7199 23.8601C25.9099 23.4301 25.9999 22.9701 25.9999 22.5001C25.9999 22.0301 25.9099 21.5701 25.7199 21.1401C25.5499 20.7201 25.2999 20.3501 24.9799 20.0201C24.6499 19.7001 24.2799 19.4501 23.8599 19.2801C23.4299 19.0901 22.9699 19.0001 22.4999 19.0001C22.2914 19.0001 22.0849 19.0178 21.8822 19.054L12.0754 9.25385L33.9982 13.6384L33.9982 27.1684C33.9982 27.6984 34.0982 28.2084 34.3082 28.6984C34.5082 29.1884 34.7982 29.6284 35.1782 30.0084L41.1682 35.9984L35.9982 41.1684L30.0082 35.1784C29.6282 34.7984 29.1882 34.5084 28.6982 34.3084C28.2082 34.0984 27.6982 33.9984 27.1682 33.9984L13.6382 33.9984Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_penTool(mode = 'outline') {
            return Edit_penToolIcon[mode] || Edit_penToolIcon['outline'];
        }
        
        export const Edit_penToolModes = Object.keys(Edit_penToolIcon);
        
        // 导出图标数据本身
        export const Edit_penTool = Edit_penToolIcon;