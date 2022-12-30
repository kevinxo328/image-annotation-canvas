'use strict';

const imageAnnotationCanvas = require('..');
const assert = require('assert').strict;

assert.strictEqual(imageAnnotationCanvas(), 'Hello from imageAnnotationCanvas');
console.info("imageAnnotationCanvas tests passed");
