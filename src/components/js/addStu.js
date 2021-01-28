import { reactive } from 'vue'
function useAddStudent(state) {
    let state2 = reactive({
        stu: {
            id: '',
            name: '',
            age: ''
        }
    })
    function addStu(e) {
        e.preventDefault()
        console.log(state2.stu)
        const st = { ...state2.stu }
        state.stus.push(st)
        state2.stu.id = ''
        state2.stu.name = ''
        state2.stu.age = ''
    }
    return { state2, addStu }
}
export default useAddStudent