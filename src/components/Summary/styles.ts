import styled from "styled-components";

export const Container = styled.div`
    display: grid; //this is because is 3 components in a lit
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    

        header { //this is for all being in the center of the block
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong { //this for the white block and the font
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    
    &.highlight-background { //this is for the div with this name only
        background: var(--green);
        color: #FFF;
    }
    }
`;