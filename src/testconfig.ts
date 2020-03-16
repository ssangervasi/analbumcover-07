interface TestConfig {
  expected: any,
  glyph: string,
  word : string,
}

const DISC = String.fromCharCode(55357, 56511)
const HDOG = String.fromCharCode(55356, 57133)
const NOPE = String.fromCharCode(55356, 56882)
const TEA_ = String.fromCharCode(55356, 57205)

const WORD_LIST : Array<TestConfig> = [
	{ glyph: NOPE, word: '', expected: {1: null, 2: null, 3: null} },
	{ glyph: NOPE, word: 'μ', expected: {1: null, 2: null, 3: null} },
	{ glyph: NOPE, word: 'asdfgh', expected: {1: 'asdfgh', 2: null, 3: null} },
	{ glyph: TEA_, word: 'tea', expected: {1: 'tea', 2: 'tea', 3: 'tea'} },
	{ glyph: TEA_, word: 'milktea', expected: {1: 'milktea', 2: null, 3: null} },
	{ glyph: DISC, word: 'analbumcover', expected: {1: 'analbumcover', 2: null, 3: null} },
	{ glyph: HDOG, word: 'hot dog', expected: {1: 'hotdog', 2: null, 3: 'hotdog'} },
	{ glyph: HDOG, word: 'hotdog', expected: {1: 'hotdog', 2: null, 3: 'hotdog'} },
	{ glyph: HDOG, word: 'not hotdog', expected: {1: 'nothotdog', 2: null, 3: 'nothotdog'} },
]

export { TestConfig, WORD_LIST }