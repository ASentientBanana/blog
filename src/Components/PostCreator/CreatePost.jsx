import React ,{useState} from 'react';
import SimpleMDE from "react-simplemde-editor";
import '../../Styles/CreatePost.css'
import "easymde/dist/easymde.min.css";
export const CreatePost = ()=>{

    const [test,setTest] = useState('');
    const handleChange = value => {
       setTest({ mdeValue: value });
      };
    return(
        <div>

        <div  id='MD-Editor'>
            <SimpleMDE  onChange={handleChange}/>
            <button className='post-btn'>Post</button>
        </div>
        
        </div>

    )
}

