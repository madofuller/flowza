// contexts/PopupContext.tsx
import { createContext, useContext } from "react";

interface PopupContextType {
  openPopup: () => void;
}

export const PopupContext = createContext<PopupContextType>({
  openPopup: () => {},
});

export const usePopup = () => useContext(PopupContext);
