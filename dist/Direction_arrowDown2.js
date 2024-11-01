const Direction_arrowDown2Icon = {
  "fill-black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M26.8284 34L38 22.8284C40.5199 20.3086 38.7352 16 35.1716 16L12.8284 16C9.26482 16 7.48012 20.3086 10 22.8284L21.1716 34C22.7337 35.5621 25.2663 35.5621 26.8284 34Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M36.8284 24L11.1716 24L21.1716 34C22.7336 35.5621 25.2663 35.5621 26.8284 34L36.8284 24Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "fill-colorful": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M26.8284 34L38 22.8284C40.5199 20.3086 38.7352 16 35.1716 16L12.8284 16C9.26482 16 7.48012 20.3086 10 22.8284L21.1716 34C22.7337 35.5621 25.2663 35.5621 26.8284 34Z",
        "fill-rule": "evenodd",
        "fill": "#FFC7BF"
      },
      {
        "d": "M36.8284 24L11.1716 24L21.1716 34C22.7336 35.5621 25.2663 35.5621 26.8284 34L36.8284 24Z",
        "fill-rule": "evenodd",
        "fill": "#FF1A1A"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M26.8284 34L38 22.8284C40.5199 20.3086 38.7352 16 35.1716 16L12.8284 16C9.26482 16 7.48012 20.3086 10 22.8284L21.1716 34C22.7337 35.5621 25.2663 35.5621 26.8284 34Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getDirection_arrowDown2(mode = 'outline') {
            return Direction_arrowDown2Icon[mode] || Direction_arrowDown2Icon['outline'];
        }
        
        export const Direction_arrowDown2Modes = Object.keys(Direction_arrowDown2Icon);
        
        // 导出图标数据本身
        export const Direction_arrowDown2 = Direction_arrowDown2Icon;