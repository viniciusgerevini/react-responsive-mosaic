# React Responsive Drag-And-Drop mosaic

This is an example of how to implement a responsive vertical mosaic with drag-and-drop support in ReactJS.

Here is the live demo.
Here is a "Google Keep like" example using the same approach.

Elements are sorted by index, as a list. This makes it easier to reorder when screen size changes. You don't need to set layouts or media-queries. Items will fit the required number of rows automatically.

This is a vertical mosaic, like the one you can find in Google Keep and Pinterest. Because of that, width is fixed (you can change the size if you want), and height is dynamic (you can define max-height).

For a more detailed explanation check this blog post.

## References

This example was compiled adapting solutions from different sources.

I found the responsive grid solution using pure JS and CSS Grids in this [blog post](https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb).

I used react-dnd sortable [example](https://react-dnd.github.io/react-dnd/examples/sortable/simple) as reference for my drag-and-drop implementation.

