import React from 'react';

const Card=	({name,gender,birth_year,id})=>{
	return(
		<div className="tc bg-light-yellow flex justify-center dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt='robots' src={`https://robohash.org/
				${id}?size=150x150`}/>
			<div>
				<i><h3>{name}</h3></i>
				<h5>Gender :{gender}</h5>
                <h5>D.O.B :{birth_year}</h5>
			</div>
		</div>

	)
}
export default Card;