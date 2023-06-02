const dsnv = new DanhSachNhanVien();
const validation = new Validation()


function setLocalStorage() {
    //localStorage, JSON: obj có sẵn của JS
    // mangSV (array) => JSON (sử dung stringify() )
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));

}

function getLocalStorage() {
    //getItem => return JSON (kiểu dữ liệu lưu ở DB backend)
    //JSON => array (JSON parse)
    var dataLocal = JSON.parse(localStorage.getItem("DSNV"));
    // console.log(dataLocal);
    if (dataLocal !== null) {
        //có dữ liệu
        hienThiTable(dataLocal);
        dsnv.mangNV = dataLocal;
    }
}
//gọi khi load web
window.addEventListener('load', function () {
    getLocalStorage();
});

function themNV() {
    var taiKhoan = document.getElementById('tknv').value;
    var hoTen = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var matKhau = document.getElementById('password').value;
    var ngayLam = document.getElementById('datepicker').value;
    var luong = document.getElementById('luongCB').value;
    var chucVu = document.getElementById('chucvu').value;
    var gioLam = document.getElementById('gioLam').value;

    var isValid = true;

    isValid &= validation.checkTaiKhoan(taiKhoan,"tbTKNV","Tài khoản tối đa 4-6 ký số, không để trống");

    isValid &= validation.checkEmpty(hoTen,"tbTen","Tên nhân viên không để trống") && validation.checkName(hoTen,"tbTen","Tên nhân viên phải là chữ")

    isValid &= validation.checkEmail(email,"tbEmail", "Email chưa đúng định dạng");

    isValid &= validation.checkPass(matKhau,"tbMatKhau", "Mật khẩu từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa,1 ký tự đặc biệt");

    isValid &= validation.checkNgayLam(ngayLam,"tbNgay", "Ngày làm không hợp lệ");

    isValid &= validation.checkEmpty(luong,"tbLuongCB","Giờ làm không để trống") && validation.checkLuong(luong,"tbLuongCB", " Lương cơ bản phải từ 1 000 000 - 20 000 000");

    isValid &= validation.checkChucVu(chucVu,"tbChucVu", "Chức vụ không hợp lệ");

    isValid &= validation.checkEmpty(gioLam,"tbGiolam","Giờ làm không để trống") && validation.checkSoGioLam(gioLam,"tbGiolam","Số giờ làm phải 80-200 giờ")


    if (isValid) {
        var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, Number(luong), chucVu, gioLam);
        nv.tinhTongLuong();
        nv.xepLoai();
        dsnv.themNV(nv);
        setLocalStorage();
        hienThiTable(dsnv.mangNV);
        resetForm();
        showNotification("Thêm thành công", true);
    }
}

function hienThiTable(mang) {
    var content = "";
    mang.map(function (nv, index) {
        var trNV = `<tr>
            <td>${nv.taiKhoan}</td>
            <td style=" width :20%; margin:auto">${nv.hoTen}</td>
            <td style=" width :10%; margin:auto">${nv.email}</td>
            <td style=" width :12%; margin:auto">${nv.ngayLam}</td>
            <td style=" width :12%; margin:auto">${nv.chucVu}</td>
            <td style=" width :17%; margin:auto">${nv.tongLuong}</td>
            <td style=" width :12%; margin:auto">${nv.loaiNV}</td>
            <td style=" width :10%; margin:auto">
                <button style="font-size: .6rem" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal" onclick="xemThongTin('${nv.taiKhoan}')" >
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <button style="font-size: .6rem" class="btn btn-danger btn-sm"  onclick="xoaNV('${nv.taiKhoan}')">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>  
        </tr>`;
        content += trNV;
    })
    document.getElementById('tableDanhSach').innerHTML = content;


}

function xoaNV(taiKhoan) {
    dsnv.xoaNV(taiKhoan);
    hienThiTable(dsnv.mangNV);
    setLocalStorage();
    showNotification("Xoá thành công", true);
}

