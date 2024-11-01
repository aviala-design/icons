const Edit_animationIcon = {
  "fill": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M42.4978 22.9626C45.5199 20.6714 43.9544 15.8533 40.1627 15.776L30.84 15.586L27.7785 6.77824C26.5333 3.19599 21.4671 3.19599 20.2219 6.77824L17.1604 15.586L7.83767 15.776C4.04602 15.8533 2.48052 20.6714 5.50261 22.9626L12.9331 28.5961L12.9332 28.5961L10.233 37.5212C9.13472 41.1512 13.2333 44.129 16.3463 41.9628L24.0002 36.6368L31.6541 41.9628C34.767 44.129 38.8657 41.1511 37.7675 37.5212L35.0672 28.5961L35.0673 28.5961L42.4978 22.9626Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  },
  "outline": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M43.3932 23.9132C46.3608 21.0205 44.7232 15.9806 40.6221 15.3847L32.7551 14.2415C32.4082 14.1911 32.1572 14.0088 32.0021 13.6945L28.4839 6.56574C26.6498 2.84951 21.3506 2.84951 19.5165 6.56574L15.9983 13.6945C15.8432 14.0088 15.5922 14.1912 15.2453 14.2416L7.37832 15.3847C3.27716 15.9806 1.6396 21.0205 4.60722 23.9132L10.2999 29.4621C10.5509 29.7068 10.6468 30.0018 10.5875 30.3473L9.24358 38.1825C8.54301 42.2671 12.8302 45.3819 16.4983 43.4534L23.5349 39.7541C23.8451 39.591 24.1553 39.591 24.4655 39.7541L31.5021 43.4534C35.1702 45.3818 39.4574 42.267 38.7568 38.1825L37.4129 30.3473C37.3536 30.0018 37.4495 29.7068 37.7005 29.4621L43.3932 23.9132ZM32.1799 18.2L40.0469 19.3431C40.8672 19.4623 41.1947 20.4703 40.6012 21.0488L34.9085 26.5978C33.6536 27.821 33.1742 29.2962 33.4705 31.0235L34.8144 38.8587C34.9545 39.6756 34.097 40.2985 33.3634 39.9129L26.3269 36.2136C24.7758 35.3981 23.2246 35.3981 21.6735 36.2136L14.637 39.9129C13.9033 40.2986 13.0459 39.6756 13.186 38.8587L14.5299 31.0235C14.8262 29.2962 14.3468 27.821 13.0919 26.5977L7.39926 21.0488C6.80572 20.4703 7.13323 19.4623 7.95348 19.3431L15.8205 18.2C17.5547 17.948 18.8096 17.0363 19.5852 15.4648L23.1035 8.336C23.4703 7.59275 24.5301 7.59275 24.8969 8.336L28.4152 15.4648C29.1908 17.0363 30.4457 17.948 32.1799 18.2Z",
        "fill-rule": "evenodd",
        "fill": "#000000"
      }
    ]
  }
};
        
        export function getEdit_animation(mode = 'outline') {
            return Edit_animationIcon[mode] || Edit_animationIcon['outline'];
        }
        
        export const Edit_animationModes = Object.keys(Edit_animationIcon);
        
        // 导出图标数据本身
        export const Edit_animation = Edit_animationIcon;