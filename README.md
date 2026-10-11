# iwamad-sis1-portfolio

**Live site:** https://zhansayaaskar.github.io/iwamad-sis1-portfolio/

This is my personal portfolio built with HTML, CSS and JavaScript.
It has three sections: About, Projects and Contact.
The page has a dark/light theme toggle and a contact form with my own validation.

## Design decisions

1. **Layout.** I used a mobile-first layout. On phones projects are in one column,
   and at 900px they become three columns using CSS Grid.

2. **Colours.** All colours are CSS variables in `:root`. For dark mode I only
   override those variables under `html[data-theme="dark"]`, so one line of
   JavaScript switches the whole page.

3. **After testing on a phone.** I made the nav wrap into two lines on small
   screens so it doesn't overflow, and I checked that the button is easy to tap.