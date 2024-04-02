import React from "react";
import styles from './PayScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../unitl";

const cx = classNames.bind(styles);

function PayScreen (props) {
    return (
        <div className={cx('payScreen', 'flex')}>

            <div>
                <div>Thông tin nhận hàng</div>
                <div>Sổ địa chỉ</div>
                <div>Họ và tên</div>
                <div>Số điện thoại</div>
                <div>Ghi chú</div>
            </div>

            <div className={cx('shippingPayment')}>
                <div>
                    <div className={cx('textShippingPayment')}>Vận chuyển</div>
                    <div className={cx('flex', 'center', 'shipPay')}>
                        <div className={cx('flex', 'center')}>
                            <i className={cx('bx bx-check-circle', 'check')}></i>
                            <div>Giao hàng tận nơi:</div>
                        </div>

                        <div>{formatPrice(40000)}</div>
                    </div>
                </div>

                <div style={{ marginTop: 30 }}>
                    <div className={cx('textShippingPayment')}>Phương thức thanh toán:</div>
                    <div className={cx('flex', 'center', 'shipPay')}>
                        <div className={cx('flex', 'center')}>
                            <i className={cx('bx bx-check-circle', 'check')}></i>
                            <div>Thanh toán khi nhận hàng</div>
                        </div>

                        <i className={cx('bx bx-money')}></i>
                    </div>
                </div>

            </div>



            <div>
                <div>Đơn hàng</div>

                <div>
                    <div>Ảnh sp</div>
                    <div>Tên sản phẩm</div>
                    <div>Số lượng sản phẩm</div>
                    <div>Thành tiền</div>
                </div>

                <div>Tạm tính</div>

                <div>
                    <div>Tổng thanh toán</div>
                    <div>{formatPrice(1000000 + 40000)}</div>
                    <div>ĐẶT HÀNG</div>
                </div>
            </div>
        </div>
    )
}

export default PayScreen;
