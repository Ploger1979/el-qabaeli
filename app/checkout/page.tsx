"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react"; // ✅ مكتبة توليد QR Code

export default function CheckoutPage() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "wallet" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirm = async () => {
    setErrorMessage("");

    if (!paymentMethod) {
      setErrorMessage("❗ يرجى اختيار طريقة الدفع.");
      return;
    }

    let message = "";

    if (paymentMethod === "bank") {
      message = `مرحبًا، تم تحويل مبلغ ${total} د.ل إلى الحساب البنكي التالي:

الاسم: سليمان كيلانى حماد إبراهيم القبايلى
المصرف: مصرف التجارة والتنمية
رقم الحساب: 0013142371001

يرجى تأكيد الاستلام ومراجعة الحوالة.
شكرًا لتعاونكم.`;
    }
    else if (paymentMethod === "wallet") {
      message = `مرحبًا، تم دفع مبلغ ${total} د.ل باستخدام خدمة BCD Wallet.

رقم المستخدم: SU142371

يرجى تأكيد الاستلام ومراجعة الدفع.
شكرًا لتعاونكم.`;
    }

    const whatsappURL = `https://wa.me/218925881949?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main dir="rtl" className="min-h-screen p-6 bg-white font-cairo">
      <h1 className="text-3xl font-bold text-[#20438a] mb-6">📦 تأكيد الطلب والدفع</h1>

      {cart.map((item) => (
        <div key={item.id} className="mb-2">
          <p className="text-lg font-semibold text-pink-700">{item.name}</p>
          <p className="text-[#20438a] font-semibold">الكمية: {item.quantity}</p>
          <p className="text-red-600 font-bold">السعر: {item.price} د.ل</p>
        </div>
      ))}

      <hr className="my-4" />
      <p className="text-xl font-bold text-[#20438a] mb-6">
        💰 الإجمالي: <span className="text-red-600">{total} د.ل</span>
      </p>

      <div className="mt-10 flex flex-col items-center justify-center text-center">
        <p className="text-3xl font-semibold text-[#20438a] mb-4 underline">طريقة الدفع</p>

        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => {
              setPaymentMethod("bank");
              setErrorMessage("");
            }}
            className={`p-3 w-36 h-20 border rounded-xl flex items-center justify-center transition hover:scale-110 ${paymentMethod === "bank" ? "border-blue-600 shadow-lg" : "border-gray-300"}`}
          >
            <img src="/images/tejara-bank.png" alt="Bank Transfer" className="h-12 object-contain" />
          </button>

          <button
            onClick={() => {
              setPaymentMethod("wallet");
              setErrorMessage("");
            }}
            className={`p-3 w-36 h-20 border rounded-xl flex items-center justify-center transition hover:scale-110 ${paymentMethod === "wallet" ? "border-blue-600 shadow-lg" : "border-gray-300"}`}
          >
            <img src="/images/bcd-digital.png" alt="BCD Wallet" className="h-12 object-contain" />
          </button>
        </div>
      </div>

      {paymentMethod === "wallet" && (
        <div className="mt-10 text-center">
          <p className="font-semibold text-lg mb-4 text-[#20438a]">🪪 امسح QR وادفع باستخدام BCD Wallet:</p>
          <div className="bg-yellow-100 text-yellow-900 p-3 mt-6 rounded-md text-sm shadow">
            يرجى التأكد من أن لديك تطبيق BCD Wallet لتتمكن من الدفع عبر هذا QR.
          </div>

          <div className="inline-block border p-4 bg-white rounded-md shadow mt-4">
            <QRCodeCanvas
              value="رقم المستخدم: SU142371"
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
            />
          </div>

          <p className="mt-4 text-sm text-gray-500">رقم المستخدم: SU142371</p>
        </div>
      )}

      {paymentMethod === "bank" && (
        <div className="mt-10 text-center">
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md shadow-md text-sm leading-relaxed">
            ⚠️ بعد الضغط على زر <strong>تأكيد الدفع</strong> سيتم فتح WhatsApp –
            <span className="font-bold underline"> الرجاء إرسال صورة الحوالة يدويًا </span>
            داخل المحادثة لتأكيد الدفع.
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mt-14">
        <button
          type="button"
          onClick={handleConfirm}
          className={`px-12 py-3 text-white text-xl font-bold rounded-md shadow-lg border transition duration-300 ${paymentMethod ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`}
        >
          تأكيد الدفع
        </button>

        {errorMessage && (
          <p className="mt-4 text-red-600 font-medium text-sm">{errorMessage}</p>
        )}
      </div>
    </main>
  );
}
