const products = [
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      price: 8999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      category: "Electronics",
      description: "Immersive sound with hybrid active noise cancellation."
    },
    {
      id: 2,
      name: "Minimalist Leather Watch",
      price: 4499,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
      category: "Accessories",
      description: "Classic design with a genuine leather strap and scratch-resistant glass."
    },
    {
      id: 3,
      name: "Ergonomic Mechanical Keyboard",
      price: 5999,
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      category: "Electronics",
      description: "Tactile brown switches with customizable RGB backlighting."
    },
    {
      id: 4,
      name: "Premium Hydro Flask (32oz)",
      price: 1999,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
      category: "Fitness",
      description: "Double-wall vacuum insulation keeps drinks cold for up to 24 hours."
    },
    {
      id: 5,
      name: "Ultra-Lightweight Running Shoes",
      price: 3499,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      category: "Fitness",
      description: "Breathable mesh upper with maximum shock-absorbing soles."
    },
    {
      id: 6,
      name: "Smart Fitness Band Pro",
      price: 2799,
      image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=800&q=80",
      category: "Electronics",
      description: "Tracks heart rate, sleep cycles, and daily steps with a 10-day battery life."
    },
    {
      id: 7,
      name: "Organic Cotton Hoodie",
      price: 2499,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
      category: "Clothing",
      description: "Super soft, sustainably sourced cotton relaxed-fit hoodie."
    },
    {
      id: 8,
      name: "Portable Bluetooth Speaker",
      price: 3199,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
      category: "Electronics",
      description: "IPX7 waterproof speaker with punchy bass and 360-degree sound."
    },
    {
      id: 9,
      name: "Matte Black Sunglasses",
      price: 1299,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      category: "Accessories",
      description: "Polarized lenses with 100% UV protection and durable frames."
    },
    {
      id: 10,
      name: "Ceramic Coffee Dripper Set",
      price: 1599,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      category: "Home & Kitchen",
      description: "Pour-over coffee maker set complete with a glass carafe."
    },
    {
      id: 11,
      name: "Anti-Theft Travel Backpack",
      price: 3899,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      category: "Accessories",
      description: "Hidden zippers and built-in USB charging port for secure travel."
    },
    {
      id: 12,
      name: "Eco-Friendly Yoga Mat",
      price: 1799,
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
      category: "Fitness",
      description: "Non-slip texture, 6mm thick TPE material for joint cushioning."
    },
    {
      id: 13,
      name: "Wireless Charging Pad",
      price: 1499,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
      category: "Electronics",
      description: "15W fast wireless charging for Qi-enabled smartphones."
    },
    {
      id: 14,
      name: "Stainless Steel Chef's Knife",
      price: 2299,
      image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=800&q=80",
      category: "Home & Kitchen",
      description: "High-carbon forged steel razor-sharp 8-inch utility knife."
    },
    {
      id: 15,
      name: "Denim Trucker Jacket",
      price: 3999,
      image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
      category: "Clothing",
      description: "Timeless vintage wash denim jacket with button closures."
    },
    {
      id: 16,
      name: "Dimmable LED Desk Lamp",
      price: 1899,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      category: "Home & Kitchen",
      description: "Touch control lamp with 5 color modes and a built-in timer."
    },
    {
      id: 17,
      name: "Ergonomic Memory Foam Pillow",
      price: 2199,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
      category: "Home & Kitchen",
      description: "Contoured design to relieve neck pain and improve sleep posture."
    },
    {
      id: 18,
      name: "Leather Trifold Wallet",
      price: 1199,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      category: "Accessories",
      description: "Genuine slim leather wallet with RFID blocking technology."
    },
    {
      id: 19,
      name: "Compact Pocket Drone",
      price: 7499,
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
      category: "Electronics",
      description: "1080p HD camera drone with altitude hold and one-key return."
    },
    {
      id: 20,
      name: "Adjustable Hand Dumbbells",
      price: 4999,
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
      category: "Fitness",
      description: "All-in-one weight adjustable set perfect for home workouts."
    }
  ];
  
  export default products;