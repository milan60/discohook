// @ts-check
const { get } = require("https")
const hljs = require("highlight.js")

/** @typedef {import("http").IncomingMessage} IncomingMessage */
/** @typedef {import("./languages").Language} Language */

const GITHUB_LANG_BASE =
  "https://raw.githubusercontent.com/highlightjs/highlight.js/master/src/languages"

/** @type {(language: string) => Promise<string[] | undefined>} */
const getDependencies = async language => {
  /** @type {IncomingMessage} */
  const message = await new Promise(res =>
    get(`${GITHUB_LANG_BASE}/${language}.js`, res),
  )

  let source = ""
  message.on("data", data => (source += data))

  await new Promise(res => message.once("end", res))

  const requires = source
    .split(/\n|\r/g)
    .find(line => line.startsWith("Requires:"))

  if (!requires) return

  return requires
    .substring("Requires:".length)
    .split(",")
    .map(file => file.trim().replace(".js", ""))
}

/** @type {(language: string) => Promise<Language>} */
const getLanguage = async language => {
  const hljsLanguage = hljs.getLanguage(language)

  const aliases = (hljsLanguage.aliases || [])
    .map(alias => alias.toLowerCase())
    .filter(alias => alias !== language)
    .filter((alias, i, a) => a.indexOf(alias) === i)
    .sort()

  const dependencies = ((await getDependencies(language)) || []).sort()

  return {
    name: language,
    aliases: aliases.length === 0 ? undefined : aliases,
    dependencies: dependencies.length === 0 ? undefined : dependencies,
  }
}

const main = async () => {
  const hljsLanguages = hljs.listLanguages()

  /** @type {Language[]} */
  const languages = []

  for (const language of hljsLanguages) {
    languages.push(await getLanguage(language))
  }

  console.log(JSON.stringify(languages, undefined, 2))
}

main()
