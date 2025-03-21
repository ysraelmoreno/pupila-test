import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectContainer = styled.button`
  padding: 10px 15px;
  border: 1px solid var(--foreground);
  background-color: transparent;
  color: var(--foreground);
  width: 100%;
  min-height: 45px;
`;

export const SelectOptionsWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -webkit-box-shadow: 0px 0px 27px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 27px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 27px -4px rgba(0, 0, 0, 0.75);
`;

export const SelectOption = styled.button`
  width: 100%;
  padding: 10px 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--background);
  color: var(--foreground);
  transition: all 0.2s ease;

  &:hover {
    background-color: #ededed;
  }
`;
