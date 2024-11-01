const Brand_MicrosoftIcon = {
  "colorful": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M22 4L4 4L4 22L22 22L22 4Z",
        "fill-rule": "evenodd",
        "fill": "#FF1A1A"
      },
      {
        "d": "M22 26L4 26L4 44L22 44L22 26Z",
        "fill-rule": "evenodd",
        "fill": "#1764FF"
      },
      {
        "d": "M44 4L26 4L26 22L44 22L44 4Z",
        "fill-rule": "evenodd",
        "fill": "#0D9E86"
      },
      {
        "d": "M44 26L26 26L26 44L44 44L44 26Z",
        "fill-rule": "evenodd",
        "fill": "#FA9E14"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M22 4L4 4L4 22L22 22L22 4ZM44 4L26 4L26 22L44 22L44 4ZM22 26L4 26L4 44L22 44L22 26ZM44 26L26 26L26 44L44 44L44 26Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getBrand_Microsoft(mode = 'outline') {
            return Brand_MicrosoftIcon[mode] || Brand_MicrosoftIcon['outline'];
        }
        
        export const Brand_MicrosoftModes = Object.keys(Brand_MicrosoftIcon);
        
        // 导出图标数据本身
        export const Brand_Microsoft = Brand_MicrosoftIcon;