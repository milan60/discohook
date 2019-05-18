import { Message } from "../../message/Message"
import { toCamelCase, toSnakeCase } from "./casing"
import { isMessage } from "./validation"

export const stringifyMessage = (message: Message) => {
  return JSON.stringify(toSnakeCase(message), undefined, 2)
}

export const parseMessage = (json: string) => {
  try {
    const object = toCamelCase(JSON.parse(json))

    const errors = isMessage(object, "message").map((error) => {
      const [key, ...message] = error.split(": ")
      return [
        key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`),
        ...message,
      ].join(": ")
    })

    return { message: object as Message, errors }
  } catch (error) {
    return { errors: [`message: ${error.message}`] }
  }
}
