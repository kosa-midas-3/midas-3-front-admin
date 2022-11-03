import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ListAreaStyle = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

const List = ({ homeApply }) => {
  return (
    <ListAreaStyle>
      {homeApply?.map((member) => (
        <Item member={member} />
      ))}
    </ListAreaStyle>
  );
};

export default List;
