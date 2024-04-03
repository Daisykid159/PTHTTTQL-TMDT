import React from "react";
import styles from './styles.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ShippingPolicyScreen (props) {
    return (
        <div className={cx('bodyScreen')}>
            <div className={cx('textHeader')}>Phương thức vận chuyển</div>
            <img src={require('../../assets/img/chinh-sach-van-chuyen.png')} alt="Logo" className={cx('img')} />

            <p className={cx('textHeader', 'center')}>Phương thức giao hàng</p>

            <p className={cx('textC')}>Cách 1: Giao hàng trực tiếp tại cửa hàng</p>
            <p>Hãy trực tiếp đến địa chỉ các showroom của Shop để lựa chọn sản phẩm, thanh toán và nhận sản phẩm trực tiếp tại cửa hàng.</p>

            <p className={cx('textC')}>Cách 2: Giao hàng miễn phí trong nội thành Hà Nội</p>
            <p>Nếu bạn không muốn trực tiếp đến cửa hàng. Shop sẵn sàng giao hàng miễn phí trong các quận nội thành Hà Nội (ngoại trừ các sản phẩm phụ kiện). Xin vui lòng gọi số hotline để đặt hàng và nhận sản phẩm tại địa chỉ bạn mong muốn.</p>

            <p className={cx('textC')}>Cách 3: Sử dụng hình thức Giao hàng thu tiền - COD (Cash on Delivery)</p>
            <p>Đối với các bạn ở xa Hà Nội, muốn sử dụng hình thức COD (thanh toán khi nhận hàng), các bạn vui lòng liên hệ với Shop để được hướng dẫn. Đây là hình thức thanh toán COD (Cash on Delivery) - Các bạn sẽ thanh toán trực tiếp cho bên chuyển phát sau khi đã nhận được hàng. Với hình thức này, để đảm bảo đơn hàng được xác nhận, các bạn vui lòng chuyển khoản trước 500.000đ gửi Shop để xác nhận việc mua hàng. Shop sẽ gửi hàng đi ngay trong ngày sau khi nhận được thanh toán tạm ứng. Khi nhận hàng các bạn thanh toán nốt số tiền còn lại.</p>

            <p className={cx('center', 'colorRed')}>Cảm ơn Quý khách đã mua hàng cùng Shop!</p>
        </div>
    )
}

export default ShippingPolicyScreen;
