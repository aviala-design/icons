const System_turnOffCircleIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M24 2.5C22.8954 2.5 22 3.39543 22 4.5L22 24.5C22 25.6046 22.8954 26.5 24 26.5C25.1046 26.5 26 25.6046 26 24.5L26 4.5C26 3.39543 25.1046 2.5 24 2.5Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M9.15076 9.15073C9.51269 8.7888 10.0127 8.56494 10.565 8.56494C11.6695 8.56494 12.565 9.46037 12.565 10.5649C12.565 11.1172 12.3411 11.6172 11.9792 11.9792C8.65973 15.2986 7 19.3055 7 23.9999C7 33.3888 14.6112 40.9999 24 40.9999C33.3888 40.9999 41 33.3888 41 23.9999C41 19.306 39.3406 15.2994 36.0218 11.9801L36.0208 11.9792C35.6589 11.6172 35.435 11.1172 35.435 10.5649C35.435 9.46037 36.3305 8.56494 37.435 8.56494C37.9873 8.56494 38.4873 8.7888 38.8492 9.15073C42.9497 13.2512 45 18.201 45 23.9999C45 35.5979 35.598 44.9999 24 44.9999C12.402 44.9999 3 35.5979 3 23.9999C3 18.201 5.05025 13.2512 9.15076 9.15073Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      }
    ]
  },
  "colorful": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M24 2.5C22.8954 2.5 22 3.39543 22 4.5L22 24.5C22 25.6046 22.8954 26.5 24 26.5C25.1046 26.5 26 25.6046 26 24.5L26 4.5C26 3.39543 25.1046 2.5 24 2.5Z",
        "fill-rule": "evenodd",
        "fill": "#1764FF"
      },
      {
        "d": "M9.15076 9.15073C9.51269 8.7888 10.0127 8.56494 10.565 8.56494C11.6695 8.56494 12.565 9.46037 12.565 10.5649C12.565 11.1172 12.3411 11.6172 11.9792 11.9792C8.65973 15.2986 7 19.3055 7 23.9999C7 33.3888 14.6112 40.9999 24 40.9999C33.3888 40.9999 41 33.3888 41 23.9999C41 19.306 39.3406 15.2994 36.0218 11.9801L36.0208 11.9792C35.6589 11.6172 35.435 11.1172 35.435 10.5649C35.435 9.46037 36.3305 8.56494 37.435 8.56494C37.9873 8.56494 38.4873 8.7888 38.8492 9.15073C42.9497 13.2512 45 18.201 45 23.9999C45 35.5979 35.598 44.9999 24 44.9999C12.402 44.9999 3 35.5979 3 23.9999C3 18.201 5.05025 13.2512 9.15076 9.15073Z",
        "fill-rule": "evenodd",
        "fill": "#4187FF"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M22 24.5L22 4.5C22 3.4 22.9 2.5 24 2.5C25.1 2.5 26 3.4 26 4.5L26 24.5C26 25.6 25.1 26.5 24 26.5C22.9 26.5 22 25.6 22 24.5ZM12.56 10.5649C12.56 9.4649 11.67 8.5649 10.56 8.5649C10.01 8.5649 9.51 8.7949 9.15 9.1549L9.14 9.1549C5.05 13.2649 3 18.2149 3 24.0049C3 35.6049 12.4 45.0049 24 45.0049C35.6 45.0049 45 35.6049 45 24.0049C45 18.2149 42.95 13.2649 38.86 9.1549L38.85 9.1549C38.49 8.7949 37.99 8.5649 37.44 8.5649C36.33 8.5649 35.43 9.4649 35.43 10.5649C35.43 11.1549 35.69 11.6849 36.1 12.0549C39.37 15.3649 41 19.3549 41 24.0049C41 33.3949 33.39 41.0049 24 41.0049C14.61 41.0049 7 33.3949 7 24.0049C7 19.3549 8.63 15.3649 11.9 12.0549C12.31 11.6849 12.56 11.1549 12.56 10.5649Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getSystem_turnOffCircle(mode = 'outline') {
            return System_turnOffCircleIcon[mode] || System_turnOffCircleIcon['outline'];
        }
        
        export const System_turnOffCircleModes = Object.keys(System_turnOffCircleIcon);
        
        // 导出图标数据本身
        export const System_turnOffCircle = System_turnOffCircleIcon;