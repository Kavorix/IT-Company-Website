import React, { useEffect } from 'react'
import Title from '@src/components/title/Title'
import axios from 'axios'
import BlogCard from '../../../../components/blogCard/BlogCard'
import { Link } from 'react-router-dom'

const Blogs = () => {

    const [blogs, setBlogs] = React.useState()

    const getBlogs = async () => {
        const response = await axios.get('/blogs')
        console.log(response.data)
        setBlogs(response.data)
    }

    useEffect(() => {
        getBlogs()
    }, [])


    return (
        <section className='container mx-auto mt-12 mb-12'>
            <Title
                title="Caring is the new marketing"
                desc="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
            />
            <div className="grid p-5 max-[768px]:grid-cols-1 max-[768px]:gap-12 grid-cols-3 gap-4 mt-10">
                {blogs?.map((blog, index) => (
                    <Link to={`/blogs/${blog.id}`}>
                        <BlogCard key={index} blog={blog} />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Blogs