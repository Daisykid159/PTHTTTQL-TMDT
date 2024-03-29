import React from "react";
import styles from './HomeAdminScreen.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function HomeAdminScreen (props) {
    return (
        <div className={cx('HomeAdminScreen')}>
            HomeAdminScreen
        </div>
    )
}

export default HomeAdminScreen;
