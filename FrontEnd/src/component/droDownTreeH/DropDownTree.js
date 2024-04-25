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

    const handleList = (item) => {
        const categoryId = item.categoryId;
        const type = item.type;

        navigate('/screen/ListProduct/ListProduct', {
            state: { categoryId, type },
        });
    }

    return (
        <div className={cx('modal')} onMouseEnter={handleShowChild} onMouseLeave={handleShowChild} >
            <div className={cx('flex', 'list')} onClick={handleList} >
                <div className={cx('flex')}>
                    <i className={cx(props.item.icon, 'modalIcon')} />
                    <div className={cx('textNameList')}>{props.item.nameListProduct}</div>
                </div>

                {props.item.listItem.length !== 0 ? (<i className={cx('bx bx-chevron-right', 'iconArrowR')}></i>) : null}
            </div>

            {showListChild && (<div className={cx('childList')}>
                {props.item.listItem.map(item => (<div className={cx('textNameListChild')} onClick={() => handleList(item)} >{item.nameItem}</div>))}
            </div>)}
        </div>
    )
}

export default React.memo(DropDownTree);
