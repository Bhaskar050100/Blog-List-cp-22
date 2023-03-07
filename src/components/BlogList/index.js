// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {details} = props

  return (
    <ul className="details-container">
      {details.map(each => (
        <BlogItem eachItem={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
