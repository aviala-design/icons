const Interaction_moreIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M35 26.5C33.62 26.5 32.5 25.38 32.5 24C32.5 22.62 33.62 21.5 35 21.5C36.38 21.5 37.5 22.62 37.5 24C37.5 25.38 36.38 26.5 35 26.5ZM15.5 24C15.5 22.62 14.38 21.5 13 21.5C11.62 21.5 10.5 22.62 10.5 24C10.5 25.38 11.62 26.5 13 26.5C14.38 26.5 15.5 25.38 15.5 24ZM24 26.5C25.38 26.5 26.5 25.38 26.5 24C26.5 22.62 25.38 21.5 24 21.5C22.62 21.5 21.5 22.62 21.5 24C21.5 25.38 22.62 26.5 24 26.5Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getInteraction_more(mode = 'outline') {
            return Interaction_moreIcon[mode] || Interaction_moreIcon['outline'];
        }
        
        export const Interaction_moreModes = Object.keys(Interaction_moreIcon);
        
        // 导出图标数据本身
        export const Interaction_more = Interaction_moreIcon;