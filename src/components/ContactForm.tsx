"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY) return;

    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Willoaサイトからのお問い合わせ");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!WEB3FORMS_ACCESS_KEY) {
    return (
      <p className="form-note">
        フォームは準備中です。お急ぎの場合はメールまたはWhatsAppでご連絡ください。
      </p>
    );
  }

  if (status === "success") {
    return (
      <p className="form-note">
        送信しました。ありがとうございます。追ってご連絡します。
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        お名前（任意）
        <input type="text" name="name" autoComplete="name" />
      </label>
      <label>
        メールアドレス
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
        />
      </label>
      <label>
        お問い合わせ内容
        <textarea name="message" required />
      </label>
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "送信中…" : "送信する"}
      </button>
      {status === "error" && (
        <p className="form-note">
          送信に失敗しました。お手数ですがメールまたはWhatsAppでご連絡ください。
        </p>
      )}
    </form>
  );
}
