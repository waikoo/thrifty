import { expect, test } from "bun:test"
import { getSvgColor } from "@/utils/theme"

test("Get the color of svgs for different themes", () => {
  expect(getSvgColor('light')).toEqual('#191A1A')
  expect(getSvgColor('dark')).toEqual('#fff')
})
