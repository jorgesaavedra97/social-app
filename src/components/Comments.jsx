import './Comments.styles.css'

export function Comments({ comments, handleCloseComments }) {
  
  return (
    <div className="comments">
      {comments?.map((comment) => (
        <div key={comment.id} className="comments__item">
          <img className="comments__item-image" src={comment.owner.picture} alt="" />
          <div className="comments__item-info">
            <h5 className="">Noteworthy technology acquisitions 2021</h5>
            <p className="">{comment.message}</p>
          </div>
        </div>
      ))}
      <a href="" onClick={handleCloseComments}>Close</a>
    </div>
  )
}

export default Comments
