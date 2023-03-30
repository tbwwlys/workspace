import { createStore } from 'vuex';
import { GlobalDataProps } from '../types';

const store = createStore<GlobalDataProps>({
    state: {
        user: {
            isLogin: true,
            nickname: '张总',
            
        },
        token: ''
    }
})

export default store