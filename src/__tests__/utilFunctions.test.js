import {wordCount, attachUserName} from '../../server/utils'
import {shortenText} from '../utils/functions'
import {shortText, longText, posts, users} from './__data__/testData'

test('Will not alter a string under 100 characters', ()=>{
    expect(shortenText(shortText)).toHaveLength(29)
})

test('Will cut off extra characters after 100 and add three periods', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
})

test('Should return the total word count for a sentence', ()=>{
    expect(wordCount(posts)).toBe(233)
})

test('Should check if there is a username', ()=>{
    const checkUsername = attachUserName(users, posts)
    expect(checkUsername[0]).toHaveProperty('displayName')
})

test('Should remove posts with no username', ()=>{
    const checkUsername = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(checkUsername).not.toContainEqual(deletedPost)
})