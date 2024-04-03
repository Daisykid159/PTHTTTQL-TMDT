import React from "react";
import styles from './styles.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ExchangePolicyScreen (props) {
    return (
        <div className={cx('bodyScreen')}>
            <div className={cx('textHeader')}>Chính sách đổi hàng</div>
            <img src={require('../../assets/img/chinh-sach-doi-tra-hang.jpg')} alt="Logo" className={cx('img')} />

            <p className={cx('textC')}>1. Phạm vi áp dụng</p>
            <p>Áp dụng cho tất cả các sản phẩm được bán tại: Hệ thống các cửa hàng của Hoàng Kiên trên toàn quốc.</p>
            <p className={cx('textC')}>2. Điều kiện đổi trả và hoàn tiền.</p>
            <p className={cx('textB')}>- Còn hóa đơn mua hàng (nếu có).</p>
            <p className={cx('textB')}>- Còn đầy đủ phiếu bảo hành</p>
            <p className={cx('textB')}>- Còn đầy đủ hộp sản phẩm, các phụ kiện đi kèm và quà khuyến mãi (nếu có). (Trong trường hợp thiếu phụ kiện hoặc sản phẩm khuyến mãi, sẽ thu phí tùy theo loại sản phẩm).</p>
            <p className={cx('textB')}>- Đối với sản phẩm mua mới:</p>
            <p>+ Máy không trầy xước, móp méo, nứt, vỡ, rơi nước, chập cháy; máy không có dấu hiệu tự ý mở máy hoặc sửa chữa.</p>
            <p>+ Phụ kiện và sản phẩm khuyến mại đi kèm không bị hỏng hóc, đứt dây, vỡ, trầy xước…</p>
            <p>+ Vỏ hộp nguyên vẹn, không móp méo, có Serial Number/iMEI trên hộp trùng với thân máy.</p>
            <p className={cx('textB')}>- Đối với sản phẩm mua cũ:</p>
            <p>+ Máy và phụ kiện kèm theo có tình trạng giống với tình trạng tại thời điểm mua máy.</p>
            <p>+ Máy và phụ kiện đáp ứng đủ các điều kiện bảo hành được quy định trong chính sách bảo hành của Hoàng Kiên.</p>
            <p className={cx('textB')}>- Còn trong thời hạn áp dụng chính sách đổi trả và hoàn tiền (quy định riêng cho từng loại sản phẩm, xem mục tiếp theo)</p>

            <p className={cx('textC')}>3.1. Đối với sản phẩm mua mới: Điện thoại, Máy tính bảng,</p>
            <table border="1" cellPadding="1" cellSpacing="1" className={cx('table')}>
                <tbody>
                <tr>
                    <td><strong>Tình trạng máy</strong></td>
                    <td><strong>Thời gian đổi trả</strong></td>
                    <td><strong>Phí lên đời máy</strong></td>
                    <td><strong>Số tiền khách nhận lại nếu yêu cầu hoàn tiền</strong></td>
                </tr>
                <tr>
                    <td>Không có lỗi</td>
                    <td>07 ngày đầu</td>
                    <td>Miễn Phí ( tính giá likenew và bù tiền chênh lệch )</td>
                    <td>90% giá máy tại thời điểm hoàn tiền;( tính theo giá web Likenew, máy dưới 10 triệu -1 triệu )</td>
                </tr>
                <tr>
                    <td>
                        <p>Không có lỗi</p></td>
                    <td>Sau 07 ngày</td>
                    <td>500k ( tính giá likenew và bù tiền chênh lệch )</td>
                    <td>90% giá tại thời điểm hoàn tiền ( tính theo giá web Likenew, máy dưới 10 triệu -1 triệu )</td>
                </tr>
                <tr>
                    <td>Lỗi do người sử dụng</td>
                    <td>Thanh lý bán hộ</td>
                    <td>Miễn phí (Chỉ bù tiền chênh lệnh)</td>
                    <td>Không áp dụng đổi trả</td>
                </tr>
                </tbody>
            </table>

            <p className={cx('textC')}>3.2. Đối với sản phẩm mua cũ: Điện thoại, Máy tính bảng</p>
            <table border="1" cellPadding="1" cellSpacing="1" className={cx('table')}>
                <tbody>
                <tr>
                    <td><strong>Tình trạng máy</strong></td>
                    <td><strong>Thời gian đổi trả</strong></td>
                    <td><strong>Phí lên đời máy</strong></td>
                    <td><strong>Số tiền khách nhận lại nếu yêu cầu hoàn tiền</strong></td>
                </tr>
                <tr>
                    <td>Không có lỗi</td>
                    <td>7 ngày đầu</td>
                    <td>Miễn phí</td>
                    <td>90% giá máy tại thời điểm hoàn tiền, máy dưới 10 triệu -1 triệu;( không tính phí pin )</td>
                </tr>
                <tr>
                    <td>
                        <p>Không có lỗi</p></td>
                    <td>Sau 7 ngày</td>
                    <td>500k</td>
                    <td>90% giá tại thời điểm hoàn tiền,máy dưới 10 triệu -1 triệu; ( không tính phí pin )</td>
                </tr>
                <tr>
                    <td>Lỗi do người sử dụng</td>
                    <td>Thanh lý bán hộ</td>
                    <td>
                        <p>Miễn Phí</p></td>
                    <td>Thanh lý bán hộ chuyển đủ 100%</td>
                </tr>
                <tr>
                    <td>Lỗi do NSX</td>
                    <td>15 ngày sau khi không có máy</td>
                    <td>Miễn phí(tính BH từ ngày mua cũ)</td>
                    <td>100% giá máy tại thời điểm hoàn tiền</td>
                </tr>
                </tbody>
            </table>

            <p className={cx('textC')}>3.3. Chính sách lên đời TRADE IN đối với sản phẩm cũ :Điện thoại, Máy tính bảng mua ngoài Hoàng Kiên:  Không áp dụng event, Đối với máy bán thẳng giới hạn số lượng thu mua theo đợt thông báo</p>

            <p>Chỉ thu máy Zin keng nguyên bản theo đúng tiêu chuẩn máy bán ra sẽ được thu bằng 90% giá Web - Trừ 1tr đối với máy giá dưới 10tr</p>
            <p>Máy có tiêu chuẩn thấp hơn có thể bị trừ phí.</p>
            <p>Máy pin thấp, hình thức phẩy nhẹ sẽ trừ thêm phí để giảm cho khách mua sau:</p>
            <p>- Pin 100% sạc ít: Thu 90% + 500k sạc ít ( máy dưới 10tr + 300k sạc ít )</p>
            <p>- Pin 86% -> 9x: Thu 90%</p>
            <p>- Pin thấp từ 86% tới 90% trừ 500k đến 900k phí thay pin</p>
            <p className={cx('textB')}>Quy trình test và lên đời máy:</p>
            <p>Test máy tại chỗ hoặc trong 48H tùy từng trường hợp:</p>
            <p>- Kiểm tra hình thức ( tuỳ tình trạng sẽ trừ thêm phí )</p>
            <p>- Mở máy check zin</p>
            <p>- Trong trường hợp test 48H khách ký vào tem dán vào ốc đít, sau quá trình này chúng tôi sẽ không tháo máy ra lại. Hoàng Kiên tạm ứng 70% giá trị máy thu của khách theo giá Web để hỗ trợ khách lên đời.</p>
            <p>- Test ok sau 48H, phần tiền còn lại sẽ được thanh toán cho khách hàng.</p>
            <p>Hoàn tất đơn hàng</p>
            <p className={cx('colorRed')}>Chú ý : Nếu trong thời gian 48H phát hiện máy lỗi phần cứng, khách hàng sẽ lựa chọn hoàn trả lại số tiền Hoàng Kiên đã ứng trước đó và nhận lại máy; hoặc được hỗ trợ sửa chữa giá gốc và thanh lý giá công khai trên page hộ khách. Trường hợp máy thanh lý qua Page, khách hàng sẽ có trách nhiệm bảo hành thêm 15 ngày cho người mua mới kể từ thời điểm người mua mới chấp nhận thanh toán, sau thời gian này tiền sẽ được thanh toán đầy đủ cho khách hàng sau khi đã trừ chi phí sửa chữa (nếu có). Trong trường hợp này phí lên đời sẽ được hoàn trả cho khách hàng.</p>
            <p className={cx('colorRed')}>* Lưu ý: Hoàng Kiên chỉ hỗ trợ sửa chữa hoặc bán lại mà không thu phí hay lợi nhuận đối với những máy không đủ điều kiện nhập lại.</p>
            <p>Khách hàng có quyền huỷ giao dịch lên đời trong trường hợp máy cũ không đủ điều kiện và hoàn trả lại máy lên đời đã nhận cho Hoàng Kiên. Máy lên đời có thể bị trừ phí phát sinh trong quá trình sử dụng (nếu có)</p>

            <p className={cx('textC')}>3.4. Đối với phụ kiện.</p>
            <p>Không áp dụng chính sách đổi trả đối với tất cả các loại phụ kiện bán ra</p>

            <p className={cx('center', 'colorRed')}>Cảm ơn Quý khách đã mua hàng cùng Shop!</p>
        </div>
    )
}

export default ExchangePolicyScreen;
