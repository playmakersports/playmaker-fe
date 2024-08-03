import { useState, createContext, useContext } from "react";
import Confirm from "./Confirm";

type ConfirmContextType = Pick<ReturnType<typeof useConfirmLogic>, "showConfirm">;

const ConfirmContext = createContext<ConfirmContextType | null>(null);

function ConfirmProvider({ children }: { children: React.ReactNode }) {
  const confirmLogic = useConfirmLogic();
  const { isVisible, message, buttonText, handleConfirm } = confirmLogic;

  return (
    <ConfirmContext.Provider value={confirmLogic}>
      {children}
      {isVisible && <Confirm message={message} buttonText={buttonText} handleConfirm={handleConfirm} />}
    </ConfirmContext.Provider>
  );
}

const useConfirmLogic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState({ yes: "확인", no: "취소" });

  const [resolveReject, setResolveReject] = useState<(value: boolean) => void>(() => {});

  const showConfirm = (
    message: string,
    buttonText?: {
      yes: string;
      no: string;
    }
  ) => {
    setMessage(message);
    setIsVisible(true);
    buttonText && setButtonText(buttonText);
    return new Promise<boolean>((resolve) => {
      setResolveReject(() => resolve);
    });
  };

  const handleConfirm = (result: boolean) => {
    setIsVisible(false);
    resolveReject(result);
  };

  return { isVisible, message, buttonText, showConfirm, handleConfirm };
};

export const useConfirm = () => useContext(ConfirmContext);

export default ConfirmProvider;
