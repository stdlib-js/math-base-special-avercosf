/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Computes the inverse versed cosine of a single-precision floating-point number (in radians).
*
* @param x - input value
* @returns inverse versed cosine
*
* @example
* var v = avercosf( 0.0 );
* // returns 0.0
*
* @example
* var v = avercosf( -3.141592653589793 / 2.0 );
* // returns ~2.1783
*
* @example
* var v = avercosf( -3.141592653589793 / 6.0 );
* // returns ~1.0742
*
* @example
* var v = avercosf( NaN );
* // returns NaN
*/
declare function avercosf( x: number ): number;


// EXPORTS //

export = avercosf;