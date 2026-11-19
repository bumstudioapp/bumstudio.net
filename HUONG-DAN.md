# HƯỚNG DẪN ĐƯA WEBSITE MỚI LÊN GITHUB (làm 1 lần)

Gói này là TOÀN BỘ nội dung repo `bumstudioapp/bumstudio.net` sau khi nâng cấp:

| Thư mục / file | Là gì |
|---|---|
| `index.html` + `assets/` | Trang chủ mới (tiếng Anh) dùng giao diện Quad |
| `vi/index.html` | Trang chủ tiếng Việt (dùng chung `assets/`) |
| `blog/` | Blog đã build sẵn (cả EN + VI) — KHÔNG sửa tay vào đây |
| `blog-src/` | Mã nguồn blog Astro — nơi đăng bài |
| `.github/workflows/blog.yml` | Robot tự build blog khi có bài mới |
| `CNAME`, `app-ads.txt` | GIỮ NGUYÊN như cũ — đừng xoá (app-ads.txt là file AdMob đã xác minh) |
| `robots.txt`, `sitemap.xml` | Đã cập nhật cho cấu trúc mới |

## Cách đưa lên (khuyên dùng GitHub Desktop — 1 lần, ~10 phút)

Web GitHub chỉ cho tải tối đa 100 file mỗi lần commit, mà gói này có ~445 file,
nên dùng GitHub Desktop cho gọn:

1. Cài GitHub Desktop (desktop.github.com), đăng nhập tài khoản `bumstudioapp`.
2. File → Clone Repository → chọn `bumstudioapp/bumstudio.net` → Clone về máy
   (ví dụ vào `D:\Website\bumstudio.net`).
3. Giải nén gói này, copy TOÀN BỘ nội dung đè vào thư mục vừa clone
   (gồm cả thư mục ẩn `.github` — nhớ bật hiện file ẩn nếu không thấy).
4. Mở lại GitHub Desktop: nó sẽ liệt kê các thay đổi. Gõ tóm tắt
   "Website moi: giao dien Quad + song ngu EN/VI" → Commit to main → Push origin.
5. Chờ 1–2 phút, mở https://bumstudio.net và https://bumstudio.net/vi/ kiểm tra.
   Blog: https://bumstudio.net/blog/ và https://bumstudio.net/blog/vi/

LƯU Ý: thư mục `rps-master-blog` cũ trên máy bạn (bản đơn ngữ) từ nay KHÔNG dùng nữa —
bản song ngữ nằm ở `blog-src/` trong repo. Bài Slide Pocket 15 bạn đã tạo ở bản local
cũ đã có sẵn trong gói này (cả bản Anh lẫn bản Việt), không cần copy lại.

## Đăng bài mới sau này (trên web GitHub, làm được từ điện thoại)

1. Vào repo → thư mục `blog-src/src/content/blog/en` → Add file → Create new file.
2. Đặt tên file: `ten-bai-viet.md` (chữ thường, nối bằng dấu -, KHÔNG gõ trùng đuôi .md).
3. Dán nội dung theo mẫu trong `blog-src/post-template.md` → Commit changes.
4. Làm lại y hệt trong thư mục `vi` với bản dịch tiếng Việt, CÙNG tên file.
5. Chờ ~2 phút: robot "Build blog" tự build và đăng. Kiểm tra ở
   bumstudio.net/blog (EN) và bumstudio.net/blog/vi (VI).

## Sau khi web mới live — 2 việc cuối

1. Google Search Console: Sitemaps → nộp `sitemap.xml` (trang chính) —
   `blog/sitemap-index.xml` nếu đã nộp trước đó thì giữ nguyên.
2. Xong! Link Blog đã có sẵn trên menu trang chủ mới.
