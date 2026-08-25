import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "おでかけNavi — シンガポール在住日本人の週末おでかけガイド | Willoa",
  description:
    "シンガポール在住の日本人向け週末おでかけ情報アプリ。AIがあなただけのおでかけコースを提案します。",
};

const sources = [
  { name: "The Smart Local", href: "https://thesmartlocal.com" },
  { name: "Time Out Singapore", href: "https://www.timeout.com/singapore" },
  { name: "Honeycombers", href: "https://thehoneycombers.com/singapore" },
  { name: "Mothership SG", href: "https://mothership.sg" },
  { name: "Eatbook", href: "https://eatbook.sg" },
  { name: "Little Day Out", href: "https://www.littledayout.com" },
  { name: "Daniel Food Diary", href: "https://danielfooddiary.com" },
  { name: "NParks", href: "https://www.nparks.gov.sg" },
];

const features = [
  {
    icon: "🔍",
    title: "イベント情報を探す",
    body: "シンガポールの最新イベント・グルメ・体験情報を毎週更新。カテゴリ・エリア・日程で絞り込めます。",
  },
  {
    icon: "🧭",
    title: "探訪スタンプ帳でシンガポールを巡る",
    body: "実在するスポットを巡ってチェックイン。訪れるたびに写真やひとことメモを残せて、在住期間に応じたレベルアップも楽しめます。",
  },
  {
    icon: "🗺",
    title: "モデルコースを参考におでかけ",
    body: "テーマ別に厳選されたおでかけコースを紹介。スポット・移動・食事まで丸ごと参考にできます。",
  },
  {
    icon: "📅",
    title: "予定表で管理・共有",
    body: "気になるイベントやコースを予定表に追加。家族と共有して、週末の計画をスムーズに立てられます。",
  },
];

const audience = [
  { icon: "✈️", text: "シンガポールに赴任中の日本人駐在員・ご家族" },
  { icon: "🗓", text: "週末の過ごし方に迷っている方" },
  { icon: "👶", text: "子連れでどこに行くか悩んでいる方" },
  { icon: "🌏", text: "現地のイベント情報を日本語で知りたい方" },
];

export default function OdekakeNaviPage() {
  return (
    <div className={styles.page}>
      <Link href="/#achievements" className={styles.backLink}>
        ← Willoaの実績一覧に戻る
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroBadge}>シンガポール在住の日本人向け</div>
        <h1>
          週末の<em>おでかけ</em>、
          <br />
          もっと楽しく。
        </h1>
        <p>
          イベント情報を毎週更新。
          <br />
          AIがあなただけのおでかけコースを提案します。
        </p>
        <a
          href="https://apps.apple.com/sg/app/%E3%81%8A%E3%81%A7%E3%81%8B%E3%81%91navi/id6787159354"
          className={styles.btnPrimary}
        >
          📱 アプリを入手
        </a>
      </section>

      <div className={styles.mockupWrap}>
        <div className={styles.mockupInner}>
          <div className={styles.mockupItem}>
            <div className={styles.phone}>
              <div className={styles.phoneImgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://dosuru.app/screenshots/screen-events.png?v=4"
                  alt="イベントを探す"
                />
              </div>
            </div>
            <div className={styles.mockupLabel}>イベントを探す</div>
          </div>
          <div className={styles.mockupItem}>
            <div className={styles.phone}>
              <div className={styles.phoneImgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://dosuru.app/screenshots/screen-explore.png?v=1"
                  alt="探訪スタンプ帳"
                />
              </div>
            </div>
            <div className={styles.mockupLabel}>探訪スタンプ帳</div>
          </div>
          <div className={styles.mockupItem}>
            <div className={styles.phone}>
              <div className={styles.phoneImgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://dosuru.app/screenshots/screen-schedule.png?v=2"
                  alt="予定表で管理"
                />
              </div>
            </div>
            <div className={styles.mockupLabel}>予定表で管理</div>
          </div>
        </div>
      </div>

      <section className={styles.sources}>
        <div className={styles.sectionLabel}>DATA SOURCES</div>
        <h2 className={styles.sectionTitle}>主要メディアから毎週自動収集</h2>
        <p className={styles.sourcesLead}>
          シンガポールの有名情報サイト・公式機関をまとめてチェック。自分で各サイトを見て回る手間がありません。
        </p>
        <div className={styles.sourcesGrid}>
          {sources.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener"
              className={styles.sourceChip}
            >
              {s.name}
            </a>
          ))}
        </div>
        <p className={styles.sourcesNote}>
          ※ その他複数ソースから取得・AIでフィルタリングしています
        </p>
      </section>

      <section className={styles.features}>
        <div className={styles.sectionLabel}>FEATURES</div>
        <h2 className={styles.sectionTitle}>4つの便利な機能</h2>
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.audience}>
        <div className={styles.sectionLabel}>FOR YOU</div>
        <h2 className={styles.sectionTitle}>こんな方におすすめ</h2>
        <ul className={styles.audienceList}>
          {audience.map((a) => (
            <li key={a.text}>
              <span>{a.icon}</span> {a.text}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.ctaBottom}>
        <h2>今すぐ始めよう</h2>
        <p>無料でご利用いただけます。</p>
        <a href="https://apps.apple.com/sg/app/%E3%81%8A%E3%81%A7%E3%81%8B%E3%81%91navi/id6787159354">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/ja-jp"
            alt="Download on the App Store"
            style={{ height: 54, width: "auto" }}
          />
        </a>
      </section>

      <footer className={styles.pageFooter}>
        <p>
          © 2026 WILLOA PTE. LTD. / おでかけNavi
          <Link href="/">Willoaトップ</Link>
          <Link href="/odekake-navi/privacy">プライバシーポリシー</Link>
          <Link href="/#contact">お問い合わせ</Link>
        </p>
      </footer>
    </div>
  );
}
