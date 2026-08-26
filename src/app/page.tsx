import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollBranch from "@/components/ScrollBranch";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Header active={null} />
      <ScrollBranch />

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            SINGAPORE — 海外でIT・事業に携わる方へ
          </div>
          <h1>
            風にしなって、
            <br />
            折れない。
          </h1>
          <p className="lead">
            「本社に聞ける人がいない」——海外でIT・事業に携わる、そんな孤独をふっと話せる相手に。
          </p>
          <div className="hero-actions">
            <a className="cta-btn" href="#contact">
              ちょっと聞いてみる
            </a>
            <span className="secondary">info@willoa.net</span>
          </div>
        </div>
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
      </section>

      <div className="branch-wrap" id="route">
        <section className="section" id="about">
          <div className="section-eyebrow">
            <span className="leaf-shape" aria-hidden="true" />
            ABOUT
          </div>
          <h2>事業概要</h2>
          <p>
            海外でIT・事業に携わっていると、ちょっとした技術的な悩みを誰に相談すればいいか分からない瞬間があります。周りに詳しい人がいない、ベンダーやコンサルに頼むには大げさ、でも気になったときにすぐ聞きたい。
          </p>
          <p style={{ marginTop: 16 }}>
            IT業界で20年以上の経験を活かして、そんな「ちょっとした孤独」に寄り添う相談相手でありたいと思っています。
          </p>
          <p style={{ marginTop: 16 }}>
            AIでできることは増えましたが、だからこそ人が話を聞いてくれることに意味がある。雑談ベースで気軽に相談でき、必要なら最後は少し手を動かすところまでお付き合いします。
          </p>

          <div className="facts">
            <div>
              拠点 <span>Singapore</span>
            </div>
            <div>
              体制 <span>個人事業主として対応</span>
            </div>
            <div>
              経験 <span>IT業界20年以上</span>
            </div>
          </div>

          <p style={{ marginTop: 22 }}>
            具体的にどんなことができるか、次でご紹介します ↓
          </p>
        </section>

        <section className="section" id="service">
          <div className="section-eyebrow">
            <span className="leaf-shape" aria-hidden="true" />
            こんなことで困っていませんか
          </div>
          <h2>
            こんなお困りごと、
            <br />
            ありませんか
          </h2>
          <p>小さなことでも構いません。まずは雑談程度でも歓迎です。</p>
          <ul className="pain-list">
            <li>周りにITに詳しい人がいない</li>
            <li>本社に気軽に聞ける相手がいない</li>
            <li>ベンダーやコンサルに頼むには大げさで高い</li>
            <li>気付いた時に「ふっと」相談できる相手が欲しい</li>
          </ul>

          <p className="service-secondary-intro">
            ITのちょっとしたお困りごと、お手伝いします。
          </p>
          <div className="service-card" style={{ maxWidth: "none" }}>
            <h3>ちょっとしたお願いごと</h3>
            <p>
              「これくらいで頼んでいいのかな」ということほど歓迎です。AI活用で工数を抑え、実費に近い価格でご提供します。
            </p>
            <div className="mini-price">
              <div className="mini-price-row">
                <span className="item">ホームページの軽微な修正</span>
                <span className="price">50ドル</span>
              </div>
              <div className="mini-price-row">
                <span className="item">PC・メールのトラブル相談</span>
                <span className="price">50ドル</span>
              </div>
              <div className="mini-price-row">
                <span className="item">新規ツール導入サポート</span>
                <span className="price">150ドル</span>
              </div>
              <div className="mini-price-row">
                <span className="item">月次保守プラン（月2件まで）</span>
                <span className="price">150ドル / 月</span>
              </div>
              <div className="mini-price-row">
                <span className="item">サイト移行・大規模案件</span>
                <span className="price">個別見積もり</span>
              </div>
            </div>
          </div>

          <p className="service-secondary-intro">
            定期的に相談したい方には、月額の相談サービスもあります。
          </p>
          <div className="plan-grid">
            <div className="plan-card">
              <span className="plan-eyebrow">お試し</span>
              <h3>まずは話してみる</h3>
              <div className="plan-price">無料</div>
              <p>初めての方はまず30分、無料でお話ししましょう。</p>
              <ul className="plan-list">
                <li>初回30分のオンライン相談</li>
                <li>お困りごとのヒアリングのみ（勧誘なし）</li>
              </ul>
              <span className="plan-time">対応目安時間: 30分（初回のみ）</span>
              <a className="plan-cta-outline" href="#contact">
                無料で話してみる
              </a>
            </div>

            <div className="plan-card">
              <span className="plan-eyebrow">ライト</span>
              <h3>まずはひとこと</h3>
              <div className="plan-price">
                98ドル
                <span style={{ fontSize: 12, color: "var(--ink-soft)" }}>
                  {" "}
                  / 月
                </span>
              </div>
              <p>困った時にチャットで聞ける、一番身軽な形です。</p>
              <ul className="plan-list">
                <li>チャット相談 月3件（返信目安2〜3営業日）</li>
                <li>通話は必要な時にスポットで</li>
              </ul>
              <span className="plan-time">対応目安時間: 約2時間/月</span>
              <a className="plan-cta-outline" href="#contact">
                気軽に始める
              </a>
            </div>

            <div className="plan-card featured">
              <span className="plan-badge">おすすめ</span>
              <span className="plan-eyebrow">スタンダード</span>
              <h3>月イチ相談</h3>
              <div className="plan-price">
                198ドル
                <span style={{ fontSize: 12, color: "var(--ink-soft)" }}>
                  {" "}
                  / 月
                </span>
              </div>
              <p>定期的に相談したい方の、一番選ばれやすい形です。</p>
              <ul className="plan-list">
                <li>チャット・メール相談 月5件（返信目安1営業日）</li>
                <li>月1回60分面談（オンライン/対面）</li>
              </ul>
              <span className="plan-time">対応目安時間: 約5時間/月</span>
              <a className="plan-cta" href="#contact">
                このプランで申し込む
              </a>
            </div>

            <div className="plan-card">
              <span className="plan-eyebrow">アドバイザリー</span>
              <h3>がっつり伴走</h3>
              <div className="plan-price">
                480ドル
                <span style={{ fontSize: 12, color: "var(--ink-soft)" }}>
                  {" "}
                  / 月
                </span>
              </div>
              <p>経営判断に近いところまで、継続的に伴走します。</p>
              <ul className="plan-list">
                <li>チャット優先対応 月10件（返信目安当日）</li>
                <li>月2回60分の通話＋実装作業も対応</li>
              </ul>
              <span className="plan-time">対応目安時間: 約13時間/月</span>
              <a className="plan-cta-outline" href="#contact">
                がっつり相談したい
              </a>
            </div>
          </div>
          <p className="plan-note">※ 内容は、実際にお話ししながら調整します。</p>
        </section>

        <section className="section" id="achievements">
          <div className="section-eyebrow">
            <span className="leaf-shape" aria-hidden="true" />
            ACHIEVEMENTS
          </div>
          <h2>実績</h2>
          <p>Willoaが企画・開発・運用しているサービスの一例です。</p>
          <div className="showcase">
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-topbar">
                  おでかけ<span>Navi</span>
                </div>
                <div className="phone-cards">
                  <div className="phone-card">
                    <div className="thumb" />
                    <div className="t1">週末のイベント情報</div>
                    <div className="t2">毎週自動更新</div>
                  </div>
                  <div className="phone-card">
                    <div className="thumb" />
                    <div className="t1">探訪スタンプ帳</div>
                    <div className="t2">スポットを巡って記録</div>
                  </div>
                </div>
                <div className="phone-nav">
                  <div className="item active">
                    <div className="ic" />
                    探す
                  </div>
                  <div className="item">
                    <div className="ic" />
                    スタンプ
                  </div>
                  <div className="item">
                    <div className="ic" />
                    予定
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase-copy">
              <h3>おでかけNavi</h3>
              <p>
                シンガポール在住の日本人向け週末おでかけ情報アプリ。企画・開発・AI連携・運用まで一貫して担当しています。
              </p>
              <a className="domain" href="/odekake-navi">
                詳しく見る →
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-eyebrow">
            <span className="leaf-shape" aria-hidden="true" />
            連絡先
          </div>
          <h2>連絡先</h2>
          <div className="contact-box">
            <p>ご相談・お見積もりは無料です。お気軽にどうぞ。</p>
            <ContactForm />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
