import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "会社概要 | Willoa",
  description:
    "Willoaは、シンガポールを拠点に、個人事業主・小規模事業者のITまわりを支える相談窓口です。",
};

export default function AboutPage() {
  return (
    <>
      <Header active="about" />

      <section className="hero" style={{ paddingBottom: 20 }}>
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
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)" }}>会社概要</h1>
        <p className="lead">
          Willoaは、シンガポールを拠点に、個人事業主・小規模事業者のITまわりを支える相談窓口です。
        </p>
      </section>

      <div
        className="branch-wrap"
        style={{ padding: "20px 28px 80px", maxWidth: 720 }}
      >
        <div className="section" style={{ paddingLeft: 0 }}>
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

          <div
            className="price-philosophy"
            style={{ maxWidth: "none", marginTop: 32 }}
          >
            <div className="leaf-shape" aria-hidden="true" />
            <p>
              <strong>
                AIによって、安く早くできることは大きく増えました。
              </strong>
              でも、それを実際に使いこなせるかどうかの差は、大企業よりも、個人事業主や小規模な組織のほうがずっと大きく残っています。Willoaは、その規模に特化して、AIをどう使うかを教える窓口でありたいと考えています。代わりに作業を引き受けることもできますが、それ以上に、使い方を身につけてもらうことを大事にしています。
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
