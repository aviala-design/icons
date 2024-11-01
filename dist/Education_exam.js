const Education_examIcon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M14 45C9.58172 45 6 41.4183 6 37L6 11C6 6.58172 9.58172 3 14 3L34 3C38.4183 3 42 6.58172 42 11L42 37C42 41.4183 38.4183 45 34 45L14 45ZM14 9L14 16.7338C14 19.0657 16.5439 20.506 18.5435 19.3063L21 17.8324L23.4565 19.3063C25.4561 20.506 28 19.0657 28 16.7338L28 9C28 7.89543 27.1046 7 26 7C24.8954 7 24 7.89543 24 9L24 14.9676L22.5435 14.0937C21.5145 13.4763 20.4855 13.4763 19.4565 14.0937L18 14.9676L18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9ZM31.5858 27.5858L31.585 27.5865L25 34.1716L22.4142 31.5858C22.0523 31.2239 21.5523 31 21 31C19.8954 31 19 31.8954 19 33C19 33.5523 19.2239 34.0523 19.5858 34.4142L22.643 37.4714C23.9447 38.7732 26.0553 38.7732 27.357 37.4714L34.4135 30.415L34.4142 30.4142C34.7761 30.0523 35 29.5523 35 29C35 27.8954 34.1046 27 33 27C32.4477 27 31.9477 27.2239 31.5858 27.5858Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M14 45C9.58172 45 6 41.4183 6 37L6 11C6 6.58172 9.58172 3 14 3L34 3C38.4183 3 42 6.58172 42 11L42 37C42 41.4183 38.4183 45 34 45L14 45ZM24 7L18 7L18 14.9676L19.4565 14.0937C20.4855 13.4763 21.5145 13.4763 22.5435 14.0937L24 14.9676L24 7ZM14 7L14 16.7338C14 19.0657 16.5439 20.506 18.5435 19.3063L21 17.8324L23.4565 19.3063C25.4561 20.506 28 19.0657 28 16.7338L28 7L34 7C36.2091 7 38 8.79086 38 11L38 37C38 39.2091 36.2091 41 34 41L14 41C11.7909 41 10 39.2091 10 37L10 11C10 8.79086 11.7909 7 14 7ZM31.585 27.5865L31.5858 27.5858C31.9477 27.2239 32.4477 27 33 27C34.1046 27 35 27.8954 35 29C35 29.5523 34.7761 30.0523 34.4142 30.4142L34.4135 30.415L27.357 37.4714C26.0553 38.7732 23.9447 38.7732 22.643 37.4714L19.5858 34.4142C19.2239 34.0523 19 33.5523 19 33C19 31.8954 19.8954 31 21 31C21.5523 31 22.0523 31.2239 22.4142 31.5858L25 34.1716L31.585 27.5865Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEducation_exam(mode = 'outline') {
            return Education_examIcon[mode] || Education_examIcon['outline'];
        }
        
        export const Education_examModes = Object.keys(Education_examIcon);
        
        // 导出图标数据本身
        export const Education_exam = Education_examIcon;