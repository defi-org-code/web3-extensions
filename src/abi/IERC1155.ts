/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type ApprovalForAll = ContractEventLog<{
  account: string;
  operator: string;
  approved: boolean;
  0: string;
  1: string;
  2: boolean;
}>;
export type TransferBatch = ContractEventLog<{
  operator: string;
  from: string;
  to: string;
  ids: string[];
  values: string[];
  0: string;
  1: string;
  2: string;
  3: string[];
  4: string[];
}>;
export type TransferSingle = ContractEventLog<{
  operator: string;
  from: string;
  to: string;
  id: string;
  value: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type URI = ContractEventLog<{
  value: string;
  id: string;
  0: string;
  1: string;
}>;

export interface IERC1155 extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): IERC1155;
  clone(): IERC1155;
  methods: {
    balanceOf(
      account: string,
      id: number | string | BN
    ): NonPayableTransactionObject<string>;

    balanceOfBatch(
      accounts: string[],
      ids: (number | string | BN)[]
    ): NonPayableTransactionObject<string[]>;

    isApprovedForAll(
      account: string,
      operator: string
    ): NonPayableTransactionObject<boolean>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: (number | string | BN)[],
      amounts: (number | string | BN)[],
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: number | string | BN,
      amount: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean
    ): NonPayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    ApprovalForAll(cb?: Callback<ApprovalForAll>): EventEmitter;
    ApprovalForAll(
      options?: EventOptions,
      cb?: Callback<ApprovalForAll>
    ): EventEmitter;

    TransferBatch(cb?: Callback<TransferBatch>): EventEmitter;
    TransferBatch(
      options?: EventOptions,
      cb?: Callback<TransferBatch>
    ): EventEmitter;

    TransferSingle(cb?: Callback<TransferSingle>): EventEmitter;
    TransferSingle(
      options?: EventOptions,
      cb?: Callback<TransferSingle>
    ): EventEmitter;

    URI(cb?: Callback<URI>): EventEmitter;
    URI(options?: EventOptions, cb?: Callback<URI>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "ApprovalForAll", cb: Callback<ApprovalForAll>): void;
  once(
    event: "ApprovalForAll",
    options: EventOptions,
    cb: Callback<ApprovalForAll>
  ): void;

  once(event: "TransferBatch", cb: Callback<TransferBatch>): void;
  once(
    event: "TransferBatch",
    options: EventOptions,
    cb: Callback<TransferBatch>
  ): void;

  once(event: "TransferSingle", cb: Callback<TransferSingle>): void;
  once(
    event: "TransferSingle",
    options: EventOptions,
    cb: Callback<TransferSingle>
  ): void;

  once(event: "URI", cb: Callback<URI>): void;
  once(event: "URI", options: EventOptions, cb: Callback<URI>): void;
}
