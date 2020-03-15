#!/usr/bin/env node
import { Command } from 'commander'

import { initNodehun, NodehunSpelling } from './spelling'
import { rephrase } from './analbumcover'

const main = () => {
	const program = new Command()
	program
		.arguments('<PHRASE>')
		.description('An album cover')
		.option(
			'-m, --min-word-length [minWordLength]',
			'The minimum length of output words',
			i => (parseInt(i) || 1)
		)
		.action(analbumcoverAction)
	program.parse(process.argv)
}

const analbumcoverAction = async (phrase: string, cmd: Command): Promise<string|null> => {
	const nodehun = await initNodehun()
	const spelling = new NodehunSpelling(nodehun)
	const rephrasing = rephrase(phrase, spelling, cmd.minWordLength )
	if (rephrasing) { console.log(rephrasing) }

	return rephrasing
}

main()
