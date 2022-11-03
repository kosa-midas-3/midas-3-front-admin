import React from "react";
import styled from "styled-components";
import { FaEllipsisV } from "react-icons/fa"

const BoxStyle = styled.div`
  padding: 0 15px;
  width: 200px;
  height: 200px;
  border: 2px solid #6CDC84;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const IconStyle = styled.div`
  text-align: right;
`;

const AreaStyle = styled.div`

`;

const NameStyle = styled.p`
  font-weight: bold;
  font-size: 25px;
  margin: 0;
`;

const TimeStyle = styled.p`
  font-weight: bold;
  font-size: 40px;
  margin: 0;
`;

const List = () => {
  return (
    <BoxStyle>
      <AreaStyle>
        <IconStyle>
          <FaEllipsisV />
        </IconStyle>
        <NameStyle>김의찬</NameStyle>
        <TimeStyle>08:10:17</TimeStyle>
      </AreaStyle>
    </BoxStyle>
  )
}

export default List;