## Set Up Custom Fonts

Add the font imports at the top of your global CSS file:

```css
/* Inter */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
/* Roboto */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
/* Open Sans */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap");
/* Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
/* Nunito Sans */
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap");
/* Merienda */
@import url("https://fonts.googleapis.com/css2?family=Merienda:wght@400;500;600;700&display=swap");
```

Declare a variable for each font inside `:root`:

```css
:root {
  --font-inter: "Inter", sans-serif;              /* Dashboard, SaaS, ERP */
  --font-roboto: "Roboto", sans-serif;            /* Material Design */
  --font-open-sans: "Open Sans", sans-serif;      /* Business Applications */
  --font-poppins: "Poppins", sans-serif;          /* Marketing Websites */
  --font-nunito-sans: "Nunito Sans", sans-serif;  /* Friendly, Modern Interfaces */
  --font-merienda: "Merienda", cursive;           /* Playful, Creative */
}
```

Use a font variable where you want to apply that font. This example sets Inter as the page font:

```css
body {
	/* Use Inter for page text */
	font-family: var(--font-inter);
}
```