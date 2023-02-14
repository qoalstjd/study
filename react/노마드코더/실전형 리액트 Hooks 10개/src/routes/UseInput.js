import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function InputUse() {
  const maxLen = value => {
    return value.length <= 15;
  };
  const name = useInput("Mr. ", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      {/* {...name} 은 useInput의 리턴값을 가져와줌 */}
    </div>
  );
}

export default InputUse;
