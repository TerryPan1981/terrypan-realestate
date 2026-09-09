# 潘睿豐 Terry Pan｜房仲個人網站

新北市板橋區江翠北側重劃區房仲顧問個人形象網站。
純靜態 HTML／CSS／JS，**沒有** build 工具、**沒有** 後端、**不會自動寄信或發 LINE**。

CIS 採台灣房屋色系（`--twh-primary: #FF7403`），版型參考遠見房屋官網的清爽企業風。

---

## 網站區塊（由上到下）

| # | 區塊 | id | 內容 |
|---|---|---|---|
| 1 | 形象照 Hero | `#top` | 去背形象照、姓名／頭銜、3 個數字亮點、加 LINE／撥電話 CTA |
| 2 | 關於阿睿 | `#about` | 三張差異點卡片（雙鏡片看房子／顧問式／在地深耕） |
| 3 | 服務區域 | `#area` | 服務範圍表、Google 地圖、**江翠北側重劃區 20 個社區清單** |
| 4 | 服務項目 | `#services` | 資產配置、稅務諮詢、室內裝修諮詢、不動產買賣、不動產租賃 |
| 5 | 常見問題 | `#faq` | 5 組 Q&A（同時輸出 FAQPage 結構化資料） |
| 6 | 預約諮詢 | `#contact` | LINE QR、可複製的搜尋號碼、電話、Email、線上預約掛勾 |

手機版另有底部固定操作列（撥打電話／加 LINE 諮詢）。

---

## SEO 做了什麼

- `<title>`／`meta description`／`canonical`／`robots`
- Open Graph ＋ Twitter Card，附 1200×630 分享封面（`assets/images/og-cover.jpg`）
- JSON-LD 結構化資料 `@graph`：`WebSite` + `RealEstateAgent`/`LocalBusiness` + `Person` + `FAQPage`
  （含 5 項服務 `makesOffer`、營業時間、服務區域、聯絡方式）
- `robots.txt` ＋ `sitemap.xml`
- 語意化標題階層（單一 `h1`）、所有圖片有 `alt` 與 `width`/`height`（避免 CLS）
- 20 個社區名稱做為在地長尾關鍵字
- 形象照從 1642 KB 壓到 **53 KB**（`profile-hero.jpg`），並用 `preload` + `fetchpriority=high` 加速 LCP

---

## 上線前必做（依重要性排序）

1. **換網域**：把 `index.html`、`sitemap.xml`、`robots.txt` 裡所有
   `https://terrypan1981.github.io/terrypan-realestate` 換成正式網域。
2. **確認 LINE QR**：`assets/images/line-qr.png` 請自己掃一次，確定連到你的 LINE。
   （文字版的加好友連結已改用 LINE ID `dilterry`，全站 6 處都指向
   `https://line.me/R/ti/p/~dilterry`。要換 ID 就全域搜尋 `dilterry` 取代。）
3. ~~確認加盟店名稱~~ ✅ 已拍板：用「台灣房屋 板橋特區特許加盟店」（依面紙稿印刷版）。
4. **戰績區塊**：`index.html` 的 `#about` 內有一段被註解的 112／113 年度 TOP1，
   確認 TOP1 範圍（店內／區域）後把註解拿掉，並把「範圍：______」填上。
5. **串線上預約**：把預約系統網址填進 `script.js` 的 `BOOKING_URL`，
   「線上預約看屋」按鈕才會出現（留空 = 不顯示，避免死連結）。

---

## 本機預覽

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```

然後開 <http://localhost:8790>。（直接用瀏覽器開 `index.html` 也可以，
但 Google 地圖 iframe 與剪貼簿功能在 `file://` 下可能受限。）

---

## 檔案結構

```
├── index.html          單頁全部內容
├── styles.css          CIS 變數都在最上面的 :root
├── script.js           選單、複製號碼、BOOKING_URL 掛勾
├── robots.txt
├── sitemap.xml
├── serve.ps1           本機預覽用（已 gitignore）
└── assets/
    ├── favicon.svg
    └── images/
        ├── profile.png        原始去背形象照（1365×2048，保留當母檔）
        ├── profile-hero.jpg   網站用壓縮版 700×1050，53 KB
        ├── og-cover.jpg       社群分享封面 1200×630
        └── line-qr.png        LINE 加好友 QR
```

## 改顏色

全部集中在 `styles.css` 最上面的 `:root`，改那幾行就會整站生效。
`--twh-primary-ink`（#A34A04）是給小字用的深橘，因為 `#FF7403` 放在白底上
對比度只有 2.75:1，小字會看不清楚。
