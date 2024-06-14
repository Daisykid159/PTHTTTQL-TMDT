import React, {useEffect, useState} from "react";
import Chart from 'react-apexcharts'
import styles from './HomeAdminScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import actionAdminDashbord, {
    actionGetDataDashboardMonth,
    actionGetDataDayStartToEnd, actionGetForAllMonth
} from "../../../redux-store/action/actionAdminDashbord";
import ExportWordFromTemplate from "../../../component/exportWordFromTemplate/ExportWordFromTemplate";

const cx = classNames.bind(styles);

function HomeAdminScreen (props) {

    const dataDashboardMonth = useSelector(state => state.reducerAdminDashboard.dataDashboardMonth);
    const roundedNumber3 = useSelector(state => state.reducerAdminDashboard.roundedNumber3);
    const status1 = useSelector(state => state.reducerAdminDashboard.status1);
    const status2 = useSelector(state => state.reducerAdminDashboard.status2);
    const status3 = useSelector(state => state.reducerAdminDashboard.status3);
    const dataDayStartToEnd1 = useSelector(state => state.reducerAdminDashboard.dataDayStartToEnd1);
    const dataDayStartToEnd2 = useSelector(state => state.reducerAdminDashboard.dataDayStartToEnd2);
    const status_order_by_day1 = useSelector(state => state.reducerAdminDashboard.status_order_by_day1);
    const status_order_by_day2 = useSelector(state => state.reducerAdminDashboard.status_order_by_day2);
    const revenue_by_day1 = useSelector(state => state.reducerAdminDashboard.revenue_by_day1);
    const revenue_by_day2 = useSelector(state => state.reducerAdminDashboard.revenue_by_day2);
    const profit_by_day1 = useSelector(state => state.reducerAdminDashboard.profit_by_day1);
    const profit_by_day2 = useSelector(state => state.reducerAdminDashboard.profit_by_day2);
    const most_user1 = useSelector(state => state.reducerAdminDashboard.most_user1);
    const most_user2 = useSelector(state => state.reducerAdminDashboard.most_user2);
    const most_product1 = useSelector(state => state.reducerAdminDashboard.most_product1);
    const most_product2 = useSelector(state => state.reducerAdminDashboard.most_product2);

    const dataChar1 = {
        series: dataDayStartToEnd2,
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: dataDayStartToEnd1,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    },
                    dataLabels: {
                        formatter(val, opts) {
                            const name = opts.w.globals.labels[opts.seriesIndex]
                            return [name, val.toFixed(1) + '%']
                        }
                    },
                }
            }]
        },
    };

    const dataChar2 = {
        series: status_order_by_day2,
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: status_order_by_day1,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    },
                    dataLabels: {
                        formatter(val, opts) {
                            const name = opts.w.globals.labels[opts.seriesIndex]
                            return [name, val.toFixed(1) + '%']
                        }
                    },
                }
            }]
        },
    };

    const dataChar3 = {

        series: [{
            name: 'Số lượng đã bán',
            data: most_product2
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val;
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },

            xaxis: {
                categories: most_product1,
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val;
                    }
                }

            },
        },
    };

    const state1 = {

        series: [{
            name: 'Doang thu',
            data: revenue_by_day2,
        }, {
            name: 'Lợi nhuận',
            data: profit_by_day2,
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: revenue_by_day1,
            },
        },
    };

    const state3 = {

        series: [{
            name: 'Số lượng đã bán',
            data: most_user2,
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val;
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },

            xaxis: {
                categories: most_user1,
                position: 'bottom',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val;
                    }
                }

            },
        },
    };

    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);
    const fileContent = useSelector(state => state.reducerAdminDashboard.linkFile);

    const [resetView, setResetView] = useState(false);

    const now = Date.now();

    useEffect(() => {
        setTimeout(() => {
            setResetView(!resetView);
        }, 1000 * 60 * 5)
    }, [resetView])

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');

        dispatch(actionGetDataDashboardMonth(token, decoded.sub, month, year))
    }, [resetView]);

    const [dayFrom, setDayFrom] = useState(new Date("2024-06-01"));
    const [dayTo, setDayTo] = useState(new Date("2024-06-10"));

    useEffect(() => {
        dispatch(actionGetDataDayStartToEnd(token, decoded.sub, moment(dayFrom).format("YYYY-MM-DD"), moment(dayTo).format("YYYY-MM-DD")))
    }, [dayFrom, dayTo, resetView]);

    useEffect(() => {
        dispatch(actionGetForAllMonth(token, decoded.sub))
    }, [resetView])

    const handleDateFrom = (e) => {
        const selectedDate = new Date(e.target.value);
        const dateTo = new Date(dayTo);

        if (selectedDate > dateTo) {
            setDayTo(e.target.value);
            setDayFrom(e.target.value)
        } else {
            setDayFrom(e.target.value);
        }
    }

    const handleDateTo = (e) => {
        const selectedDate = new Date(e.target.value);
        const dateFrom = new Date(dayFrom);

        if (selectedDate < dateFrom) {
            setDayTo(dayFrom);
        } else {
            setDayTo(e.target.value);
        }
    }

    return (
        <div className={cx('HomeAdminScreen')}>

            <div className={cx('textHeader')}>Thông số bán hàng trong tháng vừa qua</div>

            <div className={cx('flex', 'warp', 'headerA')}>
                <div className={cx('itemH', 'flex')} style={{ color: '#c26b02' }}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-shopping-bag'></i>
                    </div>

                    <div>
                        <div>Tổng đơn hàng</div>
                        <div>{dataDashboardMonth?.amount_order}</div>
                        <div className={cx('flex', 'center', 'percent', (status1 ? 'red' : 'green'))}>
                            <i className={cx((status1 ? 'bx bxs-down-arrow' : 'bxs-up-arrow'))} style={{ marginRight: 5 }}></i>
                            <div>{dataDashboardMonth?.status_1}</div>
                        </div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex')} style={{ color: '#03359a'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-dollar-circle'></i>
                    </div>

                    <div>
                        <div>Tổng danh thu</div>
                        <div>{formatPrice(dataDashboardMonth?.revenue || 0)}</div>
                        <div className={cx('flex', 'center', 'percent', (status1 ? 'red' : 'green'))}>
                            <i className={cx((status2 ? 'bx bxs-down-arrow' : 'bxs-up-arrow'))} style={{ marginRight: 5 }}></i>
                            <div>{dataDashboardMonth?.status_2}</div>
                        </div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex')} style={{ color: '#950bc7'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bxs-bar-chart-alt-2'></i>
                    </div>

                    <div>
                        <div>Lợi nhuận</div>
                        <div>{dataDashboardMonth?.percent} %</div>
                        <div className={cx('flex', 'center', 'percent', (status1 ? 'red' : 'green'))}>
                            <i className={cx((status3 ? 'bx bxs-down-arrow' : 'bxs-up-arrow'))} style={{ marginRight: 5 }}></i>
                            <div>{status3 ? 'Giảm' : 'Tăng'} {roundedNumber3} so với tháng trước</div>
                        </div>
                    </div>
                </div>

                <div className={cx('flex', 'ward', 'center')}>
                    <div className={cx('mg10')}>
                        <div className={cx('mg10')}>Số lượng sản phẩm đã bán (các sản phẩm nổi bật)</div>
                        <Chart
                            options={dataChar3.options}
                            series={dataChar3.series}
                            type="bar"
                            width="700"
                        />
                    </div>

                    <div className={cx('mg10')}>
                        <div className={cx('mg10')}>Top 3 khách hàng mua nhiều nhất</div>
                        <Chart
                            options={state3.options}
                            series={state3.series}
                            type="bar"
                            width="450"
                        />
                    </div>
                </div>
            </div>

            <div className={cx('listChart')}>

                <div className={cx('flex', 'center', 'textHeader')}>
                    <div className={cx('textDay')}>Thông số bàn hàng từ ngày</div>
                    <input className={cx('inputDay')} type={'date'} value={dayFrom} onChange={handleDateFrom} />
                    <div className={cx('textDay')}>Đến ngày</div>
                    <input className={cx('inputDay')} type={'date'} value={dayTo} onChange={handleDateTo} />
                </div>

                <ExportWordFromTemplate dayFrom={dayFrom} dayTo={dayTo}/>

                <div className={cx('flex', 'warp', 'flexEnd', 'spaceBetween')}>
                    <div className={cx('mg10')}>
                        <div className={cx('mg10')}>Các loại sản phẩm đã bán (%)</div>
                        <Chart
                            options={dataChar1.options}
                            series={dataChar1.series}
                            type="pie"
                            width="550"
                        />
                    </div>

                    <div className={cx('mg10')}>
                        <div className={cx('mg10')}>Trạng thái các đơn hàng (%)</div>
                        <Chart
                            options={dataChar2.options}
                            series={dataChar2.series}
                            type="donut"
                            width="550"
                        />
                    </div>

                    <div className={cx('mg10')}>
                        <div className={cx('mg10')}>Biểu đồ thể hiện doanh thu và lợi nhuận</div>
                        <Chart
                            options={state1.options}
                            series={state1.series}
                            type="area"
                            width="1200"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeAdminScreen;
