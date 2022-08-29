<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# dfill

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a double-precision floating-point strided array with a specified scalar constant.



<section class="usage">

## Usage

To use in Observable,

```javascript
dfill = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dfill@v0.0.10-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dfill = require( 'path/to/vendor/umd/blas-ext-base-dfill/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dfill@v0.0.10-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dfill;
})();
</script>
```

#### dfill( N, alpha, x, stride )

Fills a double-precision floating-point strided array `x` with a specified scalar constant `alpha`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

dfill( x.length, 5.0, x, 1 );
// x => <Float64Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to fill every other element

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var N = floor( x.length / 2 );

dfill( N, 5.0, x, 2 );
// x => <Float64Array>[ 5.0, 1.0, 5.0, -5.0, 5.0, 0.0, 5.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Fill every other element...
dfill( N, 5.0, x1, 2 );
// x0 => <Float64Array>[ 1.0, 5.0, 3.0, 5.0, 5.0, 5.0 ]
```

#### dfill.ndarray( N, alpha, x, stride, offset )

Fills a double-precision floating-point strided array `x` with a specified scalar constant `alpha` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

dfill.ndarray( x.length, 5.0, x, 1, 0 );
// x => <Float64Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

dfill.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => <Float64Array>[ 1.0, -2.0, 3.0, 5.0, 5.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dfill@v0.0.10-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var rand;
var sign;
var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    rand = round( randu()*100.0 );
    sign = randu();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    x[ i ] = sign * rand;
}
console.log( x );

dfill( x.length, 5.0, x, 1 );
console.log( x );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/gfill`][@stdlib/blas/ext/base/gfill]</span><span class="delimiter">: </span><span class="description">fill a strided array with a specified scalar constant.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/sfill`][@stdlib/blas/ext/base/sfill]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with a specified scalar constant.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-dfill.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-dfill

[test-image]: https://github.com/stdlib-js/blas-ext-base-dfill/actions/workflows/test.yml/badge.svg?branch=v0.0.10
[test-url]: https://github.com/stdlib-js/blas-ext-base-dfill/actions/workflows/test.yml?query=branch:v0.0.10

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-dfill/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-dfill?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-dfill.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-dfill/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-dfill/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-ext-base-dfill/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-ext-base-dfill/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-ext-base-dfill/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-dfill/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/umd

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/gfill]: https://github.com/stdlib-js/blas-ext-base-gfill/tree/umd

[@stdlib/blas/ext/base/sfill]: https://github.com/stdlib-js/blas-ext-base-sfill/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
