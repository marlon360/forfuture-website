export class BackwardTransition {

    static config = {
        atEnter: {
            translateX: -100,
        },
        atLeave: {
            translateX: 100,
        },
        atActive: {
            translateX: 0,
        },
    }

    static mapStyles(styles) {
        return {
            transform: `translateX(${styles.translateX}%)`,
        };
    }
}