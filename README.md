# Trang Web Tư Vấn Luật Doanh Nghiệp

Trang web chuyên nghiệp cung cấp dịch vụ tư vấn pháp lý cho doanh nghiệp, được thiết kế với giao diện hiện đại, thân thiện và dễ sử dụng.

## 🌟 Tính Năng

- ✅ Giao diện hiện đại, responsive trên mọi thiết bị
- ✅ Trang chủ với hero section ấn tượng
- ✅ Giới thiệu đầy đủ các dịch vụ tư vấn luật
- ✅ Hệ thống tìm kiếm văn bản pháp luật
- ✅ Lọc văn bản theo loại (Luật, Nghị định, Thông tư)
- ✅ Form liên hệ với validation
- ✅ Thống kê trực quan
- ✅ Menu navigation mượt mà
- ✅ Nút scroll to top
- ✅ Animation và hiệu ứng đẹp mắt

## 📁 Cấu Trúc Thư Mục

```
luatnobot/
│
├── index.html          # Trang chủ chính
├── css/
│   └── styles.css      # File CSS cho toàn bộ website
├── js/
│   └── script.js       # File JavaScript xử lý tương tác
└── README.md           # File hướng dẫn này
```

## 🚀 Cách Sử Dụng

### Cách 1: Mở trực tiếp

1. Mở file `index.html` bằng trình duyệt web (Chrome, Firefox, Edge, Safari...)
2. Website sẽ hiển thị ngay lập tức

### Cách 2: Sử dụng Live Server (Khuyến nghị)

1. Cài đặt extension "Live Server" trong VS Code
2. Click chuột phải vào file `index.html`
3. Chọn "Open with Live Server"
4. Website sẽ tự động mở và refresh khi có thay đổi

### Cách 3: Sử dụng Python HTTP Server

```bash
# Với Python 3
python -m http.server 8000

# Sau đó mở trình duyệt và truy cập:
http://localhost:8000
```

## 📱 Các Phần Chính

### 1. Header & Navigation
- Logo và tên website
- Menu điều hướng đến các phần
- Menu responsive cho mobile

### 2. Hero Section
- Tiêu đề chính và mô tả
- Call-to-action buttons
- Background gradient đẹp mắt

### 3. Tìm Kiếm
- Tìm kiếm văn bản pháp luật theo từ khóa
- Highlight kết quả tìm được

### 4. Dịch Vụ
- 6 dịch vụ chính:
  - Thành lập doanh nghiệp
  - Soạn thảo hợp đồng
  - Giải quyết tranh chấp
  - Pháp chế doanh nghiệp
  - M&A và tái cấu trúc
  - Sở hữu trí tuệ

### 5. Giới Thiệu
- Thông tin về công ty
- Các ưu điểm nổi bật
- Thống kê số liệu

### 6. Văn Bản Pháp Luật
- Danh sách văn bản pháp luật
- Lọc theo loại văn bản
- Hiển thị thông tin chi tiết

### 7. Liên Hệ
- Thông tin liên lạc
- Form gửi yêu cầu tư vấn
- Validation dữ liệu đầu vào

### 8. Footer
- Thông tin công ty
- Links hữu ích
- Mạng xã hội

## 🎨 Tùy Chỉnh

### Thay đổi màu sắc

Mở file `css/styles.css` và sửa các biến CSS:

```css
:root {
    --primary-color: #1e40af;      /* Màu chính */
    --secondary-color: #3b82f6;    /* Màu phụ */
    --accent-color: #60a5fa;       /* Màu nhấn */
    --dark-color: #1e293b;         /* Màu tối */
    --light-color: #f8fafc;        /* Màu sáng */
    --text-color: #334155;         /* Màu chữ */
}
```

### Thay đổi thông tin liên hệ

Mở file `index.html` và tìm section `#contact` để cập nhật:
- Địa chỉ
- Số điện thoại
- Email
- Giờ làm việc

### Thêm/Sửa văn bản pháp luật

Tìm section `#legal-docs` trong `index.html` và thêm/sửa các thẻ `doc-card`.

## 🔧 Công Nghệ Sử Dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và animation
- **JavaScript (Vanilla)**: Tương tác và xử lý logic
- **Font Awesome 6.4.0**: Icons
- **Google Fonts**: Typography

## ✨ Tính Năng Nâng Cao

### Responsive Design
- Tự động điều chỉnh layout cho mobile, tablet, desktop
- Menu hamburger cho màn hình nhỏ

### Smooth Scrolling
- Cuộn mượt mà giữa các section
- Navigation tự động cập nhật khi scroll

### Form Validation
- Kiểm tra email format
- Kiểm tra số điện thoại
- Validate các trường bắt buộc

### Search & Filter
- Tìm kiếm theo từ khóa
- Lọc văn bản theo category
- Highlight kết quả

### Animations
- Fade in khi scroll
- Counter animation cho số liệu
- Hover effects

## 🔄 Cập Nhật & Mở Rộng

### Kết nối Backend

Để kết nối với backend, sửa phần form submission trong `js/script.js`:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    // Xử lý response
})
.catch(error => {
    // Xử lý lỗi
});
```

### Tích hợp Database

Bạn có thể tích hợp với:
- MySQL/PostgreSQL để lưu thông tin khách hàng
- MongoDB để lưu văn bản pháp luật
- Firebase cho authentication và realtime data

### Thêm Chatbot

Có thể tích hợp chatbot tư vấn pháp luật bằng:
- Dialogflow
- Rasa
- Custom AI với GPT API

## 📝 Ghi Chú

- Website hiện tại là phiên bản frontend static
- Các link đến chi tiết văn bản là demo, cần implement khi có backend
- Form liên hệ hiện chỉ hiển thị alert, cần kết nối backend để lưu data thực tế
- Tất cả dữ liệu văn bản pháp luật là mẫu, cần cập nhật theo thực tế

## 🤝 Hỗ Trợ

Nếu gặp vấn đề hoặc cần hỗ trợ:
1. Kiểm tra console của trình duyệt (F12) để xem lỗi
2. Đảm bảo các file CSS và JS được load đúng path
3. Kiểm tra Internet connection cho Font Awesome CDN

## 📄 License

Dự án này được tạo cho mục đích sử dụng cá nhân. Bạn có thể tùy chỉnh và sử dụng theo nhu cầu.

## 🎯 Roadmap

- [ ] Thêm trang chi tiết cho từng dịch vụ
- [ ] Tích hợp backend API
- [ ] Thêm trang blog/tin tức pháp luật
- [ ] Tích hợp chatbot AI
- [ ] Thêm tính năng đặt lịch tư vấn
- [ ] Multi-language support
- [ ] Tích hợp payment gateway
- [ ] Admin dashboard

---

**Phát triển với ❤️ cho dịch vụ tư vấn luật doanh nghiệp**

