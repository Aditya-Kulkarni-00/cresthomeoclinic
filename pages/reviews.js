import React from 'react'
import Navbar from '../components/Navbar';
import RatingCount from '../components/RatingCount';
import RatingLink from '../components/RatingLink';
import Review from '../components/Review';

function Reviews() {
  const reviewArray = [
    {
      name : 'kotte Yesubabu' , 
      rating: 4 , 
      content :'My dust allergy was cured within two months without any side effects and treated me as special and very good medication' ,
      date: '9th January, 2019'
    }, {
      name : 'Rama Adimulam' , 
      rating: 5 , 
      content :'My thyroid cured just in 8 months. Right now I am using homeopathy only for thyroid. my weight also reduced because of homeo treatment. piles cured. My depression level to positive attitude.' ,
      date: '26th December, 2018'
    },{
      name : 'Aparna' , 
      rating: 5 , 
      content :'Treat well' ,
      date: '5th January, 2020'
    },{
      name : 'Surendra' , 
      rating: 4 , 
      content :'Good Treatment.' ,
      date: '15th March, 2019'
    },{
      name : 'Dhanraj' , 
      rating: 4 , 
      content :'Very Good' ,
      date: '30th November, 2019'
    }

  ]
  return (
    <div className='container mx-auto px-4'>
        <Navbar currentLink={"Reviews"}/>
        <RatingCount/>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4">
        {reviewArray.map((review,i) => (
          <Review name={review.name} rating={review.rating} content={review.content} date={review.date} key={i}/>
        ))}
        </div>
          <RatingLink/>
    </div>
  )
}

export default Reviews;