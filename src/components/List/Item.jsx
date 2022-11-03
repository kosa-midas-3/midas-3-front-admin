import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Tag } from "@kimuichan/ui-base";
import { zero, timeCa } from "../../util/changeTime";
import { Dayjs } from "dayjs";

const BoxStyle = styled.div`
  padding: 0 15px;
  width: 220px;
  height: 280px;
  border: 2px solid ${(props) => (props ? "#6CDC84" : "#D9D9D9")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 30px 30px 0 0;
`;

const IconStyle = styled.div`
  text-align: right;
`;

const AreaStyle = styled.div``;

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

const StateAreaStyle = styled.div`
  width: 220px;
`;

const TagAreaStyle = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 25px;
`;

const BtnAreaStyle = styled.div`
  text-align: center;
  line-height: 45px;
  margin-top: 15px;
`;

const ITEM_HEIGHT = 48;

const Item = ({ member }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [time, setTime] = useState(timeCa(member.startTime));

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickListener = () => {
    console.log("aa");
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

  return (
    <BoxStyle state={member.workingStatus === "GO" ? true : false}>
      <AreaStyle>
        <IconStyle>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                onClickListener();
              }}
            >
              코어타임 설정
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                onClickListener();
              }}
            >
              수정
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                onClickListener();
              }}
            >
              삭제
            </MenuItem>
          </Menu>
        </IconStyle>
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
      <StateAreaStyle>
        <TagAreaStyle>
          <Tag color={member.workingStatus === "GO" ? "green" : "gray"}>
            {member.workingStatus === "GO" ? "근무중" : "충전충"}
          </Tag>
          <Tag
            color={member.workingMode === "COMPANY" ? "blackBorder" : "black"}
          >
            {member.workingMode === "COMPANY" ? "회사근무" : "재택근무"}
          </Tag>
        </TagAreaStyle>
        <BtnAreaStyle>
          {/* <Button size="md" color={homeApplyColor[]}>
            {homeApplyText[homeApplyState]}
          </Button> */}
        </BtnAreaStyle>
      </StateAreaStyle>
    </BoxStyle>
  );
};

export default Item;
