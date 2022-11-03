import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ListAreaStyle = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const List = ({ homeApply }) => {
  return (
    <ListAreaStyle>
      {homeApply?.map((member, idx) => (
        <Item member={member} key={idx} />
      ))}
    </ListAreaStyle>
  );
};

export default List;
