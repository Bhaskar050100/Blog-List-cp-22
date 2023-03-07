// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, description, publishedDate} = eachItem

  return (
    <li className="list">
      <div className="post-date-line">
        <h1 className="head">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
      <hr className="line" />
    </li>
  )
}
export default BlogItem
