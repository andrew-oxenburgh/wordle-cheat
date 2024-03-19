// NOTE: Doesn't play well with TS

import {
    closestCorners,
    rectIntersection,
} from '@dnd-kit/core'
import { DELETEABLE } from './utils'

export const deleteCollisionDetection = ({
    droppableContainers, ...args
}) => {
    // First, let's see if the `trash` droppable rect is intersecting
    const rectIntersectionCollisions = rectIntersection({
        ...args,
        droppableContainers: droppableContainers.filter(({ id }) => id === DELETEABLE),
    })

    // Collision detection algorithms return an array of collisions
    if (rectIntersectionCollisions.length > 0) {
        // The trash is intersecting, return early
        return rectIntersectionCollisions
    }

    // Compute other collisions
    return closestCorners({
        ...args,
        droppableContainers: droppableContainers.filter(({ id }) => id !== DELETEABLE),
    })
}
