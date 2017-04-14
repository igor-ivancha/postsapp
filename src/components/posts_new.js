import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router-dom';

const renderInput = field => (
  <div className={field.meta.touched && field.meta.error ? 'has-error' : ''}>
    <input {...field.input} type={field.type} className="form-control"/>
    {field.meta.touched &&
     field.meta.error &&
     <div className="error text-danger">{field.meta.error}</div>}
  </div>
)

const renderTextarea = field => (
  <div className={field.meta.touched && field.meta.error ? 'has-error' : ''}>
    <textarea {...field.input} type={field.type} className="form-control"/>
    {field.meta.touched &&
     field.meta.error &&
     <div className="error text-danger">{field.meta.error}</div>}
  </div>
)

class PostsNew extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    this.props.createPost(props).then(() => {
      this.context.router.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h3>Create a post</h3>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field
            component={renderInput}
            name="title"
            type="text"/>
        </div>

        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <Field
            component={renderInput}
            name="categories"
            type="text"/>
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <Field
            component={renderTextarea}
            name="content"
            type="textarea"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Enter title'
  }
  if (!values.categories) {
    errors.categories = 'Enter category'
  }
  if (!values.content) {
    errors.content = 'Enter some content'
  }

  return errors
}
// const formData = {
//   form: 'postsNewForm',
//   validate
// }
// export default reduxForm({
//   form: 'postsNewForm',
//   validate
// }, null, { createPost })(PostsNew)
export default connect(null, { createPost })(reduxForm({
  form: 'postsNewForm',
  validate
})(PostsNew));
