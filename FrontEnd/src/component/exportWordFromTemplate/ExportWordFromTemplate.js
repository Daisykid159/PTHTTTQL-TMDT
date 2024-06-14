import React from 'react';
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import styles from './ExportWordFromTemplate.module.scss'
import classNames from "classnames/bind";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {actionGetFileBC} from "../../redux-store/action/actionAdminDashbord";

const cx = classNames.bind(styles);

const ExportWordFromTemplate = () => {

    const dataDashboardMonth = useSelector(state => state.reducerAdminDashboard.dataDashboardMonth);
    const dataDayStartToEnd1 = useSelector(state => state.reducerAdminDashboard.dataDayStartToEnd1);
    const dataDayStartToEnd2 = useSelector(state => state.reducerAdminDashboard.dataDayStartToEnd2);
    const revenue_by_day1 = useSelector(state => state.reducerAdminDashboard.revenue_by_day1);
    const revenue_by_day2 = useSelector(state => state.reducerAdminDashboard.revenue_by_day2);
    const profit_by_day1 = useSelector(state => state.reducerAdminDashboard.profit_by_day1);
    const profit_by_day2 = useSelector(state => state.reducerAdminDashboard.profit_by_day2);


    const loadFile = (url) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Không thể tải ${url}: ${response.statusText}`);
                }
                return response.arrayBuffer();
            });
    };

    const generateDocument = () => {
        loadFile('/template.docx').then(content => {
            let zip;
            try {
                zip = new PizZip(content);
            } catch (error) {
                console.error("Lỗi khi tạo PizZip:", error);
                return;
            }

            let doc;
            try {
                doc = new Docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });
            } catch (error) {
                if (error.properties && error.properties.errors) {
                    console.error("Lỗi khởi tạo mẫu:", error.properties.errors);
                } else {
                    console.error("Lỗi khi khởi tạo Docxtemplater:", error);
                }
                return;
            }

            const calculatedValue = (dataDashboardMonth?.revenue - 500000000) /dataDashboardMonth?.revenue * 100;
            const roundedValue = calculatedValue.toFixed(2);

            const dataWithIndex = dataDayStartToEnd1.map((item, index) => ({
                name: dataDayStartToEnd1[index],
                saled: dataDayStartToEnd2[index],
                total_price: profit_by_day2[index],
                productive: profit_by_day2[index],
                index: index + 1
            }));

            const data = {
                num_of_orders: dataDashboardMonth?.amount_order,
                sum_total_price: dataDashboardMonth?.revenue,
                sum_productive: dataDashboardMonth?.percent,
                data: dataWithIndex,
                kpi: roundedValue.toString(),
                text: 'Hoàn thành khá tốt kế hoạch đã đặt ra!',
            };

            try {
                doc.render(data);
            } catch (error) {
                if (error.properties && error.properties.errors) {
                    console.error("Lỗi khi render:", error.properties.errors);
                    error.properties.errors.forEach(err => {
                        console.error(err);
                    });
                } else {
                    console.error("Lỗi khi render tài liệu:", error);
                }
                return;
            }

            const out = doc.getZip().generate({
                type: "blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });

            saveAs(out, "Báo_Cáo_Điền_Dữ_Liệu.docx");
        }).catch(error => {
            console.error("Lỗi khi tải tệp:", error);
        });
    };

    return (
        <div>
            <button className={cx('btlExport')} onClick={generateDocument}>Xuất Báo Cáo Từ Mẫu</button>
        </div>
    );
};

export default ExportWordFromTemplate;