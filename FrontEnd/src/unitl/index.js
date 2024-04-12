import moment from 'moment';

export const formatPrice = (price) => {
    const formattedNumber = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${formattedNumber} đ`;
}

export const formatDay = (date) => {
    const formattedDate = moment(date).format('DD - MM - yyyy');
    return formattedDate;
};
