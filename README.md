# Geometric Shape Calculators

A collection of user-friendly, web-based calculators for determining various properties (area, perimeter, etc.) of common geometric shapes: Circle, Rectangle, Triangle, and Trapezium. Each calculator features a clean interface and provides fun facts about the respective shape.

![image](https://github.com/user-attachments/assets/2321422c-474c-4882-8a18-295741c19773)

![chrome_75kOnhjSvK](https://github.com/user-attachments/assets/64f21041-0b77-4161-b511-180a0f307622)


## Live Demo

**(Optional: If you deploy this, link to it here, e.g., using GitHub Pages)**
https://justelson.github.io/shapie/  *(Replace with actual link if available)*

## Features

*   **Four Dedicated Calculators:**
    *   **Circle Calculator:**
        *   Calculate Area (Full Circle, Half Circle, Custom Sector)
        *   Calculate Circumference (Full Circle, Half Circle with diameter, Half Circle arc only, Sector with radii, Sector arc only)
        *   Dynamic input field for degrees when sector calculations are selected.
        *   Displays Pi value used (≈3.14 from 22/7).
    *   **Rectangle Calculator:**
        *   Calculate Area
        *   Calculate Perimeter
    *   **Triangle Calculator:**
        *   Calculate Area (given base and height)
        *   Calculate Perimeter (given three sides)
        *   Calculate Hypotenuse (for right-angled triangles, given base and height)
        *   Calculate Height (for right-angled triangles, given base and hypotenuse)
        *   Calculate Base (for right-angled triangles, given height and hypotenuse)
        *   Dynamic input fields based on selected calculation type.
    *   **Trapezium (Trapezoid) Calculator:**
        *   Calculate Area (given two parallel sides and height)
        *   Calculate Perimeter (given all four sides)
        *   Dynamic input fields based on selected calculation type.
*   **User-Friendly Interface:**
    *   Clear input fields and selection dropdowns.
    *   Instant results displayed on the page.
    *   Responsive design elements.
*   **Informative:**
    *   Each calculator page includes a "Fun Fact" about the shape.
*   **Easy Navigation:**
    *   Links to return to a main selection page (`app.html` - *assumed, based on back links*).
*   **Styling:**
    *   Rectangle, Triangle, and Trapezium calculators share a modern, gradient-based design.
    *   Circle calculator features a distinct design with a background image and overlay.

## Technologies Used

*   **HTML5:** For the structure and content of the web pages.
*   **CSS3:** For styling and layout.
    *   Flexbox and Grid for layout.
    *   Google Fonts for typography.
    *   Background gradients and image overlays.
*   **JavaScript (Vanilla):** For all calculations, dynamic UI updates, and input validation.


## Getting Started

To run these calculators locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/Shapie.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Shapie
    ```
3.  **Open the HTML files in your browser:**
    *   Open `app.html` (if it exists) to see the main selection page.
    *   Alternatively, you can open individual calculator files directly (e.g., `circle.html`, `rectangle.html`).

No special build steps or dependencies are required.

## Usage

1.  Navigate to the desired shape calculator page (e.g., `circle.html`).
2.  **For Circle Calculator:**
    *   Select the calculation type from the dropdown (e.g., "Area - Full Circle", "Circumference - Sector").
    *   Enter the required radius.
    *   If calculating for a sector, an additional field for "degrees" will appear; enter the angle.
    *   Click "Calculate".
3.  **For Rectangle Calculator:**
    *   Select "Area" or "Perimeter".
    *   Enter the length and width.
    *   Click "Calculate".
4.  **For Triangle Calculator:**
    *   Select the calculation type (e.g., "Area", "Hypotenuse").
    *   Input fields will adjust based on your selection. Enter the required side lengths, base, height, or hypotenuse.
    *   Click "Calculate".
5.  **For Trapezium Calculator:**
    *   Select "Area" or "Perimeter".
    *   Input fields will adjust.
        *   For Area: Enter top parallel side, bottom parallel side, and height.
        *   For Perimeter: Enter top parallel side, bottom parallel side, and the two non-parallel sides.
    *   Click "Calculate".

The result will be displayed below the "Calculate" button. Error messages will appear if inputs are invalid or insufficient.

## Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5.  Push to the branch (`git push origin feature/AmazingFeature`).
6.  Open a Pull Request.



## Acknowledgements

*   Fun facts provide an engaging educational element.
*   Google Fonts for stylish typography.
