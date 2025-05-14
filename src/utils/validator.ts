export function isValidName(name: string): boolean {
    const trimmed = name.trim()
    const nameRegex = /^[a-zA-Z0-9_.\- ]{1,30}$/
    return nameRegex.test(trimmed)
}