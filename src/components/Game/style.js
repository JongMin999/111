import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;

  .title {
    position: absolute;
    z-index: 2;
    top: 500;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0px 30px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  .flex-1 {
    flex: 1;
    min-width: 500px;
    overflow: hidden;
    background-color: black;
    position: relative;
    margin: 80px;
  }
  .animal-img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    cursor: pointer;
  }
  .animal-img:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  .name {
    position: absolute;
    z-index: 3;
    color: #fff;
    bottom: 10%;
    font-size: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
