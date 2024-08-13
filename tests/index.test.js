import { beforeEach, describe, expect, test } from 'vitest'
import Website from './utils/website.js'

describe('Einführung in HTML', () => {
    let body

    beforeEach(() => {
        body = new Website('index.html').body
    })

    describe('Aufgabe 01', () => {
        test('Die Webseite hat ein <h1>-Tag.', () => {
            const elem = body.querySelector('h1')
            expect(elem).not.toBeNull()
        })

        test('Das <h1>-Tag hat einen Namen statt ...', () => {
            const elem = body.querySelector('h1')
            expect(elem.textContent).not.toMatch('...')
        })
    })

    describe('Aufgabe 02', () => {
        test('Die Webseite hat ein <section>-Tag.', () => {
            const elem = body.querySelector('section')
            expect(elem).not.toBeNull()
        })

        test('Das <section>-Tag ist innerhalb des <main>-Tag.', () => {
            const elem = body.querySelector('main>section')
            expect(elem).not.toBeNull()
        })
    })

    describe('Aufgabe 03', () => {
        test('Es gibt mindestens 2 <section>-Tags innerhalb des <main>-Tags', () => {
            const elems = body.querySelectorAll('main>section')
            expect(elems).not.toBeNull()
            expect(elems.length).toBeGreaterThanOrEqual(2)
        })

        test('Es gibt ein <section>-Element mit einem <h2> darin', () => {
            const elem = body.querySelector('main>section>h2')
            expect(elem).not.toBeNull()
        })
    })
})
