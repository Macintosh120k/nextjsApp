import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { CartBar } from "./CartBar";
interface addStyles {
  children: React.ReactNode;
}
export const DisplayDrawer: React.FunctionComponent<addStyles> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Box onClick={handleOpenDrawer}>{children}</Box>
      <CartBar isOpen={isOpen} onClose={handleCloseDrawer} />
    </div>
  );
}

