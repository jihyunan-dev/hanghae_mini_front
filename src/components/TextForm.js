import React, { memo } from "react";
import styled from "styled-components";
import { Button, Input } from "../elements";

const TextForm = (props) => {
  const { value, placeholder, btn, btnName, _onSubmit, _onChange } = props;

  return (
    <Form onSubmit={_onSubmit}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        _onChange={_onChange}
      />
      {btn ? (
        <Button
          btnName="submit"
          position="absolute"
          text={btnName}
          width="100px"
        />
      ) : null}
    </Form>
  );
};

TextForm.defaultProps = {
  _onSubmit: () => {},
  _onChange: () => {},
  value: "",
  placeholder: "",
  btnName: "제출",
  btn: true,
};

const Form = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default memo(TextForm);
