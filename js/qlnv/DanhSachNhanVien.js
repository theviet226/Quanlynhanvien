function DanhSachNhanVien() {
    this.mangNV = [];
    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }
    this.timIndex = function (taiKhoan) {
        var indexNV = -1;
        this.mangNV.map(function (nv, index) {
            if (nv.taiKhoan == taiKhoan) {
                indexNV = index;
            }
        });
        return indexNV;
    }
    this.xoaNV = function (taiKhoan) {
        var indexNV = this.timIndex(taiKhoan);
        if (indexNV > -1) {
            this.mangNV.splice(indexNV, 1);
        }
    }
    this.capNhap = function (nv) {
        var indexFind = this.timIndex(nv.taiKhoan);
        if (indexFind > -1) {
            dsnv.mangNV[indexFind] = nv;
            return true;
        } else {
            return false;
        }
    }
}
DanhSachNhanVien.prototype.timKiemTheoTen = function (tuTim) {
    var mangTK = [];
    var tuTimThuong = tuTim.toLowerCase();
    var tuTimReplace = tuTimThuong.replace(/\s/g, "");
    this.mangNV.map(function (nv, index) {
        var tenThuong = nv.loaiNV.toLowerCase();
        var tenReplace = tenThuong.replace(/\s/g, "");
        var result = tenReplace.indexOf(tuTimReplace);
        if (result > -1) {
            mangTK.push(nv);
        }
    });
    return mangTK;
}
