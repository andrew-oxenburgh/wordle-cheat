import { it, describe } from 'vitest'
import fs from 'fs'
import * as R from 'ramda'

// const emoji2defined = '1F37E..1F37F; Basic_Emoji; bottle with popping cork..popcorn  # E1.0[2](🍾..🍿)'
// const emoji1defined = '1F37E..1F37F; Basic_Emoji; bottle with popping cork..popcorn  # E1.0[2](🍾..🍿)'
// const emojiMyltiDefined = '1F313..1F315  ; Basic_Emoji                  ; first quarter moon..full moon  # E0.6   [3] (🌓..🌕)'

// type EmojiType = {
//     emojiCodePoint: string
//     emojiType: 'Basic_Emoji' |
//     'Emoji_Keycap_Sequence' |
//     'RGI_Emoji_Flag_Sequence' |
//     'RGI_Emoji_Tag_Sequence' |
//     'RGI_Emoji_Modifier_Sequence'
//     emojiShortName: string
// }

describe('emoji-line', () => {
    it('single line', () => {

    })
})

describe('emoji-main', () => {
    it('read file and output... something', () => {
        // read the local file, emoji.txt and output first couple of lines
        const emojiLines = fs.readFileSync('./src/emoji/emoji.txt', 'utf-8')
        const lines = emojiLines.split('\n')
        R.reduce((acc: string[], l: string) => {
            const line = l.trim()
            const isEmpty = line.length === 0
            if (isEmpty) return acc
            const isComment = line[0] === '#'
            if (isComment) return acc

        }, [], lines)

    })
})
