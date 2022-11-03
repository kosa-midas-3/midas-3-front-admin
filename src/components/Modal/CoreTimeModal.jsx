import {
  CustomModal,
  FullButton,
  FullDropDown,
  FullInput,
  useInput,
} from "@kimuichan/ui-base";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import styled from "styled-components";
import { getHomeApply } from "../../api/Auth/AuthApi";
import { settingCoreTime } from "../../api/CoreTime/CoreTimeApi";

const CoreTimeModal = ({ modalRef, setIsOpen, member }) => {
  const [coreTimeReason, setCoreTimeReason] = useInput("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const timeSelectItem = [
    "8시",
    "8시30분",
    "9시",
    "9시30분",
    "10시",
    "10시30분",
    "11시",
    "11시30분",
    "12시",
    "12시30분",
    "1시",
  ];
  const queryClient = useQueryClient();

  const { mutate } = useMutation(settingCoreTime, {
    onSuccess: async () => {
      const userData = await getHomeApply();
      queryClient.setQueriesData("getUserInfo", userData);
      setIsOpen(false);
    },
    onError: () => {
      alert("에러가 발생하였습니다.");
    },
  });

  return (
    <CustomModal modalRef={modalRef} setIsOpen={setIsOpen}>
      <ModalWrapper>
        <h1>코어타임 추가</h1>
        <FormWrapper>
          <DropDownWrapper>
            <p>코어타임 시간</p>
            <div>
              <div>
                <FullDropDown
                  items={timeSelectItem}
                  onClickValue={setStartTime}
                  placeholder="시작일"
                  value={startTime}
                ></FullDropDown>
              </div>
              부터
              <div>
                <FullDropDown
                  items={timeSelectItem}
                  onClickValue={setEndTime}
                  placeholder="종료일"
                  value={endTime}
                />
              </div>
              까지
            </div>
          </DropDownWrapper>
          <FullInput
            onChange={setCoreTimeReason}
            placeholder="코어타임 사유"
            value={coreTimeReason}
          ></FullInput>
        </FormWrapper>
        <FullButton
          onClick={() =>
            mutate({
              reason: coreTimeReason,
              timeList: [startTime, endTime],
              userList: [member.name],
            })
          }
        >
          추가하기
        </FullButton>
      </ModalWrapper>
    </CustomModal>
  );
};

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  > h1 {
    font-size: 40px;
    font-weight: 600;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > div {
    display: flex;
    gap: 20px;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    > div {
      width: 181px;
    }
  }
  > p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export default CoreTimeModal;
