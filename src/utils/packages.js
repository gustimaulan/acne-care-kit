import slider from "./slider";

const handleWhatsapp = (message) => {
  const phoneNumber = "6285227713001";

  // Track AddToCart event with Facebook Pixel
  fbq("track", "AddToCart");

  // Track Contact event with TikTok Pixel
  if (window.ttq) {
    window.ttq.track("Contact");
  }

  window.open(
    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`
  );
};

// Usage:
const handleWhatsapp1 = () => {
  handleWhatsapp("Halo kak, Saya mau info produk Acne Care Kit 1 dong");
};

const handleWhatsapp2 = () => {
  handleWhatsapp("Halo kak, Saya mau info produk Acne Care Kit 2 dong");
};

const handleWhatsapp3 = () => {
  handleWhatsapp("Halo kak, Saya mau info produk Acne Care Kit 3 dong");
};


const packages = [
    {
      img: slider[0].img,
      alt: slider[0].title,
      title: 'Acne Care Kit 1',
      oldPrice: 'Rp 200.000',
      newPrice: 'Rp 187.500',
      onClick: handleWhatsapp1,
    },
    {
      img: slider[1].img,
      alt: slider[1].title,
      title: 'Acne Care Kit 2',
      oldPrice: 'Rp 140.000',
      newPrice: 'Rp 117.500',
      onClick: handleWhatsapp2,
    },
    {
      img: slider[2].img,
      alt: slider[2].title,
      title: 'Acne Care Kit 3',
      oldPrice: 'Rp 142.500',
      newPrice: 'Rp 120.000',
      onClick: handleWhatsapp3,
    },
  ];

  export default packages;