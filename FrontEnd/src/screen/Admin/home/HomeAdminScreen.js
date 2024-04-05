import React from "react";
import styles from './HomeAdminScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";

const cx = classNames.bind(styles);

function HomeAdminScreen (props) {
    return (
        <div className={cx('HomeAdminScreen')}>
            <div className={cx('flex', 'headerA')}>
                <div className={cx('itemH', 'flex')} style={{ color: '#2b4ca6'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-shopping-bag'></i>
                    </div>

                    <div>
                        <div>Đơn hàng hôm nay</div>
                        <div>100</div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex')} style={{ color: '#289a03'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-dollar-circle'></i>
                    </div>

                    <div>
                        <div>Doanh số hôm nay</div>
                        <div>{formatPrice(10000000)}</div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex')} style={{ color: '#950bc7'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-user-plus'></i>
                    </div>

                    <div>
                        <div>Khách hàng mới trong ngày</div>
                        <div>10</div>
                    </div>
                </div>
            </div>

            <div className={cx('listDonHang')}>
                <div className={cx('flex', 'itemList')}>
                    <div>
                        <div>Đơn hàng đã hoàn thành</div>
                    </div>

                    <i className={cx('bx bx-chevron-right')}></i>
                </div>

                <div className={cx('flex', 'itemList')}>
                    <div>
                        <div>Đơn hàng chưa thanh toán</div>
                    </div>

                    <i className={cx('bx bx-chevron-right')}></i>
                </div>

                <div className={cx('flex', 'itemList')}>
                    <div>
                        <div>Đơn hàng chưa giao</div>
                    </div>

                    <i className={cx('bx bx-chevron-right')}></i>
                </div>

                <div className={cx('flex', 'itemList')}>
                    <div>
                        <div>Đơn hàng đang giao</div>
                    </div>

                    <i className={cx('bx bx-chevron-right')}></i>
                </div>

                <div className={cx('flex', 'itemList')}>
                    <div className={cx('flex')}>
                        <i className={cx('bx bx-refresh')}></i>
                        <div>Đơn hàng bị hoàn trả toàn bộ</div>
                    </div>

                    <i className={cx('bx bx-chevron-right')}></i>
                </div>

                <div className={cx('flex', 'itemList')}>
                    <div>
                        <div>Đơn hàng huỷ</div>
                    </div>

                    <i className={cx('bx bx-chevron-right')}></i>
                </div>
            </div>
        </div>
    )
}

export default HomeAdminScreen;
