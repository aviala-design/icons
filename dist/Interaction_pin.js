const Interaction_pinIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M16.4135 34.415L7.41421 43.4142C7.05228 43.7761 6.55229 44 6 44C4.89543 44 4 43.1046 4 42C4 41.4477 4.22386 40.9477 4.58579 40.5858L13.5858 31.5858C13.9477 31.2239 14.4477 31 15 31C16.1046 31 17 31.8954 17 33C17 33.5523 16.7761 34.0523 16.4142 34.4142L16.4135 34.415Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M32.8882 11.5021L24.1507 19.263C23.5586 19.7889 22.871 20.1106 22.0878 20.2281L8.21817 22.3086L25.6915 39.7819L27.772 25.9123C27.8894 25.1291 28.2111 24.4415 28.7371 23.8494L36.498 15.1119L36.5048 15.1042C36.8711 14.6921 37.4053 14.4324 38.0001 14.4324C39.1047 14.4324 40.0001 15.3279 40.0001 16.4324C40.0001 16.9422 39.8094 17.4074 39.4954 17.7606L39.4896 17.7672L31.7277 26.5057L29.6473 40.3753C29.1602 43.6223 25.1848 44.932 22.8631 42.6103L5.38974 25.137C3.06809 22.8153 4.37782 18.8399 7.62481 18.3528L21.4944 16.2724L30.2329 8.51054L30.2395 8.50469C30.5927 8.19071 31.0579 8 31.5677 8C32.6722 8 33.5677 8.89543 33.5677 10C33.5677 10.5948 33.308 11.129 32.8959 11.4953L32.8882 11.5021Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M30.4146 4.58615L43.4132 17.5848L43.4142 17.5858C43.7761 17.9477 44 18.4477 44 19C44 20.1046 43.1046 21 42 21C41.4477 21 40.9477 20.7761 40.5858 20.4142L40.5848 20.4132L27.5858 7.41421C27.2239 7.05228 27 6.55229 27 6C27 4.89543 27.8954 4 29 4C29.5523 4 30.0523 4.22386 30.4142 4.58579L30.4146 4.58615Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M40.5858 20.4142L38.7601 18.5885L31.7277 26.5057L29.6473 40.3753C29.1602 43.6222 25.1848 44.932 22.8631 42.6103L15.5406 35.2878L7.41498 43.4135L7.41421 43.4142C7.05228 43.7761 6.55228 44 6 44C4.89543 44 4 43.1046 4 42C4 41.4477 4.22386 40.9477 4.58579 40.5858L12.7122 32.4594L5.38977 25.137C3.06813 22.8153 4.37786 18.8399 7.62484 18.3528L21.4944 16.2723L29.4116 9.24005L27.5858 7.41421C27.2239 7.05228 27 6.55228 27 6C27 4.89543 27.8954 4 29 4C29.5523 4 30.0523 4.22386 30.4142 4.58579L43.4132 17.5848L43.4142 17.5858C43.7761 17.9477 44 18.4477 44 19C44 20.1046 43.1046 21 42 21C41.4477 21 40.9477 20.7761 40.5858 20.4142Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M40.59 20.41C40.95 20.78 41.45 21 42 21C43.1 21 44 20.1 44 19C44 18.45 43.78 17.95 43.41 17.59L43.41 17.58L30.41 4.59C30.05 4.22 29.55 4 29 4C27.9 4 27 4.9 27 6C27 6.55 27.22 7.05 27.59 7.41L29.4172 9.23722L21.4804 16.28C21.4804 16.28 21.4804 16.2727 21.4867 16.2706L7.6304 18.35C4.3804 18.83 3.0604 22.81 5.3904 25.13L12.7202 32.4598L4.59 40.59C4.22 40.95 4 41.45 4 42C4 43.1 4.9 44 6 44C6.55 44 7.05 43.78 7.41 43.41L15.5402 35.2798L22.8704 42.61C25.1904 44.94 29.1704 43.62 29.6504 40.38L31.7304 26.52L31.7204 26.52C31.7204 26.52 31.7204 26.51 31.7304 26.51L38.7632 18.5832L40.59 20.41ZM35.9264 15.7464L32.2536 12.0736L24.1504 19.26C23.5804 19.77 22.8604 20.11 22.0904 20.23L8.2204 22.31L25.6904 39.78L27.7704 25.9C27.8904 25.13 28.2204 24.42 28.7304 23.85L35.9264 15.7464Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getInteraction_pin(mode = 'outline') {
            return Interaction_pinIcon[mode] || Interaction_pinIcon['outline'];
        }
        
        export const Interaction_pinModes = Object.keys(Interaction_pinIcon);
        
        // 导出图标数据本身
        export const Interaction_pin = Interaction_pinIcon;