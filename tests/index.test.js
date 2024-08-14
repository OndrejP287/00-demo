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

        test('Jedes <section>-Element hat einen Inhalt.', () => {
            const elems = body.querySelectorAll('main>section')
            expect(elems).not.toBeNull()
            expect(elems.length).toBeGreaterThanOrEqual(2)

            elems.forEach((elem) => {
                expect(elem.textContent.trim()).not.toBe('')
            })
        })

        test('Es gibt ein <section>-Element mit einem <h2> darin,', () => {
            const elem = body.querySelector('main>section>h2')
            expect(elem).not.toBeNull()
        })

        test('Das <h2>-Element hat Text darin.', () => {
            const elem = body.querySelector('main>section>h2')
            expect(elem).not.toBeNull()
            expect(elem.textContent.trim()).not.toBe('')
        })

        test('Das <section>-Element mit dem Titel hat mindestens 2 <p>-Elemente.', () => {
            const elem = body.querySelector('section:has(h2)')
            expect(elem).not.toBeNull()

            const paragraphs = elem.querySelectorAll('p')
            expect(paragraphs).not.toBeNull()
            expect(paragraphs.length).toBeGreaterThanOrEqual(2)
        })

        test('Jedes <p>-Element hat Text darin.', () => {
            const elem = body.querySelector('section:has(h2)')
            expect(elem).not.toBeNull()

            const paragraphs = elem.querySelectorAll('p')
            expect(paragraphs).not.toBeNull()
            expect(paragraphs.length).toBeGreaterThanOrEqual(2)

            paragraphs.forEach((p) => {
                expect(p.textContent.trim()).not.toBe('')
            })
        })
    })

    describe('Aufgabe 04', () => {
        test('Es gibt ein <section>-Element mit der ID "ex-04".', () => {
            const elem = body.querySelector('section#ex-04')
            expect(elem).not.toBeNull()
        })

        test('Dieses <section>-Element ist direkt innerhalb vom <main>-Element', () => {
            const elem = body.querySelector('main>section#ex-04')
            expect(elem).not.toBeNull()
        })

        test('Dieses <section>-Element hat mindestens 50 Zeichen Text darin.', () => {
            const elem = body.querySelector('section#ex-04')
            expect(elem).not.toBeNull()

            expect(elem.textContent.trim().length).toBeGreaterThanOrEqual(50)
        })
    })

    describe('Aufgabe 05', () => {
        test("Es gibt ein <section>-Element mit der ID 'ex-05' direkt im <main>-Element.", () => {
            const elem = body.querySelector('main>section#ex-05')
            expect(elem).not.toBeNull()
        })

        test('Dieses <section>-Element hat ein <a>-Element darin.', () => {
            const elem = body.querySelector('main>section#ex-05>a')
            expect(elem).not.toBeNull()
        })

        test("Der Link zeigt den Text 'Gym Muttenz' an.", () => {
            const elem = body.querySelector('main>section#ex-05>a')
            expect(elem).not.toBeNull()

            expect(elem.textContent.trim()).toBe('Gym Muttenz')
        })

        test("Der Link leitet auf die Seite 'https://www.gym-muttenz.ch' weiter.", () => {
            const elem = body.querySelector('main>section#ex-05>a')
            expect(elem).not.toBeNull()

            console.log('HREF:', elem.getAttribute('href'))

            expect(elem.getAttribute('href')).toBe('https://www.gym-muttenz.ch')
        })
    })
})
