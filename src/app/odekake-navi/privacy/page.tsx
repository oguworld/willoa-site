import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | おでかけNavi",
};

export default function OdekakeNaviPrivacyPage() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: 800,
        margin: "40px auto",
        padding: "0 20px",
        lineHeight: 1.8,
        color: "#333",
      }}
    >
      <style>{`
        .privacy-h1 { font-size: 1.5rem; border-bottom: 2px solid #C8804A; padding-bottom: 8px; }
        .privacy-h2 { font-size: 1.1rem; margin-top: 2em; }
        .privacy-body a { color: #C8804A; }
      `}</style>
      <div className="privacy-body">
        <h1 className="privacy-h1">プライバシーポリシー</h1>
        <p>最終更新日：2026年6月4日</p>

        <p>
          おでかけNavi（以下「本アプリ」）は、東南アジア・オセアニア在住の日本人向け週末おでかけ情報PWAです。本プライバシーポリシーは、本アプリにおける個人情報の取り扱いについて説明します。
        </p>

        <h2 className="privacy-h2">1. 収集する情報</h2>
        <p>本アプリは以下の情報を収集することがあります。</p>
        <ul>
          <li>
            設定情報（都市・言語・プロフィール）：端末のlocalStorageに保存され、サーバーには送信されません。
          </li>
          <li>フィードバック：任意で送信いただいた内容（運営者のみが受信）。</li>
          <li>
            AIチャットの入力内容：イベント検索のためにAnthropicのClaude
            APIに送信されます。
          </li>
        </ul>

        <h2 className="privacy-h2">2. 情報の利用目的</h2>
        <ul>
          <li>アプリ機能の提供・改善</li>
          <li>イベント情報のフィルタリング（Claude API利用）</li>
          <li>フィードバック対応</li>
        </ul>

        <h2 className="privacy-h2">3. 第三者への提供</h2>
        <p>
          収集した情報を第三者に販売・提供することはありません。ただし、以下のサービスを利用しています。
        </p>
        <ul>
          <li>Anthropic Claude API（AIチャット・コンテンツ生成）</li>
          <li>OpenWeatherMap（天気情報）</li>
          <li>Meta / Instagram（イベント情報収集）</li>
        </ul>

        <h2 className="privacy-h2">4. Cookieおよびローカルストレージ</h2>
        <p>
          本アプリはCookieを使用しません。設定情報はブラウザのlocalStorageに保存されます。
        </p>

        <h2 className="privacy-h2">5. お問い合わせ</h2>
        <p>
          プライバシーに関するご質問は
          <a href="https://dosuru.app/#settings">アプリのフィードバックフォーム</a>
          からご連絡ください。
        </p>

        <p>
          <Link href="/odekake-navi">← おでかけNaviに戻る</Link>
        </p>
      </div>
    </div>
  );
}
