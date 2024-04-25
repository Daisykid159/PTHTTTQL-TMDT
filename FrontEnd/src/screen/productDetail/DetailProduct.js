import React, {useState} from "react";
import styles from './DetailProduct.module.scss';
import classNames from "classnames/bind";
import CategoryList from "../../component/categoryList/CategoryList";
import {formatPrice} from "../../unitl";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionAddProduct} from "../../redux-store/action/actionCart";

const cx = classNames.bind(styles);

function DetailProduct (props) {

    const dataDetailProduct = {
        id: 1,
        name: 'iPhone XS 256GB Like New 99%',
        price: 6800000,
        quantity: 1,
        imgs: [
            {
                id: 0,
                img: 'imgItemH.png'
            },
            {
                id: 1,
                img: 'imgPhone1.png'
            },
            {
                id: 2,
                img: 'imgPhone2.png'
            },
            {
                id: 3,
                img: 'imgPhone3.png'
            },
        ],
        colors: [
            {
                id: 1,
                color: 'Đen',
            },
            {
                id: 2,
                color: 'Vàng',
            },
            {
                id: 3,
                color: 'Trắng',
            }
        ]
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [indexImg, setIndexImg] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [quantity, setQuantity] = useState(1);

    const listCart = useSelector(state => state.reducerCart.listCart);
    const isLogin = useSelector(state => state.reducerAuth.isLogin);

    const handleImg = (index) => {
        setIndexImg(index);
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQuantity = (event) => {
        setQuantity(parseInt(event.target.value, 10))
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setIndexImg(event.target.value);
    };

    const handleBuy = () => {
        if(isLogin) {
            listCart.push(dataDetailProduct);
            dispatch(actionAddProduct(listCart))
        } else {
            navigate('/screen/authen/LoginScreen');
        }
    }

    return (
        <div className={cx('DetailProduct')}>
            <div className={cx('product')}>
                <div className={cx('flex')}>
                    <div className={cx('imgProduct')}>
                        <img src={require(`../../assets/img/${dataDetailProduct.imgs[indexImg].img}`)} alt="Product" className={cx('imgItem')} />

                        <div className={cx('listImg')}>
                            {dataDetailProduct.imgs.map((img, index) => (
                                <div onClick={() => handleImg(index)} className={cx('imgItemList')}>
                                    <img src={require(`../../assets/img/${img.img}`)} alt="Product" className={cx('imgItem')} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cx('productInformation')}>
                        <div className={cx('textProductName')}>{dataDetailProduct.name}</div>
                        <div className={cx('textProductPrice')}>{formatPrice(dataDetailProduct.price)}</div>
                        <div className={cx('colorsProduct')}>
                            <div className={cx('textColorsProduct')}>Màu sắc:</div>
                            <select value={selectedOption} onChange={handleOptionChange} className={cx('selectColorsProduct')}>
                                {dataDetailProduct.colors.map(item => (
                                    <option value={item.id} >{item.color}</option>
                                ))}
                            </select>
                        </div>

                        <div className={cx('quantityProduct')}>
                            <div className={cx('textQuantityProduct')}>Số lương:</div>
                            <div className={cx('quantityProductBtn')}>
                                <button onClick={decrementQuantity} className={cx('btnQuantity')}>
                                    <i className={cx('bx bx-minus')}></i>
                                </button>
                                <input value={quantity} className={cx('textQuantity')} onChange={handleQuantity} />
                                <button onClick={incrementQuantity} className={cx('btnQuantity')}>
                                    <i className={cx('bx bx-plus')}></i>
                                </button>
                            </div>
                        </div>

                        <div className={cx('btnBuy')} onClick={handleBuy}>MUA HÀNG</div>
                    </div>
                </div>

                <div className={cx('describe')}>
                    <div className={cx('textDescribe')}>Mô tả sản phẩm</div>

                    <div>
                        <div>
                            Sau bao nhiêu thông tin rò rỉ hay chính thức gần đây, cuối cùng thì Apple cũng cho ra mắt bộ 3 iPhone mới toanh vào ngày 13.09 (tính theo giờ Việt Nam). Trước ngày ra mắt, toàn bộ tâm điểm đều đổ dồn về sự kiện này của Apple, và không làm mọi người thất vọng, bộ 3 iPhone XS Mas - XS - XR đã cho các tín đồ công nghệ được mãn nhãn trước diện mạo của nó.
                        </div>
                        <br />
                        <br />
                        <div className={cx('textDescribeH')} >Màn hình Super Retina ấn tượng</div>
                        Đặt cái nhìn đầu tiên vào bộ đôi Xs Max và Xs, chính là ấn tượng về kiểu màn hình tai thỏ kế thừa từ người anh iPhone X nói riêng, cũng như xu hướng màn hình smartphone nói chung hiện nay. Cộng hưởng với thiết kế tràn viền tạo nên không gian chạm và lướt rộng đến bất ngờ trên kích thước 6.5 inch và 5.8 inch. Màn hình OLED tùy chỉnh trên Xs và Xs Max cho màu sắc hiển thị ngày càng sắc sảo, HDR sắc nét và thành công với tấm nền đen chân thực.
                        <br />
                        <br />
                        <div className={cx('textDescribeH')} >Lớp vỏ được gia công từ vật liệu đặc biệt</div>
                        Tiếp tục kế thừa từ người anh iPhone X, dòng Xs cũng sở hữu cho mình "lớp áo" siêu bền bỉ, cụ thể là hai mặt kính cường lực với độ cứng cao đến từng phân tử, đồng thời mang đến độ sáng bóng sang trọng cao không kém. Đặc biệt, lớp viền xung quanh thân máy được chế tác từ thép siêu bền tạo sự ổn định khi vận hành cũng như định hình khung khi vô tình rơi. Theo Apple, dòng máy mới này đạt chuẩn chống bụi và nước IP68 chứng nhận bởi IEC (ở độ sâu 2m trong nước khoảng 30 phút).
                        <br />
                        <br />
                        Tuy mặt lưng iPhone Xs dùng kính cường lực, nhưng Apple vẫn hỗ trợ cho dòng sản phẩm này tính năng sạc rời Qi nhằm tăng thêm sự chuyên nghiệp và tiện lợi trong khi sử dụng. Trong 3 phiên bản màu sắc lần này, đặc biệt bản Gold và Space Gray được áp dụng quá trình sơn màu PVD vật lý tiên tiến giúp 2 màu này bám tốt trên lớp thép không gỉ, đồng thời phản xạ bổ sung một cách đẹp mắt trên lớp kính màn hình.
                        <br />
                        <br />
                        <div className={cx('textDescribeH')} >Con chip thông minh Apple A12 Bionic</div>
                        Được nhà sản xuất đánh giá là con chip cực kỳ mạnh mẽ trong các smartphone hiện nay, A12 Bionic với thế hệ Neural Engine mới sẽ cho hiệu suất cao hơn trong khâu trải nghiệm hình ảnh game, tăng cảm giác thực. CPU 6 lõi với 2 lõi xử lý các tác vụ nặng, và 4 lõi đảm nhận các tác vụ hàng ngày, bộ điều khiển sẽ tự động phân tác vụ trên 6 lõi này nhằm đảm bảo khai thác hết sức mạnh của 6 lõi, đồng thời tăng hiệu suất hoạt động theo hướng hiệu quả tối đa. Riêng về GPU, lõi thứ 4 hoàn toàn mới sẽ chịu trách nhiệm nén bộ nhớ lossless nhằm tăng hiệu năng đồ họa, cũng như chỉnh sửa video.
                        <br />
                        <br />
                        <div className={cx('textDescribeH')} >Face ID nhanh hơn bao giờ</div>
                        Nhờ vào sự kết hợp giữa hệ thống camera TrueDepth, Secure Enclave và Neural Engine của hãng, tính năng khóa bảo mật Face ID cho tốc độ nhanh và thông minh hơn. Thế hệ mới này sẽ dần khiến người dùng quên đi các thao tác nhập tên và password cho các thanh toán, mở khóa iPhone,... thay vào đó chỉ là một cái chạm ánh mắt trên màn hình. Các công nghệ tiên tiến trong hệ thống camera TrueDepth hoạt động cùng nhau trong tích tắc và  nhận ra bạn ngay lập tức.
                        <br />
                        <br />
                        <div className={cx('textDescribeH')} >Hệ thống camera kép 12MP đột phá</div>
                        Một cảm biến nằm ở camera sau kết hợp với công nghệ ISP và Neural Engine với mục đích giúp bạn tạo ra những bức ảnh chưa từng có trước đây, tốc độ cảm biến nhanh cùng sức mạnh của con chip A12 Bionic mang đến chi tiết nổi bật và tạo độ bóng cho hình ảnh. Cảm ứng mới này còn thể hiện hiệu quả của nó trong việc xử lý độ nhiễu khi chụp ảnh thiếu sáng, duy trì màu sắc trung thực của các bức ảnh, chụp chân dung chuyên nghiệp với hiệu ứng làm mờ background tuyệt đối. Ngoài ra, khi bạn chụp ảnh chân dung bằng camera trước 7MP còn có thể điều chỉnh độ sâu trong ảnh sau khi chụp để đảm bảo tính nghệ thuật.
                        <br />
                        <br />
                        Với việc chăm chút từng chi tiết từ diện mạo bên ngoài cho đến công nghệ bên trong, Apple cho biết sẽ không có bất kì dòng smartphone nào giống với iPhone nói chung và Xs - Xs Max - XR nói riêng. Sự khác biệt được xây dựng từ sự nổi bật, quá trình chế tác, sự bảo mật ngay từ đầu cho đến sự sáng tạo vĩ đại.
                    </div>
                </div>
            </div>

            <div className={cx('CategoryList')}>
                <CategoryList />
            </div>
        </div>
    )
}

export default DetailProduct;
