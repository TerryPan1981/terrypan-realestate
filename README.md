# 潘睿豐 Terry Pan｜房仲個人網站

新北板橋江翠北側重劃區房仲顧問個人形象網站。純靜態 HTML／CSS／JS，無需建置工具。

## 內容區塊

1. 形象照 Hero
2. 服務區域（板橋江翠北側重劃區，含 Google 地圖）
3. 戰績（112、113 年度連續兩年 TOP1）
4. 服務項目（資產配置、稅務諮詢、不動產租賃、不動產買賣、室內設計裝修諮詢）
5. 預約諮詢（LINE QR、電話、線上預約）

## SEO

- title／meta description／keywords 針對「板橋房仲」「江翠北側重劃區」
- Open Graph／Twitter Card
- schema.org `RealEstateAgent` 結構化資料
- 語意化標題階層與圖片 alt

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可。

## 串接線上預約系統

預約系統是另一個獨立專案（Next.js）。部署完成後，把網址填進 `script.js`：

```js
const BOOKING_URL = 'https://你的預約系統網址/card/booking';
```

填好後，預約區塊的「線上預約看屋」按鈕會自動出現；留空則不顯示，避免產生死連結。

## 檔案結構

```
├── index.html
├── styles.css
├── script.js
└── assets/images/
    ├── profile.png   個人形象照
    └── line-qr.png   LINE 官方帳號 QR
```
