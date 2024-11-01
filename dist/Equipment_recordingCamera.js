const Equipment_recordingCameraIcon = {
  "fill-colorful": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M29 40L10.5 40C7.19 40 4.5 37.31 4.5 34L4.5 14C4.5 10.69 7.19 8 10.5 8L29 8C32.31 8 35 10.69 35 14L35 17.0733L38 15.34C40.67 13.8 44 15.72 44 18.8L44 29.2C44 32.28 40.67 34.2 38 32.66L35 30.9267L35 34C35 37.31 32.31 40 29 40Z",
        "fill-rule": "evenodd",
        "fill": "#2A2A2A"
      },
      {
        "d": "M10.5 42L29 42C33.2886 42 36.7891 38.6254 36.9908 34.3867L37.0007 34.3925C41.0036 36.7013 46 33.821 46 29.2L46 18.8C46 14.1868 40.9969 11.3026 36.9994 13.6083L36.9908 13.6133C36.7891 9.37459 33.2886 6 29 6L10.5 6C6.08172 6 2.5 9.58172 2.5 14L2.5 34C2.5 38.4183 6.08172 42 10.5 42ZM33 34C33 36.2091 31.2091 38 29 38L10.5 38C8.29086 38 6.5 36.2091 6.5 34L6.5 14C6.5 11.7909 8.29086 10 10.5 10L29 10C31.2091 10 33 11.7909 33 14L33 17.0733C33 18.6132 34.6672 19.5754 36.0006 18.8051L39.0006 17.0717C40.3288 16.3056 42 17.2652 42 18.8L42 29.2C42 30.7426 40.3355 31.6982 38.9993 30.9275L36.0005 29.195C34.6672 28.4246 33 29.3868 33 30.9267L33 34Z",
        "fill-rule": "evenodd",
        "fill": "#555555"
      },
      {
        "d": "M18 18.5C18 19.8807 16.8807 21 15.5 21C14.1193 21 13 19.8807 13 18.5C13 17.1193 14.1193 16 15.5 16C16.8807 16 18 17.1193 18 18.5Z",
        "fill": "#AAAAAA"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M37 34.39C41 36.7 46 33.82 46 29.2L46 18.8C46 14.19 41 11.3 37 13.61L36.99 13.61C36.79 9.37 33.29 6 29 6L10.5 6C6.08 6 2.5 9.58 2.5 14L2.5 34C2.5 38.42 6.08 42 10.5 42L29 42C33.29 42 36.79 38.63 36.99 34.39L37 34.39ZM13 18.5C13 17.12 14.12 16 15.5 16C16.88 16 18 17.12 18 18.5C18 19.88 16.88 21 15.5 21C14.12 21 13 19.88 13 18.5Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M10.5 42L29 42C33.2886 42 36.7891 38.6254 36.9908 34.3867L37.0007 34.3925C41.0036 36.7013 46 33.821 46 29.2L46 18.8C46 14.1868 40.9969 11.3026 36.9994 13.6083L36.9908 13.6133C36.7891 9.37459 33.2886 6 29 6L10.5 6C6.08172 6 2.5 9.58172 2.5 14L2.5 34C2.5 38.4183 6.08172 42 10.5 42ZM33 34C33 36.2091 31.2091 38 29 38L10.5 38C8.29086 38 6.5 36.2091 6.5 34L6.5 14C6.5 11.7909 8.29086 10 10.5 10L29 10C31.2091 10 33 11.7909 33 14L33 17.0733C33 18.6132 34.6672 19.5754 36.0006 18.8051L39.0006 17.0717C40.3288 16.3056 42 17.2652 42 18.8L42 29.2C42 30.7426 40.3355 31.6982 38.9993 30.9275L36.0005 29.195C34.6672 28.4246 33 29.3868 33 30.9267L33 34Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      },
      {
        "d": "M18 18.5C18 19.8807 16.8807 21 15.5 21C14.1193 21 13 19.8807 13 18.5C13 17.1193 14.1193 16 15.5 16C16.8807 16 18 17.1193 18 18.5Z",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEquipment_recordingCamera(mode = 'outline') {
            return Equipment_recordingCameraIcon[mode] || Equipment_recordingCameraIcon['outline'];
        }
        
        export const Equipment_recordingCameraModes = Object.keys(Equipment_recordingCameraIcon);
        
        // 导出图标数据本身
        export const Equipment_recordingCamera = Equipment_recordingCameraIcon;