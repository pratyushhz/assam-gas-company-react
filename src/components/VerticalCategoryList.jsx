// import { useEffect, useState } from "react";
import VerticalCategory from "./homepage/VerticalCategory";
import Slider from "react-slick";
import useFetchHomeAPI from "../hooks/useFetchHomeAPI"

const VerticalCategoryList = () => {
  const { verticals, loading, error } = useFetchHomeAPI();
  console.log(verticals)

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className="features-layout4 py-0 banner-bottom-slider" style={{ position: "relative", zIndex: 10 }}>
      <div className="container">
        <Slider {...settings}>
          {verticals.map((feature, index) => (
            <VerticalCategory verticalCategoryData={feature} key={index} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default VerticalCategoryList;







// import { useEffect, useState } from "react";
// import VerticalCategory from "./homepage/VerticalCategory";
// import Slider from "react-slick";

// const VerticalCategoryList = () => {

//   const settings = {
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     autoplay: true,
//     dots: true,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const [features, setFeatures] = useState([]);

//   useEffect(() => {
//     fetch("http://167.71.235.8/agcl/public/api/home")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && data.verticals) {
//           const formattedData = data.verticals.flatMap((vertical) => {
//             const subverticals = vertical.subverticals || [];
//             return [
//               {
//                 title: vertical.name.replace("/", ""),
//                 desc: vertical.short_description || "No description available",
//                 img: `http://167.71.235.8/agcl/public/${vertical.image}`,
//                 link: `/vertical/${vertical.slug}`,
//               },
//               ...subverticals.map((sub) => ({
//                 title: sub.name.replace("/", ""),
//                 desc: sub.short_description || "No description available",
//                 img: `http://167.71.235.8/agcl/public/${sub.image}`,
//                 link: sub.link || `/vertical/${vertical.slug}/${sub.slug}`,
//               })),
//             ];
//           });
//           setFeatures(formattedData);
//         }
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);


//   return (
//     <section className="features-layout4 py-0 banner-bottom-slider" style={{ position: "relative", zIndex: 10 }}>
//         <div className="container">
//         <Slider {...settings}>
//             {features.map((feature, index) => (
//                 <VerticalCategory verticalCategoryData ={feature} key={index}/>
//                 ))
//             }
//           </Slider>
//         </div>
//     </section>
//   );

// }

// export default VerticalCategoryList



