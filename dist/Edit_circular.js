const Edit_circularIcon = {
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M31.7847 5.57272C29.3062 4.52424 26.7112 4 23.9997 4C21.2882 4 18.6932 4.52424 16.2147 5.57272C13.8218 6.58497 11.703 8.0135 9.85821 9.85832C8.01343 11.7031 6.58492 13.822 5.57269 16.215C4.52423 18.6935 4 21.2886 4 24.0001C4 26.7116 4.52423 29.3067 5.57269 31.7852C6.58492 34.1782 8.01343 36.2971 9.85821 38.1419C11.703 39.9867 13.8218 41.4152 16.2147 42.4275C18.6932 43.476 21.2882 44.0002 23.9997 44.0002C26.7112 44.0002 29.3062 43.476 31.7847 42.4275C34.1776 41.4152 36.2964 39.9867 38.1412 38.1419C39.986 36.2971 41.4145 34.1782 42.4268 31.7852C43.4752 29.3067 43.9994 26.7116 43.9994 24.0001C43.9994 21.2886 43.4752 18.6935 42.4268 16.215C41.4145 13.822 39.986 11.7031 38.1412 9.85832C36.2964 8.0135 34.1776 6.58497 31.7847 5.57272ZM17.773 9.25669C19.7535 8.41891 21.8291 8.00002 23.9997 8.00002C26.1703 8.00002 28.2459 8.41891 30.2264 9.25669C32.1403 10.0663 33.8358 11.2097 35.3129 12.6868C36.7899 14.1638 37.9332 15.8593 38.7428 17.7733C39.5806 19.7538 39.9995 21.8294 39.9995 24.0001C39.9995 26.1708 39.5806 28.2464 38.7428 30.2269C37.9332 32.1409 36.7899 33.8364 35.3129 35.3135C33.8358 36.7905 32.1403 37.9339 30.2264 38.7435C28.2459 39.5813 26.1703 40.0002 23.9997 40.0002C21.8291 40.0002 19.7535 39.5813 17.773 38.7435C15.8591 37.9339 14.1636 36.7905 12.6866 35.3135C11.2095 33.8364 10.0662 32.1409 9.25658 30.2269C8.41882 28.2464 7.99994 26.1708 7.99994 24.0001C7.99994 21.8294 8.41882 19.7538 9.25658 17.7733C10.0662 15.8593 11.2095 14.1638 12.6866 12.6868C14.1636 11.2097 15.8591 10.0663 17.773 9.25669Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_circular(mode = 'outline') {
            return Edit_circularIcon[mode] || Edit_circularIcon['outline'];
        }
        
        export const Edit_circularModes = Object.keys(Edit_circularIcon);
        
        // 导出图标数据本身
        export const Edit_circular = Edit_circularIcon;