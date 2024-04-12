import React from "react";
import Chart from 'react-apexcharts'
import styles from './HomeAdminScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";

const cx = classNames.bind(styles);

function HomeAdminScreen (props) {

    const state1 = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    }

    const state2 = {

        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
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
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    };

    const state3 = {

        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
    };

    const state4 = {
        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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

    return (
        <div className={cx('HomeAdminScreen')}>
            <div className={cx('flex', 'headerA')}>
                <div className={cx('itemH', 'flex')} style={{ color: '#c26b02' }}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-shopping-bag'></i>
                    </div>

                    <div>
                        <div>Tổng đơn hàng</div>
                        <div>100</div>
                        <div className={cx('flex', 'percent', 'green')}>
                            <i className={cx('bx bxs-up-arrow')} style={{ marginRight: 5 }}></i>
                            <div>5% Tuần trước</div>
                        </div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex')} style={{ color: '#03359a'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-dollar-circle'></i>
                    </div>

                    <div>
                        <div>Tổng danh thu</div>
                        <div>{formatPrice(10000000)}</div>
                        <div className={cx('flex', 'percent', 'green')}>
                            <i className={cx('bx bxs-up-arrow')} style={{ marginRight: 5 }}></i>
                            <div>5% Tuần trước</div>
                        </div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex')} style={{ color: '#950bc7'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-user-plus'></i>
                    </div>

                    <div>
                        <div>Tổng khách hàng</div>
                        <div>10</div>
                        <div className={cx('flex', 'percent', 'red')}>
                            <i className={cx('bx bxs-down-arrow')} style={{ marginRight: 5 }}></i>
                            <div>5% Tuần trước</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('listDonHang')}>
                <div className={cx('flex', 'warp')}>
                    <Chart
                        options={state1.options}
                        series={state1.series}
                        type="donut"
                        width="500"
                    />

                    <Chart
                        options={state2.options}
                        series={state2.series}
                        type="area"
                        width="500"
                    />

                    <Chart
                        options={state3.options}
                        series={state3.series}
                        type="bar"
                        width="500"
                    />

                    <Chart
                        options={state4.options}
                        series={state4.series}
                        type="pie"
                        width="500"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeAdminScreen;
