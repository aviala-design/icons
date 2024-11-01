const Interaction_sendIcon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4.1324 13.3671L9.8824 22.9571C10.2724 23.5971 10.2624 24.3871 9.8924 25.0271L4.12241 34.6171C1.0624 39.7171 6.4724 45.6771 11.8524 43.1271L40.7524 29.4071C45.3224 27.2371 45.3124 20.7271 40.7324 18.5571L11.8424 4.86708C6.4824 2.32708 1.0824 8.27708 4.1324 13.3671ZM14.1699 23.98C14.1699 22.88 15.0699 21.98 16.1699 21.98L28.1699 21.98C29.2699 21.98 30.1699 22.88 30.1699 23.98C30.1699 25.08 29.2699 25.98 28.1699 25.98L16.1699 25.98C15.0699 25.98 14.1699 25.08 14.1699 23.98Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M4.13248 14.1059L10.5025 24.7159L4.12248 35.3559C1.06248 40.4559 6.47248 46.4159 11.8525 43.8659L40.7525 30.1459C45.3225 27.9759 45.3125 21.4659 40.7325 19.2959L11.8425 5.60589C6.48248 3.06589 1.08248 9.01589 4.13248 14.1059ZM7.56248 12.0559L13.9325 22.6559C13.9425 22.6759 13.9625 22.6959 13.9725 22.7159L25.0225 22.7159C26.1121 22.7283 26.9996 23.6465 26.9996 24.7389C26.9996 25.8389 26.1225 26.7158 25.0225 26.7158L24.6972 26.7158L24.6971 26.7159L13.9725 26.7159C13.9525 26.7359 13.9425 26.7559 13.9325 26.7859L7.55248 37.4159C6.53248 39.1259 8.33248 41.1059 10.1325 40.2559L39.0325 26.5359C40.5525 25.8059 40.5525 23.6359 39.0225 22.9159L10.1325 9.21589C8.34248 8.36589 6.55248 10.3559 7.56248 12.0459L7.56248 12.0559Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getInteraction_send(mode = 'outline') {
            return Interaction_sendIcon[mode] || Interaction_sendIcon['outline'];
        }
        
        export const Interaction_sendModes = Object.keys(Interaction_sendIcon);
        
        // 导出图标数据本身
        export const Interaction_send = Interaction_sendIcon;