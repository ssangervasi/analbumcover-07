/**
 * This module exports two helpful names:
 * 
 * Spelling - an simplified interface for spell checking.
 * 
 * initNodeHun - a wrapper around Nodehun that cli.ts uses to construct a spell checker.
 */

// This module exports a single function.
import loadEnUS from 'dictionary-en-us'
import { Nodehun } from 'nodehun'

interface Spelling {
	isCorrect: (word: string) => boolean
}

class NodehunSpelling implements Spelling {
	constructor(private nodehun: Nodehun) {}

	isCorrect(word: string): boolean {
		return this.nodehun.spellSync(word)
	}
}

// The documents and speller are memoized, but eslint doesn't recognize the null checks.
/* eslint-disable require-atomic-updates */

let nodehun: Nodehun | null = null
const initNodehun = async (): Promise<Nodehun> => {
	if (nodehun) { return nodehun }

	let documents = await initDocuments()
	if (!documents) { throw new Error("Can't create Nodehun due to missing dictionary documents.") }

	nodehun = new Nodehun(documents.aff, documents.dic)
	return nodehun
}

interface DictionaryDocuments {
	dic: Buffer
	aff: Buffer
}
let documents: DictionaryDocuments | null = null
const initDocuments = async (): Promise<DictionaryDocuments> => {
	if (documents) { return documents }

	let res: any = await new Promise(
		(resolve, reject) => loadEnUS(
			(err: string, result: DictionaryDocuments) => {
				if (err) { return reject(err) }
				return resolve(result)
			}
		)
	)
	documents = res
	if (!documents) { throw new Error('Failed to load DictionaryDocument') }
	return documents
}

export {
	initNodehun,
	initDocuments,
	Nodehun,
	Spelling,
	NodehunSpelling
}