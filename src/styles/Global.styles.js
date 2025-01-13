import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

.main-title{
 color: ${({ theme, color }) => color || theme.colors.mainColor};
    font-size: 5.5rem;
    font-family: ${({ theme }) => theme.fonts.enFont};
    text-align: ${({ textAlign }) => textAlign || 'left'};
    margin: 20px 0 10px;
    font-weight: 500;

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        position: relative;
        font-size: 3.5rem;
        margin-bottom: 5px;
      }

}
.ja-title{
    font-size: 1.1rem;
    text-align: ${({ textAlign }) => textAlign || 'left'};
 color: ${({ theme, color }) => color || theme.colors.mainColor};
 font-weight: normal;
 margin-left:60px;
 margin-bottom: 40px;
     position: relative;

}
.ja-title::before{
    content: "";
    display: block;
    width: 50px;
    height: 1px;
    position: absolute;
    top: 50%;
    left: -60px;
    background-color: ${({ theme, color }) => color || theme.colors.white};

}
        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
.ja-title{
     margin-left:35px;
&::before{
    width: 25px;
    left: -30px;
}
}

        }

`
