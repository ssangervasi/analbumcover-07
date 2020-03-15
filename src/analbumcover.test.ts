import { rephrase } from './analbumcover'
import * as Spelling from './spelling'
import { TestConfig, WORD_LIST } from './testconfig'

describe('rephrase', () => {
	let spelling : Spelling.Spelling

	beforeAll(async () => {
		const nodehun : Spelling.Nodehun = await Spelling.initNodehun()
		spelling = new Spelling.NodehunSpelling(nodehun)
	})

	WORD_LIST.forEach((wordConfig : TestConfig) => {
		const { expected, word } = wordConfig

		describe(`word: "${word}"`, () => {
			for (let wordLength = 1; wordLength <= 3; wordLength++) {
				test(`midWordLength = ${wordLength}`, () => {
					expect(rephrase(word, spelling, wordLength)).toBe(expected[wordLength])
				})
			}
		})
	})
})
