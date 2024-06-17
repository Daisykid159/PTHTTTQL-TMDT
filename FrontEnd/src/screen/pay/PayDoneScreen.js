import React, {useEffect, useState} from "react";
import styles from './PayScreen.module.scss';
import classNames from "classnames/bind";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {actionLogin} from "../../redux-store/action/actionAuthen";

const cx = classNames.bind(styles);

function PayDoneScreen (props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    const handleGoToHome = () => {
        navigate('/');
    }

    useEffect(() => {
        dispatch(actionLogin(username, password))
    }, [])

    return (
        <div className={cx('payDoneScreen')}>
            <div className={cx('notifiDone')}>
                <i className={cx('bx bx-check-circle', 'iconePayDone')}></i>

                <div className={cx('textPayDone')}>Đơn hàng đã thanh toán thành công!</div>

                <div className={cx('textNotifiDone')}>Chúng tôi sẽ xử lý đơn hàng của bạn, và giao hàng đến địa chỉ của bạn sớm nhất!</div>

                <div className={cx('flex', 'btnGoToHomeCenter')}>
                    <div className={cx('btnGoToHome')} onClick={handleGoToHome}>Về trang chủ</div>
                </div>
            </div>
        </div>
    )
}

export default PayDoneScreen;
