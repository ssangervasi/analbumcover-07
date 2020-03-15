import * as Spelling from './spelling'
import { rephrase } from './analbumcover'

describe('rephrase', () => {
	let spelling : Spelling.Spelling

	beforeAll(async () => {
		const nodehun : Spelling.Nodehun = await Spelling.initNodehun()
		spelling = new Spelling.NodehunSpelling(nodehun)
	})

	// const TEST_WORDS = Object.freeze(['', 'an elegant milk tea', 'an album cover', 'hotdog', 'not hotdog']);

	describe('min word length = 1', () => {
		test('it should have zenlike empty spaces', () => {
			expect(rephrase('', spelling, 1)).toBe(null)
		})

		test('it should do a thing', () => {
			expect(rephrase('do a thing', spelling, 1)).toBe('doathing')
		})

		test('it should have album covers', () => {
			expect(rephrase('an album cover', spelling, 1)).toBe('analbumcover')
		})
	})

	describe('min word length = 2', () => {
		test('it should have zenlike empty spaces', () => {
			expect(rephrase('', spelling, 2)).toBe(null)
		})

		test('it should do a thing', () => {
			expect(rephrase('do a thing', spelling, 2)).toBe(null)
		})

		test('it should have album covers', () => {
			expect(rephrase('an album cover', spelling, 2)).toBe(null)
		})
	})

	describe('min word length = 3', () => {
		test('it should have zenlike empty spaces', () => {
			expect(rephrase('', spelling, 3)).toBe(null)
		})

		test('it should do a thing', () => {
			expect(rephrase('do a thing', spelling, 3)).toBe(null)
		})

		test('it should have album covers', () => {
			expect(rephrase('an album cover', spelling, 3)).toBe(null)
		})
	})
})
