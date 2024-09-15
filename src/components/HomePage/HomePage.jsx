import "./HomePage.css"; // Import your CSS file
import koiFarmImage from "./assets/koi-farm.jpg"; // Example image for farms
import koiVarietyImage1 from "./assets/koi-fish.jpg"; // Example image for Koi variety 1
import koiVarietyImage2 from "./assets/koi-fish1.jpg"; // Example image for Koi variety 2
import koiVarietyImage3 from "./assets/koi-fish2.jpg"; // Example image for Koi variety 3
import logo from "./assets/logo.jpg"; // Example logo
import HeroImage from "./assets/hero-image.jpg";
import aboutImage1 from "./assets/about-us1.jpg";
import aboutImage2 from "./assets/about-us2.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <a href="#trang-chu">Trang chủ</a>
            </li>
            <li>
              <a href="#gioi-thieu">Giới thiệu</a>
            </li>
            <li>
              <a href="#trang-trai">Trang trại</a>
            </li>
            <li>
              <a href="#ca-koi">Cá Koi</a>
            </li>
            <li>
              <a href="#dich-vu">Dịch vụ</a>
            </li>
            <li>
              <a href="#lien-he">Liên hệ</a>
            </li>
            <li>
              <a href="#khac">Khác</a>
            </li>
            <li>
              <Link to="/login">Đăng nhập</Link>
              <span className="separator">|</span>
              <Link to="/register">Đăng kí</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Welcome Message (above the hero image) */}
      <div className="welcome-message">
        <h2>
          Chào mừng bạn đến với đa cấp lừa đảo uy tín hàng đầu Việt Nam
          <br />
          Công ty của chúng tôi chuyên cung cấp cho những tour tham quan cực lí
          thú. <br />
          Đảm bảo mang đến cho bạn trải nghiệm chưa từng có.
        </h2>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img src={HeroImage} alt="About us" />
        </div>
      </section>

      {/* Form Section */}
      <div className="tour-form-container">
        <div className="tour-form-row">
          <strong className="tour-label">Tour trọn gói</strong>
          <strong className="tour-label1">Đặt tour</strong>
        </div>

        <div className="tour-form-row">
          {/* Trang trại Input with Select */}
          <div className="dropdown-container">
            <select className="form-input">
              <option value="">Chọn trang trại</option>
              <option value="farm1">Trang trại 1</option>
              <option value="farm2">Trang trại 2</option>
              <option value="farm3">Trang trại 3</option>
            </select>
          </div>

          {/* Giống cá Input with Select */}
          <div className="dropdown-container">
            <select className="form-input">
              <option value="">Chọn giống cá</option>
              <option value="variety1">Giống cá 1</option>
              <option value="variety2">Giống cá 2</option>
              <option value="variety3">Giống cá 3</option>
            </select>
          </div>

          {/* Mức giá Input with Select */}
          <div className="dropdown-container">
            <select className="form-input">
              <option value="">Chọn mức giá</option>
              <option value="under10">Dưới 10 triệu</option>
              <option value="10to20">10 - 20 triệu</option>
              <option value="above20">Trên 20 triệu</option>
            </select>
          </div>

          {/* Thời gian Input with Select */}
          <div className="dropdown-container">
            <select className="form-input">
              <option value="">Chọn thời gian</option>
              <option value="1day">1 ngày</option>
              <option value="3days">3 ngày</option>
              <option value="7days">7 ngày</option>
            </select>
          </div>

          <button className="search">Tìm kiếm</button>
        </div>
      </div>

      <div className="about-us-section">
        <div className="about-us-content">
          <div className="about-us-text">
            <h2>About Us</h2>
            <p>
              Matsue Nishikigoi Center là một trong các trại cá Koi Nhật Bản nổi
              tiếng với quy mô lớn. Matsue Nishikigoi được thành lập bởi ông
              Shoichi Iizuka vào tháng 4 năm 1996. Các dòng cá Koi tại trung tâm
              Matsue rất đa dạng như Kohaku, Showa, Sanke, Doitsu. Nhưng trung
              tâm được biết đến rộng rãi là nhờ dòng cá Koi Jumbo Kohaku.
            </p>
            <p>
              Nhờ kinh nghiệm và nỗ lực không ngừng của ông Iizuka, Matsue được
              mọi người biết đến rộng rãi với dòng Jumbo Kohaku và trở thành nơi
              đáng tin cậy cho những người yêu cá Koi.
            </p>
          </div>
          <div className="about-us-images">
            <img
              src={aboutImage1}
              alt="Koi Farm"
              className="about-image first-image"
            />
            <img
              src={aboutImage2}
              alt="Koi Farm"
              className="about-image second-image"
            />
          </div>
        </div>
      </div>

      <div className="famous-koi-farms-section">
        <h2>Các Trang Trại Cá Koi Nổi Tiếng</h2>
        <div className="farms-gallery">
          <div className="farm-item">
            <img src={koiFarmImage} alt="Farm 1" />
            <h3>Trang Trại 1</h3>
          </div>
          <div className="farm-item">
            <img src={aboutImage1} alt="Farm 2" />
            <h3>Trang Trại 2</h3>
          </div>
          <div className="farm-item">
            <img src={aboutImage2} alt="Farm 3" />
            <h3>Trang Trại 3</h3>
          </div>
        </div>
      </div>

      <div className="famous-koi-varieties-section">
        <h2>Các Giống Cá Koi Nổi Tiếng</h2>
        <div className="varieties-gallery">
          <div className="variety-item">
            <img src={koiVarietyImage1} alt="Variety 1" />
            <h3>Giống Cá 1</h3>
          </div>
          <div className="variety-item">
            <img src={koiVarietyImage2} alt="Variety 2" />
            <h3>Giống Cá 2</h3>
          </div>
          <div className="variety-item">
            <img src={koiVarietyImage3} alt="Variety 3" />
            <h3>Giống Cá 3</h3>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <h3>Liên hệ với chúng tôi</h3>
            <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ, Nhật Bản</p>
            <p>Email: contact@koibookingsystem.com</p>
            <p>Điện thoại: +81 123 456 789</p>
          </div>
          <div className="footer-copyright">
            <p>
              &copy; 2024 Koi Booking System. Tất cả các quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
