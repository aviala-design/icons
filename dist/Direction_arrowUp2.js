const Direction_arrowUp2Icon = {
  "fill-black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M26.8284 15L38 26.1716C40.5199 28.6914 38.7352 33 35.1716 33L12.8284 33C9.26482 33 7.48012 28.6914 10 26.1716L21.1716 15C22.7337 13.4379 25.2663 13.4379 26.8284 15Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M36.8284 25L11.1716 25L21.1716 15C22.7336 13.4379 25.2663 13.4379 26.8284 15L36.8284 25Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "fill-colorful": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M26.8284 15L38 26.1716C40.5199 28.6914 38.7352 33 35.1716 33L12.8284 33C9.26482 33 7.48012 28.6914 10 26.1716L21.1716 15C22.7337 13.4379 25.2663 13.4379 26.8284 15Z",
        "fill-rule": "evenodd",
        "fill": "#AFECDA"
      },
      {
        "d": "M36.8284 25L11.1716 25L21.1716 15C22.7336 13.4379 25.2663 13.4379 26.8284 15L36.8284 25Z",
        "fill-rule": "evenodd",
        "fill": "#0D9E86"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M26.8284 15L38 26.1716C40.5199 28.6914 38.7352 33 35.1716 33L12.8284 33C9.26482 33 7.48012 28.6914 10 26.1716L21.1716 15C22.7337 13.4379 25.2663 13.4379 26.8284 15Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getDirection_arrowUp2(mode = 'outline') {
            return Direction_arrowUp2Icon[mode] || Direction_arrowUp2Icon['outline'];
        }
        
        export const Direction_arrowUp2Modes = Object.keys(Direction_arrowUp2Icon);
        
        // 导出图标数据本身
        export const Direction_arrowUp2 = Direction_arrowUp2Icon;