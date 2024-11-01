const Equipment_vrIcon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M40.7023 35.8727C44.9008 34.2982 47 30.3407 47 24C47 21.4768 46.4397 19.2947 45.319 17.4536C42.2944 12.4845 35.1881 10 24 10C17.1711 10 11.9365 10.8605 8.29597 12.5816C3.43199 14.881 1 18.6872 1 24C1 30.3407 3.09925 34.2982 7.29774 35.8727C11.0655 37.2856 14.9772 37.1062 19.0327 35.3344C21.0689 34.4448 22.7247 34 24.0001 34C25.2755 34 26.9313 34.4448 28.9674 35.3344C33.0229 37.1062 36.9345 37.2856 40.7023 35.8727ZM16.2328 21.8615C16.0059 21.9509 15.7587 22 15.5 22C14.3954 22 13.5 21.1046 13.5 20C13.5 19.1213 14.0666 18.375 14.8544 18.1065C16.8789 17.3688 19.9274 17 24.0001 17C28.0286 17 31.0728 17.3674 33.1326 18.1021C33.9272 18.3668 34.5001 19.1165 34.5001 20C34.5001 21.1046 33.6047 22 32.5001 22C32.2463 22 32.0036 21.9528 31.7802 21.8665C30.1573 21.2888 27.5639 21 24.0001 21C20.4015 21 17.8124 21.2872 16.2328 21.8615Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M40.7023 35.8727C44.9008 34.2982 47 30.3407 47 24C47 21.4768 46.4397 19.2947 45.319 17.4536C42.2944 12.4845 35.1881 10 24 10C17.1711 10 11.9365 10.8605 8.29597 12.5816C3.43199 14.881 1 18.6872 1 24C1 30.3407 3.09925 34.2982 7.29774 35.8727C11.0655 37.2856 14.9772 37.1062 19.0327 35.3344C21.0689 34.4448 22.7247 34 24.0001 34C25.2755 34 26.9313 34.4448 28.9674 35.3344C33.0229 37.1062 36.9345 37.2856 40.7023 35.8727ZM24 14C36.6667 14 43 17.3333 43 24C43 28.4927 41.7659 31.2018 39.2977 32.1273C36.5427 33.1605 33.6331 33.0077 30.5688 31.6689C28.0221 30.5563 25.8326 30 24.0001 30C22.1676 30 19.978 30.5563 17.4313 31.6689C14.367 33.0077 11.4573 33.1605 8.70226 32.1273C6.23409 31.2018 5 28.4927 5 24C5 20.3761 6.66852 17.7754 10.0056 16.1978C13.1049 14.7326 17.7697 14 24 14ZM16.2328 21.8615C16.0059 21.9509 15.7587 22 15.5 22C14.3954 22 13.5 21.1046 13.5 20C13.5 19.1213 14.0666 18.375 14.8544 18.1065C16.8789 17.3688 19.9274 17 24.0001 17C28.0286 17 31.0728 17.3674 33.1326 18.1021C33.9272 18.3667 34.5001 19.1165 34.5001 20C34.5001 21.1046 33.6047 22 32.5001 22C32.2463 22 32.0036 21.9528 31.7802 21.8665C30.1573 21.2888 27.5639 21 24.0001 21C20.4015 21 17.8124 21.2872 16.2328 21.8615Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEquipment_vr(mode = 'outline') {
            return Equipment_vrIcon[mode] || Equipment_vrIcon['outline'];
        }
        
        export const Equipment_vrModes = Object.keys(Equipment_vrIcon);
        
        // 导出图标数据本身
        export const Equipment_vr = Equipment_vrIcon;