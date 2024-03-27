import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./DropDownTree.module.scss";

const cx = classNames.bind(styles);

const DropDownTree = (props) => {
    const [showListChild, setShowListChild] = useState(false);

    const handleShowChild = () => {
        setShowListChild(!showListChild);
    }

    return (
        <div className={cx('modal')} onMouseEnter={handleShowChild} onMouseLeave={handleShowChild} >
            <div className={cx('flex')} >
                <div className={cx('flex')}>
                    <i className={cx(props.item.icon, 'modalIcon')} />
                    <p className={cx('textNameList')}>{props.item.nameListProduct}</p>
                </div>

                {props.item.listItem.length !== 0 ? (<i className={cx('bx bx-chevron-right', 'iconArrowR')}></i>) : null}
            </div>

            {showListChild && (<div className={cx('childList')}>
                {props.item.listItem.map(item => (<div className={cx('textNameListChild')}>{item.nameItem}</div>))}
            </div>)}
        </div>
    )
}

export default React.memo(DropDownTree);
