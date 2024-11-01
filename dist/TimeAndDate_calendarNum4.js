const TimeAndDate_calendarNum4Icon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4 12L4 14L44 14L44 12C44 7.58172 40.4183 4 36 4L12 4C7.58172 4 4 7.58172 4 12ZM12 44C7.58172 44 4 40.4183 4 36L4 18L44 18L44 36C44 40.4183 40.4183 44 36 44L12 44ZM21.723 32.442L26.651 21.992L22.911 21.992L18.093 31.826L18.093 35.566L24.869 35.566L24.869 37.942L28.323 37.942L28.323 35.566L29.973 35.566L29.973 32.442L28.323 32.442L28.323 27.162L24.869 27.162L24.869 32.442L21.723 32.442Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4 36L4 12C4 7.58172 7.58172 4 12 4L36 4C40.4183 4 44 7.58172 44 12L44 36C44 40.4183 40.4183 44 36 44L12 44C7.58172 44 4 40.4183 4 36ZM40 13.9972L40 12C40 9.79086 38.2091 8 36 8L12 8C9.79086 8 8 9.79086 8 12L8 13.9517L40 13.9972ZM8 17.9517L40 17.9972L40 36C40 38.2091 38.2091 40 36 40L12 40C9.79086 40 8 38.2091 8 36L8 17.9517ZM21.7228 31.4419L26.6508 20.9919L22.9108 20.9919L18.0928 30.8259L18.0928 34.5659L24.8688 34.5659L24.8688 36.9419L28.3228 36.9419L28.3228 34.5659L29.9728 34.5659L29.9728 31.4419L28.3228 31.4419L28.3228 26.1619L24.8688 26.1619L24.8688 31.4419L21.7228 31.4419Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getTimeAndDate_calendarNum4(mode = 'outline') {
            return TimeAndDate_calendarNum4Icon[mode] || TimeAndDate_calendarNum4Icon['outline'];
        }
        
        export const TimeAndDate_calendarNum4Modes = Object.keys(TimeAndDate_calendarNum4Icon);
        
        // 导出图标数据本身
        export const TimeAndDate_calendarNum4 = TimeAndDate_calendarNum4Icon;