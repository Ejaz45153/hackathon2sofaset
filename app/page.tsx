import React from 'react';
import Image from 'next/image';

export default function ProductPage() {
  return (
    <div className="bg-[#f9f8f6] min-h-screen p-4">
      <header className="max-w-6xl mx-auto flex items-center justify-between py-4">
        <h1 className="text-xl font-bold">"SOFTY SOFA SHOP" <br/>MAIN SADDAR ZAINAB MARKET KARACHI</h1>
        <nav className="flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-black">Home</a>
          <a href="/shop" className="text-gray-600 hover:text-black">Shop</a>
          <a href="/blog" className="text-gray-600 hover:text-black">Order Now</a>
          <a href="/contact" className="text-gray-600 hover:text-black">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-96">
            <Image src="/sofa-main.jpg" alt="Leathery Sofa" layout="fill" objectFit="contain" />
          </div>
          <div className="flex space-x-4 mt-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="relative w-20 h-20 border rounded">
                <Image src={`/sofa-thumbnail-${index + 1}.jpg`} alt={`Thumbnail ${index + 1}`} layout="fill" objectFit="contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h2 className="text-3xl font-bold">LEATHERY SOFA</h2>
          <p className="text-xl text-gray-600 my-2">Rs. 250,000.00</p>
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
            <p className="text-sm text-gray-500">5 Customer Reviews</p>
          </div>
          <p className="text-gray-700 my-4">
          A special leathery sofa combines luxurious elegance with durability. Crafted from premium leather, it offers a sleek, timeless look and exceptional comfort. Resistant to wear and easy to clean, it’s perfect for sophisticated spaces. Available in various styles and colors, it elevates any interior with its rich texture and lasting quality.
          </p>
          <div className="mb-4">
            <h3 className="font-semibold">DURABILITY</h3>
            <div className="flex space-x-2">
              {['Much', 'More', 'Most'].map((size) => (
                <button key={size} className="px-4 py-2 border rounded hover:bg-gray-200">{size}</button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Color</h3>
            <div className="flex space-x-2">
              {['#532E21', '#784C2D', '#B67A4F'].map((color) => (
                <div
                  key={color}
                  style={{ backgroundColor: color }}
                  className="w-8 h-8 rounded-full border cursor-pointer"
                ></div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">Add To Cart</button>
            <button className="px-6 py-2 border rounded hover:bg-gray-200">Compare</button>
          </div>
        </div>
      </main>

      <section className="max-w-6xl mx-auto mt-10">
        <div className="border-b pb-4 mb-4">
          <h3 className="text-2xl font-semibold">Description</h3>
          <p className="text-gray-700">
          A leather sofa is durable, elegant, and easy to maintain. It offers timeless appeal, adapts to temperature, resists allergens, and softens with age, combining luxury and comfort for any space.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative w-full h-64">
            <Image src="/sofa-desc-1.jpg" alt="Sofa Description 1" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-full h-64">
            <Image src="/sofa-desc-2.jpg" alt="Sofa Description 2" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
