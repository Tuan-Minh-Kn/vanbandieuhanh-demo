# Hệ thống Quản lý Văn bản và Điều hành — bản demo FE

Bản demo **chỉ có frontend** cho Hệ thống Quản lý Văn bản và Điều hành của Kiểm toán
nhà nước, dựng theo design canvas **"Legal text assistant UI upgrade"** (hai artboard:
_Hệ thống Quản lý Văn bản_ và _Trợ lý văn bản pháp luật_).

Toàn bộ số liệu, văn bản, tệp đính kèm trong repo là **dữ liệu mẫu để trình diễn giao
diện** — không phải văn bản thật, không gọi API, không có backend. Phần trợ lý AI được
mô phỏng bằng máy trạng thái ở client (`src/lib/useAssistant.ts`).

## Công nghệ

React 18 · TypeScript (strict) · Vite 5 · CSS Modules trên bộ design token
(`src/styles/tokens/`) · deploy tĩnh lên Cloudflare Pages bằng Wrangler 4.

Không dùng CSS framework: token màu/typography/spacing/effects lấy từ 1Matrix Design
System, bổ sung lớp `--ktnn-*` cho dải navy của KTNN.

## Chạy tại máy

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc -b && vite build → dist/
npm run preview    # xem bản build
```

## Hai trang (điều hướng bằng hash)

| Đường dẫn | Trang |
|---|---|
| `#/hop-viec` (mặc định) | Hộp việc của tôi — KPI, văn bản đến/đi, thống kê, hộp thoại trợ lý |
| `#/tro-ly-van-ban` | Trợ lý văn bản pháp luật — nạp tài liệu rời, tóm tắt / tham mưu |

Từ hộp việc: bấm **Tóm tắt** hoặc icon **Tham mưu** trên một hàng văn bản để mở hộp
thoại trợ lý; trong hộp thoại có liên kết **Mở toàn trang** sang trang trợ lý.

## Cấu trúc

```
src/
  components/
    ui/          Nút, chip, badge, thẻ, segmented control, toggle, icon
    layout/      BrandBar, AppHeader, Sidebar, AppFooter
    dashboard/   KPI, bảng văn bản đến/đi, tệp đính kèm, hàng đợi rỗng, thống kê
    assistant/   Hộp thoại trợ lý, tab chế độ, ngữ cảnh, ô chỉ đạo, kết quả (tóm tắt/tham mưu)
  pages/         InboxPage, AssistantPage
  data/          Dữ liệu mẫu: văn bản, tham mưu, điều hướng, KPI, phiên trợ lý
  lib/           useAssistant (máy trạng thái), useHashRoute, runSteps
  styles/        tokens/ + base.css
  types/         Kiểu dùng chung
```

## Triển khai Cloudflare Pages (Wrangler)

Repo chỉ có FE nên deploy là **upload thư mục `dist/` tĩnh** lên Cloudflare Pages —
không có worker, không có code chạy phía server.

```bash
npx wrangler login       # lần đầu
npm run build            # sinh dist/
npm run deploy           # wrangler pages deploy dist --project-name vanbandieuhanh-demo
npm run deploy:preview   # deploy nhánh preview (URL riêng, không đụng production)
```

URL sau khi deploy: `https://vanbandieuhanh-demo.pages.dev`.

[`public/_redirects`](public/_redirects) trả `index.html` cho mọi đường dẫn (mã 200) để
điều hướng phía client không bị 404 — hiện demo dùng hash router nên chưa cần, nhưng
giữ sẵn cho lúc chuyển sang đường dẫn thường.

Xem lịch sử deploy: `npx wrangler pages deployment list --project-name vanbandieuhanh-demo`.

## Lưu ý nội dung

Mọi bản tóm tắt / đề xuất tham mưu trong demo là văn bản mẫu viết sẵn, kèm cảnh báo
"nội dung do máy soạn — cần rà soát trước khi sử dụng chính thức" đúng như thiết kế.
Khi nối vào model thật, giữ nguyên cảnh báo này và phần "điều khoản được dẫn" để kiểm
toán viên đối chiếu văn bản gốc.
