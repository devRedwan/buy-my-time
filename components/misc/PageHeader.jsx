const bgImageUrls = {
  ServiceDetailsBGImage:
    "https://i.postimg.cc/fLmQp8kY/raniputul-convinience-illustrations-waiting-illust.png",
  SellerProfileBGImage:
    "https://i.postimg.cc/jjf1SLKb/raniputul-full-frame-filled-with-small-customer-se.png",
  ExploreBGImage: "https://i.postimg.cc/s2j9Dn6S/Explore-title-background.png",
  CartBGImage:
    "https://cdn.discordapp.com/attachments/997271750368833636/1070889793686339634/nee3hoe_completely_filled_with_small_shopping_icons_cart_icons__48ad55c9-7414-4a16-a2e2-31b9abf0c103.png",
};

const PageHeader = ({ title, bgImageKey }) => {
  const bgImageUrl = bgImageUrls[bgImageKey];

  return (
    <header
      className="serviceInfoWrapper bg-no-repeat bg-cover bg-blend-overlay h-32 sm:h-40 w-full"
      style={{ backgroundImage: `url(${bgImageUrl})` }}>
      <div className="titleWrapper h-full w-full flex justify-center items-center bg-blue-500 bg-opacity-80">
        <h1 className="title text-4xl sm:text-7xl font-semibold  text-white-500 tracking-wider">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default PageHeader;
