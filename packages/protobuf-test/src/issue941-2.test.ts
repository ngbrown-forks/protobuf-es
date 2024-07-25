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

import {expect, test} from "@jest/globals";
import {type ProtoRpcRequest, ProtoRpcRequest_Type} from "./gen/ts/extra/issue941_pb.js";

export function createDataCollectionStartManualRecordCommand(
  standId: number
): ProtoRpcRequest {
  return {
    $typeName: "ProtoRpcRequest",
    standId,
    timestamp: getTimestamp(),
    type: ProtoRpcRequest_Type.DATA_COLLECTION_START_MANUAL_RECORD_COMMAND,
    dataCollectionStartManualRecordCommand: {
      $typeName: "DataCollectionStartManualRecordCommand",
    }
  };
}

function getTimestamp() {
  return Date.now();
}

test("should compile", () => {
  expect(createDataCollectionStartManualRecordCommand).toBeDefined();
});
