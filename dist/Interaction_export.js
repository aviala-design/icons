const Interaction_exportIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M8 26C8 24.8954 7.10457 24 6 24C4.89543 24 4 24.8954 4 26L4 36C4 40.4183 7.58172 44 12 44L36 44C40.4183 44 44 40.4183 44 36L44 26C44 24.8954 43.1046 24 42 24C40.8954 24 40 24.8954 40 26L40 36C40 38.2091 38.2091 40 36 40L12 40C9.79086 40 8 38.2091 8 36L8 26Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M24.001 36C25.1055 36 26.0009 35.1045 26.0009 34L25.9999 6.49998C25.9999 5.39538 25.1044 4.50001 23.9999 4.50005C22.8953 4.50009 21.9999 5.39552 21.9999 6.50012L22.0009 34.0001C22.0009 35.1047 22.8964 36.0001 24.001 36Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M10.5862 15.8354L21.1716 5.25C22.7337 3.6879 25.2663 3.6879 26.8284 5.25L37.4132 15.8347L37.4142 15.8358C37.7761 16.1977 38 16.6977 38 17.25C38 18.3546 37.1046 19.25 36 19.25C35.4477 19.25 34.9477 19.0261 34.5858 18.6642L34.5847 18.6632L24 8.07843L13.4146 18.6639L13.4142 18.6642C13.0523 19.0261 12.5523 19.25 12 19.25C10.8954 19.25 10 18.3546 10 17.25C10 16.6977 10.2239 16.1977 10.5858 15.8358L10.5862 15.8354Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M22.001 10.0771L13.41 18.66C13.05 19.03 12.55 19.25 12 19.25C10.9 19.25 10 18.35 10 17.25C10 16.7 10.22 16.2 10.59 15.84L21.18 5.25003C22.74 3.69003 25.26 3.69003 26.82 5.25003L37.41 15.83L37.41 15.84C37.78 16.2 38 16.7 38 17.25C38 18.35 37.1 19.25 36 19.25C35.45 19.25 34.95 19.03 34.59 18.66L34.58 18.66L26.001 10.081L26.001 34.0001C26.001 35.1001 25.101 36.0001 24.001 36.0001C22.901 36.0001 22.001 35.1001 22.001 34.0001L22.001 10.0771ZM12 44C7.58 44 4 40.42 4 36L4 26C4 24.9 4.9 24 6 24C7.1 24 8 24.9 8 26L8 36C8 38.21 9.79 40 12 40L36 40C38.21 40 40 38.21 40 36L40 26C40 24.9 40.9 24 42 24C43.1 24 44 24.9 44 26L44 36C44 40.42 40.42 44 36 44L12 44Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getInteraction_export(mode = 'outline') {
            return Interaction_exportIcon[mode] || Interaction_exportIcon['outline'];
        }
        
        export const Interaction_exportModes = Object.keys(Interaction_exportIcon);
        
        // 导出图标数据本身
        export const Interaction_export = Interaction_exportIcon;