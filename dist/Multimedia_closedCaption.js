const Multimedia_closedCaptionIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M2 36C2 40.4183 5.58172 44 10 44L38 44C42.4183 44 46 40.4183 46 36L46 12C46 7.58172 42.4183 4 38 4L10 4C5.58172 4 2 7.58172 2 12L2 36ZM38 40L10 40C7.79086 40 6 38.2091 6 36L6 12C6 9.79086 7.79086 8 10 8L38 8C40.2091 8 42 9.79086 42 12L42 36C42 38.2091 40.2091 40 38 40Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M14 25L12 25C10.8954 25 10 25.8954 10 27C10 28.1046 10.8954 29 12 29L14 29C15.1046 29 16 28.1046 16 27C16 25.8954 15.1046 25 14 25Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M18 27C18 28.1046 18.8954 29 20 29L26 29C27.1046 29 28 28.1046 28 27C28 25.8954 27.1046 25 26 25L20 25C18.8954 25 18 25.8954 18 27Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M32 29L36 29C37.1046 29 38 28.1046 38 27C38 25.8954 37.1046 25 36 25L32 25C30.8954 25 30 25.8954 30 27C30 28.1046 30.8954 29 32 29Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M12 36L16 36C17.1046 36 18 35.1046 18 34C18 32.8954 17.1046 32 16 32L12 32C10.8954 32 10 32.8954 10 34C10 35.1046 10.8954 36 12 36Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M36 32L22 32C20.8954 32 20 32.8954 20 34C20 35.1046 20.8954 36 22 36L36 36C37.1046 36 38 35.1046 38 34C38 32.8954 37.1046 32 36 32Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M2.0003 36C2.0003 40.4183 5.58202 44 10.0003 44L38.0003 44C42.4186 44 46.0003 40.4183 46.0003 36L46.0003 12C46.0003 7.58172 42.4186 4 38.0003 4L10.0003 4C5.58202 4 2.0003 7.58172 2.0003 12L2.0003 36ZM38.0003 40L10.0003 40C7.79116 40 6.0003 38.2091 6.0003 36L6.0003 12C6.0003 9.79086 7.79116 8 10.0003 8L38.0003 8C40.2094 8 42.0003 9.79086 42.0003 12L42.0003 36C42.0003 38.2091 40.2094 40 38.0003 40ZM12.0003 25L14.0003 25C15.1049 25 16.0003 25.8954 16.0003 27C16.0003 28.1046 15.1049 29 14.0003 29L12.0003 29C10.8957 29 10.0003 28.1046 10.0003 27C10.0003 25.8954 10.8957 25 12.0003 25ZM20.0003 29C18.8957 29 18.0003 28.1046 18.0003 27C18.0003 25.8954 18.8957 25 20.0003 25L26.0003 25C27.1049 25 28.0003 25.8954 28.0003 27C28.0003 28.1046 27.1049 29 26.0003 29L20.0003 29ZM36.0003 29L32.0003 29C30.8957 29 30.0003 28.1046 30.0003 27C30.0003 25.8954 30.8957 25 32.0003 25L36.0003 25C37.1049 25 38.0003 25.8954 38.0003 27C38.0003 28.1046 37.1049 29 36.0003 29ZM10.0003 34C10.0003 35.1046 10.8957 36 12.0003 36L16.0003 36C17.1049 36 18.0003 35.1046 18.0003 34C18.0003 32.8954 17.1049 32 16.0003 32L12.0003 32C10.8957 32 10.0003 32.8954 10.0003 34ZM36.0003 32L22.0003 32C20.8957 32 20.0003 32.8954 20.0003 34C20.0003 35.1046 20.8957 36 22.0003 36L36.0003 36C37.1049 36 38.0003 35.1046 38.0003 34C38.0003 32.8954 37.1049 32 36.0003 32Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getMultimedia_closedCaption(mode = 'outline') {
            return Multimedia_closedCaptionIcon[mode] || Multimedia_closedCaptionIcon['outline'];
        }
        
        export const Multimedia_closedCaptionModes = Object.keys(Multimedia_closedCaptionIcon);
        
        // 导出图标数据本身
        export const Multimedia_closedCaption = Multimedia_closedCaptionIcon;