import React from "react";
import styles from './styles.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ShoppingGuideScreen (props) {
    return (
        <div className={cx('bodyScreen')}>
            <div className={cx('textHeader')}>Quy trình mua hàng</div>
            <img src={require('../../assets/img/quy-trinh-giao-hang.png')} alt="Logo" className={cx('img')} />

            <p>- Shop chấp nhận thanh toán các loại thẻ Visa, Master, ATM... trực tiếp tại cửa hàng</p>
            <p>- Shop áp dụng hình thức chuyển hàng nhận tiền (COD) với các khách hàng mua máy điện thoại/máy tính bảng ở xa. Để mua hàng ở xa vui lòng liên hệ theo số hotline của Shop - 083.888.3663 hoặc 081.360.0999.</p>
            <p>- Để đảm bảo đơn hàng xác thực, khách hàng vui lòng chuyển khoản đặt cọc 500.000đ để Shop xác nhận đơn hàng và chuyển hàng cho quý khách hàng hoặc chuyển khoản đủ số tiền theo đơn hàng. Khi nhận hàng quý khách hàng thanh toán nốt số tiền còn lại nếu mới chỉ đặt cọc 500K.</p>
            <p>- Đối với các loại phụ kiện trị giá dưới 500.000đ, đề nghị quý khách hàng thanh toán trước 100% giá trị hàng kèm phí Ship.</p>
        </div>
    )
}

export default ShoppingGuideScreen;
