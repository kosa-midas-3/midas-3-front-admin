import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { delUser, putUser } from "../../api/Auth/AuthApi";

const ITEM_HEIGHT = 48;

const MenuButton = ({ member }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickDelHandler = () => {
    delUser(member.name);
    console.log(member.name);
  };

  const open = Boolean(anchorEl);
  return (
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
            // onClickListener();
          }}
        >
          코어타임 설정
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          수정
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            onClickDelHandler();
          }}
        >
          삭제
        </MenuItem>
      </Menu>
    </IconStyle>
  );
};

const IconStyle = styled.div`
  text-align: right;
  position: absolute;
  right: 5px;
  top: 20px;
`;
export default MenuButton;
