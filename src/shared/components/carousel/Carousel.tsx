// import React from "react";
// // import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// // import "@splidejs/react-splide/css";

// const Carousel: React.FC = () => {
//   return (
//     <Splide
//       hasTrack={false} // чтобы вынести пагинацию и стрелки отдельно
//       options={{
//         type: "loop",
//         perPage: 1,
//         pagination: true,
//         arrows: false,
//       }}
//       onPaginationMounted={(splide, data) => {
//         data.items.forEach((item, index) => {
//           item.button.textContent = `•`; // можно поставить цифры `${index + 1}`
//         });
//       }}
//     >
//       <SplideTrack>
//         <SplideSlide>
//           <div className="bg-red-300 h-40 flex items-center justify-center">
//             Slide 1
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="bg-green-300 h-40 flex items-center justify-center">
//             Slide 2
//           </div>
//         </SplideSlide>
//         <SplideSlide>
//           <div className="bg-blue-300 h-40 flex items-center justify-center">
//             Slide 3
//           </div>
//         </SplideSlide>
//       </SplideTrack>

//       <div className="splide__pagination" />
//     </Splide>
//   );
// };

// export default Carousel;
