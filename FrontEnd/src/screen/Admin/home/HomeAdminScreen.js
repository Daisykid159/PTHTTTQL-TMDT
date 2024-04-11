import React from "react";
import styles from './HomeAdminScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";

const cx = classNames.bind(styles);

function HomeAdminScreen (props) {
    return (
        <div className={cx('HomeAdminScreen')}>
            <div className={cx('flex', 'headerA')}>
                <div className={cx('itemH', 'flex')} style={{ color: '#c26b02'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-shopping-bag'></i>
                    </div>

                    <div>
                        <div>Tổng đơn hàng</div>
                        <div>100</div>
                        <div className={cx('flex', 'percent', 'green')}>
                            <i className={cx('bx bxs-up-arrow')} style={{ marginRight: 5 }}></i>
                            <div>5% Tuần trước</div>
                        </div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex')} style={{ color: '#03359a'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-dollar-circle'></i>
                    </div>

                    <div>
                        <div>Tổng danh thu</div>
                        <div>{formatPrice(10000000)}</div>
                        <div className={cx('flex', 'percent', 'green')}>
                            <i className={cx('bx bxs-up-arrow')} style={{ marginRight: 5 }}></i>
                            <div>5% Tuần trước</div>
                        </div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex')} style={{ color: '#950bc7'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-user-plus'></i>
                    </div>

                    <div>
                        <div>Tổng khách hàng</div>
                        <div>10</div>
                        <div className={cx('flex', 'percent', 'red')}>
                            <i className={cx('bx bxs-down-arrow')} style={{ marginRight: 5 }}></i>
                            <div>5% Tuần trước</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('listDonHang')}></div>
        </div>
    )
}

export default HomeAdminScreen;
