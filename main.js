function getEleID(element) {
    return document.getElementById(element);
}

/**
 * Bài 1 :
 * Đầu vào khai báo tổng thu nhập cá nhân, số người phụ thuộc
 * Xử lý : 
 * - tienPhuThuoc = soPhuThuoc * 1.6tr
 * - tongThunhap = % thuế suất luỹ kế theo tongThuNhap
 * - tongThunhap = tongThuNhap - tienPhuThuoc
 * Đầu ra : hiển thị kết quả
 */

function kiemTraThuNhap() {
    var thuNhap = getEleID("numThuNhapNam").value;
    if (thuNhap === "") {
        getEleID("numThuNhapNam").placeholder = "Nhập tổng thu nhập năm pls!";
    }
}

function kiemtraHoTen() {
    var hoTen = getEleID("txtHoten").value;
    if (hoTen === "") {
        getEleID("txtHoten").placeholder = "Vui lòng nhập họ tên!";
    }
}

function tinhThueThuNhap(hoTen, tongThuNhap, soNguoiPhuThuoc) {
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var kq = "";
    var tienPhuThuoc = 16e5
    soNguoiPhuThuoc == "" ? soNguoiPhuThuoc = 0 : soNguoiPhuThuoc;
    var tongTienPhuThuoc = soNguoiPhuThuoc * tienPhuThuoc;
    var thueThuNhapMuc1 = 0.05;
    var tienChiuThueThuNhapMuc1 = 6e7 * thueThuNhapMuc1;
    var tienLuongMuc1 = 6e7;
    var thueThuNhapMuc2 = 0.1;
    var tienChiuThueThuNhapMuc2 = 6e7 * thueThuNhapMuc2;
    var tienLuongMuc2 = 12e7;
    var thueThuNhapMuc3 = 0.15;
    var tienChiuThueThuNhapMuc3 = 9e7 * thueThuNhapMuc3;
    var tienLuongMuc3 = 21e7;
    var thueThuNhapMuc4 = 0.2;
    var tienChiuThueThuNhapMuc4 = 174e6 * thueThuNhapMuc4;
    var tienLuongMuc4 = 384e6;
    var thueThuNhapMuc5 = 0.25;
    var tienChiuThueThuNhapMuc5 = 24e7 * thueThuNhapMuc5;
    var tienLuongMuc5 = 624e6;
    var thueThuNhapMuc6 = 0.3;
    var tienChiuThueThuNhapMuc6 = 336e6 * thueThuNhapMuc6;
    var tienLuongMuc6 = 96e7;
    var thueThuNhapMuc7 = 0.35;
    var tongTienChiuThue = 0;
    if (tongThuNhap <= 6e7) {
        tongTienChiuThue = tongThuNhap * thueThuNhapMuc1 - tongTienPhuThuoc;
    } else if (tongThuNhap <= 12e7) {
        tongTienChiuThue = tienChiuThueThuNhapMuc1 + ((tongThuNhap - tienLuongMuc1) * thueThuNhapMuc2);
    } else if (tongThuNhap <= 21e7) {
        tongTienChiuThue = tienChiuThueThuNhapMuc1 + tienChiuThueThuNhapMuc2 + ((tongThuNhap - tienLuongMuc2) * thueThuNhapMuc3);
    } else if (tongThuNhap <= 384e6) {
        tongTienChiuThue = tienChiuThueThuNhapMuc1 + tienChiuThueThuNhapMuc2 + tienChiuThueThuNhapMuc3 + ((tongThuNhap - tienLuongMuc3) * thueThuNhapMuc4);
    } else if (tongThuNhap <= 624e6) {
        tongTienChiuThue = tienChiuThueThuNhapMuc1 + tienChiuThueThuNhapMuc2 + tienChiuThueThuNhapMuc3 + tienChiuThueThuNhapMuc4 + ((tongThuNhap - tienLuongMuc4) * thueThuNhapMuc5);
    } else if (tongThuNhap <= 96e7) {
        tongTienChiuThue = tienChiuThueThuNhapMuc1 + tienChiuThueThuNhapMuc2 + tienChiuThueThuNhapMuc3 + tienChiuThueThuNhapMuc4 + tienChiuThueThuNhapMuc5 + ((tongThuNhap - tienLuongMuc5) * thueThuNhapMuc6);
    } else {
        tongTienChiuThue = tienChiuThueThuNhapMuc1 + tienChiuThueThuNhapMuc2 + tienChiuThueThuNhapMuc3 + tienChiuThueThuNhapMuc4 + tienChiuThueThuNhapMuc5 + tienChiuThueThuNhapMuc6 + ((tongThuNhap - tienLuongMuc6) * thueThuNhapMuc7);
    }
    tongTienChiuThue = currentFormat.format(tongTienChiuThue);
    return kq = "Họ tên: " + hoTen + " thu nhập chịu thuế: " + tongTienChiuThue + "đ";
}


