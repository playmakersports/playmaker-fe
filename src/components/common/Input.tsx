import { useFormContext } from "react-hook-form";
import styled from "@emotion/styled";
// import FormDropdownBox from "./FormDropdownBox";

export type InputProps = {
  flex?: number;
  type: "email" | "text" | "combo";
  id: string;
  placeholder?: string;
  label?: string;
  comboOption?: { value: string; label: string }[];
  readOnly?: boolean;
};

function Input(props: InputProps) {
  const { type, flex, id, label, comboOption, readOnly = false } = props;
  const { register } = useFormContext();

  if (type === "email") {
    return (
      <FlexBox gap="6px">
        <InputWrapper flex={1}>
          <InputArea type="text" readOnly={readOnly} placeholder={label} {...register(id)} />
        </InputWrapper>
        <span className="email-at">@</span>
        {/* <FormDropdownBox
          type="radio"
          id="email-domain"
          placeholder="선택"
          filter={undefined}
          options={[
            { optionName: "naver.com", value: "@naver.com" },
            { optionName: "gmail.com", value: "@gmail.com" },
          ]}
        /> */}
      </FlexBox>
    );
  }
  if (type === "combo") {
    return (
      <ComboWrapper flex={flex}>
        {comboOption?.map((option) => (
          <>
            <ComboRadio key={option.value} type="radio" id={option.value} readOnly={readOnly} {...register(id)} />
            <label htmlFor={option.value}>{option.label}</label>
          </>
        ))}
      </ComboWrapper>
    );
  }
  return (
    <InputWrapper flex={flex}>
      <InputArea readOnly={readOnly} placeholder={label} {...register(id)} {...props} />
    </InputWrapper>
  );
}

const InputWrapper = styled.div<{ flex?: number }>`
  ${({ flex }) => (flex ? `flex: ${flex}` : "")};
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.gray2};
  border-radius: 10px;
`;
const ComboWrapper = styled(InputWrapper)`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

const InputArea = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.black};
  font-size: 1.6rem;
  line-height: 2.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:read-only {
    background-color: ${({ theme }) => theme.gray1};
    color: ${({ theme }) => theme.placeholder};
  }
`;
const ComboRadio = styled.input`
  display: none;
  & + label {
    padding: 0 16px;
    color: ${({ theme }) => theme.placeholder};
    border-right: 1px solid ${({ theme }) => theme.gray2};
    &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      padding-right: 0;
      border: none;
    }
  }
  &:checked + label {
    color: ${({ theme }) => theme.main};
    font-weight: 500;
  }
`;

const FlexBox = styled.div<{ gap: string }>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
  .email-at {
    font-size: 2rem;
    color: #989898;
  }
`;

const StyledErrorMessage = styled.p`
  margin: 4px 0 0 8px;
  color: ${({ theme }) => theme.warn};
`;

export default Input;
