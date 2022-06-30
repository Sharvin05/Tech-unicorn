function Card1(props) {


    return (
        <div>
            <div  className='card card1' style={{ "height": "450px", "width": " 424px" }}>
                <img
                    alt=""
                    src={props.image}
                    style={{ "max-width": " 424px", "height":"245px" }}
                />
                <div className="card-body"style={{'backgroundColor':'#fff'}}>
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.rating}
                    </p>
                    <p className="card-text text-center text-muted">{props.category}
                    </p>
                    <p className="card-text text-center" style={{'color': '#F3692E'}}>${props.price}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Card1;




