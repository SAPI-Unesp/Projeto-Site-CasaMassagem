import styled from "styled-components"

type ButtonSize = "sm" | "md" | "lg"

const sizeStyles = {
  sm: `
    padding: 8px 16px;
    font-size: 1.4rem;
  `,
  md: `
    padding: 12px 25px;
    font-size: 1.8rem;
  `,
  lg: `
    padding: 14px 32px;
    font-size: 2rem;
  `,
}

export const StyledButton = styled.button<{ $size: ButtonSize; $fullWidth?: boolean }>`
  background-color: #8F9C67;
   border: 2px solid transparent;
  border-radius: 63px;

  color: ${({ theme }) => theme.colors.branco1};
  font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
  font-weight: bold;
  text-shadow: 0px 6px 5px rgba(0, 0, 0, 0.25);

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.colors?.marrom1};
    transform: scale(0.99);
  }

  &:focus-visible {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors?.marrom1};
    transform: scale(1.03);
  }

  ${({ $size }) => sizeStyles[$size]}
`