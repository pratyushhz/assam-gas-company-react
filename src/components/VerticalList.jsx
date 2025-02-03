import React from 'react'
import Vertical from './Vertical'

const VerticalList = () => {

    
  return (
    <div class="row">
        <div class="col-12">
            <div class="slick-carousel carousel-arrows-light"
            data-slick='{"slidesToShow": 3, "slidesToScroll": 3, "arrows": true, "dots": true, "responsive": [ {"breakpoint": 992, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 767, "settings": {"slidesToShow": 1, "slidesToScroll": 1}}]}'>
                <Vertical/>
            </div>
        </div>
    </div>
  )
}

export default VerticalList
