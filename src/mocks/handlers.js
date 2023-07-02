import { rest } from 'msw'

const blogs = [
    {
        id: 1,
        description: "Revamping the Membership Model with Triathlon Australia",
        img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    {
        id: 2,
        description: "What are your safeguarding responsibilities and how can you manage them?",
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    {
        id: 3,
        description: "Creating Streamlined Safeguarding Processes with OneRen",
        img: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
]
export const handlers = [
    // Handles a POST /login request

    // Handles a GET /user request
    rest.get('/vision', (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            // And a respose body, if necessary
            ctx.json({
                title: 'The unseen of spending three years at Pixelgrade',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
            }),
        )
    }),

    rest.get('/statistics', (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            // And a respose body, if necessary
            ctx.json([
                {
                    "id": 1,
                    data: 450,
                    type: "members"
                },
                {
                    "id": 2,
                    data: 30,
                    type: "clubs"
                },
                {
                    "id": 3,
                    data: 4534,
                    type: "booking"
                },
                {
                    "id": 4,
                    data: 440,
                    type: "payment"
                },

            ]),
        )
    }),

    rest.get('/design', (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            // And a respose body, if necessary
            ctx.json(
                {
                    title: "How to design your site footer like we did",
                    description: "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
                },
            ),
        )
    }),

    rest.get('/customers', (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            // And a respose body, if necessary
            ctx.json(
                {
                    description: "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.",
                    name: "Tim Smith",
                    position: "British Dragon Boat Racing Association",
                    all_customers: [
                        {
                            id: 1,
                            image: 'https://images-platform.99static.com//8KKxmUU6pCTeESvGdV2FR5Quq-g=/0x0:1383x1383/fit-in/500x500/99designs-contests-attachments/133/133258/attachment_133258495',
                        },
                        {
                            id: 2,
                            image: 'https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png',
                        },
                        {
                            id: 3,
                            image: 'https://static.vecteezy.com/system/resources/previews/000/606/650/original/vector-letter-a-logo-business-corporation-logo-design-concept-templat.jpg',
                        },
                        {
                            id: 4,
                            image: 'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
                        },
                        {
                            id: 5,
                            image: 'https://images-platform.99static.com//Nx5YAViWFttE0jcxdJA4IupFcZM=/0x1250:1250x2500/fit-in/590x590/99designs-contests-attachments/124/124991/attachment_124991274',
                        },
                    ]
                },
            )
        )
    }),


    rest.get('/blogs', (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            // And a respose body, if necessary
            ctx.json(
                blogs
            )
        )
    }),

    rest.get('/blogs/:id', (req, res, ctx) => {
        const { id } = req.params
        const blog = blogs.find((blog) => blog.id == id)

        return res(
            // Respond with a 200 status code
            ctx.status(200),
            // And a respose body, if necessary
            ctx.json(
                blog
            )
        )
    }),
]