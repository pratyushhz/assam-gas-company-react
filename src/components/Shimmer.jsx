import React from "react";

const shimmerStyle = {
  backgroundColor: "#f9f9f9", // Light background color
  borderRadius: "4px",
  animation: "shimmer 1.5s infinite linear",
};

const Shimmer = () => {
  return (
    <div style={{ padding: "16px" }}>
      {/* Topbar */}
      <div style={{ backgroundColor: "#f2f2f2", height: "56px", display: "flex", alignItems: "center", padding: "0 16px" }}>
        <div style={{ ...shimmerStyle, height: "36px", width: "120px" }}></div>
        <div style={{ marginLeft: "auto", display: "flex", gap: "12px" }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ ...shimmerStyle, height: "36px", width: "80px" }}></div>
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <div style={{ ...shimmerStyle, height: "320px", width: "100%", marginTop: "16px" }}></div>

      {/* Video Cards Section */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginTop: "16px" }}>
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div style={{ ...shimmerStyle, height: "160px", width: "100%" }}></div>
            <div style={{ display: "flex", marginTop: "8px" }}>
              <div style={{ ...shimmerStyle, height: "40px", width: "40px", borderRadius: "50%" }}></div>
              <div style={{ marginLeft: "12px", width: "100%" }}>
                <div style={{ ...shimmerStyle, height: "16px", width: "80%" }}></div>
                <div style={{ ...shimmerStyle, height: "14px", width: "50%", marginTop: "4px" }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Counter Cards Section */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px", padding: "16px", gap: "16px" }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{ ...shimmerStyle, height: "100px", width: "22%", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ ...shimmerStyle, height: "32px", width: "50%" }}></div>
            <div style={{ ...shimmerStyle, height: "16px", width: "70%", marginTop: "8px" }}></div>
          </div>
        ))}
      </div>
      {/* Video Cards Section */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginTop: "16px" }}>
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div style={{ ...shimmerStyle, height: "160px", width: "100%" }}></div>
            <div style={{ display: "flex", marginTop: "8px" }}>
              <div style={{ ...shimmerStyle, height: "40px", width: "40px", borderRadius: "50%" }}></div>
              <div style={{ marginLeft: "12px", width: "100%" }}>
                <div style={{ ...shimmerStyle, height: "16px", width: "80%" }}></div>
                <div style={{ ...shimmerStyle, height: "14px", width: "50%", marginTop: "4px" }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Video Cards Section */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginTop: "16px" }}>
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div style={{ ...shimmerStyle, height: "160px", width: "100%" }}></div>
            <div style={{ display: "flex", marginTop: "8px" }}>
              <div style={{ ...shimmerStyle, height: "40px", width: "40px", borderRadius: "50%" }}></div>
              <div style={{ marginLeft: "12px", width: "100%" }}>
                <div style={{ ...shimmerStyle, height: "16px", width: "80%" }}></div>
                <div style={{ ...shimmerStyle, height: "14px", width: "50%", marginTop: "4px" }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer Section */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", marginTop: "32px", padding: "16px", gap: "16px" }}>
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div style={{ ...shimmerStyle, height: "24px", width: "80%" }}></div>
            {[...Array(3)].map((_, j) => (
              <div key={j} style={{ ...shimmerStyle, height: "16px", width: "60%", marginTop: "8px" }}></div>
            ))}
          </div>
        ))}
        <div style={{ ...shimmerStyle, height: "150px", width: "100%", borderRadius: "8px" }}></div>
      </div>
    </div>
  );
};

export default Shimmer;

const style = document.createElement("style");
style.innerHTML = `
@keyframes shimmer {
  0% { background-color: #f9f9f9; }
  50% { background-color: #e9e9e9; }
  100% { background-color: #f9f9f9; }
}`;
document.head.appendChild(style);
