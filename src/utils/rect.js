/**
 * Gets the intersection of two rectangles.
 * @param {DOMRect} r1 The first rect.
 * @param {DOMRect} r2 The second rect.
 * @returns {DOMRect|undefined} returns a DOMRect containing the overlap of the two rectangles.
 */
export const intersection = (r1, r2) => {
    const leftX = Math.max(r1.left, r2.left);
    const rightX = Math.min(r1.right, r2.right);

    const topY = Math.max(r1.top, r2.top);
    const bottomY = Math.min(r1.bottom, r2.bottom);

    if (leftX < rightX && topY < bottomY)
        return new DOMRect(leftX, topY, rightX - leftX, bottomY - topY);
}

/**
 * Calculates the area of a rect.
 * @param {DOMRect} rect The rect to calculate the area for.
 * @returns The area of the rect.
 */
export const area = (rect) => rect.x * rect.y;

/**
 * Calculates the percentage of rect inside the container.
 * @param {DOMRect} rect The rect
 * @param {DOMRect} container The container
 * @returns {number} The percentage of rect contained by container.
 */
export const containedPercent = (rect, container) => {
    const intersect = intersection(rect, container);
    if (!intersect) return 0;

    const intersectArea = area(intersect);
    const rectArea = area(rect);

    return intersectArea / rectArea;
}