const Interaction_multitaskIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M12 24C12 28.4183 15.5817 32 20 32L36 32C40.4183 32 44 28.4183 44 24L44 14C44 9.58172 40.4183 6 36 6L20 6C15.5817 6 12 9.58172 12 14L12 24ZM36 28L20 28C17.7909 28 16 26.2091 16 24L16 14C16 11.7909 17.7909 10 20 10L36 10C38.2091 10 40 11.7909 40 14L40 24C40 26.2091 38.2091 28 36 28Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.71",
        "fill": "currentColor"
      },
      {
        "d": "M4 34C4 38.4183 7.58172 42 12 42L28 42C32.4183 42 36 38.4183 36 34L36 24C36 19.5817 32.4183 16 28 16L12 16C7.58172 16 4 19.5817 4 24L4 34ZM28 38L12 38C9.79086 38 8 36.2091 8 34L8 24C8 21.7909 9.79086 20 12 20L28 20C30.2091 20 32 21.7909 32 24L32 34C32 36.2091 30.2091 38 28 38Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M36 32C40.42 32 44 28.42 44 24L44 14C44 9.58 40.42 6 36 6L20 6C15.58 6 12 9.58 12 14L12 16C7.58 16 4 19.58 4 24L4 34C4 38.42 7.58 42 12 42L28 42C32.42 42 36 38.42 36 34L36 32ZM36 28C38.21 28 40 26.21 40 24L40 14C40 11.79 38.21 10 36 10L20 10C17.79 10 16 11.79 16 14L16 16L28 16C32.42 16 36 19.58 36 24L36 28ZM12 20C9.79 20 8 21.79 8 24L8 34C8 36.21 9.79 38 12 38L28 38C30.21 38 32 36.21 32 34L32 32L20 32C15.58 32 12 28.42 12 24L12 20ZM32 28L20 28C17.79 28 16 26.21 16 24L16 20L28 20C30.21 20 32 21.79 32 24L32 28Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getInteraction_multitask(mode = 'outline') {
            return Interaction_multitaskIcon[mode] || Interaction_multitaskIcon['outline'];
        }
        
        export const Interaction_multitaskModes = Object.keys(Interaction_multitaskIcon);
        
        // 导出图标数据本身
        export const Interaction_multitask = Interaction_multitaskIcon;