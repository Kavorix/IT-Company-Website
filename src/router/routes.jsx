import SignIn from "../views/auth/sign-in/SignIn"
import Home from "../views/home/Home"
import Blog from "../views/home/components/blogs/Blog"


export const appRoutes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/blogs/:id',
        element: <Blog />
    },
    {
        path: '/sign-in',
        element: <SignIn />
    },
]