function xemThongTin(taiKhoan) {
    var indexFind = dsnv.timIndex(taiKhoan);
    if (indexFind > -1) {
        var nvFind = dsnv.mangNV[indexFind];
        console.log(dsnv.mangNV[indexFind]);
        document.getElementById('tknv').value = nvFind.taiKhoan;
        document.getElementById('tknv').disabled = true;
        document.getElementById('name').value = nvFind.hoTen;
        document.getElementById('email').value = nvFind.email;
        document.getElementById('password').value = nvFind.matKhau;
        document.getElementById('datepicker').value = nvFind.ngayLam;
        document.getElementById('luongCB').value = nvFind.luong;
        document.getElementById('chucvu').value = nvFind.chucVu;
        document.getElementById('gioLam').value = nvFind.gioLam;
    }

}

function capNhapNV() {
    var taiKhoan = document.getElementById('tknv').value;
    var hoTen = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var matKhau = document.getElementById('password').value;
    var ngayLam = document.getElementById('datepicker').value;
    var luong = document.getElementById('luongCB').value;
    var chucVu = document.getElementById('chucvu').value;
    var gioLam = document.getElementById('gioLam').value;

    var isValid = true;

    isValid &= validation.checkTaiKhoan(taiKhoan,"tbTKNV","Tài khoản tối đa 4-6 ký số, không để trống");

    isValid &= validation.checkEmpty(hoTen,"tbTen","Tên nhân viên không để trống") && validation.checkName(hoTen,"tbTen","Tên nhân viên phải là chữ")

    isValid &= validation.checkEmail(email,"tbEmail", "Email chưa đúng định dạng");

    isValid &= validation.checkPass(matKhau,"tbMatKhau", "Mật khẩu từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa,1 ký tự đặc biệt");

    isValid &= validation.checkNgayLam(ngayLam,"tbNgay", "Ngày làm không hợp lệ");

    isValid &= validation.checkEmpty(luong,"tbLuongCB","Giờ làm không để trống") && validation.checkLuong(luong,"tbLuongCB", " Lương cơ bản phải từ 1 000 000 - 20 000 000");

    isValid &= validation.checkChucVu(chucVu,"tbChucVu", "Chức vụ không hợp lệ");

    isValid &= validation.checkEmpty(gioLam,"tbGiolam","Giờ làm không để trống") && validation.checkSoGioLam(gioLam,"tbGiolam","Số giờ làm phải 80-200 giờ")

    if (isValid) {
        var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, Number(luong), chucVu, gioLam);
        nv.tinhTongLuong();
        nv.xepLoai();

        var result = dsnv.capNhap(nv);
        if (result) {
            setLocalStorage();
            hienThiTable(dsnv.mangNV);
            resetForm();
            showNotification("Cập nhập thành công", true);
        } else {
            showNotification("Cập nhập thất bại", false);
        }
    }
}

function resetForm() {
    document.getElementById("form").reset();
    document.getElementById('tknv').disabled = false;
}

document.getElementById("searchName").onkeyup = function () {
    var tuTim = document.getElementById("searchName").value;
    var mangTK = dsnv.timKiemTheoTen(tuTim);
    hienThiTable(mangTK);
}

function showNotification(message, isSuccess) {
    var notification = document.createElement('div');
    notification.className = 'notification';
    if (isSuccess) {
        notification.classList.add('success');
    } else {
        notification.classList.add('error');
    }
    var content = document.createElement('div');
    content.className = 'notification-content';

    var icon = document.createElement('span');
    icon.className = 'notification-icon';
    icon.innerHTML = '&#x1F514;';

    var messageElement = document.createElement('p');
    messageElement.className = 'notification-message';
    messageElement.innerHTML = message;

    var close = document.createElement('span');
    close.className = 'notification-close';
    close.innerHTML = '&times;';

    close.addEventListener('click', function () {
        notification.remove();
    });

    content.appendChild(icon);
    content.appendChild(messageElement);
    content.appendChild(close);
    notification.appendChild(content);

    document.body.appendChild(notification);

    setTimeout(function () {
        notification.classList.add('show');
    }, 100);

    setTimeout(function () {
        notification.remove();
    }, 5000);
}





