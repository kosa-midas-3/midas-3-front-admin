import React from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import { Button, useModal } from "@kimuichan/ui-base";
import AddWorkerModal from "../Modal/AddWorkerModal";

const FooterArea = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
`;

const Footer = () => {
  const { modalRef, open, setIsOpen } = useModal("addWorker");
  return (
    <FooterArea>
      {open && <AddWorkerModal modalRef={modalRef} setIsOpen={setIsOpen} />}
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
