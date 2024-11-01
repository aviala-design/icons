const Symbol_dashboardIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45ZM24 7C33.3888 7 41 14.6112 41 24C41 33.3888 33.3888 41 24 41C14.6112 41 7 33.3888 7 24C7 14.6112 14.6112 7 24 7Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.53",
        "fill": "currentColor"
      },
      {
        "d": "M32.319 13.3171C33.1358 13.0159 33.8653 13.1591 34.5075 13.7469C35.0953 14.3891 35.2386 15.1186 34.9373 15.9354C34.2456 17.5828 33.4884 19.2951 32.6656 21.0724C31.939 22.642 31.2987 23.9472 30.7448 24.9878C29.9807 26.4233 29.3493 27.3904 28.8507 27.889C26.5075 30.2322 22.7085 30.2322 20.3654 27.889C18.0223 25.5459 18.0223 21.7469 20.3654 19.4038C20.864 18.9051 21.8311 18.2737 23.2666 17.5096C24.3073 16.9557 25.6124 16.3154 27.1821 15.5888C28.9593 14.7661 30.6716 14.0088 32.319 13.3171ZM29.1843 19.0701C29.0773 19.1194 28.97 19.1689 28.8624 19.2187C27.3601 19.9142 26.1213 20.5215 25.1461 21.0406C24.59 21.3366 24.134 21.5964 23.7783 21.8199C23.4695 22.0139 23.2747 22.1513 23.1938 22.2322C22.4128 23.0133 22.4128 24.2796 23.1938 25.0606C23.9749 25.8417 25.2412 25.8417 26.0223 25.0606C26.1031 24.9797 26.2406 24.7849 26.4346 24.4762C26.6581 24.1204 26.9178 23.6645 27.2139 23.1083C27.733 22.1331 28.3402 20.8944 29.0357 19.392C29.0855 19.2845 29.135 19.1772 29.1843 19.0701Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  },
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M3 24C3 12.4 12.4 3 24 3C35.6 3 45 12.4 45 24C45 35.6 35.6 45 24 45C12.4 45 3 35.6 3 24ZM32.7752 13.8954C25.6901 17.1481 21.5889 19.3401 20.4646 20.4644C18.513 22.416 18.513 25.5838 20.4646 27.5354C22.4162 29.487 25.584 29.487 27.5356 27.5354C28.6599 26.4111 30.8519 22.3099 34.1046 15.2248C34.4935 14.3833 33.6167 13.5065 32.7752 13.8954Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M24 3C12.4 3 3 12.4 3 24C3 35.6 12.4 45 24 45C35.6 45 45 35.6 45 24C45 12.4 35.6 3 24 3ZM24 41C33.39 41 41 33.39 41 24C41 14.61 33.39 7 24 7C14.61 7 7 14.61 7 24C7 33.39 14.61 41 24 41ZM32.3226 13.3156C25.5768 16.144 21.5959 18.1733 20.3655 19.4037C18.025 21.7442 18.025 25.5484 20.3655 27.8889C22.706 30.2294 26.5102 30.2294 28.8507 27.8889C30.074 26.6656 32.1104 22.6776 34.9388 15.9318C35.6247 14.2843 33.9701 12.6297 32.3226 13.3156ZM23.1939 22.2321C22.4161 23.0099 22.4161 24.2827 23.1939 25.0605C23.9717 25.8383 25.2445 25.8383 26.0223 25.0605C26.6375 24.4453 27.7123 22.423 29.2537 19.0007C25.8314 20.5421 23.8091 21.6169 23.1939 22.2321Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getSymbol_dashboard(mode = 'outline') {
            return Symbol_dashboardIcon[mode] || Symbol_dashboardIcon['outline'];
        }
        
        export const Symbol_dashboardModes = Object.keys(Symbol_dashboardIcon);
        
        // 导出图标数据本身
        export const Symbol_dashboard = Symbol_dashboardIcon;