import { ShoppingCart, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import Button from "./ui/button";
import Slider from 'react-slick';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 커스텀 화살표
function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
    >
      <ChevronLeft className="w-8 h-8 text-white drop-shadow-lg" />
    </button>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
    >
      <ChevronRight className="w-8 h-8 text-white drop-shadow-lg" />
    </button>
  );
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: function (_, next) {
      setCurrentSlide(next);
    },
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <img src="/images/logo.png" alt="로고" className="h-12" />
            <nav className="hidden md:flex gap-8 text-gray-700">
              <a href="#">홈</a>
              <a href="#">제품</a>
              <a href="#">블로그</a>
              <a href="#">리뷰</a>
              <a href="#">슬럼족</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="text-sm text-gray-700"
            >
              {isLoggedIn ? '로그아웃' : '로그인'}
            </button>
            <ShoppingCart className="w-5 h-5" />
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* 캐러셀 */}
      <section className="py-8">
        <div className="w-[60%] mx-auto relative">
          <Slider {...carouselSettings}>
            <div>
              <img
                src="/images/hero.png"
                alt="배너"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>

            <div className="h-[300px] bg-orange-400 flex items-center justify-center text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">인기 간식 특가</h2>
                <Button className="bg-white text-orange-500">
                  지금 확인
                </Button>
              </div>
            </div>

            <div className="h-[300px] bg-green-400 flex items-center justify-center text-white rounded-lg">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">신제품 출시</h2>
                <Button className="bg-white text-green-500">
                  자세히 보기
                </Button>
              </div>
            </div>
          </Slider>

          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full">
            {currentSlide + 1} / 3
          </div>
        </div>
      </section>
    </div>
  );
}
