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
import { modifyUser } from "../../api/User/UserApi";

const ModifyWorkerModal = ({ modalRef, setIsOpen, member }) => {
  const queryClient = useQueryClient();

  const { data: departmentData } = useQuery("department", getDepartmentList);
  const [departement, setDepartement] = useState(member.department || "");
  const [inputData, setInputData] = useInput({
    nickname: member.nickname || "",
    password: member.name.substring(5) || "",
  });

  const { mutate } = useMutation(modifyUser, {
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
        <h1>사원수정</h1>
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
          />
          <FullInput
            name="password"
            onChange={setInputData}
            placeholder="비밀번호를 입력하세요."
            value={inputData.password}
          ></FullInput>
        </FormWrapper>
        <FullButton
          onClick={() =>
            mutate({
              department: departement,
              nickname: inputData.nickname,
              password: `user@${inputData.password}`,
              beforeName: member.name,
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

export default ModifyWorkerModal;
