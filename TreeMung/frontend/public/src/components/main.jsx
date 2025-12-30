import "./css/Main.css";

export default function Main() {
  return (
    <div className="container">

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <h1 className="logo">트리멍</h1>

          <nav className="nav">
            <a href="#">홈</a>
            <a href="#">제품</a>
            <a href="#">브랜드 이야기</a>
            <a href="#">리뷰</a>
            <a href="#">슬럼족</a>
          </nav>

          <div className="icons">
            <span>💳</span>
            <span className="cart">
              🛒 <em>0</em>
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1604544203292-0daa7f847478"
          alt="강아지 간식"
        />
      </section>

      {/* Finder */}
      <section className="finder">
        <h2>강아지에게 맞는 간식을 찾아보세요</h2>

        <div className="finder-grid">
          <input type="text" placeholder="반려동물 이름 (예: 초코)" />

          <select>
            <option>반려동물 종류</option>
            <option>소형견</option>
            <option>중형견</option>
            <option>대형견</option>
          </select>

          <select>
            <option>나이</option>
            <option>강아지</option>
            <option>성견</option>
            <option>노령견</option>
          </select>

          <input type="text" placeholder="알레르기 (예: 닭고기)" />
        </div>

        <button className="find-btn">맞춤 간식 찾기</button>
      </section>

      {/* Products */}
      <section className="products">
        {[1, 2, 3, 4, 5].map((item) => (
          <div className="product-card" key={item}>
            <div className="product-img">🐾</div>
            <h3>강아지 간식</h3>
            <p>자연재료</p>
            <div className="price">
              <span className="sale">15,000원</span>
              <span className="origin">18,000원</span>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
