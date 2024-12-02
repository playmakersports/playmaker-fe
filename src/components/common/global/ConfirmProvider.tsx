import { useState, createContext, useContext } from "react";
import Confirm from "./Confirm";

type ConfirmContextType = Pick<ReturnType<typeof useConfirmLogic>, "showConfirm" | "showAlert">;

const ConfirmContext = createContext<ConfirmContextType | null>(null);

function ConfirmProvider({ children }: { children: React.ReactNode }) {
  const confirmLogic = useConfirmLogic();
  const { isVisible, message, buttonText, handleConfirm, alert } = confirmLogic;

  return (
    <ConfirmContext.Provider value={confirmLogic}>
      {children}
      {isVisible && <Confirm message={message} isAlert={alert} buttonText={buttonText} handleConfirm={handleConfirm} />}
    </ConfirmContext.Provider>
  );
}

const useConfirmLogic = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [buttonText, setButtonText] = useState({ yes: "확인", no: "취소" });

  const [resolveReject, setResolveReject] = useState<(value: boolean) => void>(() => {});

  const showAlert = (message: string) => {
    setMessage(message);
    setAlert(true);
    setIsVisible(true);
    return new Promise<boolean>((resolve) => {
      setResolveReject(() => resolve);
    });
  };

  const showConfirm = (
    message: string,
    buttonText?: {
      yes: string;
      no: string;
    }
  ) => {
    setMessage(message);
    setIsVisible(true);
    buttonText ? setButtonText(buttonText) : setButtonText({ yes: "확인", no: "취소" });
    return new Promise<boolean>((resolve) => {
      setResolveReject(() => resolve);
    });
  };

  const handleConfirm = (result: boolean) => {
    setIsVisible(false);
    resolveReject(result);
  };

  return { isVisible, message, buttonText, showConfirm, handleConfirm, alert, showAlert };
};

export const useConfirm = () => useContext(ConfirmContext);

export default ConfirmProvider;
