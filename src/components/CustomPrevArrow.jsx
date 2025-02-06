import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ zIndex: 1000 }}>
      <FaArrowLeft style={{ color: "white", fontSize: "24px" }} />
    </div>
  );
};

export const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ zIndex: 1000 }}>
      <FaArrowRight style={{ color: "white", fontSize: "24px" }} />
    </div>
  );
};
