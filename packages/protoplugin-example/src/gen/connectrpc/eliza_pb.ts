// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.0.0-beta.2 with parameter "target=ts"
// @generated from file connectrpc/eliza.proto (package connectrpc.eliza.v1, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescMessage, GenDescService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_customoptions_default_host } from "../customoptions/default_host_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file connectrpc/eliza.proto.
 */
export const file_connectrpc_eliza: GenDescFile = /*@__PURE__*/
  fileDesc("ChZjb25uZWN0cnBjL2VsaXphLnByb3RvEhNjb25uZWN0cnBjLmVsaXphLnYxIh4KClNheVJlcXVlc3QSEAoIc2VudGVuY2UYASABKAkiHwoLU2F5UmVzcG9uc2USEAoIc2VudGVuY2UYASABKAkyfgoMRWxpemFTZXJ2aWNlEk0KA1NheRIfLmNvbm5lY3RycGMuZWxpemEudjEuU2F5UmVxdWVzdBogLmNvbm5lY3RycGMuZWxpemEudjEuU2F5UmVzcG9uc2UiA5ACARofyj4caHR0cHM6Ly9kZW1vLmNvbm5lY3RycGMuY29tL2IGcHJvdG8z", [file_customoptions_default_host]);

/**
 * SayRequest is a single-sentence request.
 *
 * @generated from message connectrpc.eliza.v1.SayRequest
 */
export type SayRequest = Message<"connectrpc.eliza.v1.SayRequest"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;
};

/**
 * Describes the message connectrpc.eliza.v1.SayRequest.
 * Use `create(SayRequestSchema)` to create a new message.
 */
export const SayRequestSchema: GenDescMessage<SayRequest> = /*@__PURE__*/
  messageDesc(file_connectrpc_eliza, 0);

/**
 * SayResponse is a single-sentence response.
 *
 * @generated from message connectrpc.eliza.v1.SayResponse
 */
export type SayResponse = Message<"connectrpc.eliza.v1.SayResponse"> & {
  /**
   * @generated from field: string sentence = 1;
   */
  sentence: string;
};

/**
 * Describes the message connectrpc.eliza.v1.SayResponse.
 * Use `create(SayResponseSchema)` to create a new message.
 */
export const SayResponseSchema: GenDescMessage<SayResponse> = /*@__PURE__*/
  messageDesc(file_connectrpc_eliza, 1);

/**
 * This is a modified copy of ElizaService from https://buf.build/connectrpc/eliza
 *
 * @generated from service connectrpc.eliza.v1.ElizaService
 */
export const ElizaService: GenDescService<{
  /**
   * Say is a unary RPC. Eliza responds to the prompt with a single sentence.
   *
   * @generated from rpc connectrpc.eliza.v1.ElizaService.Say
   */
  say: {
    methodKind: "unary";
    input: typeof SayRequestSchema;
    output: typeof SayResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_connectrpc_eliza, 0);

