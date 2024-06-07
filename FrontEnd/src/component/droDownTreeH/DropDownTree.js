import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./DropDownTree.module.scss";
import ItemDropDownTree from "./ItemDropDownTree";

const cx = classNames.bind(styles);

const DropDownTree = (props) => {

    return (
        <div>
            {props.dataListAll.map(item => (
                <ItemDropDownTree item={item} setShowListProduct={props.setShowListProduct} />
            ))}
        </div>
    )
}

export default React.memo(DropDownTree);
