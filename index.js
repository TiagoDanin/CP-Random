#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv)

let allFiles = []
const showHelp = () => {
	return console.log(`
CP Random by Tiago Danin
Copy random files to a specific folder

Use: cp-random --from [dir] --to [dir] --max [number]
	`)
}

const getFiles = (dir) => {
	fs.readdirSync(dir).map((f) => {
		let fullPath = path.join(dir, f)
		if (fs.statSync(fullPath).isDirectory()) {
			getFiles(fullPath)
		} else {
			allFiles.push(fullPath)
		}
	})
}

const resolve = (dir) => path.resolve(process.cwd(), dir)

const main = () => {
	const from = resolve(argv.from)
	const to = resolve(argv.to)
	getFiles(from)
	const max = argv.max || allFiles.length

	console.log(`
[+] Start CP Random
[+] FROM: ${from}
[+] TO: ${to}
[+] MAX: ${max}
	`)

	for (let i = 0; i < max; i++) {
		const pathRandom = allFiles[Math.floor((Math.random() * allFiles.length))]
		allFiles = allFiles.filter(f => f != pathRandom)
		const name = path.basename(pathRandom)
		console.log(`[!] CP: ${name}`)
		fs.copyFileSync(pathRandom, path.join(to, name))
	}
	return console.log('[+] Done!')
}

if (!(argv.from && argv.to)) {
	return showHelp()
}
return main()
