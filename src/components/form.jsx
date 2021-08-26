import React, { useEffect,useState} from 'react'

const Form = (props) => {
  const { data } = props
  const [formData, setFormData] = useState({})

  useEffect(() => {
    setFormData(data)
  }, [data])

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form>
      {Object.keys(formData).map((item,i) => (
        <div key={i}>
          <label htmlFor={item}>{item}</label>
          <input
            type="text"
            value={formData[item]}
            name={item}
            onChange={handleFormChange}
          />
        </div>
      ))}
    </form>
  )
}

export default Form
