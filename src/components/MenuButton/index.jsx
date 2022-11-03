import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../../api/User/UserApi";
import { ConfirmModal, useModal } from "@kimuichan/ui-base";
import { getHomeApply } from "../../api/Auth/AuthApi";
import ModifyWorkerModal from "../Modal/ModifyWorkerModal";
import CoreTimeModal from "../Modal/CoreTimeModal";

const ITEM_HEIGHT = 48;

const MenuButton = ({ member }) => {
  const queryClient = useQueryClient();
  const [anchorEl, setAnchorEl] = useState(null);
  const {
    modalRef: deleteModalRef,
    open: deleteUserModalOpen,
    setIsOpen: deleteUserSetIsOpen,
  } = useModal("deleteUserModal");
  const { mutate: deleteUserMutate } = useMutation(deleteUser, {
    onSuccess: async () => {
      const userData = await getHomeApply();
      queryClient.setQueriesData("getUserInfo", userData);
    },
  });
  const {
    modalRef: modifyModalRef,
    open: ModifyModalOpen,
    setIsOpen: ModifyModalSetIsOpen,
  } = useModal("modifyUserModal");

  const {
    modalRef: coreTimeModalRef,
    open: coreTimeOpen,
    setIsOpen: coreTimeSetIsOpen,
  } = useModal("coreTimeModal");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <IconStyle>
      {deleteUserModalOpen ? (
        <ConfirmModal
          modalRef={deleteModalRef}
          text={{
            accept: "삭제",
            refuse: "취소",
            title: `${member?.nickname}를\n삭제하시겠습니까?`,
          }}
          onFinally={(result) => result && deleteUserMutate(member?.name)}
          setIsOpen={deleteUserSetIsOpen}
        />
      ) : (
        <></>
      )}
      {ModifyModalOpen ? (
        <ModifyWorkerModal
          member={member}
          modalRef={modifyModalRef}
          setIsOpen={ModifyModalSetIsOpen}
        />
      ) : (
        <></>
      )}
      {coreTimeOpen ? (
        <CoreTimeModal
          member={member}
          modalRef={coreTimeModalRef}
          setIsOpen={coreTimeSetIsOpen}
        />
      ) : (
        <></>
      )}

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
            coreTimeSetIsOpen(true);
          }}
        >
          코어타임 설정
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            ModifyModalSetIsOpen(true);
          }}
        >
          수정
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            deleteUserSetIsOpen(true);
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
