const Connect_signalIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M9.04776 28C9.04776 26.8954 8.13104 26 7.0002 26C5.86936 26 4.95264 26.8954 4.95264 28L4.95264 43C4.95264 44.1046 5.86936 45 7.0002 45C8.13104 45 9.04776 44.1046 9.04776 43L9.04776 28Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.71",
        "fill": "currentColor"
      },
      {
        "d": "M20.381 21C20.381 19.8954 19.4643 19 18.3336 19C17.2028 19 16.2861 19.8954 16.2861 21L16.2861 43C16.2861 44.1046 17.2028 45 18.3336 45C19.4643 45 20.381 44.1046 20.381 43L20.381 21Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      },
      {
        "d": "M31.7143 13C31.7143 11.8954 30.7976 11 29.6667 11C28.5359 11 27.6191 11.8954 27.6191 13L27.6191 43C27.6191 44.1046 28.5359 45 29.6667 45C30.7976 45 31.7143 44.1046 31.7143 43L31.7143 13Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.71",
        "fill": "currentColor"
      },
      {
        "d": "M43.0478 5L43.0478 43C43.0478 44.1046 42.1311 45 41.0002 45C39.8694 45 38.9526 44.1046 38.9526 43L38.9526 5C38.9526 3.89543 39.8694 3 41.0002 3C42.1311 3 43.0478 3.89543 43.0478 5Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "colorful": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4.95264 43L4.95264 28C4.95264 26.8954 5.86936 26 7.0002 26C8.13104 26 9.04776 26.8954 9.04776 28L9.04776 43C9.04776 44.1046 8.13104 45 7.0002 45C5.86936 45 4.95264 44.1046 4.95264 43Z",
        "fill-rule": "evenodd",
        "fill": "#94C3FF"
      },
      {
        "d": "M16.2861 43L16.2861 21C16.2861 19.8954 17.2028 19 18.3336 19C19.4643 19 20.381 19.8954 20.381 21L20.381 43C20.381 44.1046 19.4643 45 18.3336 45C17.2028 45 16.2861 44.1046 16.2861 43Z",
        "fill-rule": "evenodd",
        "fill": "#6BA6FF"
      },
      {
        "d": "M27.6191 43L27.6191 13C27.6191 11.8954 28.5359 11 29.6667 11C30.7976 11 31.7143 11.8954 31.7143 13L31.7143 43C31.7143 44.1046 30.7976 45 29.6667 45C28.5359 45 27.6191 44.1046 27.6191 43Z",
        "fill-rule": "evenodd",
        "fill": "#4187FF"
      },
      {
        "d": "M43.0473 5C43.0473 3.89543 42.1306 3 40.9997 3C39.8689 3 38.9521 3.89543 38.9521 5L38.9521 43C38.9521 44.1046 39.8689 45 40.9997 45C42.1306 45 43.0473 44.1046 43.0473 43L43.0473 5Z",
        "fill-rule": "evenodd",
        "fill": "#1764FF"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M41.0001 3C39.8739 3 38.9525 3.9 38.9525 5L38.9525 43C38.9525 44.1 39.8739 45 41.0001 45C42.1263 45 43.0477 44.1 43.0477 43L43.0477 5C43.0477 3.9 42.1263 3 41.0001 3ZM29.6668 45C30.793 45 31.7144 44.1 31.7144 43L31.7144 13C31.7144 11.9 30.793 11 29.6668 11C28.5406 11 27.6192 11.9 27.6192 13L27.6192 43C27.6192 44.1 28.5406 45 29.6668 45ZM18.3334 45C19.4595 45 20.3808 44.1 20.3808 43L20.3808 21C20.3808 19.9 19.4595 19 18.3334 19C17.2073 19 16.286 19.9 16.286 21L16.286 43C16.286 44.1 17.2073 45 18.3334 45ZM7.00024 45C8.12642 45 9.04784 44.1 9.04784 43L9.04784 28C9.04784 26.9 8.12642 26 7.00024 26C5.87406 26 4.95264 26.9 4.95264 28L4.95264 43C4.95264 44.1 5.87406 45 7.00024 45Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getConnect_signal(mode = 'outline') {
            return Connect_signalIcon[mode] || Connect_signalIcon['outline'];
        }
        
        export const Connect_signalModes = Object.keys(Connect_signalIcon);
        
        // 导出图标数据本身
        export const Connect_signal = Connect_signalIcon;