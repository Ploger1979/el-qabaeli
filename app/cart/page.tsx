"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartPage() {
    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <main dir="rtl" className="min-h-screen p-6 bg-white font-cairo">
            <h1 className="text-3xl font-bold text-[#20438a] mb-6">🛒 سلة المشتريات</h1>

            {cart.length === 0 ? (
                <p className="text-lg text-gray-700">السلة فارغة حاليًا.</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="border rounded p-4 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 rounded object-cover border"
                                        />
                                    )}
                                    <div>
                                        <p className="text-xl font-bold text-pink-700 mb-1">{item.name}</p>

                                        {/* ✅ الكمية مع التنسيق الواضح */}
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[#20438a] font-bold">الكمية:</span>
                                            <button
                                                onClick={() => decreaseQuantity(item.id)}
                                                className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 text-lg font-bold"
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="text-[#20438a] font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => increaseQuantity(item.id)}
                                                className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 text-lg font-bold"
                                            >
                                                +
                                            </button>
                                        </div>


                                        <p className="text-red-600 font-bold">السعر: {item.price} د.ل</p>
                                    </div>

                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                                >
                                    حذف
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 border-t pt-4">
                        <p className="text-xl font-bold text-[#20438a]">
                            💰 الإجمالي: <span className="text-red-600">{total} د.ل</span>
                        </p>

                        <Link
                            href="/checkout"
                            className="block mt-6 bg-[#000080] text-white text-center px-6 py-3 rounded text-lg font-bold hover:bg-blue-800 transition"
                        >
                            ▶️ المتابعة إلى الدفع
                        </Link>
                    </div>
                </>
            )}
        </main>
    );
}
