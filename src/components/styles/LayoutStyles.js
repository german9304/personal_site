import styled from 'styled-components';

const LayoutStyles = styled.div`
  * {
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }

  .main-header .anchor-header {
    font-size: 0.6em;
  }
  .main-header h1 {
  }
  /* .main-header a {
    font-size: 0em;
  } */
  .container {
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    padding: 2.625rem 1.3125rem;
  }
  .social-links ul {
    margin: 0;
    display: flex;
  }
  .social-links li:first-child {
    margin-right: 0.5em;
  }
  .social-links li + li {
    margin-right: 0.5em;
  }
`;

export default LayoutStyles;
