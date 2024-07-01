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

// @generated by protoc-gen-es v2.0.0-beta.2 with parameter "target=ts,import_extension=js"
// @generated from file extra/service-all.proto (package spec, syntax proto3)
/* eslint-disable */

import type { GenDescFile, GenDescService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Int32ValueSchema, StringValueSchema } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file extra/service-all.proto.
 */
export const file_extra_service_all: GenDescFile = /*@__PURE__*/
  fileDesc("ChdleHRyYS9zZXJ2aWNlLWFsbC5wcm90bxIEc3BlYzLAAgoKU2VydmljZUFsbBJHCgVVbmFyeRIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRobLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlIgOQAgISUAoMU2VydmVyU3RyZWFtEhwuZ29vZ2xlLnByb3RvYnVmLlN0cmluZ1ZhbHVlGhsuZ29vZ2xlLnByb3RvYnVmLkludDMyVmFsdWUiA5ACATABEksKDENsaWVudFN0cmVhbRIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRobLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlKAESSgoEQmlkaRIcLmdvb2dsZS5wcm90b2J1Zi5TdHJpbmdWYWx1ZRobLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlIgOIAgEoATABYgZwcm90bzM", [file_google_protobuf_wrappers]);

/**
 * @generated from service spec.ServiceAll
 */
export const ServiceAll: GenDescService<{
  /**
   * @generated from rpc spec.ServiceAll.Unary
   */
  unary: {
    methodKind: "unary";
    input: typeof StringValueSchema;
    output: typeof Int32ValueSchema;
  },
  /**
   * @generated from rpc spec.ServiceAll.ServerStream
   */
  serverStream: {
    methodKind: "server_streaming";
    input: typeof StringValueSchema;
    output: typeof Int32ValueSchema;
  },
  /**
   * @generated from rpc spec.ServiceAll.ClientStream
   */
  clientStream: {
    methodKind: "client_streaming";
    input: typeof StringValueSchema;
    output: typeof Int32ValueSchema;
  },
  /**
   * @generated from rpc spec.ServiceAll.Bidi
   * @deprecated
   */
  bidi: {
    methodKind: "bidi_streaming";
    input: typeof StringValueSchema;
    output: typeof Int32ValueSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_extra_service_all, 0);

