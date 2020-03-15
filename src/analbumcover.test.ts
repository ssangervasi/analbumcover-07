import * as Spelling from './spelling'
import { rephrase } from './analbumcover'

describe('rephrase', () => {
	let spelling : Spelling.Spelling

	beforeAll(async () => {
		const nodehun : Spelling.Nodehun = await Spelling.initNodehun()
		spelling = new Spelling.NodehunSpelling(nodehun)
	})

	test('it should do a thing', () => {
		expect(rephrase('do a thing', spelling)).toBe('doathing')
	})

	test('it should do a thing', () => {
		expect(rephrase('do a thing', spelling)).toBe('doathing')
	})
})