getEleID("btnTinhThueThuNhap").onclick = function () {
    kiemTraThuNhap();
    kiemtraHoTen();
    var hoTen = getEleID("txtHoten").value;
    var thuNhap = getEleID("numThuNhapNam").value;
    var phuThuoc = getEleID("numPhuThuoc").value;
    var kq = tinhThueThuNhap(hoTen, thuNhap, phuThuoc);
    getEleID("kqTinhThueThuNhap").innerHTML = kq;
}

/**
 * Bài 2 :
 * Đầu vào : khai báo loại khách, phí xử lý hoá đơn, phí dịch vụ cơ bản, kênh cao cấp
 * loai khách doanh nghiệp đầu thứ 11 mỗi đầu tăng phí cơ bản 5$
 * Đầu ra : hiển thị kết quả
 */

getEleID("loaiKhach").onchange = function () {
    var loaiKhach = getEleID("loaiKhach").value;
    if (loaiKhach === "1") {
        getEleID("soKetNoiDN").classList.add("d-block");
    } else {
        getEleID("soKetNoiDN").classList.remove("d-block");
    }
}

function tinhTienCap(loaiKhach, maKhach, kenhCaoCap, soKetNoi) {
    var currentFormat = new Intl.NumberFormat("vn-VN", { style: 'currency', currency: 'USD', minimumFractionDigits: 2, currencyDisplay: "symbol" });
    // Nha dan
    var phiXuLYND = 4.5;
    var phiDichVuND = 20.5;
    var phiKenhCaoCapND = 7.5;
    // Doanh nghiep
    var phiXuLYDN = 15;
    var phiDichVuDN = 75;
    phiDichVuDN = soKetNoi > 10 ? phiDichVuDN += ((soKetNoi - 10) * 5) : 75;
    var phiKenhCaoCapDN = 50;
    // tinh tien cap
    var tienCapND = phiXuLYND + phiDichVuND + (kenhCaoCap * phiKenhCaoCapND);
    tienCapND = currentFormat.format(tienCapND);
    var tienCapDN = phiXuLYDN + phiDichVuDN + (kenhCaoCap * phiKenhCaoCapDN);
    tienCapDN = currentFormat.format(tienCapDN);
    kq = "Mã khách hàng: " + maKhach + " Tiền cáp ";
    if (loaiKhach == "1") {
        return kq += tienCapDN;
    } else {
        return kq += tienCapND;
    }
}

getEleID("btnTinhTienCap").onclick = function () {
    var loaiKhach = getEleID("loaiKhach").value;
    var maKH = getEleID("textMaKH").value;
    var kenhCaoCap = getEleID("numKenhCaoCap").value;
    var ketNoi = getEleID("numKetNoi").value;
    kq = tinhTienCap(loaiKhach, maKH, kenhCaoCap, ketNoi);
    getEleID("kqTienCap").innerHTML = kq;
} 