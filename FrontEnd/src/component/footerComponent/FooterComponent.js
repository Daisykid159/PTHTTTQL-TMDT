import React from "react";

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FooterComponent () {

    return (
        <div className={cx('footer')}>Footer</div>
    )
}

export default React.memo(FooterComponent);
