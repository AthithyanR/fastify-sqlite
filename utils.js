export function safeJsonStringify(value) {
    if (!value) return ''
    try {
        return JSON.stringify(value)
    } catch (_err) {
        return ''
    }
}

export function safeJsonParse(value) {
    if (typeof value !== 'string') return null
    return JSON.parse(value)
}
