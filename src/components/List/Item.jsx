import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Tag } from "@kimuichan/ui-base";
import { zero, timeCa } from "../../util/changeTime";
import MenuButton from "../MenuButton";
import { useModal, ConfirmModal } from "@kimuichan/ui-base";
import { homeApply } from "../../api/Auth/AuthApi";

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

const Item = ({ member = null }) => {
  const [time, setTime] = useState(
    !!member.startTime && timeCa(member.startTime)
  );
  const { modalRef, open, setIsOpen } = useModal("modal");

  useEffect(() => {
    if (time && member.startTime) {
      console.log(member.startTime);
      setInterval(() => {
        setTime((prev) => prev.subtract(1, "second"));
      }, 1000);
    }
  }, [member.startTime]);

  return (
    <BoxStyle state={member.workingStatus === "GO" ? true : false}>
      {open && (
        <ConfirmModal
          text={{ accept: "수락", refuse: "거절", title: "재택근무 요청" }}
          modalRef={modalRef}
          setIsOpen={setIsOpen}
          onFinally={(result) => {
            homeApply(result, member.homeApplyId);
          }}
        ></ConfirmModal>
      )}
      <MenuButton member={member}></MenuButton>
      <AreaStyle>
        <DepartmentStyle>{member.department}</DepartmentStyle>
        <NameStyle>{member.nickname}</NameStyle>
        <TimeStyle>
          {member?.startTime
            ? zero(time.hour()) +
              ":" +
              zero(time.minute()) +
              ":" +
              zero(time.second())
            : "00:00:00"}
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
        disable={member.homeApplyStatus === "HOME_APPLY" ? false : true}
        color={homeApplyColor[member.homeApplyStatus]}
        onClick={() => {
          setIsOpen(true);
        }}
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
