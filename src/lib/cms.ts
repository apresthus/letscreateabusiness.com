export const getPostBySlug = async (slug: string) => {

    if(slug !== '' || slug !== undefined || slug !== null) {
        const response : any = await fetch(`https://ember-cms.vercel.app/api/post/0e3cee28-04f4-4842-a7ec-2b71d09947a9/${slug}`)
        try {
           const data = await response.json()
           return data
        } catch (error) {
           console.error(error)
           return {}
        }
       }
       return 
}

export const getFixedNumberOfPosts = async (limit: number) => {

}

export const getAllPosts = async () => {
   
        const response : any = await fetch(`https://ember-cms.vercel.app/api/posts/c753f139-7957-4de0-9152-08909976c81b`)
        try {
           const data = await response.json()
           return data
        } catch (error) {
           console.error(error)
           return {}      
        }
}

export const getAllPages = async () => {
    const response : any = await fetch(`https://ember-cms.vercel.app/api/collections/c753f139-7957-4de0-9152-08909976c81b`)
        try {
           const data = await response.json()
           return data
        } catch (error) {
           console.error(error)
           return {}
        }
}

export const getPageBySlug = async (slug: string) => {
    if(slug !== '' || slug !== undefined || slug !== null) {
     const response : any = await fetch(`https://ember-cms.vercel.app/api/collection/c753f139-7957-4de0-9152-08909976c81b/${slug}`)
     try {
        const data = await response.json()
        return data
     } catch (error) {
        console.error(error)
        return {}
     }
    }
    return 
}