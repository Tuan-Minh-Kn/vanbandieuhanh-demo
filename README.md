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
thoại trợ lý — hộp thoại dừng ở bước **chọn tệp** (chọn sẵn tệp đầu tiên) để người dùng
đổi tệp nếu cần rồi tự bấm chạy. Mỗi lần chạy chỉ xử lý **một tệp**. Riêng nút **Tóm tắt
tệp** trong danh sách đính kèm đã chỉ rõ tệp nên bỏ qua bước chọn, chạy ngay. Trang trợ lý độc lập truy cập bằng đường dẫn `#/tro-ly-van-ban` (chưa có
liên kết trong giao diện).

## Cấu trúc

```
src/
  components/
    ui/          Nút, chip, badge, thẻ, segmented control, toggle, icon
    layout/      BrandBar, AppHeader, Sidebar, AppFooter
    dashboard/   KPI, bảng văn bản đến/đi, tệp đính kèm, hàng đợi rỗng, thống kê
    assistant/   Hộp thoại trợ lý, tab chế độ, ngữ cảnh, ô chỉ đạo, kết quả (tóm tắt/tham mưu)
    preview/     Hộp thoại xem trước tệp PDF thật
  pages/         InboxPage, AssistantPage
  data/          Dữ liệu mẫu: văn bản, tham mưu, điều hướng, KPI, phiên trợ lý
  lib/           useAssistant (máy trạng thái), useHashRoute
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

## Khổ màn hình

Bốn ngưỡng, dùng thống nhất trong các file `.module.css`:

| Ngưỡng | Thay đổi chính |
|---|---|
| `≤ 1023px` | Thanh điều hướng rời khỏi bố cục, thành drawer phủ lên nội dung; hiện nút mở menu trên thanh tiêu đề |
| `≤ 899px` | Bảng văn bản bỏ chia cột, mỗi văn bản thành một thẻ xếp dọc (ẩn hàng tiêu đề cột, tự nhắc nhãn "Đến …"); ô tìm kiếm xuống hàng riêng; ẩn đồng hồ |
| `≤ 639px` | Hộp thoại trợ lý và cửa sổ xem trước PDF chiếm toàn màn hình; tab chế độ chiếm cả hàng |
| `≤ 560px` | KPI và số liệu về một cột; ẩn tên người dùng và gợi ý `Ctrl K`; chân trang xếp dọc |

Đã dò tràn ngang bằng DevTools Protocol ở 320 / 390 / 768 / 1023 / 1512px — không phần
tử nào rộng hơn viewport.

## Văn bản thật & xem trước

Ba văn bản trong hộp việc dùng **số ký hiệu, cơ quan ban hành, ngày ban hành thật**, đọc
từ chính tệp PDF: Nghị định `283/2026/NĐ-CP`, Tờ trình `8662/TTr-SNV`, Thông tư
`03/2026/TT-NHNN`.

- Tệp gốc (tên có dấu) để ở `data_sources/` — thư mục này **không đưa vào git**.
- Bản phục vụ web đặt ở `public/data_sources/` với tên không dấu, đúng tên ghi trong
  `src/data/documents.ts` (trường `url` của mỗi tệp đính kèm).
- Bấm **Xem** trong danh sách đính kèm, hoặc icon xem trước trong hộp thoại trợ lý, để
  mở tệp bằng trình đọc PDF của trình duyệt; kèm nút mở tab mới và tải xuống.

Thêm văn bản mới: bỏ PDF vào `public/data_sources/` rồi khai báo thêm một mục trong
`INCOMING_DOCS`.

## Lưu ý nội dung

Mọi bản tóm tắt / đề xuất tham mưu trong demo là văn bản mẫu viết sẵn, kèm cảnh báo
"nội dung do máy soạn — cần rà soát trước khi sử dụng chính thức" đúng như thiết kế.
Khi nối vào model thật, giữ nguyên cảnh báo này và phần "điều khoản được dẫn" để kiểm
toán viên đối chiếu văn bản gốc.
