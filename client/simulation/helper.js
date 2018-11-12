/** Calculate distance between two points */
export function distance(x1, y1, x2, y2) {
  var dx = x1 - x2
  var dy = y1 - y2

  return Math.sqrt(dx * dx + dy * dy)
}

/** Get a relative color between red and green */
export function activationColor(value, max) {
  var power = 1 - Math.min(value / max, 1)
  var color = [255, 255, 0]

  if (power < 0.5) {
    color[0] = 2 * power * 255
  } else {
    color[1] = (1.0 - 2 * (power - 0.5)) * 255
  }

  return color
}

/** Get the angle from one point to another */
export function angleToPoint(x1, y1, x2, y2) {
  let d = distance(x1, y1, x2, y2)
  let dx = (x2 - x1) / d
  let dy = (y2 - y1) / d

  let a = Math.acos(dx)
  a = dy < 0 ? 2 * Math.PI - a : a
  return a
}
