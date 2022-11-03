import React, { useState } from "react";
import styled from "styled-components";
import { Button, Tag } from "@kimuichan/ui-base";
import { zero, timeCa } from "../../util/changeTime";
import MenuButton from "../MenuButton";

const BoxStyle = styled.div`
  padding: 0 15px;
  width: 251px;
  position: relative;
  height: 266px;
  border: 2px solid ${({ state }) => (state ? "#6CDC84" : "#D9D9D9")};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const AreaStyle = styled.div``;

const DepartmentStyle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const NameStyle = styled.p`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 24px;
`;

const TimeStyle = styled.p`
  font-weight: bold;
  font-size: 40px;
  height: 48px;
  margin: 0;
`;

const TagAreaStyle = styled.div`
  display: flex;
  gap: 20px;
  text-align: center;
  line-height: 25px;
`;

const CustomButton = styled(Button)`
  width: 100%;
`;

const Item = ({ member }) => {
  const [time, setTime] = useState(timeCa(member.startTime));

  return (
    <BoxStyle state={member.workingStatus === "GO" ? true : false}>
      <MenuButton></MenuButton>
      <AreaStyle>
        <DepartmentStyle>{member.department}</DepartmentStyle>
        <NameStyle>{member.nickname}</NameStyle>
        <TimeStyle>
          {member.startTime &&
            zero(time.hour()) +
              ":" +
              zero(time.minute()) +
              ":" +
              zero(time.second())}
        </TimeStyle>
      </AreaStyle>
      <TagAreaStyle>
        <Tag color={member.workingStatus === "GO" ? "green" : "gray"}>
          {member.workingStatus === "GO" ? "근무중" : "충전충"}
        </Tag>
        <Tag color={member.workingMode === "COMPANY" ? "blackBorder" : "black"}>
          {member.workingMode === "COMPANY" ? "회사근무" : "재택근무"}
        </Tag>
      </TagAreaStyle>

      <CustomButton
        size="md"
        onClick={() => console.log(1)}
        color={homeApplyColor[member.homeApplyStatus]}
      >
        {homeApplyText[member.homeApplyStatus]}
      </CustomButton>
    </BoxStyle>
  );
};

const homeApplyColor = {
  NOTHING: "gray",
  HOME_APPLY: "green",
  REFUESED: "grayBorder",
  ACCEPTED: "greenBorder",
};

const homeApplyText = {
  NOTHING: "재택 신청요청",
  HOME_APPLY: "재택 신청요청",
  REFUESED: "거절됨",
  ACCEPTED: "수락됨",
};

export default Item;
