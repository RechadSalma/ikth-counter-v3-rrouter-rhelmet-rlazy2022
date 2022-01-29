# ikth-increment-v3-webpack-react-react_router-react_helmet-react_lazy_loading-2022

---

### Status: \_completed most of what I wanted to do. Not fancy at all but quite please with it as I learn a lot

##### 20220129

-   three path page with react-router V6
    -   / = which is the increment page which you can increment/decrement the displayed number
    -   /side = just some plain text
    -   /\* = error page
    -   VIP Manage to get all of react router url paths to work with netlify. Had to add **\_redirects** file to the root of dist. Which than allows all the routes to work as suppose to
-   SEO for each page using react-helmet
    -   However still not ideal because I had to use **robots.txt** file to ensure the SEO is being read properly
-   react lazy loading the \<IncrementComponent> which contains teh huge bootstrap css file too
    -   It is the only component that is using bootstrap. So first paint was help a lot

---

### Main Technology used:

-   webpack
-   react
-   react-router
-   react lazy loading (**\<Suspense>** / **lazy()**)
-   react-helmet
-   bootstrap

---

**link:**
[ikth-increment-v3-webpack-react-react_router-react_helmet-react_lazy_loading-2022](https://github.com/RechadSalma/ikth-increment-v3-webpack-react-react_router-react_helmet-react_lazy_loading-2022.git)
