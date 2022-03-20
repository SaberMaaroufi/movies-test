import { Button,Card } from "react-bootstrap"
import {Data} from '../Data'

function Cards(){
    return (
      <div className="cards">

        {Data.map(movie=><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" style={{height:"300px"}} src={movie.posterUrl} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
        {movie.description}
      </Card.Text>
      <Button variant="primary">Play</Button>
    </Card.Body>
  </Card>)}
      </div>
    )
    

}
export default Cards