const Interaction_libaryIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9L3 39C3 42.3137 5.68629 45 9 45C12.3137 45 15 42.3137 15 39L15 9ZM7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9L11 39C11 40.1046 10.1046 41 9 41C7.89543 41 7 40.1046 7 39L7 9Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M29 9C29 5.68629 26.3137 3 23 3C19.6863 3 17 5.68629 17 9L17 39C17 42.3137 19.6863 45 23 45C26.3137 45 29 42.3137 29 39L29 9ZM21 9C21 7.89543 21.8954 7 23 7C24.1046 7 25 7.89543 25 9L25 39C25 40.1046 24.1046 41 23 41C21.8954 41 21 40.1046 21 39L21 9Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.71",
        "fill": "currentColor"
      },
      {
        "d": "M30.3502 14.5107C30.0039 11.2152 32.3946 8.26284 35.6902 7.91647C38.9857 7.5701 41.938 9.96086 42.2844 13.2564L44.8875 38.0237C45.2339 41.3193 42.8432 44.2716 39.5476 44.618C36.2521 44.9644 33.2998 42.5736 32.9534 39.278L30.3502 14.5107ZM38.3063 13.6745C38.1908 12.576 37.2068 11.7791 36.1083 11.8946C35.0098 12.01 34.2129 12.9941 34.3283 14.0926L36.9315 38.8599C37.0469 39.9584 38.031 40.7554 39.1295 40.6399C40.228 40.5245 41.0249 39.5403 40.9095 38.4418L38.3063 13.6745Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  }
};
        
        export function getInteraction_libary(mode = 'outline') {
            return Interaction_libaryIcon[mode] || Interaction_libaryIcon['outline'];
        }
        
        export const Interaction_libaryModes = Object.keys(Interaction_libaryIcon);
        
        // 导出图标数据本身
        export const Interaction_libary = Interaction_libaryIcon;