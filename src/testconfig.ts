interface TestConfig {
  expected: any,
  glyph: string,
  word : string,
}

const BUM = String.fromCharCode(55357, 56511)
const HOT = String.fromCharCode(55356, 57133)
const NOO = String.fromCharCode(55356, 56882)
const TEA = String.fromCharCode(55356, 57205)

const WORD_LIST : Array<TestConfig> = [
	{ glyph: NOO, word: '', expected: {1: null, 2: null, 3: null} },
	{ glyph: TEA, word: 'tea', expected: {1: 'tea', 2: 'tea', 3: 'tea'} },
	{ glyph: TEA, word: 'milk tea', expected: {1: 'milktea', 2: null, 3: null} },
	{ glyph: BUM, word: 'an album cover', expected: {1: 'analbumcover', 2: null, 3: null} },
	{ glyph: HOT, word: 'hotdog', expected: {1: 'hotdog', 2: null, 3: 'hotdog'} },
	{ glyph: HOT, word: 'hot dog', expected: {1: 'hotdog', 2: null, 3: 'hotdog'} },
	{ glyph: HOT, word: 'not hotdog', expected: {1: 'nothotdog', 2: null, 3: 'nothotdog'} },
]

export { TestConfig, WORD_LIST }