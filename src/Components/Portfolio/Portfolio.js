import React , {useState} from 'react'
import './portfolio.css';
import Content from '../../constants/Content';
const Portfolio = () => {

  const [items,setItems] = useState(Content);

  const filterItem = (conItem)=>{
     
      
  }

  return (
    <div className="portfolio ">
        <div className="portfolio-wrap">
          <ul className="portfolio-nav ">
            <li onClick={()=> filterItem('Web')} className="web">Web</li>
            <li onClick={()=> filterItem('Others')} className="others">Others</li>
            
          </ul>
        </div>
        

          <div className="portfolio-items">
            {
              Content.map((item)=>{
                const {title ,content,tags,img} = item ;

                return (
                  <div className="portfolio-item">
                      <div className="portfolio-img">
                        <img style={{width:'300px'}} src={img} alt="" />
                      </div>
                      <div className="portfolio-details">
                        <h3>{title}</h3>
                        <p>{content}</p>
                       
                        <p>{tags}</p>
                      </div>
                  </div>
                )
              })
            } 
          </div>

            <button style={{margin:'0 auto', display:'flex', marginBottom:'30px'}} className="outline">More</button>
    </div>
  )
}

export default Portfolio