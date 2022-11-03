import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ListAreaStyle = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

const List = ({ Department }) => {
  return (
    <ListAreaStyle>
      {Department?.members.map((member) => (
        <Item member={member} />
      ))}
    </ListAreaStyle>
  );
};

export default List;
