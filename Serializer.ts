export interface Serializer<T> {
    serialize(data: T, mapping?: (data: T) => T): any
    deserialize(data: any): T
}
