"use client";

import React, { Fragment } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import ConnectorModal from "./ConnectorModal";

const ConnectButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Button variant="primary" onClick={onOpen}>
        Connect Wallet
      </Button>
      <ConnectorModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
};

export default ConnectButton;
