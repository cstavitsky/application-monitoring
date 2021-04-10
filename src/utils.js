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
    switch (n) {
        case 0:
            err = new ReferenceError('this ref error')
        case 1:
            err = new SyntaxError('this syntax error')
        case 2:
            err = new RangeError('this range error')
    }
    return err
}