import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionGetDataDashboardMonth (token, user, month, year) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'admin').getDataDashboardMonth(month, year);

            if (response && response.data){

                const text = response.data?.status_3;

                const status1 = text.slice(0, 4);
                const status2 = text.slice(0, 4);
                const status3 = text.slice(0, 4);

                const percentageString = text.slice(5, 22);
                const percentageNumber = parseFloat(percentageString);
                const roundedNumber3 = percentageNumber.toFixed(2);

                dispatch(updateData({
                    dataDashboardMonth: response.data,
                    roundedNumber3: roundedNumber3,
                    status1: (status1 === "Giảm"),
                    status2: (status2 === "Giảm"),
                    status3: (status3 === "Giảm"),
                }));
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetDataDayStartToEnd (token, user, month, year) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'admin').getDataDayStartToEnd(month, year);

            if (response && response.data){

                const obj = response.data?.type_product_by_day;
                const keys = Object.keys(obj);
                const values = Object.values(obj);

                const keyValuePairs = [];

                for (let i = 0; i < keys.length; i++) {
                    keyValuePairs.push({ key: keys[i], value: values[i] });
                }

                const obj2 = response.data?.status_order_by_day;
                const keys2 = Object.keys(obj2);
                const values2 = Object.values(obj2);

                const keyValuePairs2 = [];

                for (let i = 0; i < keys2.length; i++) {
                    keyValuePairs2.push({ key: keys2[i], value: values2[i] });
                }

                const obj3 = response.data?.revenue_by_day;
                const keys3 = Object.keys(obj3);
                const values3 = Object.values(obj3);

                const keyValuePairs3 = [];

                for (let i = 0; i < keys3.length; i++) {
                    keyValuePairs3.push({ key: keys3[i], value: values3[i] });
                }

                const obj4 = response.data?.profit_by_day;
                const keys4 = Object.keys(obj4);
                const values4 = Object.values(obj4);

                const keyValuePairs4 = [];

                for (let i = 0; i < keys4.length; i++) {
                    keyValuePairs4.push({ key: keys4[i], value: values4[i] });
                }

                dispatch(updateData({
                    dataDayStartToEnd1: keys,
                    dataDayStartToEnd2: values,

                    status_order_by_day1: keys2,
                    status_order_by_day2: values2,

                    revenue_by_day1: keys3,
                    revenue_by_day2: values3,

                    profit_by_day1: keys4,
                    profit_by_day2: values4,
                }));
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetForAllMonth (token, user, month, year) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'admin').getForAllMonth();

            if (response && response.data){

                const obj = response.data?.most_user;
                const keys = Object.keys(obj);
                const values = Object.values(obj);

                const keyValuePairs = [];

                for (let i = 0; i < keys.length; i++) {
                    keyValuePairs.push({ key: keys[i], value: values[i] });
                }

                const obj2 = response.data?.most_product;
                const keys2 = Object.keys(obj2);
                const values2 = Object.values(obj2);

                const keyValuePairs2 = [];

                for (let i = 0; i < keys2.length; i++) {
                    keyValuePairs2.push({ key: keys2[i], value: values2[i] });
                }

                dispatch(updateData({
                    most_user1: keys,
                    most_user2: values,

                    most_product1: keys2,
                    most_product2: values2,
                }));
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export default {
    updateData,
    actionGetDataDashboardMonth,
    actionGetDataDayStartToEnd,
    actionGetForAllMonth,
};
