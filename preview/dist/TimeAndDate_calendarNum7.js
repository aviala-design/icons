const TimeAndDate_calendarNum7Icon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4 12L4 14L44 14L44 12C44 7.58172 40.4183 4 36 4L12 4C7.58172 4 4 7.58172 4 12ZM12 44C7.58172 44 4 40.4183 4 36L4 18L44 18L44 36C44 40.4183 40.4183 44 36 44L12 44ZM19.501 37.942L23.219 37.942L29.841 25.138L29.841 21.992L18.093 21.992L18.093 25.05L26.255 25.05L19.501 37.942Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4 36L4 12C4 7.58172 7.58172 4 12 4L36 4C40.4183 4 44 7.58172 44 12L44 36C44 40.4183 40.4183 44 36 44L12 44C7.58172 44 4 40.4183 4 36ZM40 13.9972L40 12C40 9.79086 38.2091 8 36 8L12 8C9.79086 8 8 9.79086 8 12L8 13.9517L40 13.9972ZM8 17.9517L40 17.9972L40 36C40 38.2091 38.2091 40 36 40L12 40C9.79086 40 8 38.2091 8 36L8 17.9517ZM19.5008 36.9419L23.2188 36.9419L29.8408 24.1379L29.8408 20.9919L18.0928 20.9919L18.0928 24.0499L26.2548 24.0499L19.5008 36.9419Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getTimeAndDate_calendarNum7(mode = 'outline') {
            return TimeAndDate_calendarNum7Icon[mode] || TimeAndDate_calendarNum7Icon['outline'];
        }
        
        export const TimeAndDate_calendarNum7Modes = Object.keys(TimeAndDate_calendarNum7Icon);
        
        // 导出图标数据本身
        export const TimeAndDate_calendarNum7 = TimeAndDate_calendarNum7Icon;