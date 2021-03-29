import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table { // this is for separating the table more beautiful
       width: 100%;
        border-spacing: 0 0.5rem;

        th { // this is for the titles
          color: var(--text-body);
          font-weight: 400;
          padding: 1rem 2rem;
          text-align: left;
          line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
        
            &:first-child{ //this is for changing the color of title only
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }
`;