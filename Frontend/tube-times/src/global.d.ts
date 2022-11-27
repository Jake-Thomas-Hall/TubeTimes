export { };

declare global {
    interface Object {
        removeEmptyProperties(this: Object): Object;
    }
}