import styled from "@emotion/styled";
import {
  CustomModal,
  FullButton,
  FullInput,
  FullDropDown,
  useInput,
} from "@kimuichan/ui-base";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getHomeApply } from "../../api/Auth/AuthApi";
import { getDepartmentList } from "../../api/Department/DepartmentApi";
import { createUser } from "../../api/User/UserApi";

const AddWorkerModal = ({ modalRef, setIsOpen }) => {
  const { data: departmentData } = useQuery("department", getDepartmentList);
  const [departement, setDepartement] = useState("");
  const [inputData, setInputData] = useInput({
    nickname: "",
    name: "",
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createUser, {
    onError: () => {
      alert("에러가 발생하였습니다.");
    },
    onSuccess: async () => {
      const userData = await getHomeApply();
      queryClient.setQueriesData("getUserInfo", userData);
      setIsOpen(false);
    },
  });
  return (
    <CustomModal modalRef={modalRef} setIsOpen={setIsOpen}>
      <ModalWrappr>
        <h1>사원추가</h1>
        <FormWrapper>
          <FullDropDown
            items={departmentData?.departmentList || []}
            placeholder="부서를 선택하세요."
            value={departement}
            onClickValue={(value) => setDepartement(value)}
          ></FullDropDown>
          <FullInput
            name="nickname"
            onChange={setInputData}
            placeholder="이름을 입력하세요."
            value={inputData.nickname}
          ></FullInput>
          <FullInput
            name="name"
            onChange={setInputData}
            placeholder="비밀번호를 입력하세요."
            value={inputData.name}
          />
        </FormWrapper>
        <FullButton
          onClick={() =>
            mutate({
              department: departement,
              password: `user@${inputData.name}`,
              nickname: inputData.nickname,
            })
          }
        >
          추가하기
        </FullButton>
      </ModalWrappr>
    </CustomModal>
  );
};

const ModalWrappr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 40px;
  > h1 {
    font-size: 40px;
    font-weight: 600;
  }
`;
const FormWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  gap: 20px;
  display: flex;
`;

export default AddWorkerModal;
