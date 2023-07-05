import {request} from '.'

export const getWorks = async () => {
    const res = await request.get('/api/work?populate=*');
    return res.data;
}

export const getPosts = async () => {
    const res = await request.get('/api/post?populate=*');
    return res.data;
}