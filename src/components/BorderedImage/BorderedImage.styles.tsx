import styled from "styled-components";

interface WrapProps {
  height?: string;
  borderRadius?: string;
  objectFit: "cover" | "contain";
  mode?: "fill" | "intrinsic";
}

export const Wrap = styled.div<WrapProps>`
  position: relative;

  width: ${({ mode = "fill" }) =>
    mode === "intrinsic" ? "auto" : "100%"};

  height: ${({ mode = "fill", height }) =>
    mode === "intrinsic" ? "auto" : height || "100%"};

  border-radius: ${({ borderRadius }) => borderRadius || "inherit"};

  img {
    display: block;

    width: ${({ mode = "fill" }) =>
      mode === "intrinsic" ? "auto" : "100%"};

    height: ${({ mode = "fill" }) =>
      mode === "intrinsic" ? "auto" : "100%"};

    max-width: 100%;
    max-height: 80vh;

    object-fit: ${({ objectFit }) => objectFit};

    border-radius: ${({ borderRadius }) => borderRadius || "inherit"};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 2;

    box-shadow: inset 0 0 0 9px rgba(235, 234, 234, 0.6);
  }
`;