import * as Sentry from "@sentry/react";

function errors(value) {
    try {
        let err, errMsg
        [err, errMsg] = errorPicker(value)
        throw new err(errMsg)
    } catch (e) {
        console.log("e", e)
        // TODO fingerprint
        // TODO 'print the current fingerprint'?
        // Sentry.withScope(scope => {
            // scope.setFingerprint("{{ default }}") // tag, or value variable, if not grouping well
            // Sentry.captureException(e)
        // })
        Sentry.captureException(e)
    }
}

function errorPicker(value) {
    let n = Math.floor(Math.random() * 5);
    if (n === 0) return [ReferenceError, " non-existent variable reference " + value]
    if (n === 1) return [SyntaxError, value + " is syntactically invalid"]
    if (n === 2) return [RangeError, "value out of range in " + value]
    if (n === 3) return [TypeError, value + " variable or parameter is not of valid type"]
    if (n === 4) return [URIError, value + " URI handling function used incorrectly"]
    return [Error, "error"]
}

export default errors
