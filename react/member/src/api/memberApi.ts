import { MemberEntity } from '../model/member';
import Axios, { AxiosResponse } from "axios";

const githubMembersUrl = 'https://api.github.com/orgs/lemoncode/members';
export const getMembersCollection = ():Promise<MemberEntity> => {
    // 容错处理
    // 数据转化
    const promise = new Promise<MemberEntity[]>((resolve, reject) => {
        try {
            Axios.get(githubMembersUrl).then((response) => {
                resolve(mapMemberListApiToModel(response));
            })
        } catch (e) {
            reject(e);
        }
    });
    return promise;
}

const mapMemberListApiToModel = ({ data }:AxiosResponse<any[]>) => 
    data.map(githubMember => {
        id: githubMember.id,
        avatar: githubMember.avatar_url,
        login: githubMember.login
    })