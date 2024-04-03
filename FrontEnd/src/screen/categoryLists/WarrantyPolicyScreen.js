import React from "react";
import styles from './styles.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function WarrantyPolicyScreen (props) {
    return (
        <div className={cx('bodyScreen')}>
            <div className={cx('textHeader')}>Chính sách bảo hành</div>
            <img src={require('../../assets/img/chinh-sach-bao-hanh.png')} alt="Logo" className={cx('img')} />
            <p className={cx('textC')}>Shop chỉ hỗ trợ bảo hành sản phẩm hư hỏng trong điều kiện sử dụng bình thường theo tiêu chuẩn của nhà sản xuất.</p>

            <p className={cx('textC')}>Bảo hành sản phẩm theo tiêu chuẩn bảo hành của nhà sản xuất</p>
            <p>- Máy bị lỗi do nhà sản xuất</p>

            <p className={cx('textC')}>Những trường hợp không được bảo hành</p>
            <p>- Khách hàng tự động tháo máy;</p>
            <p>- Sử dụng sai tiêu chuẩn của nhà sản xuất;</p>
            <p>- Sử dụng sai điện áp qui định, quá công suất của thiết bị hoặc cháy nổ, rơi vỡ, va đập, hỏng hóc vật lý;</p>
            <p>- Các lỗi do người dùng để cạn pin và không sạc trong thời gian dài dẫn đến máy không thể sạc được. Shop sẽ hỗ trợ chi phí thay pin giá hợp lý nhất cho các bạn.</p>
            <p>- Hư hỏng do thiên tai, hỏa hoạn, động vật, côn trùng hoặc con người làm hỏng;</p>
            <p>- Hư hỏng do khách hàng thay đổi ROM hoặc can thiệp đến hệ điều hành máy;</p>
            <p>- Quá thời hạn bảo hành ghi trên phiếu bảo hành;</p>
            <p>- Không có phiếu bảo hành, phiếu bảo hành không đúng hoặc phiếu bảo hành bị tẩy xóa, không nguyên vẹn.</p>

            <p className={cx('textC')}>Địa điểm bảo hành</p>
            <p>Trong trường hợp mua bán không có thỏa thuận bảo hành tại chỗ thì tất cả các thiết bị đều được bảo hành tại cửa hàng vào tất cả các ngày trong tuần trừ chủ nhật và ngày lễ, thời gian:</p>
            <p>- Sáng từ 9h đến 12h.</p>
            <p>- Chiều từ 13h đến 18h.</p>
        </div>
    )
}

export default WarrantyPolicyScreen;
