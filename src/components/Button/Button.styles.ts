import styled from "styled-components"

export const StyledButton = styled.button`
  background-color: #8F9C67; 
  border: none;
  border-radius: 63px;
  padding: 12px 25px;

  color: ${({theme}) => theme.colors.branco1};
  font-family: ${({theme}) => theme.fontsStyles.Cinzel};
  font-size: 1.8rem;
  font-weight: bold;
  text-shadow: 0px 6px 5px rgba(0, 0, 0, 0.25);


  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

// import styled from "styled-components";

// export const Button = styled.button`
//   background-color: #8F9C67;
//   color: #fff;
//   border: 4px solid rgba(0, 0, 0, 0.08); /* Stroke 8% inside */
//   border-radius: 49px; /* Corner Radius 49 */
  
//   padding: 12px 25px;
//   font-size: 1em;
//   font-weight: bold;
//   text-transform: uppercase;
//   cursor: pointer;

//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   transition: all 0.2s ease-in-out;
//   align-self: center;
// `;
