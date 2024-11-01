const Safe_certificate_colorfulIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M11 3L37 3C41.4183 3 45 6.58172 45 11L45 17.6371C44.0857 16.6164 42.7938 15.5803 41 14.8764L41 11C41 8.79086 39.2091 7 37 7L11 7C8.79086 7 7 8.79086 7 11L7 27C7 29.2091 8.79086 31 11 31L21.0303 31C21.1331 32.6504 21.4901 33.9603 21.9921 35L11 35C6.58172 35 3 31.4183 3 27L3 11C3 6.58172 6.58172 3 11 3Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.71",
        "fill": "currentColor"
      },
      {
        "d": "M10 15C10 16.1046 10.8954 17 12 17L22 17C23.1046 17 24 16.1046 24 15C24 13.8954 23.1046 13 22 13L12 13C10.8954 13 10 13.8954 10 15Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M10 23C10 24.1046 10.8954 25 12 25L17.5 25C18.6046 25 19.5 24.1046 19.5 23C19.5 21.8954 18.6046 21 17.5 21L12 21C10.8954 21 10 21.8954 10 23Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M28 32.876L28 43.2338C28 45.5657 30.5439 47.006 32.5435 45.8063L35 44.3324L37.4565 45.8063C39.4561 47.006 42 45.5657 42 43.2338L42 32.876C41.0799 34.5341 39.5878 35.8309 37.7901 36.5L38 36.5L38 41.4676L36.5435 40.5937C36.0685 40.3087 35.554 40.1662 35 40.1662C34.446 40.1662 33.9315 40.3087 33.4565 40.5937L32 41.4676L32 36.5L32.2099 36.5C30.4122 35.8309 28.9201 34.5341 28 32.876Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.71",
        "fill": "currentColor"
      },
      {
        "d": "M35 38C40.5228 38 45 33.5228 45 28C45 22.4771 40.5228 18 35 18C29.4771 18 25 22.4771 25 28C25 33.5228 29.4771 38 35 38ZM35 22C38.3137 22 41 24.6863 41 28C41 31.3137 38.3137 34 35 34C31.6863 34 29 31.3137 29 28C29 24.6863 31.6863 22 35 22Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  }
};
        
        export function getSafe_certificate_colorful(mode = 'outline') {
            return Safe_certificate_colorfulIcon[mode] || Safe_certificate_colorfulIcon['outline'];
        }
        
        export const Safe_certificate_colorfulModes = Object.keys(Safe_certificate_colorfulIcon);
        
        // 导出图标数据本身
        export const Safe_certificate_colorful = Safe_certificate_colorfulIcon;