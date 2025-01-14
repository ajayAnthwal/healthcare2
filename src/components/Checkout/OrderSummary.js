"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import buy from "@/assets/images/checkout/buy.png";
import product from "@/assets/images/checkout/product.png";

const orderData = [
  {
    type: "service",
    title: "Trained Nurse at Home",
    price: 2000000,
    image: buy,
  },
  {
    type: "service",
    title: "Trained Nurse at Home",
    price: 2000000,
    image: buy,
  },

  {
    type: "buy",
    title: "Brand C Wheelchair",
    price: 20000,
    deliveryFee: 1234,
    image: product,
    quantity: 1,
  },
  {
    type: "buy",
    title: "Brand C Wheelchair",
    price: 20000,
    image: product,
    quantity: 1,
  },
  {
    type: "rent",
    title: "Brand C Wheelchair",
    price: 20000,
    securityDeposit: 10200,
    rentalDetails: {
      timePeriod: "15 Days",
      startTime: "1st Jan, 2025",
    },
    image: product,
    quantity: 1,
  },
  {
    type: "rent",
    title: "Brand C Wheelchair",
    price: 20000,
    securityDeposit: 10200,
    rentalDetails: {
      timePeriod: "15 Days",
      startTime: "1st Jan, 2025",
    },
    image: product,
    quantity: 1,
  },
];

export default function OrderSummary() {
  const [items, setItems] = useState(orderData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleQuantityChange = (index, change) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index && item.quantity
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const calculateTotal = () =>
    items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const renderItemsByType = (type) =>
    items
      .filter((item) => item.type === type)
      .map((item, index) => (
        <div
          key={index}
          className="flex items-start justify-between border-b pb-4 border-borderGray "
        >
          <div className="flex items-start space-x-4">
            <div className="w-[150px] h-[120px] relative">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              {item.type === "rent" && (
                <p className="text-sm text-gray-600">
                  Time Period: {item.rentalDetails.timePeriod}
                  <br />
                  Start Time: {item.rentalDetails.startTime}
                </p>
              )}
              {item.type === "buy" && item.deliveryFee && (
                <p className="text-sm text-gray-600">
                  Delivery Fee: ₹{item.deliveryFee}
                </p>
              )}

              {(item.type === "buy" || item.type === "rent") && (
                <div className="mt-4 flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border rounded-md">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="text-right">
            <p className="font-bold">₹{item.price.toLocaleString()}</p>
            {item.type === "rent" && (
              <p className="text-sm text-gray-600">
                Security Deposit: ₹{item.securityDeposit}
              </p>
            )}
          </div>
        </div>
      ));

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-[#E6F5F5] p-6  w-[988px]">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <p>Subtotal of your order</p>
      <div className="space-y-6">
        <div>
          <p className="text-lg font-bold mb-2">Services</p>
          {renderItemsByType("service")}
        </div>
        <div>
          <p className="text-lg font-bold mb-2">Buy</p>
          {renderItemsByType("buy")}
        </div>
        <div>
          <p className="text-lg font-bold mb-2">Rent</p>
          {renderItemsByType("rent")}
        </div>
      </div>
      <div className="mt-6 text-right">
        <h3 className="text-lg font-bold">
          Subtotal ({items.reduce((acc, item) => acc + (item.quantity || 1), 0)}{" "}
          items): ₹{calculateTotal().toLocaleString()}
        </h3>
      </div>
    </div>
  );
}
