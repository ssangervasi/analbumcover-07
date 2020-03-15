import { Spelling } from "./spelling";

const rephrase = (
	phrase: string,
	spelling: Spelling,
	minWordLength: number = 1
): string | null => {
  phrase = phrase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  if (phrase.length < minWordLength) {
    return null
  }

  var newPhrase = buildPhrase(phrase, spelling, minWordLength, minWordLength, '').trim()

  if (newPhrase.length != phrase.length) {
    return null
  } else {
    return newPhrase
  }
}

const buildPhrase = (
  phrase: string,
  spelling: Spelling,
  minWordLength: number = 1,
  counter: number = 1,
  newPhrase: string
): string => {
  if (phrase.length == 0) {
    return newPhrase
  } else if (counter > phrase.length) {
    return ''
  } else {
    var possibleWord = phrase.substring(0, counter)
    if (spelling.isCorrect(possibleWord)) {
      newPhrase += possibleWord + ''
      var newPhrase1 = buildPhrase(phrase.substring(counter), spelling, minWordLength, counter, newPhrase)
      if (newPhrase1 == '')
        return buildPhrase(phrase, spelling, minWordLength, counter + 1, newPhrase)
      } else {
        return newPhrase1
      }
    } else {
      return buildPhrase(phrase, spelling, minWordLength, counter + 1, newPhrase)
    }
  }
}

export {
	rephrase
}

// const album_cover = new Spelling(['a', 'an', 'anal', 'album', 'bum', 'cove', 'cover', 'over'])
// let result = rephrase('album', album_cover, 1)
// expect(result).toMatch('album')

// analbumcover
// analbumcover
// a nalbumcover
// an albumcover
// anal bumcover