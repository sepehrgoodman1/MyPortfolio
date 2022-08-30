import React from 'react'
import ArtistList from '../images/Artists list.jpg'



function SiteDesign({MyList, Title}) {
    return (
        <div className='container mb-5 mt-2'>
            <h2 className='text-dark pt-5'>{Title}</h2>
            <hr/>            

            <div className='row'>
                {MyList.map(List =>(
                    <div className='col-12 col-md-6 MyWorks '>
                    <div className='text-center h4 my-4'>{List.text} </div>
                    <div className='img-site m-auto text-center'>
                        <a href={List.link} target="_blank">
                            <img src={List.img} className='img-fluid img-myWorks'/>
                        </a>
                    </div>
                </div>
                 ) )}
                
                
            </div>
            
            

        </div>
    )
}

export default SiteDesign
