const Brand_avialaDesignIcon = {
  "colorful": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M15.1782 5.58C14.7922 4.2965 15.7479 3 17.0882 3L25.5882 3C30.9471 3 34.4819 5.68004 36.1882 11.05L41.3082 27.16L43.7482 34.72L44.6982 37.67L45.8982 41.38C46.3168 42.6719 45.3562 44 43.9982 44L28.1882 44C27.3042 44 26.5313 43.417 26.2782 42.57L22.0582 28.47L15.1782 5.58Z",
        "fill-rule": "evenodd",
        "fill": "#FA9E14"
      },
      {
        "d": "M25.6399 25.8051L39.337 25.8021C40.2013 25.8019 40.9679 26.357 41.2376 27.1782L45.8997 41.3759C46.3244 42.6693 45.3608 43.9999 43.9995 43.9999L4.99958 43.9999C3.63411 43.9999 2.67014 42.6618 3.10248 41.3666L5.6713 33.6708C7.42159 28.4342 10.9599 25.8128 16.2862 25.8065L16.2873 25.8064L24.1963 25.8021L25.6387 25.8013L25.6399 25.8051Z",
        "fill-rule": "evenodd",
        "fill": "#FA9E14"
      },
      {
        "d": "M39.3625 25.8022L38.641 25.8022L25.6404 25.805L25.6395 25.8022L23.8356 25.8022L21.2666 25.8037L26.6998 43.9998L44 43.9998C45.3517 43.9998 46.3113 42.6879 45.9089 41.4031L45.5679 40.3638L41.2381 27.1781C40.971 26.3649 40.2166 25.8127 39.3625 25.8022Z",
        "fill-rule": "evenodd",
        "fill": "#FBB63E"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M17.0979 3C15.7579 3 14.7979 4.29 15.1779 5.58L21.256 25.8022L16.288 25.8022C15.098 25.8022 13.938 26.0022 12.808 26.3822C11.708 26.7522 10.688 27.2922 9.74805 27.9922C8.80805 28.6922 7.99805 29.5222 7.30805 30.4722C6.60805 31.4522 6.05805 32.5122 5.66805 33.6722L3.09805 41.3722C2.66805 42.6622 3.63805 44.0022 4.99805 44.0022L43.9988 44.0022C45.2413 44.0022 46.1433 42.9078 45.9823 41.7409C45.9647 41.6135 45.9345 41.4852 45.8906 41.3573L44.6979 37.67L43.7379 34.73L41.3079 27.15L36.1779 11.05C35.4279 8.67 34.0879 6.74 32.1679 5.26C30.2079 3.75 28.0179 3 25.5879 3L17.0979 3ZM36.6797 25.8022L32.3679 12.27C31.2579 8.76 28.9879 7 25.5879 7L19.7879 7L25.4335 25.8022L36.6797 25.8022ZM23.0721 31.8662L22.4539 29.8022L16.288 29.8022C14.768 29.8022 13.378 30.2722 12.138 31.2022C10.878 32.1422 9.98805 33.3922 9.46805 34.9322L7.77805 40.0022L25.5014 40.0022L23.0721 31.8662ZM29.6879 40L41.2373 40L37.888 29.8022L26.6388 29.8022L27.6588 33.2245L29.6879 40Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getBrand_avialaDesign(mode = 'outline') {
            return Brand_avialaDesignIcon[mode] || Brand_avialaDesignIcon['outline'];
        }
        
        export const Brand_avialaDesignModes = Object.keys(Brand_avialaDesignIcon);
        
        // 导出图标数据本身
        export const Brand_avialaDesign = Brand_avialaDesignIcon;