export const SlideLeft = {
    from: { opacity: 0.5, transform: 'translate3d(100%, 0%, 0)', zIndex: 0 },
    enter: { opacity: 1, transform: 'translate3d(0%, 0%, 0)', zIndex: 10 },
    leave: { opacity: 0.6, transform: 'translate3d(-100%, 0%, 0)', zIndex: 0 },
}

export const SlideRight = {
    from: { opacity: 0.6, transform: 'translate3d(-100%, 0, 0)', zIndex: 0 },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)', zIndex: 0 },
    leave: { opacity: 1, transform: 'translate3d(100%, 0, 0)', zIndex: 10 },
}

export const SlideOverFromBottom = {
    from: { opacity: 1, transform: 'translate3d(0%, 100%, 0)', zIndex: 0 },
    enter: { opacity: 1, transform: 'translate3d(0%, 0%, 0)', zIndex: 0 },
    leave: { opacity: 0.9, transform: 'translate3d(0%, 0%, 0)', zIndex: 0 },
}

export const SlideDown = {
    from: { opacity: 1, transform: 'translate3d(0, 0, 0)', zIndex: 10 },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)', zIndex: 0 },
    leave: { opacity: 1, transform: 'translate3d(0, 100%, 0)', zIndex: 10 },
}

export const CrossFade = {
    from: { opacity: 0, transform: 'translate3d(0%, 0, 0)' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
}