import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header active={null} />

      <section className="hero">
        <svg
          className="hero-branches"
          viewBox="0 0 340 340"
          aria-hidden="true"
        >
          <path
            d="M300 10 C 260 60, 250 90, 220 130 C 200 158, 190 190, 195 230"
            fill="none"
            stroke="#9CB176"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M270 20 C 245 70, 220 100, 210 150 C 203 182, 210 210, 200 250"
            fill="none"
            stroke="#8A7660"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M320 40 C 300 90, 280 120, 260 170 C 248 198, 250 225, 240 260"
            fill="none"
            stroke="#D9A94E"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
        <div className="eyebrow">
          SINGAPORE — 個人事業主のためのIT相談窓口
        </div>
        <h1>
          ちょっとしたITの相談、
          <br />
          ひとりで抱えていませんか。
        </h1>
        <p className="lead">
          Willoaは、シンガポールを拠点に、個人事業主・小規模事業者のITまわりを支える相談窓口です。
        </p>
        <div className="hero-actions">
          <a className="cta-btn" href="#contact">
            ちょっと聞いてみる
          </a>
          <a className="secondary" href="/about">
            会社概要を見る →
          </a>
        </div>
      </section>

      <div className="branch-wrap">
        <section id="service" className="section is-active">
          <div className="section-mark">
            <div className="leaf-shape" aria-hidden="true" />
          </div>
          <span className="section-eyebrow">SERVICE</span>
          <h2>サービス内容</h2>
          <p>準備中です。近日中に詳しい内容を掲載します。</p>
        </section>

        <section id="contact" className="section">
          <div className="section-mark">
            <div className="leaf-shape" aria-hidden="true" />
          </div>
          <span className="section-eyebrow">CONTACT</span>
          <h2>連絡先</h2>
          <div className="contact-box">
            <p>準備中です。近日中にお問い合わせ方法を掲載します。</p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
