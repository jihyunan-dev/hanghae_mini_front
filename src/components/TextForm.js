import React from "react";
import styled from "styled-components";
import { Button, Input } from "../elements";

const TextForm = (props) => {
  const { value, placeholder, btnName, _onSubmit, _onChange } = props;

  return (
    <Form onSubmit={_onSubmit}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        _onChange={_onChange}
      />
      <Button margin="10px" width="30%" text={btnName} />
    </Form>
  );
};

TextForm.defaultProps = {
  _onSubmit: () => {},
  _onChange: () => {},
  value: "",
  placeholder: "",
  btnName: "제출",
};

const Form = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default TextForm;
