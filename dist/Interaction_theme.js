const Interaction_themeIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M35 16C35 17.1046 34.1046 18 33 18C31.8954 18 31 17.1046 31 16L31 5C31 3.8954 31.8954 3 33 3C34.1046 3 35 3.8954 35 5L35 16Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M21 29L21 41L27 41L27 29L21 29ZM21 45C18.7909 45 17 43.2091 17 41L17 25L31 25L31 41C31 43.2091 29.2091 45 27 45L21 45Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M38 7L10 7C8.89543 7 8 7.8954 8 9L8 21C8 23.2091 9.79086 25 12 25L35.9999 25C36.5433 25 37.0621 24.8955 37.5563 24.6865C38.0346 24.4842 38.4586 24.1982 38.8283 23.8284C39.198 23.4587 39.4841 23.0347 39.6864 22.5564C39.8954 22.0622 39.9999 21.5434 39.9999 21L40 9C40 7.8954 39.1046 7 38 7ZM4 9C4 5.6863 6.68629 3 10 3L38 3C41.3137 3 44 5.6863 44 9L43.9999 21C43.9999 22.0842 43.7901 23.1224 43.3704 24.1146C42.9655 25.0719 42.3943 25.9194 41.6568 26.6569C40.9193 27.3944 40.0718 27.9656 39.1145 28.3705C38.1223 28.7902 37.0841 29 35.9999 29L12 29C7.58172 29 4 25.4183 4 21L4 9Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4 9C4 5.6863 6.68629 3 10 3L31.8711 3L31.8711 5L31.8714 16C31.8714 17.1046 32.7668 18 33.8714 18C34.976 18 35.8714 17.1046 35.8714 16L35.8711 5L35.8711 3L38 3C41.3137 3 44 5.6863 44 9L43.9999 21C43.9999 23.2091 43.2189 25.0948 41.6568 26.6569C40.0947 28.219 38.209 29 35.9999 29L31 29L31 41C31 43.2091 29.2091 45 27 45L21 45C18.7909 45 17 43.2091 17 41L17 29L12 29C7.58172 29 4 25.4183 4 21L4 9ZM21 29L21 41L27 41L27 29L21 29Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M44 21L44 9C44 5.69 41.31 3 38 3L10 3C6.69 3 4 5.69 4 9L4 21C4 25.42 7.58 29 12 29L17 29L17 41C17 43.21 18.79 45 21 45L27 45C29.21 45 31 43.21 31 41L31 29L36 29C40.42 29 44 25.42 44 21ZM27 29L21 29L21 41L27 41L27 29ZM31 25L36 25C38.21 25 40 23.21 40 21L40 9C40 7.9 39.1 7 38 7L35.8711 7L35.8711 16C35.8711 17.1 34.9711 18 33.8711 18C32.7711 18 31.8711 17.1 31.8711 16L31.8711 7L10 7C8.9 7 8 7.9 8 9L8 21C8 23.21 9.79 25 12 25L31 25Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getInteraction_theme(mode = 'outline') {
            return Interaction_themeIcon[mode] || Interaction_themeIcon['outline'];
        }
        
        export const Interaction_themeModes = Object.keys(Interaction_themeIcon);
        
        // 导出图标数据本身
        export const Interaction_theme = Interaction_themeIcon;