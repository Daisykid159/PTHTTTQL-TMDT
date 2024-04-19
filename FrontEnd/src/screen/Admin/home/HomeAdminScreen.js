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

    const topTypeSell = [
        {
            id: 1,
            nameType: 'Iphone 15',
            percentType: '70%'
        },
        {
            id: 2,
            nameType: 'Iphone 14',
            percentType: '60%'
        },
        {
            id: 3,
            nameType: 'Iphone 13',
            percentType: '40%'
        },
        {
            id: 4,
            nameType: 'Iphone 12',
            percentType: '20%'
        }
    ]

    const topProducts = [
        {
            idProduct: 'IP15',
            nameProduct: 'Apple iPhone 15 Pro Max - 256GB - 99% Like New',
            imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
            colorProduct: 'Titan',
            priceBuy: 27000000,
            priceSell: 27500000,
            type: 'Iphone 15',
        },
        {
            idProduct: 'IP14',
            nameProduct: 'Apple iPhone 14 Pro Max - 256GB - 99% Like New',
            imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
            colorProduct: 'Titan',
            priceBuy: 26000000,
            priceSell: 26500000,
            type: 'Iphone 14',
        },
        {
            idProduct: 'IP13',
            nameProduct: 'Apple iPhone 13Pro Max - 256GB - 99% Like New',
            imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
            colorProduct: 'Titan',
            priceBuy: 25000000,
            priceSell: 25500000,
            type: 'Iphone 13',
        },
        {
            idProduct: 'IP12',
            nameProduct: 'Apple iPhone 12Pro Max - 256GB - 99% Like New',
            imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
            colorProduct: 'Titan',
            priceBuy: 25000000,
            priceSell: 25500000,
            type: 'Iphone 13',
        }
    ]

    const topUser = [
        {
            id: 1,
            role: 'ADMIN',
            nameUser: 'Vũ Văn Dũng',
            phoneUser: '01216048012',
            emailUser: 'daisyss159@gmail.com',
            dateCreate: '2024-04-05T00:00:00',
            totalBill: 2000,
            totalPrice: 700000000,
        },
        {
            id: 2,
            role: 'ADMIN',
            nameUser: 'Vũ Văn Dũng',
            phoneUser: '01216048012',
            emailUser: 'daisyss159@gmail.com',
            dateCreate: '2024-04-05T00:00:00',
            totalBill: 2000,
            totalPrice: 700000000,
        },
        {
            id: 3,
            role: 'ADMIN',
            nameUser: 'Vũ Văn Dũng',
            phoneUser: '01216048012',
            emailUser: 'daisyss159@gmail.com',
            dateCreate: '2024-04-05T00:00:00',
            totalBill: 2000,
            totalPrice: 700000000,
        },
        {
            id: 4,
            role: 'ADMIN',
            nameUser: 'Vũ Văn Dũng',
            phoneUser: '01216048012',
            emailUser: 'daisyss159@gmail.com',
            dateCreate: '2024-04-05T00:00:00',
            totalBill: 2000,
            totalPrice: 700000000,
        }
    ]

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

            <div className={cx('listChart')}>
                <div className={cx('flex', 'warp', 'center')}>
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
                        width="800"
                    />

                    <Chart
                        options={state3.options}
                        series={state3.series}
                        type="bar"
                        width="800"
                    />

                    <Chart
                        options={state4.options}
                        series={state4.series}
                        type="pie"
                        width="500"
                    />
                </div>
            </div>

            <div className={cx('rank', 'flex', 'spaceBetween', 'warp')}>
                <div className={cx('topTypeSell')}>
                    <div className={cx('bold', 'textType')}>Loại sản phẩm bán chạy</div>

                    {topTypeSell.map(item => (
                        <div className={cx('rowPercent')}>
                            <div className={cx('bold')}>{item.nameType}</div>
                            <div className={cx('w100pt', 'rowPt')}>
                                <div className={cx('linearGradientHTC')} style={{ width: item.percentType, height: 5 }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={cx('topTypeSell')}>
                    <div className={cx('bold', 'textType')}>Sản phẩm được bán nhiều nhất</div>

                    {topProducts.map(item => (
                        <div className={cx('rowPercent')}>
                            <div className={cx('flex', 'center', 'spaceBetween')}>
                                <div className={cx('flex', 'center', 'imgAndName')}>
                                    <img src={item.imgProduct} className={cx('imgProduct')} />
                                    <div className={cx('bold')}>{item.nameProduct}</div>
                                </div>

                                <div>{item.priceBuy}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={cx('topTypeSell')}>
                    <div className={cx('bold', 'textType')}>Khách hàng chi tiêu nhiều nhất</div>

                    {topUser.map(item => (
                        <div className={cx('flex', 'center', 'spaceBetween', 'rowPercent', 'bold')}>
                            <div className={cx('flex', 'center')}>
                                <i className={cx('bx bxs-user', 'iconUser')}></i>
                                <div>{item.nameUser}</div>
                            </div>

                            <div>{item.totalBill} đơn hàng</div>

                            <div>{formatPrice(item.totalPrice)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeAdminScreen;
