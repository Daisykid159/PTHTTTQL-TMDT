import React from "react";

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

function FooterComponent () {

    return (
        <div className={cx('footer')}>
            <div className={cx('footerScreen')}>
                <div className={cx('flex')} >
                    <Link to="/" className={cx('link')}>
                        <img src={require('../../assets/img/logoWeb.png')} alt="Logo" className={cx('logo')} />
                    </Link>

                    <div >
                        <div className={cx('textADD')}>Địa chỉ: Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội</div>
                        <div className={cx('textADD')}>Hotline: 0813.600.999</div>

                        <div className={cx('textADD')}>E-mail: daisyss159@gmail.com</div>
                    </div>

                    <div className={cx('flex', 'icon')}>
                        <Link to={'https://www.facebook.com/profile.php?id=100023657040387'}>
                            <i className={cx('bx bxl-facebook-circle', 'logo', 'face')}></i>
                        </Link>

                        <Link to={'https://www.instagram.com/daisykid159?igsh=MXBxNmV4dDU5em0xNw%3D%3D&utm_source=qr'}>
                            <i className={cx('bx bxl-instagram-alt', 'logo', 'instagram')}></i>
                        </Link>

                        <Link to={'https://www.youtube.com/channel/UCcwzv_m-KavOMG0wxMUixrw'}>
                            <i className={cx('bx bxl-youtube', 'logo', 'youtube')}></i>
                        </Link>

                        <Link to={'https://www.tiktok.com/@daisykid159?_t=8l1DKu6oIA4&_r=1'}>
                            <i className={cx('bx bxl-tiktok', 'logo', 'tiktok')}></i>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default React.memo(FooterComponent);
