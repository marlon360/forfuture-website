export const ForwardTransition = {
    config: {
        atEnter: {
            translateX: 100,
        },
        atLeave: {
            translateX: -100,
        },
        atActive: {
            translateX: 0,
        },
    },
    mapStyles(styles) {
        return {
            transform: `translateX(${styles.translateX}%)`,
        };
    }
}