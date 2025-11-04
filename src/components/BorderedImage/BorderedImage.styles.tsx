import styled from "styled-components"

interface WrapProps {
  height?: string;
  borderRadius?: string;
}

export const Wrap = styled.div<WrapProps>`
    position: relative;
    width: 100%;
    height: ${({ height }) => height || "100%"};
    border-radius: ${({ borderRadius }) => borderRadius || "inherit"};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
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