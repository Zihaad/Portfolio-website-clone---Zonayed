import React , {useState} from 'react'
import Items from '../../constants/Items';
import './Skills.css';


const Skills = () => {

    const [items,setItems] = useState(Items);
    const [active,setActive] = useState(false) ;

    const filterItem = (catItem)=>{
        const updatedItems = Items.filter((item)=>{
            
            return item.category === catItem ;
        })
        
        setItems(updatedItems);
        
    }

   

  

  return (
    <div className="skills section__padding">
        <ul className="skills__nav">
           <li onClick={()=> filterItem('Web')} className=" active web">Web</li>
           <li onClick={()=> filterItem('Programming')} className="programming">Programming</li>
           <li onClick={()=> filterItem('tools')} className="tools">Tools</li>
           <li onClick={()=> filterItem('others')} className="others">Others</li>
        </ul>
        <div className="skill-items">
            {
                items.map((item)=>{
                    const {name,category,percent} = item ;

                    return (
                        <div className="skill">
                            <h1>{name}</h1>
                            <span className="percent">{percent}</span>
                            <div className="progress" style={{width:`${percent}`}}></div>
                        </div>
                    )
                })
            }

            
        </div>
    </div>
  )
}

export default Skills