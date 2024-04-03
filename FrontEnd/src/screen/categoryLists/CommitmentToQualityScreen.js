import React from "react";
import styles from './styles.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CommitmentToQualityScreen (props) {
    return (
        <div className={cx('bodyScreen')}>
            <div className={cx('textHeader')}>Cam kết chất lượng</div>
            <img src={require('../../assets/img/cam-ket-chat-luong-chinh-hang.png')} alt="Logo" className={cx('img')} />
            <p className={cx('textC')}>Shop - UY TÍN LÀ TRÊN HẾT</p>
            <p>- Cam kết máy bán ra đúng như mô tả;</p>
            <p>- Cam kết bảo hành uy tín, nghiêm chỉnh;</p>
            <p>- Cam kết đem lại sự hài lòng tuyệt đối về giá cũng như dịch vụ cho khách hàng;</p>
            <p>- Khách hàng chưa hài lòng về dịch vụ, nhân viên bán hàng vui lòng liên hệ HOTLINE: 0123.888.3663</p>

            <p className={cx('textC')}>CHẾ ĐỘ BẢO HÀNH ƯU VIỆT</p>
            <p>- Bảo hành 12 tháng, đổi mới ngay trong suốt thời gian bảo hành nếu phát sinh lỗi NSX đối với máy mới</p>
            <p>- Bảo hành 12 tháng, đổi mới ngay trong suốt thời gian bảo hành nếu phát sinh lỗi NSX đối với máy like new iPhone và iPad.</p>
            <p>- Bảo hành 12 tháng đối với máy các dòng máy khác.</p>
            <p>- Cam kết với máy mới: Fullbox chưa active, phụ kiện nguyên bản</p>
            <p>- Cam kết với máy like new: Mới 99% (không bán hàng 97-98%), còn nguyên zin chính hãng Apple, ko icloud. Bao test cả các bác thợ, bao bung máy check main, màn nếu có nhu cầu.</p>
            <p>- Khuyến mại dán cường lực màn hình với mọi máy bán ra. Ngoài ra tặng ốp chống shock và dán lưng Carbon giúp bảo vệ máy tốt hơn.</p>
            <p>- Hỗ trợ cài đặt, lập tài khoản itunes, jailbreak trọn đời máy.</p>
            <p>- Cửa hàng, đại lý có nhu cầu nhập số lượng vui lòng liên hệ để có giá tốt.</p>

            <p className={cx('center', 'colorRed')}>Cảm ơn Quý khách đã mua hàng cùng Shop!</p>
        </div>
    )
}

export default CommitmentToQualityScreen;
