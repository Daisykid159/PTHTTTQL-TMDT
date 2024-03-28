import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./DropDownTree.module.scss";
import {useNavigate} from "react-router-dom";

const cx = classNames.bind(styles);

const DropDownTree = (props) => {

    const navigate = useNavigate();
    const [showListChild, setShowListChild] = useState(false);

    const handleShowChild = () => {
        setShowListChild(!showListChild);
    }

    const handleList = () => {
        navigate('/screen/ListProduct/ListProduct');
    }

    return (
        <div className={cx('modal')} onMouseEnter={handleShowChild} onMouseLeave={handleShowChild} >
            <div className={cx('flex')} onClick={handleList} >
                <div className={cx('flex')}>
                    <i className={cx(props.item.icon, 'modalIcon')} />
                    <p className={cx('textNameList')}>{props.item.nameListProduct}</p>
                </div>

                {props.item.listItem.length !== 0 ? (<i className={cx('bx bx-chevron-right', 'iconArrowR')}></i>) : null}
            </div>

            {showListChild && (<div className={cx('childList')}>
                {props.item.listItem.map(item => (<div className={cx('textNameListChild')} onClick={handleList} >{item.nameItem}</div>))}
            </div>)}
        </div>
    )
}

export default React.memo(DropDownTree);
