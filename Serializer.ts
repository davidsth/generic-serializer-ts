export interface Serializer<T> {
    serialize(data: T, mapping?: (data: T) => T): any
    deserialize(data: any): T
}

export function transform<T>(transformer: (data: T) => T) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        target.test = 'abc'
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}
