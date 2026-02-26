# VITrack Dashboard breakdown written by me. 

Welcome to the secret recipe book for our website. We are going to explain exactly how we built this, block by coding block, using easy-to-understand ideas.

---

## 1. The Building Blocks (HTML Tags)

HTML is like the skeleton of our website. We use special words surrounded by angle brackets, like `<word>`, to tell the computer what to build. We call these "Tags".

### The Main Body Parts
- `<html>`: The giant box that holds everything on the entire page. It's the absolute outer shell.
- `<head>`: This is the brain of the website. You can't see what's in here on the screen, but it holds important instructions and secrets.
- `<body>`: This holds everything you *can* see on the screen—the buttons, text, and pictures.
- `<title>`: This goes inside the `<head>`. It tells the web browser what to name the little tab at the very top of your screen.

### The Organizers
- `<header>`: The very top section of the website, where we put our big welcome message.
- `<footer>`: The very bottom section of the website, like the basement.
- `<section>`: This is a big box we use to group similar things together, like a toy chest for specific toys.
- `<div>`: The most useful tag. It creates a completely invisible, empty box. We use it to wrap around other things so we can move them around as a group.
- `<span>`: Just like a `<div>`, but instead of a big box, it's just used to wrap around a single word or letter so we can paint it a special color.

### Words and Pictures
- `<h1>`, `<h2>`, `<h3>`: These stand for "Heading 1", "Heading 2", etc. `<h1>` is the biggest, loudest title on the page. `<h3>` is a smaller, quieter title.
- `<p>`: This stands for "Paragraph". It’s used for all the normal, everyday sentences.
- `<ul>` and `<li>`: `<ul>` stands for "Unordered List" (a list without numbers), and `<li>` stands for "List Item". We use these together to make bullet points.
- `<a>`: This stands for "Anchor", but it just means a clickable link that takes you somewhere else.
- `<img>`: This tells the website to show a picture.
- `<i>`: We use this to bring in tiny, helpful little pictures called icons (like a tiny graduation hat or a briefcase).

### The Special Helpers
- `<link>`: A portal that reaches out to the internet to bring in helpful things we didn't write ourselves, like lovely custom fonts.
- `<script>`: This tells the website to run a mini-program (Javascript) to do something complicated.
- `<canvas>`: A completely blank, invisible drawing board. Later, we tell a mini-program to draw a beautiful graph on it.

---

## 2. Setting Up Colors and Layouts (CSS)

CSS is like the paint, clothes, and makeup for our HTML skeleton. It makes everything look beautiful. We use special CSS "rules" to style our boxes.

### CSS Words (`:root`)
We used a cool trick called Custom Properties inside a special area called `:root`. Think of them as magic containers for our colors.
- **How it looks**: `--color-name: value;`
- **Why we use them**: Instead of memorizing a long, confusing code for Cobalt blue (`#005cff`), we just write `--accent-blue`. It's like having a box of crayons where every single color has a neat, easy-to-read label. If we want to change the color of the whole website later, we just change the crayons in the box once.

### Starting Fresh (`*`)
- **The `*` Star Trick**: Every web browser (like Google Chrome or Apple Safari) starts with different, messy rules. We used a star `*` to say "Grab literally everything." and forced them all to have `margin: 0; padding: 0;`. This makes every browser play by the exact same rules at the beginning.

### Basic Styling Rules We Used
Here are the most common paintbrushes we used in our CSS file to make things look good:
- `background` or `background-color`: This acts like a giant bucket of paint. We use it to fill the entire inside of a box with a specific color.
- `color`: This changes the color of the text (the words) inside the box.
- `margin`: This is the invisible personal space *outside* of a box. It pushes other boxes away so they don't bump into each other.
- `padding`: This is the soft cushion *inside* the box. It stops the text inside from touching the hard edges of the box.
- `border`: This draws an outline (like a picture frame) exactly around the edge of the box.
- `border-radius`: This takes the sharp, pointy corners of a square box and files them down so they look smooth and round.
- `font-size`: This makes our text bigger or smaller. We use a size called `rem`, which scales up perfectly depending on the user's screen.
- `font-weight`: This makes our text thicker and bolder, like drawing with a thick marker instead of a thin pencil.
- `z-index`: Imagine stacking papers on a desk. This rule tells the computer which box should sit on top of the other boxes if they overlap.

