import { rephrase } from './analbumcover'
import * as Spelling from './spelling'
import { TestConfig, WORD_LIST } from './testconfig'

describe('rephrase', () => {
	let spelling : Spelling.Spelling

	beforeAll(async () => {
		const nodehun : Spelling.Nodehun = await Spelling.initNodehun()
		spelling = new Spelling.NodehunSpelling(nodehun)
	})

	describe('error-handling', () => {
		test('throws errors if word length is -1', () => {
			expect(() => rephrase('elegant milk tea', spelling, 0)).toThrow()
		})

		test('throws errors if word length is 0', () => {
			expect(() => rephrase('elegant milk tea', spelling, 0)).toThrow()
		})

		test('does not throw errors if word length is 1', () => {
			expect(() => rephrase('elegant milk tea', spelling, 1)).not.toThrow()
		})
	})

	WORD_LIST.forEach((wordConfig : TestConfig) => {
		const { expected, glyph, word } = wordConfig

		describe(`word: "${word}" ${glyph}`, () => {
			for (let wordLength = 1; wordLength <= 3; wordLength++) {
				test(`midWordLength = ${wordLength}`, () => {
					expect(rephrase(word, spelling, wordLength)).toBe(expected[wordLength])
				})
			}
		})
	})
})
