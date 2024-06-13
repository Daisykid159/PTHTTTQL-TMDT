import React, {useEffect, useState} from "react";
import Chart from 'react-apexcharts'
import styles from './HomeAdminScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";

const cx = classNames.bind(styles);

function HomeAdminScreen (props) {

    const dataChar1 = {
        series: [44, 55, 13, 60, 5],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Iphone 15 Pro', 'Iphone 15 Pro max', 'Iphone 14 Pro', 'Iphone 12 Pro max', 'Các loại sản phẩm khác'],
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
        series: [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ["PROCESSING", "DONE", "CACELED", "WAITING", "SHIPPING"],
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
            data: [20, 30, 40, 11, 50, 36, 32, 23, 14, 8, 5, 2]
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
                categories: ["Iphone 15", "Iphone 14", "Iphone 13", "Iphone 12", "Iphone 11", "Iphone 10", "Iphone 15 pro", "Iphone 15 pro max", "Iphone 12 pro max", "Iphone 12 pro", "Iphone 11 pro", "Khác"],
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

    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);

    const getTodayDate = (timeLast) => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + (timeLast || 0)).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const [dayFrom, setDayFrom] = useState(getTodayDate());
    const [dayTo, setDayTo] = useState(getTodayDate(1));

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

            <div className={cx('textHeader')}>Thông số bán hàng trong tuần vừa qua</div>

            <div className={cx('flex', 'headerA')}>
                <div className={cx('itemH', 'flex')} style={{ color: '#c26b02' }}>
                    <div className={cx('iconH')}>
                        <i className='bx bx-shopping-bag'></i>
                    </div>

                    <div>
                        <div>Tổng đơn hàng</div>
                        <div>1264</div>
                        <div className={cx('flex', 'center', 'percent', 'green')}>
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
                        <div>{formatPrice(123120000000)}</div>
                        <div className={cx('flex', 'center', 'percent', 'green')}>
                            <i className={cx('bx bxs-up-arrow')} style={{ marginRight: 5 }}></i>
                            <div>5% Tuần trước</div>
                        </div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex')} style={{ color: '#950bc7'}}>
                    <div className={cx('iconH')}>
                        <i className='bx bxs-bar-chart-alt-2'></i>
                    </div>

                    <div>
                        <div>Lợi nhuận</div>
                        <div>10 %</div>
                        <div className={cx('flex', 'center', 'percent', 'red')}>
                            <i className={cx('bx bxs-down-arrow')} style={{ marginRight: 5 }}></i>
                            <div>5% Tuần trước</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('listChart')}>

                <div className={cx('flex', 'center', 'textHeader')}>
                    <div className={cx('textDay')}>Thông số bàn hàng từ ngày</div>
                    <input className={cx('inputDay')} type={'date'} value={dayFrom} onChange={handleDateFrom} />
                    <div className={cx('textDay')}>Đến ngày</div>
                    <input className={cx('inputDay')} type={'date'} value={dayTo} onChange={handleDateTo} />

                    <div className={cx('btnThongKe')}>Thống kê</div>
                </div>

                <div className={cx('flex', 'headerA')}>
                    <div className={cx('itemH', 'flex')} style={{ color: '#c26b02' }}>
                        <div className={cx('iconH')}>
                            <i className='bx bx-shopping-bag'></i>
                        </div>

                        <div>
                            <div>Tổng đơn hàng</div>
                            <div>100</div>
                        </div>
                    </div>

                    <div className={cx('itemH', 'flex')} style={{ color: '#03359a'}}>
                        <div className={cx('iconH')}>
                            <i className='bx bx-dollar-circle'></i>
                        </div>

                        <div>
                            <div>Tổng danh thu</div>
                            <div>{formatPrice(123000000)}</div>
                        </div>
                    </div>

                    <div className={cx('itemH', 'flex')} style={{ color: '#950bc7'}}>
                        <div className={cx('iconH')}>
                            <i className='bx bxs-bar-chart-alt-2'></i>
                        </div>

                        <div>
                            <div>Lợi nhuận</div>
                            <div>20 %</div>
                        </div>
                    </div>
                </div>

                <div className={cx('flex', 'warp', 'center', 'spaceBetween')}>
                    <div className={cx('mg10')}>
                        <div className={cx('mg10')}>Các loại sản phẩm đã bán (%)</div>
                        <Chart
                            options={dataChar1.options}
                            series={dataChar1.series}
                            type="pie"
                            width="600"
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
                        <div className={cx('mg10')}>Số lượng sản phẩm đã bán (các sản phẩm nổi bật)</div>
                        <Chart
                            options={dataChar3.options}
                            series={dataChar3.series}
                            type="bar"
                            width="1200"
                        />
                    </div>

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

                                <div>{formatPrice(item.priceBuy)}</div>
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
