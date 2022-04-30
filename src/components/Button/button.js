import { Button } from "./styled";

const ButtonDefault = ({ callback, children }) => {
  return (
    <>
      <Button onClick={callback}>{children}</Button>
    </>
  );
};

export default ButtonDefault;
