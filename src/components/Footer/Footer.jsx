import React from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import { Button, CustomModal, useModal } from "@kimuichan/ui-base";

const FooterArea = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
`;

const Footer = () => {
  const { modalRef, open, setIsOpen } = useModal("modal");
  return (
    <FooterArea>
      {open && (
        <CustomModal modalRef={modalRef} setIsOpen={setIsOpen}></CustomModal>
      )}
      <Button
        style={{ width: "auto", height: "auto", borderRadius: "50%" }}
        size="lg"
        onClick={() => setIsOpen(true)}
      >
        <FaPlusCircle color="#6CDC84" size={45} cursor="pointer" />
      </Button>
    </FooterArea>
  );
};

export default Footer;
