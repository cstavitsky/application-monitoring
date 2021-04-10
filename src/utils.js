import * as Sentry from "@sentry/react";

function errors(value) {
    // let msg = "this is an error from componentDidMount"
    // console.log(msg)
    try {
        // throw new Error(msg)
        let err = rotator(value)
        throw err
    } catch (e) {
        // TODO fingerprint
        Sentry.captureException(e)
    }
}

export default errors


function rotator(value) {
    let n = Math.floor(Math.random() * 3);
    let err
    console.log("N",n)
    switch (n) {
        case 0:
            console.log("0",n)
            err = new ReferenceError('this ref error')
        case 1:
            console.log("1",n)
            err = new SyntaxError('this syntax error')
        case 2:
            console.log("2",n)
            err = new RangeError('this range error')
    }
    return err
}