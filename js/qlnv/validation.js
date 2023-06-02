function Validation(){
    this.checkTaiKhoan = function (value, spanID, message){
        var pattern = /^\d+$/;
        if (value.match(pattern) && value.length >=4 && value.length <=6){
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false;
    }
    this.checkEmpty = function(value, spanID, message){
        if (value === "") {
            //!chưa hợp lệ
            //thông báo lỗi
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            //trả kết quả false
            return false;
        }

        //?hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        //trả kết quả true
        return true;
    }
    this.checkName = function (value, spanID, message){
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;

        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkEmail = function (value, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(pattern)) {
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //!chưa hợp lệ
        //thông báo lỗi
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false;
    }
    this.checkPass = function (value, spanID, message) {
        var pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;
        if (value.match(pattern) && value.length >=6 && value.length <=10) {
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //!chưa hợp lệ
        //thông báo lỗi
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false;
    }
    this.checkNgayLam = function (value, spanID, message) {
        var pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;       
        if (value.match(pattern)) {
          // Ngày làm hợp lệ.
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          // Trả kết quả true
          return true;
        } else {
          // Ngày làm không đáp ứng yêu cầu.
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = "block";
          // Trả kết quả false
          return false;
        }
      };
      this.checkLuong = function (value, spanID, message) {
        var luongCoBan = parseInt(value);
        
        if (luongCoBan >= 1000000 && luongCoBan <= 20000000) {
          // Lương hợp lệ.
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          // Trả kết quả true
          return true;
        } else {
          // Lương không đáp ứng yêu cầu.
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = "block";
          // Trả kết quả false
          return false;
        }
      };
      this.checkChucVu = function (value, spanID, message) {
        if (value !== "Chọn chức vụ" && (value === "Sếp" || value === "Trưởng phòng" || value === "Nhân viên")) {
          // Chức vụ hợp lệ.
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          // Trả kết quả true
          return true;
        } else {
          // Chức vụ không hợp lệ.
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = "block";
          // Trả kết quả false
          return false;
        }
      };
      this.checkSoGioLam = function (value, spanID, message) {
        var soGioLam = parseInt(value);
        
        if (soGioLam >= 80 && soGioLam <= 200) {
          document.getElementById(spanID).innerHTML = "";
          document.getElementById(spanID).style.display = "none";
          return true;
        } else {
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = "block";
          return false;
        }
      };
      
      
}