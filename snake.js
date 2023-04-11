import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 10;
const snakeBody = [{ x: 20, y: 20 }];
let newSegments = 0;
export function update() {
  addSegments();

  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}
