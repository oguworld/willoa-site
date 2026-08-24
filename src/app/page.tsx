import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollBranch from "@/components/ScrollBranch";

export default function Home() {
  return (
    <>
      <Header active={null} />
      <ScrollBranch />

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
          風にしなって、
          <br />
          折れない。
        </h1>
        <p className="lead">
          AIによって、安く早くできることは大きく増えました。でも、どう使えばいいか分からない、という差が、個人事業主や小規模な組織ほど大きく残っています。Willoaは、その規模に特化して、AIの使い方そのものを教える窓口です。必要であれば、代わりに手を動かすこともします。小さな相談ほど、歓迎します。
        </p>
        <div className="hero-actions">
          <a className="cta-btn" href="#contact">
            ちょっと聞いてみる
          </a>
          <span className="secondary">info@willoa.net</span>
        </div>
      </section>

      <div className="branch-wrap" id="route">
        <svg
          className="branch-svg"
          viewBox="0 0 60 1400"
          preserveAspectRatio="none"
          id="branchSvg"
        >
          <path
            className="branch-path"
            id="branchPath"
            d="M20 0 C 40 120, 5 240, 22 360 C 38 470, 8 590, 20 700 C 32 800, 6 900, 20 1000 C 34 1090, 10 1200, 20 1400"
          />
          <path
            className="branch-path-fill"
            id="branchPathFill"
            d="M20 0 C 40 120, 5 240, 22 360 C 38 470, 8 590, 20 700 C 32 800, 6 900, 20 1000 C 34 1090, 10 1200, 20 1400"
          />
        </svg>
        <div className="drift-leaf" id="driftLeaf" />

        <section className="section" id="about">
          <span className="section-eyebrow">ABOUT</span>
          <div className="section-mark">
            <div className="leaf-shape" />
          </div>
          <h2>会社概要</h2>
          <p>
            企画・開発・運用のすべてを代表ひとりで担当しています。自分自身も個人事業主だからこそ、大きな業者には頼みにくい「ちょっとしたこと」に付き合えます。
          </p>

          <div className="facts">
            <div>
              拠点 <span>Singapore</span>
            </div>
            <div>
              体制 <span>個人事業主として対応</span>
            </div>
            <div>
              専門 <span>Web・IT周りの相談全般</span>
            </div>
          </div>

          <p style={{ marginTop: 22 }}>
            代表は、ITベンダーと事業会社の両方でIT管理に携わってきた経験があります。技術だけでなく、IT管理全般に幅広く触れてきました。大きな案件でなくても、「これ、どこに相談すればいいんだろう」くらいの段階で声をかけてもらえたら嬉しいです。
          </p>

          <div className="price-philosophy">
            <div className="leaf-shape" aria-hidden="true" />
            <p>
              <strong>
                AIによって、安く早くできることは大きく増えました。
              </strong>
              でも、それを実際に使いこなせるかどうかの差は、大企業よりも、個人事業主や小規模な組織のほうがずっと大きく残っています。Willoaは、その規模に特化して、AIをどう使うかを教える窓口でありたいと考えています。代わりに作業を引き受けることもできますが、それ以上に、使い方を身につけてもらうことを大事にしています。
            </p>
          </div>
        </section>

        <section className="section" id="service">
          <span className="section-eyebrow">こんなことで困っていませんか</span>
          <div className="section-mark">
            <div className="leaf-shape" />
          </div>
          <h2>
            こんなお困りごと、
            <br />
            ありませんか
          </h2>
          <p>小さなことでも構いません。まずは雑談程度でも歓迎です。</p>
          <ul className="pain-list">
            <li>ホームページ、何年も更新できていない</li>
            <li>担当者が辞めて、社内に触れる人がいない</li>
            <li>ちょっとした修正のために業者に頼むのは大げさに感じる</li>
            <li>日本語で相談できる相手がいない</li>
          </ul>

          <div className="price-philosophy">
            <div className="leaf-shape" aria-hidden="true" />
            <p>
              <strong>
                AIを駆使して対応しているので、価格は実際にかかる工数にほぼ近い金額です。
              </strong>
              余計なマージンを載せない分、格安でお引き受けできます。
            </p>
          </div>

          <div className="plan-grid">
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
                <li>
                  チャットでの相談 月3件まで（1件のやり取りは自由・返信目安2〜3営業日）
                </li>
                <li>通話は必要な時にスポットで相談</li>
                <li>気軽に試してみたい方向け</li>
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
                <li>
                  チャット・メールでの相談 月5件まで（1件のやり取りは自由・返信目安1営業日）
                </li>
                <li>月1回、60分の面談（オンライン・対面どちらも可）</li>
                <li>ツール選定・契約前のセカンドオピニオンにも</li>
              </ul>
              <span className="plan-time">対応目安時間: 約5時間/月</span>
              <a className="plan-cta" href="#contact">
                まずは30分、無料で話してみる
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
                <li>
                  チャット優先対応 月10件まで（1件のやり取りは自由・返信目安当日）
                </li>
                <li>月2回、60分の通話</li>
                <li>ちょっとした実装作業も月内で対応</li>
              </ul>
              <span className="plan-time">対応目安時間: 約13時間/月</span>
              <a className="plan-cta-outline" href="#contact">
                がっつり相談したい
              </a>
            </div>
          </div>
          <p className="plan-note">※ 内容は、実際にお話ししながら調整します。</p>

          <p className="service-secondary-intro">
            そのほか、こんな形でもお手伝いしています。
          </p>
          <div className="service-card" style={{ maxWidth: "none" }}>
            <h3>ちょっとしたお願いごと</h3>
            <p>
              ホームページの修正から、アカウント整理、ちょっとした資料作りまで。「これくらいで頼んでいいのかな」ということほど歓迎です。
            </p>
            <ul>
              <li>個人事業主・小規模店舗の社長向け</li>
              <li>トラブル時の相談窓口としても対応</li>
            </ul>
            <div className="mini-price">
              <div className="mini-price-row">
                <span className="item">
                  ホームページのちょっとした修正（テキスト・画像差し替えなど）
                </span>
                <span className="price">50ドル</span>
              </div>
              <div className="mini-price-row">
                <span className="item">
                  パソコン・メールの調子が悪いときの相談
                </span>
                <span className="price">50ドル</span>
              </div>
              <div className="mini-price-row">
                <span className="item">
                  Google / Microsoftアカウントの整理・設定
                </span>
                <span className="price">80ドル</span>
              </div>
              <div className="mini-price-row">
                <span className="item">見積書・請求書のテンプレート作成</span>
                <span className="price">100ドル</span>
              </div>
              <div className="mini-price-row">
                <span className="item">
                  クラウドのバックアップ・セキュリティ設定
                </span>
                <span className="price">100ドル</span>
              </div>
              <div className="mini-price-row">
                <span className="item">
                  業務用スプレッドシートの作成（自動計算など）
                </span>
                <span className="price">150ドル</span>
              </div>
              <div className="mini-price-row">
                <span className="item">
                  新しいツールの導入・初期設定サポート
                </span>
                <span className="price">150ドル</span>
              </div>
              <div className="mini-price-row">
                <span className="item">
                  月次保守プラン（月2件までの更新・修正＋稼働監視）
                </span>
                <span className="price">150ドル / 月</span>
              </div>
              <div className="mini-price-row">
                <span className="item">
                  サイト移行・大規模リニューアルなど大きめの案件
                </span>
                <span className="price">個別見積もり</span>
              </div>
            </div>
          </div>

          <div className="price-philosophy">
            <div className="leaf-shape" aria-hidden="true" />
            <p>
              <strong>ここに載っていないことでも大丈夫です。</strong>
              デジタル・ITに関することなら、何でもお気軽にご連絡ください。
            </p>
          </div>
        </section>

        <section className="section" id="achievements">
          <span className="section-eyebrow">ACHIEVEMENTS</span>
          <div className="section-mark">
            <div className="leaf-shape" />
          </div>
          <h2>実績</h2>
          <p>準備中です。近日中に制作実績を掲載します。</p>
        </section>

        <section className="section" id="contact">
          <span className="section-eyebrow">連絡先</span>
          <div className="section-mark">
            <div className="leaf-shape" />
          </div>
          <h2>連絡先</h2>
          <div className="contact-box">
            <p>
              デジタル・ITに関することなら、何でもお引き受けします。まずは軽く聞いてみるだけでも大丈夫です。小さな相談ほど、歓迎します。ご相談・お見積もりは無料です。
            </p>
            <div className="contact-actions">
              <a className="mail-btn" href="mailto:info@willoa.net">
                ちょっと聞いてみる
              </a>
              <a
                className="x-link"
                href="https://x.com/willoa_sg"
                target="_blank"
                rel="noopener"
              >
                X: @willoa_sg
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
