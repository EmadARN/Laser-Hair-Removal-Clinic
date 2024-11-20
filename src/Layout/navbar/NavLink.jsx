import { useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ path, children }) => {
  const afterRef = useRef(null);
  const router = useRouter();
  const isActive = router.pathname !== "/" && router.pathname === path;

  useEffect(() => {
    if (isActive && afterRef.current) {
      afterRef.current.style.transform = "scaleX(1)";
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    const randomSide = Math.random() < 0.5 ? "left" : "right";
    if (afterRef.current && !isActive) {
      afterRef.current.style.transform = "scaleX(1)";
      afterRef.current.style.transformOrigin =
        randomSide === "left" ? "bottom left" : "bottom right";
    }
  };

  const handleMouseLeave = () => {
    if (afterRef.current && !isActive) {
      afterRef.current.style.transform = "scaleX(0)";
    }
  };

  return (
    <Link href={path} passHref>
      <span
        style={{ cursor: "pointer", position: "relative" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          ref={afterRef}
          style={{
            content: '""',
            position: "absolute",
            bottom: "-4px",
            left: 0,
            width: "100%",
            height: "2px",
            backgroundColor: "#7563DC",
            transform: isActive ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.3s ease-out",
          }}
        />
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
