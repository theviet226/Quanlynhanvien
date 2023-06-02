function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luong, chucVu, gioLam) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luong = luong;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNV= '';
    
    
    this.tinhTongLuong = function(){
        if(this.chucVu ==="Sếp"){
            this.tongLuong = this.luong * 3;
        }else if(this.chucVu === "Trưởng phòng"){
            this.tongLuong = this.luong * 2;
        }else if(this.chucVu === "Nhân viên"){
            this.tongLuong = this.luong
        }else{
            alert ("Vui lòng chọn chức vụ")
        }
        return this.tongLuong;
    }
    this.xepLoai = function () {
        this.loaiNV = '';
        if (this.gioLam >= 192) {
             this.loaiNV = "Xuất sắc";
        } else if (this.gioLam <= 192 && this.gioLam >= 176) {
             this.loaiNV = "Giỏi";
        } else if (this.gioLam <= 176 && this.gioLam >= 160) {
             this.loaiNV = "Khá";
        } else if (this.gioLam <= 160) {
             this.loaiNV = "Trung bình";
        }
        return this.loaiNV;
    }

}
const nhanVien1 = new NhanVien('TK001', 'Nguyễn Văn A', 'abc@example.com', 'password', '2023-05-24', 5000, 'Sếp', 200);
console.log(nhanVien1.tinhTongLuong()); // Kết quả: 15000
console.log(nhanVien1.xepLoai()); // Kết quả: Nhân viên xuất sắc