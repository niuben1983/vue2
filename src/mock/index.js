/**
 * Created by niub on 2018/6/26.
 */

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import list from './exportApi/list';
import add from './exportApi/add';

export default {
    /**
     * mock start
     */
    start() { // 初始化函数
        let mock = new MockAdapter(axios);
        // 获取todo列表
        list(mock);
        // 新增一条todo
        add(mock);

    }
}; 