import styled from 'styled-components'

//this is the CSS file from the Header
export const Container = styled.header`
    background-color: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; //this is for centralize the logo and the button

    padding: 2rem 1rem 12rem; //1 rem = size of the font-size in our global style
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;
        // everytime filter happen, it will take 0.2s, to make it more beautiful

        &:hover { //this is for when you pass your mouse in the button make something
            filter: brightness(0.9)
            //this will make the button a little more dark when you pass the mouse
        }
    }
`;