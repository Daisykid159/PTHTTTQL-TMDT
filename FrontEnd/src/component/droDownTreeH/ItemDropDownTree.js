import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./DropDownTree.module.scss";
import {useNavigate} from "react-router-dom";

const cx = classNames.bind(styles);

const ItemDropDownTree = (props) => {

    const navigate = useNavigate();
    const [showListChild, setShowListChild] = useState(false);

    const handleShowChild = () => {
        setShowListChild(!showListChild);
    }

    const handleList = (item) => {
        setShowListChild(!showListChild);
        props.setShowListProduct(false);
        const categoryId = item.categories || item.id;
        const type = item.type;

        navigate('/screen/ListProduct/ListProduct', {
            state: { categoryId, type },
        });
    }

    return (
        <div>
            <div className={cx('modal')} onMouseEnter={handleShowChild} onMouseLeave={handleShowChild} >
                <div className={cx('flex', 'list')} onClick={() => handleList(props.item)} >
                    <div className={cx('flex')}>
                        <i className={cx(props.item.icon, 'modalIcon')} />
                        <div className={cx('textNameList')}>{props.item.nameListProduct}</div>
                    </div>

                    {props.item.listItem.length !== 0 ? (<i className={cx('bx bx-chevron-right', 'iconArrowR')}></i>) : null}
                </div>

                {showListChild && (<div className={cx('childList')}>
                    {props.item.listItem.map(item => (<div className={cx('textNameListChild')} onClick={() => handleList(item)} >{item.spuCustom}</div>))}
                </div>)}
            </div>
        </div>
    )
}

export default React.memo(ItemDropDownTree);
