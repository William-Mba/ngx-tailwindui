export abstract class ArrayO {

    /**Merge two arrays into one without duplicates
     * @returns new Set<T>()
     */
    static merge<T>(array1: T[], array2: T[]): T[] {
        
        return [...new Set<T>([...array1, ...array2])]
    }
}