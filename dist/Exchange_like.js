const Exchange_likeIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M22 39L22 20C22 19.6667 22.0784 19.3529 22.2353 19.0588L28.3529 7.58823C28.6136 7.09944 28.9815 6.71253 29.4565 6.42752C29.9315 6.14251 30.446 6 31 6L31.1239 6C32.4636 6 33.4245 7.29147 33.0395 8.5747L30.0843 18.4253C29.6994 19.7085 30.6603 21 32 21L40 21C41.1046 21 42 21.8954 42 23L42 31C42 36.5228 37.5228 41 32 41L24 41C22.8954 41 22 40.1046 22 39ZM18.7059 17.1765C18.2353 18.0588 18 19 18 20L18 39C18 42.3137 20.6863 45 24 45L32 45C39.732 45 46 38.732 46 31L46 23C46 19.6863 43.3137 17 40 17L34.6881 17L36.8708 9.72409C38.0257 5.87442 35.1431 2 31.1239 2L31 2C29.7074 2 28.5069 2.33252 27.3985 2.99755C26.2901 3.66258 25.4318 4.56536 24.8235 5.70588L18.7059 17.1765Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M8 17L10 17C13.3137 17 16 19.6863 16 23L16 39C16 42.3137 13.3137 45 10 45C5.58172 45 2 41.4183 2 37L2 23C2 19.6863 4.68629 17 8 17ZM12 23C12 21.8954 11.1046 21 10 21L8 21C6.89543 21 6 21.8954 6 23L6 37C6 39.2091 7.79086 41 10 41C11.1046 41 12 40.1046 12 39L12 23Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M18 20C18 19 18.2353 18.0588 18.7059 17.1765L24.8235 5.70588C26.1412 3.23529 28.2 2 31 2L31.1239 2C35.1431 2 38.0257 5.87442 36.8708 9.72409L34.6881 17L40 17C43.3137 17 46 19.6863 46 23L46 31C46 38.732 39.732 45 32 45L24 45C20.6863 45 18 42.3137 18 39L18 20ZM10 17L8 17C4.68629 17 2 19.6863 2 23L2 37C2 41.4183 5.58172 45 10 45C13.3137 45 16 42.3137 16 39L16 23C16 19.6863 13.3137 17 10 17Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M18.7059 17.1765C18.2353 18.0588 18 19 18 20L18 39C18 42.3137 20.6863 45 24 45L32 45C39.732 45 46 38.732 46 31L46 23C46 19.6863 43.3137 17 40 17L34.6881 17L36.8708 9.72409C38.0257 5.87442 35.1431 2 31.1239 2L31 2C28.2 2 26.1412 3.23529 24.8235 5.70588L18.7059 17.1765ZM22 39L22 20C22 19.6667 22.0784 19.3529 22.2353 19.0588L28.3529 7.58823C28.9176 6.52941 29.8 6 31 6L31.1239 6C32.4636 6 33.4245 7.29147 33.0395 8.5747L30.0843 18.4253C29.6994 19.7085 30.6603 21 32 21L40 21C41.1046 21 42 21.8954 42 23L42 31C42 36.5228 37.5228 41 32 41L24 41C22.8954 41 22 40.1046 22 39ZM8 17L10 17C13.3137 17 16 19.6863 16 23L16 39C16 42.3137 13.3137 45 10 45C5.58172 45 2 41.4183 2 37L2 23C2 19.6863 4.68629 17 8 17ZM12 23C12 21.8954 11.1046 21 10 21L8 21C6.89543 21 6 21.8954 6 23L6 37C6 39.2091 7.79086 41 10 41C11.1046 41 12 40.1046 12 39L12 23Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getExchange_like(mode = 'outline') {
            return Exchange_likeIcon[mode] || Exchange_likeIcon['outline'];
        }
        
        export const Exchange_likeModes = Object.keys(Exchange_likeIcon);
        
        // 导出图标数据本身
        export const Exchange_like = Exchange_likeIcon;