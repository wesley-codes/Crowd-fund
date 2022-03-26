




import * as React from "react"
import { AngelSVGProps } from "../Types"

const AngelSVG= ({width, height, props}:AngelSVGProps) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
   
  >
    <path
      fill='#fff'
      d='M260.72 29.094c-54.533 0-98.97 21.704-98.97 48.312 0 26.61 44.437 48.28 98.97 48.28 54.53 0 98.967-21.67 98.967-48.28S315.25 29.094 260.72 29.094zm0 13.25c40.07 0 71.81 15.508 71.81 35.062s-31.74 35.47-71.81 35.47c-40.073 0-72.69-15.916-72.69-35.47 0-19.552 32.617-35.064 72.69-35.062zM86.53 57.187c-13.242-.094-32.234 14.59-42.31 37.688-43.3 99.244-9.583 359.695 87.874 351.97-22.002-50.492-43.8-107.983-56.72-168.75 26.337 72.494 72.33 135.58 117.845 120.186-32.017-40.185-66.048-87.265-90.032-140.342 35.016 59.175 85.37 105.853 123.03 85.5-29.742-26.583-61.568-57.524-88.812-93.25 39.647 37.38 87.092 61.34 112.25 37.75-47.69-21.07-94.37-53.67-125.062-89.75-16.312-19.176-28.195-39.39-32.72-60-2.26-10.306-2.508-20.796-.468-30.938.02-.095.043-.186.063-.28.007-.044.022-.083.03-.126 4.05-21.265 15.043-35.413 4.5-45.97-2.484-2.487-5.76-3.66-9.47-3.687zm347.658 0c-3.71.027-6.954 1.2-9.438 3.688-8.176 8.186-3.416 18.564 1.03 32.72 6.153 14.187 7.144 29.566 3.845 44.593-4.524 20.61-16.44 40.824-32.75 60-30.798 36.206-77.67 68.907-125.53 89.968 25.22 23.208 72.482-.71 112-37.97-27.245 35.728-59.07 66.67-88.814 93.25 37.662 20.355 88.016-26.323 123.033-85.498-23.985 53.077-58.016 100.157-90.032 140.343 45.515 15.395 91.478-47.69 117.814-120.186-12.918 60.768-34.686 118.26-56.688 168.75 97.457 7.726 131.142-252.725 87.844-351.97-10.077-23.097-29.07-37.78-42.313-37.686zm-22.22 73.97c-100.397 68.228-200.733 82.462-301.25 5.468 4.02 15.655 13.89 32.733 28.126 49.47 28.922 34 75.48 66.378 121.906 86.31 46.426-19.932 92.984-52.31 121.906-86.31 14.98-17.613 25.138-35.594 28.72-51.907.223-1.02.416-2.027.593-3.032z'
    />
  </svg>
)

export default AngelSVG
