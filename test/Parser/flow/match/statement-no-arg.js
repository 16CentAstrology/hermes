/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: (! %hermes -parse-flow -Xparse-flow-match %s 2>&1) | %FileCheck %s --match-full-lines

match () {}

// CHECK: {{.*}}:10:7: error: 'match' argument must not be empty
