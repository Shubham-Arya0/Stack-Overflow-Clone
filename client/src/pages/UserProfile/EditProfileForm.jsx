import React , { useState}from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../../actions/users'

import './UserProfile.css'


const EditProfileForm = ({ currentUser , setSwitch}) => {

  const [name, setName] = useState(currentUser?.result?.name)
  const [about, setAbout] = useState(currentUser?.result?.about)
  const [tags, setTags] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
      e.preventDefault()
      if(tags.length === 0){
          dispatch(updateProfile( currentUser?.result?._id, { name, about, tags: currentUser?.result?.tags }))
      } else{
          dispatch(updateProfile( currentUser?.result?._id, { name, about, tags }))
      }
      setSwitch(false)
  }

  return (
    <div>
      <h2 className='edit-profile-title'>
        Edit your Profile
      </h2>
      <h3 className='edit-profile-title-2'>
        Public Information
      </h3>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <h2>Display name</h2>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="about">
                    <h2>About me</h2>
                    <textarea id="about" cols="40" rows="07" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                </label>
                <label htmlFor="tags">
                    <h2>Watched tags</h2>
                    <p>Add tags separated by 1 space</p>
                    <input type="text" id='tags' onChange={(e) => setTags(e.target.value.split(' '))}/>
                </label><br />
                <input type="submit" value='Save profile' className='user-submit-btn'/>
                <button type='button' className='user-cancel-btn' onClick={() => setSwitch(false)}>Cancel</button>
            </form>
    </div>
  )
}

export default EditProfileForm