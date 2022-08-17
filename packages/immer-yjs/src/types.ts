import { XmlElement, XmlFragment, XmlText } from 'yjs'

export type JSONPrimitive = string | number | boolean | null

export type JSONValue = JSONPrimitive | JSONObject | JSONArray | XmlFragment | XmlText | XmlElement

export type JSONObject = { [member: string]: JSONValue }

export interface JSONArray extends Array<JSONValue> {}
