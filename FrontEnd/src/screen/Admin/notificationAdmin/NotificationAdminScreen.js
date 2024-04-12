import React, {useState} from "react";
import styles from './NotificationAdminScreen.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function NotificationAdminScreen (props) {

    const [textSearch, setTextSearch] = useState('');

    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

    return (
        <div className={cx('NotificationAdminScreen')}>
            <div className={cx('Header')}>
                <h2>Thông báo</h2>

                <div className={cx('flex', 'searchUser')}>
                    <div className={cx('borderSearch', 'flex')}>
                        <input className={cx('searchInput')} onChange={handleSearch} placeholder={'Nhập nội dung tìm kiếm'} value={textSearch}/>
                        <i className={cx('bx bx-search', 'iconSearch')}></i>
                    </div>
                </div>
            </div>

            <div className={cx('body')}>
                <div>
                    <h2>Thông báo mới</h2>

                    <div className={cx('flex', 'itemNotify')}>
                        <i className={cx('bx bx-user-circle', 'iconUser')}></i>

                        <div>
                            <div className={cx('textNotifyH')}>Người dùng mới</div>
                            <div>1 khách hàng mới đã đăng ký tài khoản</div>
                        </div>
                    </div>

                    <div className={cx('flex', 'itemNotify')}>
                        <i className={cx('bx bxs-basket', 'iconUser')}></i>

                        <div>
                            <div className={cx('textNotifyH')}>Đơn hàng mới</div>
                            <div>Bạn có thêm 1 đơn hàng mới</div>
                        </div>
                    </div>

                    <div className={cx('flex', 'itemNotify')}>
                        <i className={cx('bx bxs-basket', 'iconUser')}></i>

                        <div>
                            <div className={cx('textNotifyH')}>Đơn hàng đã bị huỷ</div>
                            <div>Bạn có 1 đơn hàng bị huỷ</div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Thông báo trước đó</h2>

                    <div className={cx('flex', 'itemNotify')}>
                        <i className={cx('bx bx-user-circle', 'iconUser')}></i>

                        <div>
                            <div className={cx('textNotifyH')}>Người dùng mới</div>
                            <div>1 khách hàng mới đã đăng ký tài khoản</div>
                        </div>
                    </div>

                    <div className={cx('flex', 'itemNotify')}>
                        <i className={cx('bx bxs-basket', 'iconUser')}></i>

                        <div>
                            <div className={cx('textNotifyH')}>Đơn hàng mới</div>
                            <div>Bạn có thêm 1 đơn hàng mới</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationAdminScreen;
