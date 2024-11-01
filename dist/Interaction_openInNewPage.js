const Interaction_openInNewPageIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M8 18C8 15.7909 9.79086 14 12 14L16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10L12 10C7.58172 10 4 13.5817 4 18L4 36C4 40.4183 7.58172 44 12 44L30 44C34.4183 44 38 40.4183 38 36L38 32C38 30.8954 37.1046 30 36 30C34.8954 30 34 30.8954 34 32L34 36C34 38.2091 32.2091 40 30 40L12 40C9.79086 40 8 38.2091 8 36L8 18Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M22 6C22 7.10457 22.8954 8 24 8L40 8L40 24C40 25.1046 40.8954 26 42 26C43.1046 26 44 25.1046 44 24L44 8C44 5.79086 42.2091 4 40 4L24 4C22.8954 4 22 4.89543 22 6Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M42.4132 8.41525L17.4142 33.4142C17.0523 33.7761 16.5523 34 16 34C14.8954 34 14 33.1046 14 32C14 31.4477 14.2239 30.9477 14.5858 30.5858L14.5868 30.5847L39.5847 5.58683L39.5858 5.58579C39.9477 5.22386 40.4477 5 41 5C42.1046 5 43 5.89543 43 7C43 7.55229 42.7761 8.05229 42.4142 8.41421L42.4132 8.41525Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37.17 8L24 8C22.9 8 22 7.1 22 6C22 4.9 22.9 4 24 4L40 4C42.21 4 44 5.79 44 8L44 24C44 25.1 43.1 26 42 26C40.9 26 40 25.1 40 24L40 10.83L17.42 33.41L17.41 33.41C17.05 33.78 16.55 34 16 34C14.9 34 14 33.1 14 32C14 31.45 14.22 30.95 14.59 30.59L14.59 30.58L37.17 8ZM16 14L12 14C9.79 14 8 15.79 8 18L8 36C8 38.21 9.79 40 12 40L30 40C32.21 40 34 38.21 34 36L34 32C34 30.9 34.9 30 36 30C37.1 30 38 30.9 38 32L38 36C38 40.42 34.42 44 30 44L12 44C7.58 44 4 40.42 4 36L4 18C4 13.58 7.58 10 12 10L16 10C17.1 10 18 10.9 18 12C18 13.1 17.1 14 16 14Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getInteraction_openInNewPage(mode = 'outline') {
            return Interaction_openInNewPageIcon[mode] || Interaction_openInNewPageIcon['outline'];
        }
        
        export const Interaction_openInNewPageModes = Object.keys(Interaction_openInNewPageIcon);
        
        // 导出图标数据本身
        export const Interaction_openInNewPage = Interaction_openInNewPageIcon;