import NavBar from '../NavBar'
import RegisterContext from '../../context/RegisterContext'

import {
  RegisterContainer,
  FormContainer,
  FormImg,
  Form,
  FormHead,
  Label,
  Input,
  Select,
  Options,
  FormBtn,
  FormErr,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        updateName,
        updateTopic,
        changeRegistrationStatus,
        updateError,
        registerError,
      } = value

      const submitForm = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          changeRegistrationStatus()
          const {history} = props
          history.replace('/')
        } else {
          updateError(true)
        }
      }

      const onChangeName = event => {
        updateName(event.target.value)
      }

      const onChangeTopic = e => {
        updateTopic(e.target.value)
      }
      return (
        <>
          <NavBar />
          <RegisterContainer>
            <FormContainer>
              <FormImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <Form onSubmit={submitForm}>
                <FormHead>Let us Join</FormHead>
                <Label htmlFor="name">NAME</Label>
                <Input
                  type="text"
                  value={name}
                  onChange={onChangeName}
                  placeholder="Your Name"
                  id="name"
                />
                <Label htmlFor="topic">TOPICS</Label>
                <Select value={topic} id="topic" onChange={onChangeTopic}>
                  {topicsList.map(eachItem => (
                    <Options key={eachItem.id} value={eachItem.displayText}>
                      {eachItem.displayText}
                    </Options>
                  ))}
                </Select>
                <FormBtn onClick={submitForm} type="submit">
                  Register Now
                </FormBtn>
                {registerError ? (
                  <FormErr>please enter your name?</FormErr>
                ) : null}
              </Form>
            </FormContainer>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
