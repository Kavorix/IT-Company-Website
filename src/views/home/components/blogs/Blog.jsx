import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Blog = () => {
    const { id } = useParams()

    const [blog, setBlog] = React.useState()

    const getBlog = async () => {
        const response = await axios.get(`/blogs/${id}`)
        console.log(response.data)
        setBlog(response.data)
    }

    useEffect(() => {
        getBlog()
    }, [])

    return (
        <main className='container mx-auto mt-12'>
            <div className="w-full h-[700px]">
                <img src={blog?.img} alt="" className='w-full h-full object-cover' />

            </div>
            <p className='text-3xl font-semibold mt-4 text-gray-600'>{blog?.description}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quos distinctio dolorem tempore saepe rem nostrum inventore, culpa explicabo similique natus voluptas! Et perspiciatis officia id fuga alias neque est porro non modi quo sed consequatur nam provident voluptatem dolore accusantium animi, voluptas ipsa! Repudiandae labore error iusto reprehenderit nemo nostrum veritatis, asperiores tenetur, alias expedita magnam illum quisquam, architecto animi similique? Veniam tenetur optio perferendis repellat voluptas, quaerat tempore fugit sit numquam, nisi adipisci! Maxime voluptatem asperiores iure officiis perferendis voluptate quaerat dolorum ipsum, fuga fugiat iusto animi quam totam magnam odit quibusdam explicabo modi nisi, exercitationem doloremque nihil, nulla provident veritatis optio? Expedita saepe animi natus hic explicabo, labore, sequi necessitatibus quidem voluptatibus iste ducimus nobis corrupti mollitia aut repellat incidunt facere delectus laboriosam, deserunt autem! Veniam tenetur optio enim facilis voluptates. A totam atque deserunt consectetur libero quaerat nobis harum? Est cum pariatur ducimus assumenda omnis corporis accusamus. Dolores laborum minima et deserunt veritatis quia tempora sapiente delectus. Sequi quia, hic vitae velit magnam similique facere maxime esse quod accusamus voluptatem sed, vero reiciendis iure illo sint deserunt. Expedita quidem quaerat ullam eum, pariatur adipisci sequi sint nulla possimus quia perspiciatis cupiditate quas nemo, architecto maxime, assumenda sit. Ullam voluptas numquam ab magnam quae animi repudiandae fugit, qui vitae inventore amet expedita eligendi possimus, necessitatibus consequatur dolor magni consequuntur est saepe, harum soluta aut excepturi maxime! Laboriosam ipsum aut nemo natus officia quo unde cum! Aliquid ut cumque atque quasi fuga, voluptate eaque! Esse, quo unde maxime id praesentium aliquam iure nihil vero reiciendis explicabo dolor nobis molestias eius, similique repellat. Illo sint necessitatibus accusamus ullam, voluptatem saepe, rerum magnam nulla doloremque illum consequuntur atque dicta autem fugiat quasi fuga ad distinctio neque, quidem non praesentium quis pariatur eum temporibus. Nostrum temporibus iste quas magni veritatis expedita soluta rem blanditiis nisi earum voluptate, architecto cumque ducimus facere quos quod rerum asperiores numquam dignissimos ipsa saepe dolorem fuga explicabo voluptatum? Ratione ipsum porro nobis, perspiciatis totam sequi nam molestiae exercitationem dolorum magni quia doloremque? Quasi error ad in mollitia itaque facilis adipisci, quibusdam nam dolor quis illo dolorem fugit excepturi asperiores reprehenderit dolorum commodi consectetur earum, id perspiciatis repellendus numquam sequi! Culpa, dicta consectetur blanditiis accusamus hic maiores libero reprehenderit voluptatem praesentium quibusdam quam veniam, velit aspernatur voluptates quaerat excepturi autem deleniti doloribus in commodi? Accusamus, modi. Quo quam repudiandae ex laboriosam molestiae reiciendis temporibus, labore inventore exercitationem. Nobis assumenda amet veritatis officiis, asperiores iste iure illum aliquam doloremque totam consectetur voluptatum magni deserunt eos? Perferendis magnam rem est unde numquam assumenda cum alias nostrum facere ducimus iure similique quos amet architecto, nesciunt repellendus praesentium atque perspiciatis aspernatur magni. Beatae, repellendus dolore. Debitis consectetur molestias sint alias autem nesciunt dolores deserunt iusto maxime. Dolorum quasi rem error, ex beatae culpa totam suscipit rerum facilis repellat, libero doloremque quas excepturi vero ab hic minus ratione a iure nesciunt quis cum? Quia, adipisci, voluptatibus laudantium repudiandae iste beatae, recusandae eligendi iure delectus necessitatibus veniam corporis dolores hic magnam omnis. In.</p>
        </main>
    )
}

export default Blog