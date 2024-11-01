const TimeAndDate_calendarNum6Icon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4 12L4 14L44 14L44 12C44 7.58172 40.4183 4 36 4L12 4C7.58172 4 4 7.58172 4 12ZM12 44C7.58172 44 4 40.4183 4 36L4 18L44 18L44 36C44 40.4183 40.4183 44 36 44L12 44ZM23.109 27.58L26.497 21.992L22.955 21.992L19.083 28.394C18.7017 29.01 18.3643 29.6847 18.071 30.418C17.7777 31.1513 17.631 31.8773 17.631 32.596C17.631 33.476 17.7923 34.257 18.115 34.939C18.4377 35.621 18.885 36.1967 19.457 36.666C20.029 37.1353 20.7037 37.4947 21.481 37.744C22.2583 37.9933 23.0943 38.118 23.989 38.118C24.913 38.118 25.7637 37.9933 26.541 37.744C27.3183 37.4947 27.9893 37.1353 28.554 36.666C29.1187 36.1967 29.5623 35.6137 29.885 34.917C30.2077 34.2203 30.369 33.4247 30.369 32.53C30.369 31.5327 30.182 30.704 29.808 30.044C29.434 29.384 28.9647 28.8597 28.4 28.471C27.8353 28.0823 27.2157 27.8073 26.541 27.646C25.8663 27.4847 25.2283 27.404 24.627 27.404C24.055 27.404 23.549 27.4627 23.109 27.58ZM21.998 34.301C21.5213 33.927 21.283 33.388 21.283 32.684C21.283 31.8333 21.525 31.2283 22.009 30.869C22.493 30.5097 23.1677 30.33 24.033 30.33C24.913 30.33 25.595 30.506 26.079 30.858C26.563 31.21 26.805 31.8113 26.805 32.662C26.805 33.454 26.5483 34.0187 26.035 34.356C25.5217 34.6933 24.8763 34.862 24.099 34.862C23.175 34.862 22.4747 34.675 21.998 34.301Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4 36L4 12C4 7.58172 7.58172 4 12 4L36 4C40.4183 4 44 7.58172 44 12L44 36C44 40.4183 40.4183 44 36 44L12 44C7.58172 44 4 40.4183 4 36ZM40 13.9972L40 12C40 9.79086 38.2091 8 36 8L12 8C9.79086 8 8 9.79086 8 12L8 13.9517L40 13.9972ZM8 17.9517L40 17.9972L40 36C40 38.2091 38.2091 40 36 40L12 40C9.79086 40 8 38.2091 8 36L8 17.9517ZM23.1089 26.5799L26.4969 20.9919L22.9549 20.9919L19.0829 27.3939C19.0829 27.3939 18.5109 28.3179 18.0709 29.4179C18.0709 29.4179 17.6309 30.5179 17.6309 31.5959C17.6309 31.5959 17.6309 32.9159 18.1149 33.9389C18.1149 33.9389 18.5989 34.9619 19.4569 35.6659C19.4569 35.6659 20.3149 36.3699 21.4809 36.7439C21.4809 36.7439 22.6469 37.1179 23.9889 37.1179C23.9889 37.1179 25.3749 37.1179 26.5409 36.7439C26.5409 36.7439 27.7069 36.3699 28.5539 35.6659C28.5539 35.6659 29.4009 34.9619 29.8849 33.9169C29.8849 33.9169 30.3689 32.8719 30.3689 31.5299C30.3689 31.5299 30.3689 30.0339 29.8079 29.0439C29.8079 29.0439 29.2469 28.0539 28.3999 27.4709C28.3999 27.4709 27.5529 26.8879 26.5409 26.6459C26.5409 26.6459 25.5289 26.4039 24.6269 26.4039C24.6269 26.4039 23.7689 26.4039 23.1089 26.5799ZM21.9979 33.3009C21.9979 33.3009 21.2829 32.7399 21.2829 31.6839C21.2829 31.6839 21.2829 30.4079 22.0089 29.8689C22.0089 29.8689 22.7349 29.3299 24.0329 29.3299C24.0329 29.3299 25.3529 29.3299 26.0789 29.8579C26.0789 29.8579 26.8049 30.3859 26.8049 31.6619C26.8049 31.6619 26.8049 32.8499 26.0349 33.3559C26.0349 33.3559 25.2649 33.8619 24.0989 33.8619C24.0989 33.8619 22.7129 33.8619 21.9979 33.3009Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getTimeAndDate_calendarNum6(mode = 'outline') {
            return TimeAndDate_calendarNum6Icon[mode] || TimeAndDate_calendarNum6Icon['outline'];
        }
        
        export const TimeAndDate_calendarNum6Modes = Object.keys(TimeAndDate_calendarNum6Icon);
        
        // 导出图标数据本身
        export const TimeAndDate_calendarNum6 = TimeAndDate_calendarNum6Icon;