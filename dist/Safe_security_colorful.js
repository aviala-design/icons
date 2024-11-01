const Safe_security_colorfulIcon = {
  "black": {
    "viewBox": "0 0 48 48",
    "paths": [
      {
        "d": "M6.33527 10.1322C6.11176 10.7718 6 11.4313 6 12.1109L6 25.9933C6 29.4503 6.76765 32.5254 8.30295 35.2186C9.5722 37.4451 11.3313 39.3513 13.5801 40.9372C15.2593 42.1214 17.1537 43.0886 19.2634 43.8387C20.5887 44.3099 21.8819 44.6595 23.1431 44.8874C23.7134 44.9905 24.2813 44.9911 24.8467 44.8893C26.1045 44.6627 27.3954 44.3145 28.7194 43.8448C30.8302 43.0959 32.726 42.1298 34.4067 40.9465C36.659 39.3608 38.4208 37.4543 39.6923 35.2269C41.2308 32.5318 42 29.4539 42 25.9933L42 12.1109C42 11.4313 41.8882 10.7718 41.6647 10.1322C41.447 9.5091 41.1346 8.93715 40.7276 8.41632C40.3206 7.89547 39.8411 7.45413 39.2891 7.09227C38.7225 6.72081 38.1095 6.45296 37.4501 6.28873L25.4501 3.29996C24.4834 3.05919 23.5166 3.05919 22.5499 3.29996L10.5499 6.28873C9.89054 6.45296 9.27753 6.72081 8.7109 7.09227C8.15892 7.45413 7.67942 7.89547 7.2724 8.41632C6.86537 8.93715 6.55299 9.5091 6.33527 10.1322ZM10 25.9933L10 12.1109C10 11.6517 10.1414 11.2412 10.4241 10.8793C10.7069 10.5175 11.0711 10.2811 11.5166 10.1702L23.5166 7.18139C23.8389 7.10113 24.1611 7.10113 24.4834 7.18139L36.4834 10.1702C36.9289 10.2811 37.2931 10.5175 37.5759 10.8793C37.8586 11.2412 38 11.6517 38 12.1109L38 25.9933C38 31.0143 36.0347 34.9085 32.104 37.6758C30.7222 38.6487 29.1482 39.4484 27.382 40.075C26.2629 40.4721 25.1814 40.7646 24.1376 40.9526C24.0457 40.9692 23.9514 40.9687 23.8545 40.9512C22.8074 40.7619 21.7237 40.4681 20.6034 40.0698C18.8384 39.4422 17.2657 38.6417 15.8854 37.6683C11.9618 34.9014 10 31.0097 10 25.9933Z",
        "fill-rule": "evenodd",
        "fill-opacity": "0.71",
        "fill": "currentColor"
      },
      {
        "d": "M40.9195 32.5678C40.6563 33.3649 39.9053 33.9401 39.02 33.9401C37.9154 33.9401 37.02 33.0447 37.02 31.9401C37.02 31.6879 37.0667 31.4466 37.1519 31.2244C37.3564 30.6403 37.5589 29.5864 37.7594 28.0627C37.8627 27.2775 37.9429 26.558 38 25.9041L38 12.1151C38 11.656 37.8587 11.2456 37.576 10.8838C37.2934 10.522 36.9294 10.2856 36.4839 10.1745L24.4839 7.18203C24.1613 7.10158 23.8387 7.10158 23.5161 7.18203L11.5161 10.1745C11.0706 10.2856 10.7066 10.522 10.424 10.8838C10.1413 11.2456 10 11.656 10 12.1151L10 25.9901C10 28.0143 10.3164 29.8499 10.9492 31.4969C11.0464 31.732 11.1 31.9898 11.1 32.2601C11.1 33.3647 10.2046 34.2601 9.1 34.2601C8.2331 34.2601 7.49501 33.7085 7.21753 32.9372C6.40584 30.827 6 28.5113 6 25.9901L6 12.1151C6 11.4357 6.11171 10.7763 6.33512 10.1368C6.55275 9.51388 6.86499 8.94202 7.27185 8.42124C7.67872 7.90046 8.15803 7.45912 8.70981 7.09722C9.27624 6.72572 9.88904 6.45777 10.5482 6.29339L22.5482 3.30089C23.5161 3.05953 24.4839 3.05953 25.4518 3.30089L37.4518 6.29339C38.111 6.45777 38.7238 6.72572 39.2902 7.09722C39.842 7.45912 40.3213 7.90046 40.7281 8.42124C41.135 8.94202 41.4472 9.51389 41.6649 10.1368C41.8883 10.7763 42 11.4357 42 12.1151L42 26.075L41.9928 26.1596C41.9301 26.8967 41.8409 27.705 41.7252 28.5845C41.4879 30.3884 41.2193 31.7161 40.9195 32.5678Z",
        "fill-rule": "evenodd",
        "fill": "currentColor"
      }
    ]
  }
};
        
        export function getSafe_security_colorful(mode = 'outline') {
            return Safe_security_colorfulIcon[mode] || Safe_security_colorfulIcon['outline'];
        }
        
        export const Safe_security_colorfulModes = Object.keys(Safe_security_colorfulIcon);
        
        // 导出图标数据本身
        export const Safe_security_colorful = Safe_security_colorfulIcon;