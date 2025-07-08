"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "bank" | null>(null);
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirm = async () => {
    if (!paymentMethod) {
      alert("يرجى اختيار طريقة الدفع");
      return;
    }

    if (paymentMethod === "paypal") {
      // ✅ إرسال البيانات يدويًا بـ fetch إلى Formspree
      await fetch("https://formspree.io/f/mgvybdwn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          payment_method: "PayPal",
          total: `${total} د.ل`,
          order_details: cart.map((item) => `${item.name} × ${item.quantity}`).join(" | "),
          message: "يرجى التواصل معنا لإتمام إجراءات التسليم. هناك مصاريف شحن تختلف حسب المنطقة (بـنغازي / خارجها).",
          email: "aymanploger@gmail.com",
        }).toString(),
      });

      // ✅ إعادة التوجيه للصفحة المخصصة
      router.push("/thanks");
    } else if (paymentMethod === "bank") {
      const message = `السلام عليكم، لقد قمت بتحويل ${total} د.ل إلى حساب:
سليمان كيلانى حماد إبراهيم القبايلى
مصرف التجارة والتنمية
رقم الحساب: 0013142371001

يرجى مراجعة الحوالة.`;
      const whatsappURL = `https://wa.me/218925881949?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    }
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

      {/* ✅ اختيار طريقة الدفع */}
      <div className="mt-10 flex flex-col items-center justify-center text-center">
        <p className="text-3xl font-semibold text-[#20438a] mb-4 underline">طريقة الدفع</p>

        <div className="flex gap-6">
          <button
            onClick={() => setPaymentMethod("bank")}
            className={`p-3 w-32 h-20 border rounded-xl flex items-center justify-center transform transition duration-300 hover:scale-110 ${paymentMethod === "bank" ? "border-blue-600 shadow-lg" : "border-gray-300"
              }`}
          >
            <img src="/images/tejara-bank.png" alt="Tejara Bank" className="h-10 object-contain" />
          </button>

          
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <button
          type="button"
          onClick={handleConfirm}
          disabled={!paymentMethod}
          className={`
      px-12 py-3 text-white text-xl font-bold rounded-md shadow-lg border transition duration-300
      ${paymentMethod ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}
    `}
        >
          تأكيد الدفع
        </button>
      </div>

    </main>
  );
}
