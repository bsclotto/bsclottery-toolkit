import React from "react";
import styled from "styled-components";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
}

const Hamburger: React.FC<Props> = ({ isPushed, togglePush }) => {

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush}>
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  margin-right: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: 26px;
  }
`

export default React.memo(Hamburger, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
