import { InjectedConnector } from "@web3-react/injected-connector";
import Web3 from "web3";
import { provider } from "web3-core";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 42],
});
export const getLibrary = (provider: provider) => new Web3(provider);
