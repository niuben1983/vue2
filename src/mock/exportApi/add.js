/**
 * Created by niub on 2018/6/26.
 */
import {
    Todos
} from '../data/todolist'; // 导入Todos数据

export default function (mock) {
    //let mock = new MockAdapter(axios); // 创建 MockAdapter 实例
    // 获取todo列表
    mock.onPost('/todo/addTodo').reply(config => {
        Todos.push({
            id: Mock.Random.guid(),
            title: 'newList',
            isDelete: false,
            locked: false,
            record: []
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([200]);
            }, 200);
        });
    });
}