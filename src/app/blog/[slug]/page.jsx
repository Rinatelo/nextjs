import Image from "next/image";
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

    if(!res.ok) {
        throw new Error("Something went wrong")
    }

    return res.json();
};

const SinglePostPage = async ({params}) => {

    const { slug } = params;

    const post = await getData(slug);
    return ( 
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="https://images.unsplash.com/photo-1707922698718-0119afe7137d?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={50} height={50} />
                    <Suspense fallback={<div>Loading...</div>}>    
                        <PostUser userId = {post.userId} />
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
     );
}
 
export default SinglePostPage;