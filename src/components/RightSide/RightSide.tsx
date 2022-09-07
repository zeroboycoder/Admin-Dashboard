import Update from './Update/Update';
import CusReview from './CusReview/CusReview';
import './RightSide.css'

const RightSide = () => {
    return <div className='RightSide'>
        <div className="update">
            <h3>Reviews</h3>
            <Update />
        </div>
        <div>
            <h3>Visitors</h3>
            <CusReview />
        </div>
    </div>
}

export default RightSide;