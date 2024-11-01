const TimeAndDate_calendarNum1Icon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4 12L4 14L44 14L44 12C44 7.58172 40.4183 4 36 4L12 4C7.58172 4 4 7.58172 4 12ZM12 44C7.58172 44 4 40.4183 4 36L4 18L44 18L44 36C44 40.4183 40.4183 44 36 44L12 44ZM23.6205 25.7099L23.6205 37.9419L26.8765 37.9419L26.8765 21.9919L24.1265 21.9919L19.3525 24.4339L19.3525 27.7559L23.6205 25.7099Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4 36L4 12C4 7.58172 7.58172 4 12 4L36 4C40.4183 4 44 7.58172 44 12L44 36C44 40.4183 40.4183 44 36 44L12 44C7.58172 44 4 40.4183 4 36ZM40 13.9972L40 12C40 9.79086 38.2091 8 36 8L12 8C9.79086 8 8 9.79086 8 12L8 13.9517L40 13.9972ZM8 17.9517L40 17.9972L40 36C40 38.2091 38.2091 40 36 40L12 40C9.79086 40 8 38.2091 8 36L8 17.9517ZM23.6205 24.7099L23.6205 36.9419L26.8765 36.9419L26.8765 20.9919L24.1265 20.9919L19.3525 23.4339L19.3525 26.7559L23.6205 24.7099Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getTimeAndDate_calendarNum1(mode = 'outline') {
            return TimeAndDate_calendarNum1Icon[mode] || TimeAndDate_calendarNum1Icon['outline'];
        }
        
        export const TimeAndDate_calendarNum1Modes = Object.keys(TimeAndDate_calendarNum1Icon);
        
        // 导出图标数据本身
        export const TimeAndDate_calendarNum1 = TimeAndDate_calendarNum1Icon;