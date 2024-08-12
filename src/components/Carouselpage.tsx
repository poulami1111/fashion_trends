import React from 'react';
import Image from 'next/image';

const CarouselPage = () => {
  const links = [
    {
      href: "/flipkart-flag-ship-sale-store?fm=neo%2Fmerchandising&amp;iid=M_6fa2e19d-dd58-4e24-81ec-2c326f970b57_1_KUZ8W60OFFMO_MC.PLA0IVF1DX7W&amp;otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Top%2BOffer_PLA0IVF1DX7W&amp;otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&amp;cid=PLA0IVF1DX7W",
      label: "Top Offer",
      imgSrc: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/698ba0cebe456aaf.jpg?q=100",
      alt: "Top Offer"
    },
    {
      href: "/mobile-phones-store?fm=neo%2Fmerchandising&amp;iid=M_6fa2e19d-dd58-4e24-81ec-2c326f970b57_1_KUZ8W60OFFMO_MC.BYIXDBQAWBHQ&amp;otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Mobiles%2B%2526%2BTablets_BYIXDBQAWBHQ&amp;otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&amp;cid=BYIXDBQAWBHQ",
      label: "Mobiles & Tablets",
      imgSrc: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/44e10b16e649b691.jpg?q=100",
      alt: "Mobiles & Tablets"
    },
    {
      href: "/independence-day-large-sale-store?fm=neo%2Fmerchandising&amp;iid=M_6fa2e19d-dd58-4e24-81ec-2c326f970b57_1_KUZ8W60OFFMO_MC.8TVKUWT87M16&amp;otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_TVs%2B%2526%2BAppliances_8TVKUWT87M16&amp;otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L0_view-all&amp;cid=8TVKUWT87M16",
      label: "TVs & Appliances",
      imgSrc: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/717b5077a5e25324.jpg?q=100",
      alt: "TVs & Appliances"
    },
    {
      href: "/elec-flag-ship-august-sale-store?fm=neo%2Fmerchandising&amp;iid=M_6fa2e19d-dd58-4e24-81ec-2c326f970b57_1_KUZ8W60OFFMO_MC.KCBBC8GGWR9V&amp;otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Electronics_KCBBC8GGWR9V&amp;otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L0_view-all&amp;cid=KCBBC8GGWR9V",
      label: "Electronics",
      imgSrc: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/4da1d0d19350cc84.jpg?q=100",
      alt: "Electronics"
    },
    {
      href: "/goat-july24-branded-store?fm=neo%2Fmerchandising&amp;iid=M_6fa2e19d-dd58-4e24-81ec-2c326f970b57_1_KUZ8W60OFFMO_MC.NT4YVV713W2Q&amp;otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Fashion_NT4YVV713W2Q&amp;otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L0_view-all&amp;cid=NT4YVV713W2Q",
      label: "Fashion",
      imgSrc: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/9d4e9c605fc1d2d3.jpg?q=100",
      alt: "Fashion"
    },
    {
      href: "/sale-is-live-bgm-store?fm=neo%2Fmerchandising&amp;iid=M_6fa2e19d-dd58-4e24-81ec-2c326f970b57_1_KUZ8W60OFFMO_MC.3HG9V6MXYB5P&amp;otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Beauty_3HG9V6MXYB5P&amp;otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L0_view-all&amp;cid=3HG9V6MXYB5P",
      label: "Beauty",
      imgSrc: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/a5e656672d0548dd.jpg?q=100",
      alt: "Beauty"
    },
    {
      href: "/hnf-id-sale-24-store?fm=neo%2Fmerchandising&amp;iid=M_6fa2e19d-dd58-4e24-81ec-2c326f970b57_1_KUZ8W60OFFMO_MC.IF1WVE47NIXO&amp;otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Home%2B%2526%2BKitchen_IF1WVE47NIXO&amp;otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&amp;cid=IF1WVE47NIXO",
      label: "Home & Kitchen",
      imgSrc: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/5b813b64a3179898.jpg?q=100",
      alt: "Home & Kitchen"
    },
    {
      href: "/idsale-store?fm=neo%2Fmerchandising&amp;iid=M_6fa2e19d-dd58-4e24-81ec-2c326f970b57_1_KUZ8W60OFFMO_MC.DF4ISSCHXW05&amp;otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Furniture_DF4ISSCHXW05&amp;otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L0_view-all&amp;cid=DF4ISSCHXW05",
      label: "Furniture",
      imgSrc: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/7a5e96c10ada8a56.jpg?q=100",
      alt: "Furniture"
    },
    {
      href: "/travel/flights?param=Travel-independence-2024-booknow-explore-the-world&amp;fm=neo%2Fmerchandising&amp;iid=M_6fa2e19d-dd58-4e24-81ec-2c326f970b57_1_KUZ8W60OFFMO_MC.9ODHZCZ094O6&amp;otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Travel_9ODHZCZ094O6&amp;otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L0_view-all&amp;cid=9ODHZCZ094O6",
      label: "Travel",
      imgSrc: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/57fe1ffe54569c41.jpg?q=100",
      alt: "Travel"
    },
    {
      href: "/grocery-supermart-store?marketplace=GROCERY&amp;fm=neo%2Fmerchandising&amp;iid=M_6fa2e19d-dd58-4e24-81ec-2c326f970b57_1_KUZ8W60OFFMO_MC.4BYE6NISISOE&amp;otracker=hp_rich_navigation_10_1.navigationCard.RICH_NAVIGATION_Grocery_4BYE6NISISOE&amp;otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_10_L0_view-all&amp;cid=4BYE6NISISOE",
      label: "Grocery",
      imgSrc: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/c97f17439db99dd7.jpg?q=100",
      alt: "Grocery"
    }
  ];

  return (
    <div className="flex overflow-auto space-x-4 p-4">
      {links.map((link, index) => (
        <a key={index} href={link.href} className="block text-center flex-shrink-0">
          <div className="p-2 bg-white shadow-md rounded-lg">
            <Image
              src={link.imgSrc}
              alt={link.alt}
              width={96}
              height={96}
              className="mx-auto mb-2 w-24 h-24 object-cover rounded-full"
            />
            <div className="font-semibold">{link.label}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CarouselPage;
