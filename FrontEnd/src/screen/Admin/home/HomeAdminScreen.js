import React, {useEffect} from "react";
import styles from './HomeAdminScreen.module.scss';
import classNames from "classnames/bind";
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import {formatPrice} from "../../../unitl";
import {
    actionGetAllSkuById,
    actionGetAllSpu,
    actionGetAllUser
} from "../../../redux-store/action/actionFakeApi";
import {useDispatch, useSelector} from "react-redux";

const cx = classNames.bind(styles);

function HomeAdminScreen (props) {

    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);


    const linkPowerBi = "https://app.powerbi.com/view?r=eyJrIjoiZjRiMDNiZGQtMDgyZC00MjQzLWE2NTQtMjhiN2YyMDBmYTUwIiwidCI6Ijk2N2Q4NGIyLWIwMzQtNDU4ZC1hYmJkLWQ3YmIyM2FkYmRiZCIsImMiOjF9";

    useEffect(() => {
        dispatch(actionGetAllUser(token, decoded.sub))
        dispatch(actionGetAllSpu(token, decoded.sub));
        dispatch(actionGetAllSkuById(token, decoded.sub, 1))
    }, [])

    return (
        <div className={cx('HomeAdminScreen')}>
            <PowerBIEmbed
                embedConfig={{
                    type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                    embedUrl: linkPowerBi,
                    tokenType: models.TokenType.Aad,
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: true
                            }
                        },
                    }
                }}

                eventHandlers={
                    new Map([
                        ['loaded', function () { console.log('Report loaded'); }],
                        ['rendered', function () { console.log('Report rendered'); }],
                        ['error', function (event) { console.log(event.detail); }]
                    ])
                }

                cssClassName={cx("PowerBIEmbed")}

                getEmbeddedComponent={(embeddedReport) => {
                    window.report = embeddedReport;
                }}
            />
        </div>
    )
}

export default HomeAdminScreen;
