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
            <div>
                <h2>Thông báo</h2>

                <div className={cx('flex', 'searchUser')}>
                    <div className={cx('borderSearch', 'flex')}>
                        <input className={cx('searchInput')} onChange={handleSearch} placeholder={'Nhập nội dung tìm kiếm'} value={textSearch}/>
                        <i className={cx('bx bx-search', 'iconSearch')}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationAdminScreen;
