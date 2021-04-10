import * as Sentry from "@sentry/react";

function errors() {
    let msg = "this is an error from componentDidMount"
    console.log(msg)
    try {
        throw new Error(msg)
    } catch (e) {
        Sentry.captureException(e)
    }
}

export default errors