### Special Placement Rules
Normally, boxes stack exactly on top of each other from top to bottom. But sometimes we want to break the rules.
- `position: absolute;`: This takes a box completely out of the normal stacking order. It lets us pin the box anywhere we want on the screen, like sticking a magnet on a fridge. We used this for the floating highlight cards.
- `position: sticky;`: We used this on the top menu bar. It lets the menu bar scroll down the page with us, but the moment it hits the very top of the screen, it sticks there like glue so we never lose our navigation links.

---

## 3. Putting Things in the Right Place (Layout)

### Flexbox - The Flexible Box
Flexbox is a magical tool that helps us line things up in a straight row (left to right) or a tall column (top to bottom) very easily.
- **Top Menu**: Flexbox grabs our logo and pushes it all the way to the left, and grabs the menu links and pushes them all the way to the right. It also makes sure they sit perfectly in the middle vertically, so nothing is floating too high or low.
- **Main Layout**: If a page doesn't have much text on it, Flexbox stretches the empty middle part. This acts like a giant spring that pushes the footer (the bottom bar) all the way down so it always stays exactly at the bottom of your screen.

### Grid - The Waffle Maker
Grid helps us put our stuff into neat little squares or rectangles, exactly like the squares in a waffle.
- **Alumni Page**: It automatically figures out how many student profile cards can fit next to each other in a line. If the screen is small (like if you look on a phone), Grid smoothly moves the extra cards to the next row down all by itself.

---

## 4. Cool Visuals, Lights, and Glows

### Rainbow Colors (Gradients)
- **Smooth Backgrounds**: We used a rule called a `linear-gradient`. This tells the computer to take two bright colors—Cyan (light blue) and Cobalt (deep blue)—and smoothly blend them together like watercolors.
- **Colorful Text**: Making text have a blended rainbow color is a bit tricky. First, we paint the colorful gradient behind the text. Then, we use special magic code to make the actual letters transparent (invisible). Because the letters are clear like glass, the bright gradient colors underneath show through the shapes of the letters.

### Bright Neon Glow Effects
This is one of the coolest parts of our website.
- Usually, websites use a shadow (`box-shadow` or `text-shadow`) to make a dark, grey blob behind a box to make it look like the sun is shining on it.
- **How we made the glow**: We used the exact same shadow tool, but instead of dark grey, we used our bright, neon Cyan and Cobalt crayon colors. Because the "shadow" is bright blue and spread out really wide (`0 0 40px rgba(0, 92, 255, 0.15)`), it doesn't look like a shadow at all. It looks like the box is emitting a beautiful, soft, glowing neon light into the dark background.

---

## 5. Making Things Move

### Hover Effects
- When you place your computer mouse arrow over a button, the button gently floats up a little bit to say "Hello. You can click me."
- We added a `transition` rule. This tells the computer to make the floating movement smooth and slow, instead of jumping up instantly in a blink.

### Small Pictures (Icons)
- We used a free library called FontAwesome. It gives us those small, helpful pictures (like a network web or a briefcase) that we put inside the `<i>` tags. These pictures make the buttons easier to understand without even reading the words.

---

## 6. Drawing Graphs with JavaScript

### Chart.js
This is a helpful mini-program (a JavaScript library) from the internet that takes a boring list of numbers and draws them as a cool picture (a graph).

- **The Drawing Board (`<canvas>`)**: Remember the `<canvas>` tag we talked about earlier? That acts as our invisible, empty drawing board on the page. We gave it a special nametag (`id="gpaChart"`) so our code can find it easily.
- **Finding the Board**: In our JavaScript code, we use a command called `document.getElementById('gpaChart')`. This is exactly like telling the computer, "Hey. Search the whole page and find the drawing board with this exact nametag." Once it finds it, we tell the computer to grab its art supplies (`getContext('2d')`) so we can start drawing flat, 2D shapes.
- **Mixing Graphs**: We used a special command to create a `new Chart`. Inside this command, we handed the mini-program a neat, organized list of numbers and gave it two instructions at the very same time:
  1. We told it to build tall **Bars** (`type: 'bar'`) showing the grades for each individual school term (Sem 1, Sem 2).
  2. We told it to draw a bright pink swooping **Line** (`type: 'line'`) moving right across the top to show the overall, big-picture grade path.
- **Painted Bars with Code**: Just like how we blended CSS colors for our buttons, we told our JavaScript art supplies to practice mixing colors. We used a command (`createLinearGradient`) to tell the computer to fill all the tall graph bars with our neat Cyan-to-Cobalt rainbow blend from bottom to top.
