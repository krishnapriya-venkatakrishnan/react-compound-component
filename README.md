## React- Nested Menu Component

### Overview
This project provides a modular and reusable menu component system for building nested dropdown menus in React. It consists of several key components that work together to create a fully functional and customizable menu.

### Components and its usage
- App: The App component demonstrates how to use the Menu component system to build a nested menu.
- Menu: The Menu component serves as the main container and context provider for the menu system. It uses the useToggle hook to manage the open/close state of the menu and provides this state and the toggleOpen function via the MenuContext.
- MenuButton: The MenuButton component is used to trigger the menu dropdown. It consumes the MenuContext to access the toggleOpen function, which toggles the menu open/close state. It uses the FaAngleDown and FaAngleRight icons from react-icons to render directional arrows.
- MenuDropdown: The MenuDropdown component renders the dropdown content if the menu is open. It also uses the MenuContext to determine if the menu should be displayed. The classNames library is used to manage the dynamic class names based on the display prop.
- MenuItem: The MenuItem component renders individual items inside the MenuDropdown. Each item can be customized with additional children.

### Concepts used
- Custom hook: useToggle- The useToggle custom hook is a simple and reusable hook for managing boolean states in React. It provides an easy way to toggle between true and false states

### Live Demo
(https://scrimba-krishna-v-react-compound.netlify.app/)
