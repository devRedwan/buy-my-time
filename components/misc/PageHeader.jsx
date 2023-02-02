const bgImageUrls = {
  ServiceDetailsBGImage:
    "https://i.postimg.cc/fLmQp8kY/raniputul-convinience-illustrations-waiting-illust.png",
  SellerProfileBGImage:
    "https://i.postimg.cc/jjf1SLKb/raniputul-full-frame-filled-with-small-customer-se.png",
  ExploreBGImage: "https://i.postimg.cc/s2j9Dn6S/Explore-title-background.png",
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
