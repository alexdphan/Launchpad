/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.14.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, Timestamp, Uint64, ConfigResponse, Coin, ExecuteMsg, Decimal, InstantiateMsg, CreateMinterMsgForVendingMinterInitMsgExtension, CollectionParams, CollectionInfoForRoyaltyInfoResponse, RoyaltyInfoResponse, VendingMinterInitMsgExtension, MinterParamsForParamsExtension, ParamsExtension, MintCountResponse, MintPriceResponse, MintableNumTokensResponse, Addr, MinterConfigForConfigExtension, ConfigExtension, QueryMsg, StartTimeResponse } from "./VendingMinter.types";
export interface VendingMinterMessage {
  contractAddress: string;
  sender: string;
  mint: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  setWhitelist: ({
    whitelist
  }: {
    whitelist: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  purge: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateMintPrice: ({
    price
  }: {
    price: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateTradingStartTime: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updatePerAddressLimit: ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mintTo: ({
    recipient
  }: {
    recipient: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  mintFor: ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  shuffle: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
  burnRemaining: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class VendingMinterMessageComposer implements VendingMinterMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
    this.setWhitelist = this.setWhitelist.bind(this);
    this.purge = this.purge.bind(this);
    this.updateMintPrice = this.updateMintPrice.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateTradingStartTime = this.updateTradingStartTime.bind(this);
    this.updatePerAddressLimit = this.updatePerAddressLimit.bind(this);
    this.mintTo = this.mintTo.bind(this);
    this.mintFor = this.mintFor.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.burnRemaining = this.burnRemaining.bind(this);
  }

  mint = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint: {}
        })),
        funds
      })
    };
  };
  setWhitelist = ({
    whitelist
  }: {
    whitelist: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          set_whitelist: {
            whitelist
          }
        })),
        funds
      })
    };
  };
  purge = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          purge: {}
        })),
        funds
      })
    };
  };
  updateMintPrice = ({
    price
  }: {
    price: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_mint_price: {
            price
          }
        })),
        funds
      })
    };
  };
  updateStartTime = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_start_time: {}
        })),
        funds
      })
    };
  };
  updateTradingStartTime = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_trading_start_time: {}
        })),
        funds
      })
    };
  };
  updatePerAddressLimit = ({
    perAddressLimit
  }: {
    perAddressLimit: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_per_address_limit: {
            per_address_limit: perAddressLimit
          }
        })),
        funds
      })
    };
  };
  mintTo = ({
    recipient
  }: {
    recipient: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint_to: {
            recipient
          }
        })),
        funds
      })
    };
  };
  mintFor = ({
    recipient,
    tokenId
  }: {
    recipient: string;
    tokenId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint_for: {
            recipient,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  shuffle = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          shuffle: {}
        })),
        funds
      })
    };
  };
  burnRemaining = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          burn_remaining: {}
        })),
        funds
      })
    };
  };
}