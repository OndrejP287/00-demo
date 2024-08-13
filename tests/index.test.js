import { beforeEach, describe, expect, test } from 'vitest'
import Website from './utils/website.js'

describe('index.html', () => {
    let body

    beforeEach(() => {
        body = new Website('index.html').body
    })

    test('Die Webseite hat ein <h1>-Tag.', () => {
        const elem = body.querySelector('h1')
        expect(elem).toBeDefined()
    })

    test('Das <h1>-Tag hat einen Namen statt ...', () => {
        const elem = body.querySelector('h1')
        expect(elem.textContent).not.toMatch('...')
    })

    test('Die Webseite hat ein <section>-Tag.', () => {
        const elem = body.querySelector('section')
        expect(elem).toBeDefined()
    })

    test('Das <section>-Tag ist innerhalb des <main>-Tag.', () => {
        const elem = body.querySelector('main>section')
        expect(elem).not.toBeNull()
    })
})
