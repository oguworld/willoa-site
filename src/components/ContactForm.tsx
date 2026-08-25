"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
        <input type="email" name="email" required autoComplete="email" />
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
