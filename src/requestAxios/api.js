/**
 * 数据请求组件 
 **/  
import request from './request.js'
// 帖子数据  posts

export const getPosts = data => { //posts
    return request ({
        url: `https://cnodejs.org/api/v1/topics`,
        method: `get`,
        params: data
    })
}

export const getMember = data => { //table
    return request ({
        url: `http://localhost:8080/static/table.json`,
        method: `get`,
        params: data
    })
}
