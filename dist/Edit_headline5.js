const Edit_headline5Icon = {
  "colorful": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M5.99994 43.5001C7.10451 43.5001 7.99996 42.6047 7.99999 41.5001L8.00097 6.50011C8.001 5.39551 7.1056 4.50009 6.00103 4.50006C4.89646 4.50003 4.001 5.3954 4.00097 6.5L3.99999 41.5C3.99996 42.6046 4.89537 43.5 5.99994 43.5001Z",
        "fill-rule": "evenodd",
        "fill": "#4187FF"
      },
      {
        "d": "M27.9981 23.5C27.9981 22.3954 27.1026 21.5 25.998 21.5001L5.99994 21.5011C4.89534 21.5011 3.99998 22.3966 4.00003 23.5012C4.00009 24.6057 4.89553 25.5011 6.00013 25.5011L25.9982 25.5001C27.1028 25.5 27.9982 24.6046 27.9981 23.5Z",
        "fill-rule": "evenodd",
        "fill": "#4187FF"
      },
      {
        "d": "M25.9999 43.5C27.1045 43.5001 28 42.6047 28 41.5001L28.0008 6.5001C28.0009 5.3955 27.1055 4.50008 26.0009 4.50005C24.8963 4.50002 24.0009 5.3954 24.0008 6.5L24 41.5C24 42.6046 24.8954 43.5 25.9999 43.5Z",
        "fill-rule": "evenodd",
        "fill": "#4187FF"
      },
      {
        "d": "M34.5 36.08L34.5 35C34.5 33.8954 33.6046 33 32.5 33C31.3954 33 30.5 33.8954 30.5 35L30.5 36.08C30.5 41.0267 32.95 43.5 37.85 43.5C40.4117 43.5 42.3215 42.664 43.5794 40.9921C44.5265 39.7333 45 38.0959 45 36.08L45 33.69C45 30.3005 44.0108 27.9416 42.0323 26.6133C40.9268 25.8711 39.416 25.5 37.5 25.5C36.7484 25.5 35.9617 25.5851 35.1397 25.7554L35.4025 20.5L43 20.5C44.1046 20.5 45 19.6046 45 18.5C45 17.3954 44.1046 16.5 43 16.5L33.5 16.5C32.4342 16.5 31.5557 17.3357 31.5025 18.4001L31.0025 28.4001C30.9297 29.8562 32.3892 30.8984 33.7428 30.357C35.171 29.7857 36.4235 29.5 37.5 29.5C38.6039 29.5 39.3715 29.6448 39.8027 29.9343C40.6009 30.4702 41 31.7221 41 33.69L41 36.08C41 38.36 39.95 39.5 37.85 39.5C35.6167 39.5 34.5 38.36 34.5 36.08Z",
        "fill-rule": "evenodd",
        "fill": "#1764FF"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M5.99994 43.5C7.10451 43.5 7.99994 42.6046 7.99994 41.5L7.99994 25.5L23.9999 25.5L23.9999 41.5C23.9999 42.6046 24.8953 43.5 25.9999 43.5C27.1045 43.5 27.9999 42.6046 27.9999 41.5L27.9999 6.5C27.9999 5.3954 27.1045 4.5 25.9999 4.5C24.8953 4.5 23.9999 5.3954 23.9999 6.5L23.9999 21.5L7.99994 21.5L7.99994 6.5C7.99994 5.3954 7.10451 4.5 5.99994 4.5C4.89537 4.5 3.99994 5.3954 3.99994 6.5L3.99994 41.5C3.99994 42.6046 4.89537 43.5 5.99994 43.5ZM34.5 35L34.5 36.08C34.5 38.36 35.6167 39.5 37.85 39.5C39.95 39.5 41 38.36 41 36.08L41 33.69C41 31.7221 40.6009 30.4702 39.8027 29.9343C39.3715 29.6448 38.6039 29.5 37.5 29.5C36.4235 29.5 35.1711 29.7857 33.7428 30.357C32.3892 30.8984 30.9297 29.8562 31.0025 28.4001L31.5025 18.4001C31.5557 17.3357 32.4343 16.5 33.5 16.5L43 16.5C44.1046 16.5 45 17.3954 45 18.5C45 19.6046 44.1046 20.5 43 20.5L35.4025 20.5L35.1397 25.7554C35.9617 25.5851 36.7484 25.5 37.5 25.5C39.416 25.5 40.9268 25.8711 42.0323 26.6133C44.0108 27.9416 45 30.3005 45 33.69L45 36.08C45 38.0959 44.5265 39.7333 43.5794 40.9921C42.3215 42.664 40.4117 43.5 37.85 43.5C32.95 43.5 30.5 41.0267 30.5 36.08L30.5 35C30.5 33.8954 31.3954 33 32.5 33C33.6046 33 34.5 33.8954 34.5 35Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_headline5(mode = 'outline') {
            return Edit_headline5Icon[mode] || Edit_headline5Icon['outline'];
        }
        
        export const Edit_headline5Modes = Object.keys(Edit_headline5Icon);
        
        // 导出图标数据本身
        export const Edit_headline5 = Edit_headline5Icon;