// import { members } from './member'
// import { MemberEntity } from '../model/memberEntity'
// // 函数约定返回值
// // Promise 类
// // 细化一下，泛型约束 泛指内部的类型
// const baseUrl:string = 'https://api.github.com/orgs/lemoncode/members' 
// const fetchMembers = () => {
//     return Promise.resolve(members)
// }
// const fetchMemberAsync = (): Promise<MemberEntity[]> =>  { 
//     const membersURL = `${baseUrl}/members`
//     return fetch(membersURL)
//         .then(response => response.json())
//         .then(mapToMembers)
// }
// const mapToMembers = (githubMembers: any[]) => {
//     return githubMembers.map(mapToMember)
// }
// const mapToMember = (githubMember: any):MemberEntity => {
//     return {
//         id: githubMember.id,
//         login: githubMember.login,
//         avatar_url: githubMember.avatar_url
//     }
// }

import { MemberEntity } from "../model/memberEntity"

// export default {
    
// }
const baseURL = 'https://api.github.com/orgs/lemoncode'



export const fetchMemberAsync = ():Promise<MemberEntity[]> => {
    const membersURL = `${baseURL}/members`
    return fetch(membersURL)
        .then(response => {
            return response.json()  // Any[] 不满足页面精确数据要求
        })
        .then(mapToMembers) //  后端接口数据 满足页面model要求  
}

const mapToMembers = (githubMembers: any[]) => {
    return githubMembers.map(mapToMember)
}
const mapToMember = (githubMember:any):MemberEntity => {
    return {
        id: githubMember.id,
        avatar_url: githubMember.id,
        login: githubMember
    }
}   