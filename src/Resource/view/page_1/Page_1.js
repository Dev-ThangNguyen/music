
import style from '../page_1/Page_1.module.scss'
import Music from '../home/handleMusic/Music'
import ListTodo from './ListTodo'
import soxo from '../../../Storage/music/soxo.mp3'


function Page_1 () {

    return (
        <div style={{display: 'flex', height: '100vh', backgroundColor: '#36F0C3'}} >
            <ListTodo />
            <audio src={soxo} autoPlay loop/>
        </div>
    )
}

export default Page_1
