interface TestConfig {
  word : string,
  expected: any,
}

const WORD_LIST : Array<TestConfig> = [
	{ word: '', expected: {1: null, 2: null, 3: null} },
	{ word: 'tea', expected: {1: 'tea', 2: 'tea', 3: 'tea'} },
	{ word: 'milk tea', expected: {1: 'milktea', 2: null, 3: null} },
	{ word: 'an album cover', expected: {1: 'analbumcover', 2: null, 3: null} },
	{ word: 'hotdog', expected: {1: 'hotdog', 2: null, 3: 'hotdog'} },
	{ word: 'hot dog', expected: {1: 'hotdog', 2: null, 3: 'hotdog'} },
	{ word: 'not hotdog', expected: {1: 'nothotdog', 2: null, 3: 'nothotdog'} },
]

export { TestConfig, WORD_LIST }